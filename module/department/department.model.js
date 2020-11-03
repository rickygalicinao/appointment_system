import mongoose from "mongoose";

const schema = mongoose.Schema;

const departmentSchema = new schema({
  specialization: {
    type: String,
    required: true,
  },
  hotline: {
    type: String,
    required: true,
  },
  // headDoctor: {
  //   type: String,
  //   required: true,
  // },
  //   doctorId: [{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "doctors",
  //   }],

  //   appointmentId: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "appoointment",
  //   },
});

const departmentModel = mongoose.model("department", departmentSchema);
export { departmentModel, departmentSchema };
