const express = require("express");
const doctorController = require("../controllers/doctor.controller");
const isAuthenticated = require("../middlewares/authJwt");

const doctorRouter = express.Router();

doctorRouter.post("/", isAuthenticated, doctorController.store);

doctorRouter.get("/", isAuthenticated, doctorController.getAll);
doctorRouter.get(
  "/specialty/:idSpecialty",
  isAuthenticated,
  doctorController.getOneBySpecialty
);
doctorRouter.get("/:id", isAuthenticated, doctorController.getOne);
doctorRouter.put("/:id", isAuthenticated, doctorController.update);
doctorRouter.delete("/:id", isAuthenticated, doctorController.remove);

module.exports = doctorRouter;
