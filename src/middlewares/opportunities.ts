import { NextFunction, Request, Response } from "express";
import {
  createOpportunitiesSchema,
  fetchOpportunityByIdQueryParamsSchema
} from "../schemas";
import { validateRequest } from "../utils";

export const validateCreateOpportunities = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRequest(req.body, createOpportunitiesSchema, res, next);
};

export const validateFetchOpportunityById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validateRequest(
    req.params.id,
    fetchOpportunityByIdQueryParamsSchema,
    res,
    next
  );
};
