import express from "express";
import { crudRoutes } from "../../module/crud/crud.routes";
import { appointmentRoutes } from "../../module/appointment/appointment.routes";
import { doctorRoutes } from "../../module/doctor/doctor.routes";
import { scheduleRoutes } from "../../module/schedule/schedule.routes";
import { departmentRoutes } from "../../module/department/department.routes";

const apiRoutes = express.Router();

apiRoutes.get("/", function(req, res, next) {
  res.json({ message: "hello world" });
});

apiRoutes.use("/auth", crudRoutes);
apiRoutes.use("/appointment", appointmentRoutes);
apiRoutes.use("/doctor", doctorRoutes);
apiRoutes.use("/schedule", scheduleRoutes);
apiRoutes.use("/department", departmentRoutes);

export default apiRoutes;
