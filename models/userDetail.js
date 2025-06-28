import { Schema, model } from 'mongoose';
import { hashPassword } from '../utils/functions.js';

const UserDetailSchema = new Schema({
  first_name: {
    type: String,
    required: [true, 'First name is required'],
    maxlength: [255, 'First name cannot exceed 255 characters'],
  },
  last_name: {
    type: String,
    required: [true, 'Last name is required'],
    maxlength: [255, 'Last name cannot exceed 255 characters'],
  },
  email_address: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  created_on: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: String,
    required: true,
  },
  modified_on: {
    type: Date,
  },
  modified_by: {
    type: String,
  },
});

UserDetailSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hashPassword(this.password);
  }
  next();
});

export const UserDetail = model('UserDetail', UserDetailSchema);
