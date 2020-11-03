import mongoose from "mongoose";

const schema = mongoose.Schema;

const scheduleSchema = new schema({
  day: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
});

const scheduleModel = mongoose.model("schedule", scheduleSchema);
export { scheduleModel };
