import express from "express";
import dotenv from "dotenv";
import db from "./db.js";
import cors from "cors";
import auth from "./router/auth.route.js";
import user from "./router/user.route.js";
import school from "./router/school.route.js";

dotenv.config();
db();
const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/auth", auth);
app.use("/user", user);
app.use("/school", school);

app?.listen(process.env.PORT, () => {
  console.log("server is running on " + process.env.PORT);
});
