import { NextFunction, Request, Response } from "express";
import { createOpportunity } from "../../dao";
import { fetchOrganizationByName } from "../../dao/organizations";
import { Opportunity, OpportunityRequest } from "../../schemas";
import { Organization } from "../../schemas/organizations";

export const createOpportunitiesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const opportunities: OpportunityRequest[] = req.body;
    const opportunitiesWithOrganizationId: Opportunity[] =
      await findOrganizationIdForOpportunities(opportunities);
    const promises = opportunitiesWithOrganizationId.map((opportunity) =>
      createOpportunity(opportunity)
    );
    const newOpportunities = (await Promise.all(promises)).filter(
      (op) => typeof op === "object"
    );

    res.status(201).json(newOpportunities);
  } catch (error) {
    next(error);
  }
};

const findOrganizationIdForOpportunities = async (
  opportunities: OpportunityRequest[]
): Promise<Opportunity[]> => {
  const organizationNames = new Set(
    opportunities.map((op) => op.organization_name)
  );
  const organizations = (
    await Promise.all(
      Array.from(organizationNames).map((name) => fetchOrganizationByName(name))
    )
  ).filter((org) => typeof org === "object");
  const verifiedOpportunities = dropOpportunitiesWithNoRegisteredOrganization(
    opportunities,
    organizations
  );

  return verifiedOpportunities.map((op) => {
    const { organization_name, ...opportunity } = op;
    const organization = organizations.find(
      (org) => org.name === organization_name
    );

    return {
      organization_id: organization!.id,
      is_viewed: false,
      ...opportunity
    };
  });
};

const dropOpportunitiesWithNoRegisteredOrganization = (
  opportunities: OpportunityRequest[],
  organizations: Organization[]
) => {
  return opportunities.filter((op) =>
    organizations.some((org) => org.name === op.organization_name)
  );
};
