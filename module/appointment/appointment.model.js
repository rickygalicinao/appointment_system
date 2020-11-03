import mongoose from "mongoose";

const schema = mongoose.Schema;

const appointmentSchema = new schema({
  //appointment
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  symptom: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  remarks: {
    type: String,
  },

  //guest info
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email_add: {
    type: String,
    required: true,
  },
  contact_num: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  //deparment
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "departments",
  },
});

const appointmentModel = mongoose.model("appointment", appointmentSchema);
export { appointmentModel };
