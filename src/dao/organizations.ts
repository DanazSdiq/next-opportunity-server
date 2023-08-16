import db from "../connections/db";
import { Organization } from "../schemas/organizations";

export const createOrganization = async (
  organization: Organization
): Promise<Organization> => {
  const [row] = await db("organizations").insert(organization).returning("*");

  return row as Organization;
};

export const fetchOrganizationByName = async (
  organization_name: string
): Promise<Organization> => {
  const [row] = await db("organizations")
    .select("*")
    .where({ name: organization_name });

  return row as Organization;
};
