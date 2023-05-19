const express = require("express");
const authController = require("../controllers/auth.controller");
const isAuthenticated = require("../middlewares/authJwt");

const authRouter = express.Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
authRouter.get("/me", isAuthenticated, authController.me);
module.exports = authRouter;
