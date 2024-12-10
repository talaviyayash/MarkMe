import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import user from "./route/user.js";
import db from "./db/db.js";
db();
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(cookieParser());
app.use("/api/user", user);
app.listen(process.env.PORT, () => {
    console.log(`runing on ${process.env.PORT}`);
});
