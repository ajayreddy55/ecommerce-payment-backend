const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// const crypto = require("crypto");
const mongooseFieldEncryption =
  require("mongoose-field-encryption").fieldEncryption;

// const algorithm = "aes-256-cbc";
const secretKey = process.env.USER_DATA_KEY;
// const ivRandom = "secret-random";

// const encrypt = (text) => {
//   text = text.toString();
//   const ivBufferFrom = Buffer.from(ivRandom);
//   const cipher = crypto.createCipheriv(
//     algorithm,
//     Buffer.from(secretKey),
//     ivBufferFrom
//   );
//   let encryptedName = cipher.update(text);
//   encryptedName = Buffer.concat([encryptedName, cipher.final()]);
//   const ivStr = ivBufferFrom.toString("hex");
//   const ivNameStr = ivStr + ":" + encryptedName.toString("hex");
//   return ivNameStr;
// };

// const decrypt = (text) => {
//   if (!text) {
//     return text;
//   }

//   try {
//     const ivText = text.split(":");
//     const ivKey = ivText[0];
//     const textData = ivText[1];

//     const ivDe = Buffer.from(ivKey, "hex");
//     const textDataBuf = Buffer.from(textData, "hex");

//     const decipher = crypto.createDecipheriv(
//       algorithm,
//       Buffer.from(secretKey),
//       ivDe
//     );

//     let decrypt = decipher.update(textDataBuf);

//     decrypt = Buffer.concat([decrypt, decipher.final()]);

//     return decrypt.toString();
//   } catch (error) {
//     return text;
//   }
// };

const usersDataSchema = new Schema(
  {
    name: {
      type: String,
      // set: encrypt,
      // get: decrypt,
    },
    email: {
      type: String,
      required: true,
      // set: encrypt,
      // get: decrypt,
    },
    userId: {
      type: String,
    },
    customerId: {
      type: String,
    },
  }
  // {
  //   versionKey: false,
  //   toObject: { getters: true, setters: true },
  //   toJSON: { getters: true, setters: true },
  //   runSettersOnQuery: true,
  // }
);

usersDataSchema.plugin(mongooseFieldEncryption, {
  fields: ["name", "email"],
  secret: secretKey,
  saltGenerator: function (secret) {
    return "1234567890123456";
    // should ideally use the secret to return a string of length 16,
    // default = `const defaultSaltGenerator = secret => crypto.randomBytes(16);`,
    // see options for more details
  },
});

const usersDataModel = model("usersData", usersDataSchema);

module.exports = usersDataModel;
