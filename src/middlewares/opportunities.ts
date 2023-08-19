import { NextFunction, Request, Response } from "express";
import {
  parseCreateOpportunitiesData,
  parseFetchOpportunityByIdParams
} from "../schemas";

export const validateCreateOpportunities = (
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

export const validateFetchOpportunityById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = parseFetchOpportunityByIdParams(req.params.id);
  if (!result.success) {
    return res.status(400).json({ error: result.error });
  }

  next();
};
