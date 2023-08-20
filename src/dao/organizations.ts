import db from "../connections/db";
import { Organization } from "../schemas/organizations";

export const createOrganization = async (
  organization: Organization
): Promise<Organization> => {
  const [row] = await db("organizations")
    .insert(organization)
    .onConflict("name")
    .ignore()
    .returning("*");

  return (row || {}) as Organization;
};

export const fetchOrganizationByName = async (
  organization_name: string
): Promise<Organization> => {
  const [row] = await db("organizations")
    .select("id", "name")
    .where({ name: organization_name });

  return row as Organization;
};

export const fetchOrganizationsDetails = async (
  organization_id: string = ""
) => {
  return db()
    .select(
      "sub_query.id",
      "sub_query.name",
      "sub_query.main_url",
      "sub_query.total_opportunities"
    )
    .from(
      db({ org: "organizations" })
        .count("op.id as total_opportunities")
        .select("org.id", "org.name", "org.main_url")
        .join("opportunities as op", "op.organization_id", "org.id")
        .whereNull("op.deleted_at")
        .groupBy("org.id", "org.name", "org.main_url")
        .as("sub_query")
        .modify((queryBuilder) => {
          if (organization_id.length !== 0) {
            queryBuilder.andWhere("org.id", "=", organization_id);
          }
        })
    );
};
