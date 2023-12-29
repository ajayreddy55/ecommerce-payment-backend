const adminFirebase = require("../firebaseadmin");

const jwtAuth = (request, response, next) => {
  let jwtToken;

  const authHeaders = request.headers["authorization"];

  if (authHeaders !== undefined) {
    jwtToken = authHeaders.split(" ")[1];
  }

  if (authHeaders === undefined) {
    return response.status(401).json({ message: "UnAuthorized Request" });
  } else {
    adminFirebase
      .auth()
      .verifyIdToken(jwtToken)
      .then((decodedToken) => {
        return next();
      })
      .catch((error) => {
        console.log(error);
        return response.send(403).json({ message: "Invalid Token" });
      });
  }
};

module.exports = jwtAuth;
