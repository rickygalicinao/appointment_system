import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { petModel } from "./pet.model";
import httpStatus from "../../utils/httpStatus";
import appConfig from "../../config/env";

const petController = {};

// Add Pet
petController.add = async (req, res, next) => {
  //
  const { name, type, breed } = req.body;

  try {
    const pet = await petModel.create({
      name,
      type,
      breed,
      userId: req.user.userId,
    });

    await pet.save();

    res.json(pet);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

export default petController;
