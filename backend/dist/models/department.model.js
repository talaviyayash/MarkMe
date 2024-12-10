import mongoose, { Schema } from "mongoose";
const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    school: {
        type: Schema.Types.ObjectId,
        // ref: "Product",
    },
    refreshToken: {
        type: String,
        default: "",
    },
}, {
    timestamps: true,
});
export default mongoose.model("department", departmentSchema);
