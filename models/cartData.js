const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const cartDataSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  rating: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

const cartDataModel = model("cartData", cartDataSchema);

module.exports = cartDataModel;
