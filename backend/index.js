import express from "express";
import dotenv from "dotenv";
import db from "./db.js";
import cors from "cors";
import user from "./router/user.route.js";

dotenv.config();
db();
const app = express();
app.use(express.json());

const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/", user);

app?.listen(process.env.PORT, () => {
  console.log("server is running on " + process.env.PORT);
});
