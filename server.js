const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productDataModel = require("./models/productsData");
require("dotenv").config();
const port = process.env.PORT || 5007;

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ajayreddycluster.1x5u1ub.mongodb.net/ecommerceData?retryWrites=true&w=majority`
  )
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log(error));

// const addProduct = async (product) => {
//   try {
//     const newItem = new productDataModel({
//       name: product.name,
//       description: product.description,
//       category: product.category,
//       subCategory: product.subCategory,
//       price: product.price,
//       imageUrl: product.imageUrl,
//       rating: product.rating,
//     });
//     await newItem.save();
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const productsList = require("./products");
// console.log(productsList.length);
// for (let item of productsList) {
//   addProduct(item);
// }

app.use("/api", require("./routes/apiRoutes"));

app.listen(port, () => {
  console.log(`Server is Running at Port ${port}`);
});
