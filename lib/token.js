const jwt = require("jsonwebtoken");

const makeToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };
  const token = jwt.sign(payload, 'secret', {
    expiresIn: "1h",
  });
  return token;
};

module.exports = { makeToken };
