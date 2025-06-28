import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const authMiddleware = (req, res, next) => {
  const accessToken = req.header('Authorization')?.split(' ')[1] || '';

  try {
    const decoded = jwt.verify(accessToken, config.jwtSecret);

    req.user = decoded;

    next();
  } catch (e) {
    res.status(401).send({ message: 'Unauthorized' });
  }
};
