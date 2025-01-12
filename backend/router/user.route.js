import { Router } from "express";
import { userInfo } from "../controller/user.controller.js";
import { verifyAccessToken } from "../middleware/auth.middleware.js";

const router = Router();
router.route("/").get(verifyAccessToken, userInfo);

export default router;
