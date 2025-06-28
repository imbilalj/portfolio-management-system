import {
  loginHandler,
  registerHandler,
} from '../../controllers/authController';
// import { User as UserModel } from '../src/models/user.model';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import * as UserService from '../../services/userService';
import { comparePasswords } from '../../utils/functions';
import { generateAccessToken } from '../../services/authService';
// import { getUserByEmail } from '../src/services/user.service';

jest.mock('../../services/userService');
// jest.mock('../src/models/user.model');
// jest.mock('bcryptjs');
// jest.mock('jsonwebtoken');
jest.mock('../../utils/functions');
jest.mock('../../services/authService');

const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe('Auth Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('should register a new user', async () => {
      const req = {
        body: { email: 'test@example.com', password: 'password123' },
      };
      const res = mockRes();

      // (UserModel.findOne as jest.Mock).mockResolvedValue(null);
      // (UserModel.findOne as jest.Mock).mockReturnValue({
      //   lean: jest.fn().mockResolvedValue(null),
      // });
      // (bcrypt.hash as jest.Mock).mockResolvedValue('hashedpw');
      // (UserModel.create as jest.Mock).mockResolvedValue({
      //   email: 'test@example.com',
      // });
      UserService.getUserByEmail.mockReturnValue(null);
      UserService.addUser.mockResolvedValue({
        email: req.body.email,
        password: req.body.password,
      });

      await registerHandler(req, res);

      // expect(UserModel.findOne).toHaveBeenCalledWith({ email: req.body.email });
      // expect(UserModel.create).toHaveBeenCalledWith({
      //   email: req.body.email,
      //   password: 'hashedpw',
      // });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith({
        user: { email: 'test@example.com', password: 'password123' },
        message: 'User registered successfully',
      });
    });

    it('should reject if user already exists', async () => {
      const req = {
        body: { email: 'test@example.com', password: 'password123' },
      };
      const res = mockRes();

      // (UserModel.findOne as jest.Mock).mockResolvedValue({
      //   email: 'test@example.com',
      // });
      UserService.getUserByEmail.mockResolvedValue({
        email: 'test@example.com',
        password: 'password123',
      });

      await registerHandler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: 'User already registered',
      });
    });
  });

  describe('login', () => {
    it('should login and return token', async () => {
      const req = {
        body: { email: 'test@example.com', password: 'password123' },
      };
      const res = mockRes();

      // (UserModel.findOne as jest.Mock).mockResolvedValue({
      //   _id: 'user-id',
      //   email: 'test@example.com',
      //   password: 'hashedpw',
      // });
      // (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      // (jwt.sign as jest.Mock).mockReturnValue('fake-jwt-token');
      UserService.getUserByEmail.mockResolvedValue({
        _id: '123',
        email: 'test@example.com',
        password: 'hashedPassword123',
      });
      comparePasswords.mockResolvedValue(true);
      generateAccessToken.mockReturnValue('fake-jwt-token');

      await loginHandler(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        accessToken: 'fake-jwt-token',
        user: {
          _id: '123',
          email: 'test@example.com',
          password: 'hashedPassword123',
        },
      });
    });

    it('should fail with invalid email', async () => {
      const req = {
        body: { email: 'notfound@example.com', password: 'pass' },
      };
      const res = mockRes();

      UserService.getUserByEmail.mockResolvedValue(null);

      await loginHandler(req, res);

      expect(UserService.getUserByEmail).toHaveBeenCalledWith(
        'notfound@example.com'
      );
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: 'Invalid email or password',
      });
    });

    it('should fail with invalid password', async () => {
      const req = {
        body: { email: 'test@example.com', password: 'wrongpass' },
      };
      const res = mockRes();

      // (UserModel.findOne as jest.Mock).mockResolvedValue({
      //   email: 'test@example.com',
      //   password: 'hashedpw',
      // });
      // (bcrypt.compare as jest.Mock).mockResolvedValue(false);
      UserService.getUserByEmail.mockResolvedValue({
        email: 'test@example.com',
        password: 'hashedPassword123',
      });
      comparePasswords.mockResolvedValue(false);

      await loginHandler(req, res);

      expect(comparePasswords).toHaveBeenCalledWith(
        'wrongpass',
        'hashedPassword123'
      );
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: 'Invalid email or password',
      });
    });
  });
});
