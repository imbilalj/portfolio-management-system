import { createdBy } from '../common/enums.js';
import { signAccessToken } from '../services/authService.js';
import { auditLoginUser } from '../services/auditService.js';
import { addUser, getUserByEmail } from '../services/userService.js';
import { comparePasswords } from '../utils/functions.js';

export const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ status: false, message: 'All fields are required.' });
  }

  try {
    const user = await getUserByEmail(email);

    // Check For existing User
    if (!user) {
      return res
        .status(400)
        .send({ status: false, message: 'Invalid Email or Password' });
    }

    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(400)
        .send({ status: false, message: 'Invalid Email or Password' });
    }

    const accessToken = signAccessToken(user);
    const login_status = accessToken ? 'Successful' : 'Failed';

    auditLoginUser(user._id, login_status);

    res.status(200).send({ accessToken, user });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: 'Failed to login user.',
      error: err.message,
    });
  }
};

export const registerHandler = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res
      .status(400)
      .json({ status: false, message: 'All fields are required.' });
  }
  try {
    const user = await getUserByEmail(email);

    if (user) {
      return res
        .status(400)
        .send({ status: false, message: 'User already registered' });
    }

    const newUser = await addUser({
      first_name: firstName,
      last_name: lastName,
      email_address: email,
      password,
      created_by: createdBy.SELF,
    });

    res.status(201).send(newUser);
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: 'Failed to login user.',
      error: err.message,
    });
  }
};
