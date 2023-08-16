import { Router } from "express";
import { createOpportunitiesController } from "./createOpportunities";
import { validateCreateOpportunities } from "../../middlewares";

const opportunitiesRouter = Router();

// routes: /opportunities

opportunitiesRouter.post(
  "/",
  validateCreateOpportunities,
  createOpportunitiesController
);

export { opportunitiesRouter };
