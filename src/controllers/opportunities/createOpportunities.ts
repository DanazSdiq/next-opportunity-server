import { Request, Response } from "express";
import { Opportunity } from "../../schemas";
import { createOpportunity } from "../../dao";

export const createOpportunitiesController = async (req: Request, res: Response) => {
  const opportunities: Opportunity[] = req.body;
  const promises = opportunities.map((opportunity) =>
    createOpportunity(opportunity)
  );
  const newOpportunities = await Promise.all(promises);

  res.json(newOpportunities);
};
