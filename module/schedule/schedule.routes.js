import express from "express";
import scheduleController from "./schedule.controller";
import { asyncWrapper } from "../../utils/asyncWrapper";
import authenticateToken from "../../middleware/auth";
import isAdmin from "../../middleware/isAdmin";
import onlyOwner from "../../middleware/onlyOwner";

const scheduleRoutes = express.Router();

scheduleRoutes.get("/", function(req, res, next) {
  res.json({ message: "for schedules" });
});

// Create
scheduleRoutes.post(
  "/add",
  [authenticateToken, isAdmin],
  asyncWrapper(scheduleController.add)
);

// get All schedule
scheduleRoutes.get("/show", asyncWrapper(scheduleController.findAll));

// get All schedule by day
scheduleRoutes.get(
  "/show/day/:scheduleDay",
  asyncWrapper(scheduleController.findByDay)
);

// get All schedule by time
scheduleRoutes.get(
  "/show/time/:scheduleStartTime",
  asyncWrapper(scheduleController.findByTime)
);

//Delete by ID
scheduleRoutes.delete(
  "/show/:scheduleId",
  [authenticateToken, isAdmin],
  asyncWrapper(scheduleController.delete)
);

//Update info by ID
scheduleRoutes.patch(
  "/show/:scheduleId",
  [authenticateToken, isAdmin],
  asyncWrapper(scheduleController.update)
);
export { scheduleRoutes };
