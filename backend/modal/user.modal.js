import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "teacher", "student"],
      default: "student",
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const schema = mongoose.model("User", userSchema);

export default schema;
