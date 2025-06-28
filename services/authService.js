import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import config from "../config/config.js";
import { logger } from "../utils/logger.js";
import { AuditUserLogin } from "../models/auditUserLogin.js";

export const signAccessToken = (user) => {
  const accessToken = jwt.sign(
    { _id: user._id, email: user.email, role: user.role },
    config.jwtSecret,
    {
      expiresIn: config.jwtExpiresIn,
    }
  );

  return accessToken;
};
