const express = require("express");
const authController = require("../controllers/auth.controller");
const isAuthenticated = require("../middlewares/authJwt");

const authRouter = express.Router();

authRouter.post("/patient/login", authController.loginPatient);
authRouter.post("/patient/register", authController.registerPatient);
authRouter.get(
  "/me",
  isAuthenticated(["patient", "doctor", "admin"]),
  authController.me
);
authRouter.post(
  "/patient/forgot-password",
  authController.forgotPasswordPatient
);
authRouter.post("/patient/reset-password", authController.resetPasswordPatient);

authRouter.post("/staff/login", authController.loginStaff);

module.exports = authRouter;
