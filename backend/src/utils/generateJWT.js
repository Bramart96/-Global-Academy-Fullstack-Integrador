const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    try {
      const secret = process.env.JWT_SECRET;

       if (!secret) {
        console.error("generateJWT error: JWT_SECRET no definido en .env");
        return reject(new Error("JWT_SECRET no definido en .env"));
      }

      const payload = { uid };

      jwt.sign(payload, secret, { expiresIn: "1h" }, (err, token) => {
        if (err) {
          console.error("generateJWT jwt.sign error:", err);
          return reject(err);
        }
        resolve(token);
      });
    } catch (error) {
      console.error("generateJWT catch:", error);
      reject(error);
    }
  });
};

module.exports = generateJWT;
