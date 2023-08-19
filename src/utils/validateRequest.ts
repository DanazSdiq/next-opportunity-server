import { NextFunction, Response } from "express";
import { ZodSchema } from "zod";

export const validateRequest = (
  body: any,
  schema: ZodSchema,
  res: Response,
  next: NextFunction
) => {
  const validationResult = schema.safeParse(body);

  if (!validationResult.success) {
    return res.status(400).json({ error: validationResult.error });
  }

  validationResult.data = body;

  next();
};
