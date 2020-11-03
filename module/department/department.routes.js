import express from "express";
import departmentController from "./department.controller";
import { asyncWrapper } from "../../utils/asyncWrapper";
import authenticateToken from "../../middleware/auth";
import isAdmin from "../../middleware/isAdmin";
import onlyOwner from "../../middleware/onlyOwner";

const departmentRoutes = express.Router();

departmentRoutes.get("/", function(req, res, next) {
  res.json({ message: "for departments" });
});

// Create
departmentRoutes.post(
  "/add",
  [authenticateToken, isAdmin],
  asyncWrapper(departmentController.add)
);

// Show All department
departmentRoutes.get("/show", asyncWrapper(departmentController.findAll));

// Show by specialization
departmentRoutes.get(
  "/show/:specializationId",
  asyncWrapper(departmentController.findOne)
);

// Delete by ID / admin
departmentRoutes.delete(
  "/delete/:departmentId",
  [authenticateToken, isAdmin],
  asyncWrapper(departmentController.delete)
);

//Update info by ID
departmentRoutes.patch(
  "/bookings/:departmentId",
  asyncWrapper(departmentController.update)
);

export { departmentRoutes };
