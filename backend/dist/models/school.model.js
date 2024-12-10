import mongoose, { Schema } from "mongoose";
const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    principal: {
        type: Schema.Types.ObjectId,
        // ref: "Product",
    },
    departments: [
        {
            type: Schema.Types.ObjectId,
            // ref: "Product",
        },
    ],
    refreshToken: {
        type: String,
        default: "",
    },
}, {
    timestamps: true,
});
export default mongoose.model("school", schoolSchema);
