import request from 'supertest';
import app from '../../app.js';
// const request = require('supertest');
// const app = require('../../app');

describe('Auth Endpoints', () => {
  describe('POST /api/auth/register', () => {
    it('should register a user successfully', async () => {
      const res = await request(app).post('/api/auth/register').send({
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        password: 'password123',
      });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('user');
    });
  });

  describe('POST /api/auth/login', () => {
    it('should log in a user and return a token', async () => {
      const res = await request(app).post('/api/auth/login').send({
        email: 'test@example.com',
        password: 'password123',
      });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('accessToken');
    });
  });
});
