// import User from "../modal/user.modal.js";
import jwt from "jsonwebtoken";
import User from "../modal/user.modal.js";

const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header is missing" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Access token is missing" });
  }
  jwt.verify(token, process.env?.TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token" });
    }

    const user = await User.findById(decoded._id).select("-password").lean();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  });
};

export { verifyAccessToken };
