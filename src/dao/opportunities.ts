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

export const fetchFullOpportunityDetailsById = async (
  opportunity_id: string
): Promise<Opportunity> => {
  const [opportunity] = await db("opportunities")
    .select(
      "opportunities.id",
      "title",
      "organizations.name as organization_name",
      "organization_id",
      "description",
      "labels",
      "commitment",
      "url",
      "opportunities.created_at",
      "updated_at"
    )
    .join("organizations", "organizations.id", "opportunities.organization_id")
    .where({ "opportunities.id": opportunity_id, deleted_at: null });

  return opportunity;
};
