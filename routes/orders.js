import { Router } from 'express';
import { orderCreateHandler, orderDeleteHandler, orderUpdateHandler } from '../controllers/orderController.js';
import { validateMiddleware } from '../middlewares/validateMiddleware.js';
import { orderCreateSchema } from '../schemas/orderSchema.js';

const router = Router();

router.post("/", validateMiddleware(orderCreateSchema), orderCreateHandler);

router.patch("/:id", orderUpdateHandler);

router.delete("/:id", orderDeleteHandler);

export default router;