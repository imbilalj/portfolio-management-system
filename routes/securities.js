import { Router } from 'express';
import { createSecurityHandler } from '../controllers/securitiesController.js';

const router = Router();

router.post("/", createSecurityHandler);

export default router;