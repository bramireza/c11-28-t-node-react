const { verifyToken } = require("../utils/jwt");

const isAuthenticated = (req, res, next) => {
  try {
    const authorization = req.headers["authorization"];

    if (!authorization) {
      return failure({
        res,
        status: 403,
        message: "🚫 Token missing or invalid 🚫",
      });
    }

    const token = authorization.split(" ")[1];
    const decodedToken = verifyToken(token);
    if (!decodedToken) {
      return res.status(401).json({
        ok: false,
        message: "🚫 Un-Authorized 🚫",
      });
    }
    req.user = decodedToken;
    req.token = token;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        ok: false,
        message: "🚫 Token Expired 🚫",
      });
    }
    return res.status(401).json({
      ok: false,
      message: "🚫 Un-Authorized 🚫",
    });
  }
};
module.exports = isAuthenticated;
