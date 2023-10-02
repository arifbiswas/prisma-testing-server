const jwt = require("jsonwebtoken");

getJsonToken = (userId) => {
  return jwt.sign({ userId: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1 day",
  });
};

module.exports = getJsonToken;
