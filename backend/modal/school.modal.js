import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    principal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the 'User' model
    },
  },
  {
    timestamps: true,
  }
);

const schema = mongoose.model("School", schoolSchema);

export default schema;
