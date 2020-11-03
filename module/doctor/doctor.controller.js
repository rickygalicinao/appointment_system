import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { doctorModel } from "./doctor.model";
import httpStatus from "../../utils/httpStatus";
import appConfig from "../../config/env";

const doctorController = {};

// Add doctor
doctorController.add = async (req, res, next) => {
  //
  const { firstname, lastname, cellphone_num, email_add } = req.body;

  try {
    const doctor = await doctorModel.create({
      firstname,
      lastname,
      cellphone_num,
      email_add,
    });

    await doctor.save();

    res.json(doctor);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

// get all doctor
doctorController.findAll = async (req, res) => {
  try {
    let doctors = await doctorModel.find();
    return res.json(doctors);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

//getby doctors name
doctorController.findOne = async (req, res) => {
  try {
    const docName = req.params.docName;
    let doctor = await doctorModel.find({ docName });
    if (!doctor) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "doctor not found" });
    }
    return res.json(doctor);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

//delete by id
doctorController.delete = async (req, res) => {
  try {
    let doctor = await doctorModel.findByIdAndRemove(req.params.doctorId);
    if (!doctor) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "doctor not found" });
    }
    return res.json({ message: "doctor deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Update doctor By ID
doctorController.update = async (req, res) => {
  try {
    let doctor = await doctorModel.findById(req.params.doctorId);
    if (!doctor) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "doctor not found" });
    }
    Object.assign(doctor, req.body);
    await doctor.save();
    return res.json(doctor);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

export default doctorController;
