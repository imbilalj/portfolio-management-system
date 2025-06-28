import { Router } from 'express';
import { orderCreateHandler, orderDeleteHandler, orderUpdateHandler } from '../controllers/orderController.js';
import { validateMiddleware } from '../middlewares/validateMiddleware.js';
import { orderCreateSchema } from '../schemas/orderSchema.js';

const router = Router();

router.post("/order", validateMiddleware(orderCreateSchema), orderCreateHandler);

router.patch("/order/:id", orderUpdateHandler);

router.patch("/order/:id", orderDeleteHandler);