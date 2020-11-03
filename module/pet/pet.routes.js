import express from "express";
import petController from "./pet.controller";
import { asyncWrapper } from "../../utils/asyncWrapper";
import authenticateToken from "../../middleware/auth";
import isAdmin from "../../middleware/isAdmin";
import onlyOwner from "../../middleware/onlyOwner";

const petRoutes = express.Router();

petRoutes.get("/", function(req, res, next) {
  res.json({ message: "for pets" });
});

// Create
petRoutes.post("/add", [authenticateToken], asyncWrapper(petController.add));

export { petRoutes };
