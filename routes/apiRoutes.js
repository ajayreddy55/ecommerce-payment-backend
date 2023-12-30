const mongoose = require("mongoose");
const express = require("express");
const productDataModel = require("../models/productsData");
const usersDataModel = require("../models/usersData");
const jwt = require("jsonwebtoken");
const jwtAuth = require("../middleware/jwtAuth");
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
    response.status(500).json({ message: "INTERNAL Server Error" });
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
    response.status(500).json({ message: "INTERNAL Server Error" });
  }
});

module.exports = router;
