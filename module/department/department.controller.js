import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { departmentModel } from "./department.model";
import httpStatus from "../../utils/httpStatus";
import appConfig from "../../config/env";

const departmentController = {};

// Add department
departmentController.add = async (req, res, next) => {
  //
  const { hotline, department } = req.body;

  try {
    const department = await departmentModel.create({
      hotline,
      department,
    });

    await department.save();

    res.json(department);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

// get all department
departmentController.findAll = async (req, res) => {
  try {
    let departments = await departmentModel.find();
    return res.json(departments);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

//getby department specialization
departmentController.findOne = async (req, res) => {
  try {
    let department = await departmentModel.findById(
      req.params.specializationId
    );
    if (!department) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "department not found" });
    }
    return res.json(department);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

// delete by ID / admin
departmentController.delete = async (req, res) => {
  try {
    let department = await departmentModel.findByIdAndRemove(
      req.params.departmentId
    );
    if (!department) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "department not found" });
    }
    return res.json({ message: "department deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Update department By ID
departmentController.update = async (req, res) => {
  try {
    let department = await departmentModel.findById(req.params.departmentId);
    if (!department) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "department not found" });
    }
    Object.assign(department, req.body);
    await department.save();
    return res.json(department);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

export default departmentController;
