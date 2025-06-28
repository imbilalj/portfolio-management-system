import { Router } from 'express';
import {
  loginHandler,
  registerHandler,
  logOutHandler,
} from "../controllers/authController.js";
import { validateMiddleware } from "../middlewares/validateMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { loginSchema, registerSchema } from "../schemas/authSchema.js";

const router = Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: secretpass123
 *     responses:
 *       200:
 *         description: Access token and user object
 */
router.post('/login', validateMiddleware(loginSchema), loginHandler);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               -name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Bilal
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: secretpass123
 *     responses:
 *       201:
 *         description: Register user account
 */
router.post('/register', validateMiddleware(registerSchema), registerHandler);

router.get("/logout", authMiddleware, logOutHandler);

export default router;
