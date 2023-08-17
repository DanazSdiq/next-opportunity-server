import db from "../connections/db";
import { Opportunity, OpportunityRequest } from "../schemas";

export const createOpportunity = async (
  opportunity: Opportunity
): Promise<Opportunity> => {
  const [record] = (await db("opportunities")
    .insert(opportunity)
    .returning("*")
    .onConflict("url")
    .ignore()) as Opportunity[];

  return record;
};
