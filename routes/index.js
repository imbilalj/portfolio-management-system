import { Router } from 'express';
import authRouter from './auth.js';
import orderRouter from './orders.js';

const router = Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.use('/auth', authRouter);
router.use('/orders', orderRouter)

export default router;
