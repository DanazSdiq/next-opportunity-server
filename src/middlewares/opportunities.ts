import { NextFunction, Request, Response } from "express";
import { parseCreateOpportunitiesData } from "../schemas";

export const validateCreateOpportunities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = parseCreateOpportunitiesData(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error });
  }

  req.body = result.data;
  next();
};
