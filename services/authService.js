import jwt from 'jsonwebtoken';
import config from '../config/config.js';

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
