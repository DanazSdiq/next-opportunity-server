import { NextFunction, Request, Response } from "express";
import { parseCreateOrganizationsData } from "../schemas/organizations";

export const validateCreateOrganizations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = parseCreateOrganizationsData(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error });
  }

  req.body = result.data;
  next();
};
