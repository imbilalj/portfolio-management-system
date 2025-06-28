import mongoose from 'mongoose';
import config from '../config/config.js';
import { logger } from './logger.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoDbUri);
    logger.info('Database connected successfully!');
  } catch (e) {
    logger.error('Error while connecting to Database');
  }
};
