import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT | 5000,
  mongoDbUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
};

export default config;
