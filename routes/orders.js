import { Router } from 'express';
import { orderCreateHandler, orderDeleteHandler, orderUpdateHandler } from '../controllers/orderController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validateMiddleware } from '../middlewares/validateMiddleware.js';
import { orderCreateSchema } from '../schemas/orderSchema.js';

const router = Router();

router.post("/", [authMiddleware, validateMiddleware(orderCreateSchema)], orderCreateHandler);

router.patch("/:id", [authMiddleware, validateMiddleware(orderCreateSchema)], orderUpdateHandler);

router.delete("/:id", authMiddleware, orderDeleteHandler);

export default router;