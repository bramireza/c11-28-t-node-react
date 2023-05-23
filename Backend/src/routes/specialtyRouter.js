const express = require("express");
const specialtyController = require("../controllers/specialty.controller");
const isAuthenticated = require("../middlewares/authJwt");

const specialtyRouter = express.Router();

specialtyRouter.post("/", isAuthenticated, specialtyController.store);
specialtyRouter.get("/", isAuthenticated, specialtyController.getAll);
specialtyRouter.get("/:id", isAuthenticated, specialtyController.getOne);
specialtyRouter.put("/:id", isAuthenticated, specialtyController.update);
specialtyRouter.delete("/:id", isAuthenticated, specialtyController.remove);

module.exports = specialtyRouter;
