import { Router } from 'express';
import { orderCreateHandler, orderDeleteHandler, orderUpdateHandler } from '../controllers/orderController.js';

const router = Router();

router.post("/", orderCreateHandler);

router.patch("/:id", orderUpdateHandler);

router.delete("/:id", orderDeleteHandler);

export default router;