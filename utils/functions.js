import bcrypt from 'bcryptjs';

export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword;
};

export const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
