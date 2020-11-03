import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { appointmentModel } from "./appointment.model";
import httpStatus from "../../utils/httpStatus";
import appConfig from "../../config/env";

const appointmentController = {};

// Add Appointment
appointmentController.book = async (req, res, next) => {
  const {
    //appointment
    date,
    time,
    symptom,
    remarks,

    //guest info
    firstname,
    lastname,
    age,
    gender,
    email_add,
    contact_num,
    birthdate,
    address,
  } = req.body;

  try {
    const appointment = await appointmentModel.create({
      //appointment
      date,
      time,
      symptom,
      remarks,

      //guest info
      firstname,
      lastname,
      age,
      gender,
      email_add,
      contact_num,
      birthdate,
      address,
    });

    await appointment.save();

    res.json(appointment);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

// get all appointment
appointmentController.findAll = async (req, res) => {
  try {
    let appointments = await appointmentModel.find();
    return res.json(appointments);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

//getby ID
appointmentController.findOne = async (req, res) => {
  try {
    let appointment = await appointmentModel.findById(req.params.appointmentId);
    if (!appointment) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "appointment not found" });
    }
    return res.json(appointment);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

//delete by id
appointmentController.delete = async (req, res) => {
  try {
    let appointment = await appointmentModel.findByIdAndRemove(
      req.params.appointmentId
    );
    if (!appointment) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "appointment not found" });
    }
    return res.json({ message: "appointment deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Update appointment By ID
appointmentController.update = async (req, res) => {
  try {
    let appointment = await appointmentModel.findById(req.params.appointmentId);
    if (!appointment) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "appointment not found" });
    }
    Object.assign(appointment, req.body);
    await appointment.save();
    return res.json(appointment);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

export default appointmentController;
