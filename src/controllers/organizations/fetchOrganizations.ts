import { Request, Response } from "express";
import { fetchOrganizationsDetails } from "../../dao/organizations";

export const fetchOrganizationsController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id || "";
  const result = await fetchOrganizationsDetails(id);

  res.status(200).json(result);
};
