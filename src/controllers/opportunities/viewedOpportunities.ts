import { NextFunction, Request, Response } from "express";
import { updateOpportunityView } from "../../dao";
import { Opportunity } from "../../schemas";

export const viewedOpportunities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const opportunity_id = req.params.id;
    const is_viewed = req.body.is_viewed;
    const opportunity: Opportunity = await updateOpportunityView(
      opportunity_id,
      is_viewed
    );

    res.status(200).json(opportunity);
  } catch (error) {
    next(error);
  }
};
