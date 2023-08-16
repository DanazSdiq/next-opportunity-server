import db from "../connections/db";
import { Opportunity } from "../schemas";

export const createOpportunity = async (
  opportunity: Opportunity
): Promise<Opportunity> => {
  const [record] = (await db("opportunities")
    .insert(opportunity)
    .returning("*")) as Opportunity[];

  return record;
};
