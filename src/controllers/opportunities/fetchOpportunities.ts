import { Request, Response } from "express";
import { fetchFullOpportunityDetailsById, fetchOpportunities } from "../../dao";

export const fetchOpportunitiesController = async (
  req: Request,
  res: Response
) => {
  const opportunity_id: string = req.params.id;

  if (opportunity_id) {
    const opportunity = await fetchFullOpportunityDetailsById(opportunity_id);
    return res.status(200).json(opportunity);
  }

  const opportunities = await fetchOpportunities();
  res.status(200).json(opportunities);
};
