import { Router } from "express";
import { createOrganizationsController } from "./createOrganizations";
import { validateCreateOrganizations } from "../../middlewares/organizations";
import { fetchOrganizationsController } from "./fetchOrganizations";
import { fetchOrganizationOpportunitiesController } from "./fetchOrganizationOpportunities";

const organizationsRouter = Router();

// routes: /organizations

organizationsRouter.post(
  "/",
  validateCreateOrganizations,
  createOrganizationsController
);

organizationsRouter.get("/", fetchOrganizationsController);
organizationsRouter.get("/:id", fetchOrganizationsController);
organizationsRouter.get(
  "/:id/opportunities",
  fetchOrganizationOpportunitiesController
);

export { organizationsRouter };
