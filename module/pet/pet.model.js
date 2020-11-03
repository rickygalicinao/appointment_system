import mongoose from "mongoose";

const schema = mongoose.Schema;

const petSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const petModel = mongoose.model("pet", petSchema);
export { petModel };
