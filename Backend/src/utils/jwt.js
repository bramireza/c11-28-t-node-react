const jwt = require("jsonwebtoken");

const verifyToken = (token) => jwt.verify(token, process.env.JWT_ACCESS_SECRET);

const createToken = (data) =>
  jwt.sign(data, process.env.JWT_ACCESS_SECRET, {
    expiresIn: process.env.JWT_ACCESS_SECRET_EXP,
  });

module.exports = { verifyToken, createToken };
