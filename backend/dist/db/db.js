import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const db = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect successfully");
};
export default db;
