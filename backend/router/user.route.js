import { Router } from "express";

const router = Router();
router.route("/all").get(() => {
  console.log("called");
});

export default router;
