import { signAccessToken } from '../services/authService.js';
import { addUser, getUserByEmail } from '../services/userService.js';
import { comparePasswords } from '../utils/functions.js';

export const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(400).send({ message: 'Invalid Email or Password' });
  }

  const isPasswordValid = comparePasswords(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).send({ message: 'Invalid Email or Password' });
  }

  const accessToken = signAccessToken(user);

  res.status(200).send({ accessToken, user });
};

export const registerHandler = async (req, res) => {
  const { email } = req.body;

  const user = await getUserByEmail(email);

  if (user) {
    return res.status(400).send({ message: 'User already registered' });
  }

  const newUser = await addUser(req.body);

  res.status(201).send(newUser);
};
