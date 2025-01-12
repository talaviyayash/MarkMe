import { Router } from "express";
import { verifyAccessToken } from "../middleware/auth.middleware.js";
import { createSchoolValidation } from "../validation/school.validation.js";
import validate from "../utils/validation.js";
import { createSchool } from "../controller/school.controller.js";

const router = Router();
router.route("/").post(
  verifyAccessToken,
  //  validate(createSchoolValidation),
  createSchool
);

export default router;
