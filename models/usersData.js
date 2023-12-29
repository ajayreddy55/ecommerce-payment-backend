const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const encrypt = require("mongoose-encryption");

const usersDataSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
  customerId: {
    type: String,
  },
});

const secretKey = process.env.USER_DATA_KEY;

usersDataSchema.plugin(encrypt, {
  secret: secretKey,
  encryptedFields: ["name", "email"],
});

const usersDataModel = model("usersData", usersDataSchema);

module.exports = usersDataModel;
