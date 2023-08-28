import { NextFunction, Request, Response } from "express";
import {
  fetchOrganizationOpportunities,
  fetchOrganizationsDetails
} from "../../dao/organizations";

export const fetchOrganizationOpportunitiesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const organization_id = req.params.id || "";
    const [organization] = await fetchOrganizationsDetails(organization_id);
    const response = await fetchOrganizationOpportunities(organization_id);

    res
      .status(200)
      .json({ organization: organization, opportunities: response });
  } catch (error) {
    next(error);
  }
};
