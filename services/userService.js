import { UserDetail } from '../models/userDetail.js';

export const getUserById = async (id) => {
  const user = await UserDetail.findById(id).lean();

  return user;
};

export const getUserByEmail = async (email) => {
  const user = await UserDetail.findOne({ email_address: email }).lean();

  return user;
};

export const addUser = async (user) => {
  const newUser = new UserDetail(user);

  await newUser.save();

  return newUser;
};

export const updateUser = async (id, update) => {
  const user = await UserDetail.findByIdAndUpdate(
    id,
    { $set: update },
    { new: true }
  );

  return user;
};
