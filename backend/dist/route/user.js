import { Router } from "express";
const router = Router();
router.route("/info").get((req, res, next) => {
    res.send({
        name: "yash",
    });
});
export default router;
