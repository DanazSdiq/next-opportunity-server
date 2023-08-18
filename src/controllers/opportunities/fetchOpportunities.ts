import { Request, Response } from "express";
import { fetchOpportunities } from "../../dao";

export const fetchOpportunitiesController = async (
  req: Request,
  res: Response
) => {
  const opportunities = await fetchOpportunities();
  res.status(200).json(opportunities);
};
