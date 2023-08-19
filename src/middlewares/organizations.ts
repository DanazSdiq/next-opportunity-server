import { NextFunction, Request, Response } from "express";
import { createOrganizationSchema } from "../schemas/organizations";
import { validateRequest } from "../utils";

export const validateCreateOrganizations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRequest(req.body, createOrganizationSchema, res, next);
};
