import express from "express";
import doctorController from "./doctor.controller";
import { asyncWrapper } from "../../utils/asyncWrapper";
import authenticateToken from "../../middleware/auth";
import isAdmin from "../../middleware/isAdmin";
import onlyOwner from "../../middleware/onlyOwner";

const doctorRoutes = express.Router();

doctorRoutes.get("/", function(req, res, next) {
  res.json({ message: "for doctors" });
});

// Create
doctorRoutes.post(
  "/add",
  [authenticateToken, isAdmin],
  asyncWrapper(doctorController.add)
);

// Show All doctor
doctorRoutes.get("/show", asyncWrapper(doctorController.findAll));

//find by  lastname or firstanme
doctorRoutes.get("/show/:docName", asyncWrapper(doctorController.findOne));

//Delete by ID
doctorRoutes.delete(
  "/delete/:doctorId",
  [authenticateToken, isAdmin],
  asyncWrapper(doctorController.delete)
);

//Update by ID
doctorRoutes.put(
  "/confirm/:doctorId",
  [authenticateToken, isAdmin],
  asyncWrapper(doctorController.update)
);

export { doctorRoutes };
