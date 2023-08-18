import db from "../connections/db";
import { Opportunity } from "../schemas";

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

export const fetchOpportunities = async (): Promise<Opportunity[]> => {
  return db("opportunities")
    .select(
      "id",
      "title",
      "organization_id",
      "description",
      "labels",
      "commitment",
      "url",
      "created_at",
      "updated_at"
    )
    .where({ deleted_at: null });
};
