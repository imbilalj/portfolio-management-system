import { z } from 'zod';

export const orderCreateSchema = z.object({
    ref_no: z.string({ required_error: 'Reference No must be provided' }),

    status: z.string({ required_error: 'Status must be provided' }),

    transaction_type: z
        .string({ required_error: 'Transaction type must be provided' }),

    security_id: z
        .string({ required_error: 'Security must be provided' }),

    quantity: z
        .string({ required_error: 'Order value must be provided' }),

    user_id: z
        .string({ required_error: 'User id must be provided' })
});