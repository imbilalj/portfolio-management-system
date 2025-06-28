import mongoose from 'mongoose';
import config from '../config/config.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoDbUri);
    console.log('Database connected successfully!');
  } catch (e) {
    console.log('Error while connecting to Database');
  }
};
