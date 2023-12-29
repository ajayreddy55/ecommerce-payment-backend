let admin = require("firebase-admin");

let serviceAccount = require("./ecommerce-payment-service-key.json");

const adminFirebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = adminFirebase;
