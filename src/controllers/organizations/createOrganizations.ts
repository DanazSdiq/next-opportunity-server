import { NextFunction, Request, Response } from "express";
import { Organization } from "../../schemas/organizations";
import { createOrganization } from "../../dao/organizations";

export const createOrganizationsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const organizations: Organization[] = req.body;
    const promises = organizations.map((organization) =>
      createOrganization(organization)
    );
    const response = await Promise.all(promises);

    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
