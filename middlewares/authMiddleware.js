import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const authMiddleware = (req, res, next) => {
  const accessToken = req.cookies.access_token;

  if (!accessToken) {
    return res.status(401).json({
      status: false,
      message: "unauthorized no token provided",
    });
  }

  try {
    const decoded = jwt.verify(accessToken, config.jwtSecret);

    req.user = decoded;

    next();
  } catch (e) {
    res.status(401).send({ message: "Unauthorized" });
  }
};
