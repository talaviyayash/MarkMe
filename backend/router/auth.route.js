import { Router } from "express";
import {
  signInValidationSchema,
  signUpValidationSchema,
} from "../validation/user.validation.js";
import validate from "../utils/validation.js";
import { logInUser, signUser } from "../controller/auth.controller.js";

const router = Router();
router.route("/signup").post(validate(signUpValidationSchema), signUser);

router.route("/singin").post(validate(signInValidationSchema), logInUser);

export default router;
