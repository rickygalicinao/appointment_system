import express from "express";
import appointmentController from "./appointment.controller";
import { asyncWrapper } from "../../utils/asyncWrapper";
import authenticateToken from "../../middleware/auth";
import isAdmin from "../../middleware/isAdmin";
import onlyOwner from "../../middleware/onlyOwner";

const appointmentRoutes = express.Router();

appointmentRoutes.get("/", function(req, res, next) {
  res.json({ message: "for appointments" });
});

// book an appointment
appointmentRoutes.post("/book", asyncWrapper(appointmentController.book));

// get All appointment
appointmentRoutes.get(
  "/bookings",
  [authenticateToken],
  asyncWrapper(appointmentController.findAll)
);

//GetBy ID
appointmentRoutes.get(
  "/bookings/:appointmentId",
  asyncWrapper(appointmentController.findOne)
);

//Update info by ID
appointmentRoutes.patch(
  "/bookings/:appointmentId",
  asyncWrapper(appointmentController.update)
);

//Confirm Booking by ID
appointmentRoutes.put(
  "/confirm/:appointmentId",
  [authenticateToken],
  asyncWrapper(appointmentController.update)
);

//Delete by ID
appointmentRoutes.delete(
  "/delete/:appointmentId",
  [authenticateToken, isAdmin],
  asyncWrapper(appointmentController.delete)
);

export { appointmentRoutes };
