export const validateMiddleware = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).send({
      message: 'Validation failed',
      errors: result.error.errors,
    });
  }

  next();
};
