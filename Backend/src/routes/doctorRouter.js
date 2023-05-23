const express = require("express");
const doctorController = require("../controllers/doctor.controller");
const isAuthenticated = require("../middlewares/authJwt");

const doctorRouter = express.Router();

doctorRouter.post("/", isAuthenticated, doctorController.store);
doctorRouter.get(
  "/:idSpecialty",
  isAuthenticated,
  doctorController.getOneBySpecialty
);
doctorRouter.get("/", isAuthenticated, doctorController.getAll);
module.exports = doctorRouter;
