import { Router } from 'express';
import authRouter from './auth.js';
import orderRouter from './orders.js';
import securityRouter from './securities.js';

const router = Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.use('/auth', authRouter);
router.use('/orders', orderRouter);
router.use('/securities', securityRouter);

export default router;
