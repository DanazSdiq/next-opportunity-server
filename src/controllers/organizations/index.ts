import { Router } from "express";
import { createOrganizationsController } from "./createOrganizations";
import { validateCreateOrganizations } from "../../middlewares/organizations";

const organizationsRouter = Router();

// routes: /organizations

organizationsRouter.post(
  "/",
  validateCreateOrganizations,
  createOrganizationsController
);

export { organizationsRouter };
