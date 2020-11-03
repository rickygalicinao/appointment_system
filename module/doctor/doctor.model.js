import mongoose from "mongoose";

const schema = mongoose.Schema;

const doctorSchema = new schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  cellphone_num: {
    type: String,
    required: true,
  },
  email_add: {
    type: String,
    required: true,
  },
  // scheduleId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "schedules",
  // },
  // departmentId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "departments",
  // },
});

const doctorModel = mongoose.model("doctor", doctorSchema);
export { doctorModel };
