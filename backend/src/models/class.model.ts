import mongoose, { Schema } from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    division: {
      type: String,
      required: true,
    },
    school: {
      type: Schema.Types.ObjectId,
      // ref: "Product",
    },
    department: {
      type: Schema.Types.ObjectId,
      // ref: "Product",
    },
    teachers: [
      {
        type: Schema.Types.ObjectId,
        // ref: "Product",
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        // ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("department", departmentSchema);
