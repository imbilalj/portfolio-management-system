import { User } from '../models/user.js';

export const getUserById = async (id) => {
  const user = await User.findById(id).lean();

  return user;
};

export const getUserByEmail = async (email) => {
  const user = await User.findOne({ email }).lean();

  return user;
};

export const addUser = async (user) => {
  const newUser = new User(user);

  await newUser.save();

  return newUser;
};

export const updateUser = async (id, update) => {
  const user = await User.findByIdAndUpdate(
    id,
    { $set: update },
    { new: true }
  );

  return user;
};
