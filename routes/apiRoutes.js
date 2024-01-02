const mongoose = require("mongoose");
const express = require("express");
const productDataModel = require("../models/productsData");
const usersDataModel = require("../models/usersData");
const jwt = require("jsonwebtoken");
const jwtAuth = require("../middleware/jwtAuth");
const cartDataModel = require("../models/cartData");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

//getting all products
router.get("/all-products", async (request, response) => {
  try {
    const { search = "", category = "", price = "" } = request.query;

    const queryObject = {};

    if (category) {
      const categoryArray = category.split(",");

      queryObject.category = {
        $in: categoryArray.map((type) => new RegExp(type, "i")),
      };
    }

    if (search) {
      queryObject.name = { $regex: search, $options: "i" };
    }

    if (price) {
      const intPrice = parseInt(price);

      if (!isNaN(intPrice)) {
        queryObject.price = { $lte: intPrice };
      }
    }

    const productsRes = await productDataModel.find(queryObject);

    return response.status(200).json({ products: productsRes });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({ message: "Internal Server Error" });
  }
});

//get user
router.post("/get-user-details", async (request, response) => {
  try {
    const { email } = request.body;

    const mailToSearchWith = new usersDataModel({ email: email });
    mailToSearchWith.encryptFieldsSync();

    let checkUser = await usersDataModel.findOne({
      email: mailToSearchWith.email,
    });
    // console.log(email);
    // console.log(checkUser);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

//adding users
router.post("/add-customer", async (request, response) => {
  try {
    const { userId, name, email } = request.body;

    const mailToSearchWith = new usersDataModel({ email: email });
    mailToSearchWith.encryptFieldsSync();

    let checkUser = await usersDataModel.findOne({
      email: mailToSearchWith.email,
    });

    if (checkUser === null) {
      const customer = await stripe.customers.create({
        name: name,
        email: email,
      });
      const userNew = new usersDataModel({
        name: name,
        email: email,
        customerId: customer.id,
        userId: userId,
      });

      await userNew.save();

      return response.status(200).json({ message: "User Saved Successfully" });
    } else {
      return response.status(200).json({ message: "User Already Exists" });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

//getting cart list
router.get("/get-cart-list/:userId", jwtAuth, async (request, response) => {
  try {
    const { userId } = request.params;

    const cartRes = await cartDataModel.find({ userId: userId });

    return response.status(200).json({ cartList: cartRes });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

//add items to cart
router.post("/add-items-to-cart", jwtAuth, async (request, response) => {
  try {
    const { userId, productId, imageUrl, name, description, price, rating } =
      request.body;
    const productRes = await cartDataModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (productRes === null) {
      const product = new cartDataModel({
        userId: userId,
        productId: productId,
        imageUrl: imageUrl,
        name: name,
        description: description,
        price: price,
        rating: rating,
        quantity: 1,
      });

      await product.save();
      return response
        .status(200)
        .json({ message: "Product Added Successfully" });
    } else {
      const updateRes = await cartDataModel.updateOne(
        { userId: userId, productId: productId },
        { $set: { quantity: productRes.quantity + 1 } }
      );
      return response
        .status(200)
        .json({ message: "Product Quantity Updated Successfully" });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

//update quantity
router.put("/update-quantity", jwtAuth, async (request, response) => {
  try {
    const { productId, userId, cartId, operation } = request.body;
    const productRes = await cartDataModel.findOne({
      productId: productId,
      userId: userId,
      _id: cartId,
    });
    if (operation === "negative") {
      if (productRes === null) {
        return response.status(400).json({ message: "Item Not Found" });
      }

      if (productRes.quantity <= 1) {
        await cartDataModel.deleteOne({
          productId: productId,
          userId: userId,
          _id: cartId,
        });
        return response
          .status(200)
          .json({ message: "Item Deleted Successfully" });
      } else {
        await cartDataModel.updateOne(
          {
            productId: productId,
            userId: userId,
            _id: cartId,
          },
          { $set: { quantity: productRes.quantity - 1 } }
        );
        return response
          .status(200)
          .json({ message: "Item Quantity Updated Successfully" });
      }
    } else {
      if (productRes === null) {
        return response.status(400).json({ message: "Item Not Found" });
      }

      await cartDataModel.updateOne(
        {
          productId: productId,
          userId: userId,
          _id: cartId,
        },
        { $set: { quantity: productRes.quantity + 1 } }
      );
      return response
        .status(200)
        .json({ message: "Item Quantity Updated Successfully" });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

//payment checkout
router.post("/payment-checkout", jwtAuth, async (request, response) => {
  try {
    const { userId } = request.body;

    const customerRes = await usersDataModel.findOne({ userId: userId });
    const itemsRes = await cartDataModel.find({ userId: userId });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: itemsRes.map((eachItem) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: eachItem.name,
            description: eachItem.description,
            metadata: {
              productId: eachItem.productId,
              userId: eachItem.userId,
            },
          },
          unit_amount: eachItem.price * 100,
        },
        quantity: eachItem.quantity,
      })),
      customer: customerRes.customerId,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/failure",
    });

    response.status(200).json({ session: session });
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: "Internal Server Error" });
  }
});

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        request.body,
        sig,
        process.env.STRIPE_WEB_END_POINT
      );
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSession = event.data.object;
        // Then define and call a function to handle the event
        console.log(checkoutSession);
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    // response.send();
  }
);

module.exports = router;
