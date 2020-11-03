import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { scheduleModel } from "./schedule.model";
import httpStatus from "../../utils/httpStatus";
import appConfig from "../../config/env";

const scheduleController = {};

// Add schedule
scheduleController.add = async (req, res, next) => {
  //
  const { day, startTime, endTime } = req.body;

  try {
    const schedule = await scheduleModel.create({
      day,
      startTime,
      endTime,
    });

    await schedule.save();

    res.json(schedule);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

// get all schedule
scheduleController.findAll = async (req, res) => {
  try {
    let schedules = await scheduleModel.find();
    return res.json(schedules);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

//getby day
scheduleController.findByDay = async (req, res) => {
  try {
    const day = req.params.scheduleDay;
    let schedule = await scheduleModel.find({ day });
    if (!schedule) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "schedule not found" });
    }
    return res.json(schedule);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

//getby time
scheduleController.findByTime = async (req, res) => {
  try {
    const startTime = req.params.scheduleStartTime;
    let schedule = await scheduleModel.find({ startTime: startTime });
    if (!schedule) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "schedule not found" });
    }
    return res.json(schedule);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

//delete by id
scheduleController.delete = async (req, res) => {
  try {
    let schedule = await scheduleModel.findByIdAndRemove(req.params.scheduleId);
    if (!schedule) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "schedule not found" });
    }
    return res.json({ message: "schedule deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Update schedule By ID
scheduleController.update = async (req, res) => {
  try {
    let schedule = await scheduleModel.findById(req.params.scheduleId);
    if (!schedule) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "schedule not found" });
    }
    Object.assign(schedule, req.body);
    await schedule.save();
    return res.json(schedule);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
export default scheduleController;
