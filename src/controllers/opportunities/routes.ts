import { Router } from "express";
import { createOpportunitiesController } from "./createOpportunities";
import {
  validateCreateOpportunities,
  validateFetchOpportunityById
} from "../../middlewares";
import { fetchOpportunitiesController } from "./fetchOpportunities";

const opportunitiesRouter = Router();

// routes: /opportunities

opportunitiesRouter.post(
  "/",
  validateCreateOpportunities,
  createOpportunitiesController
);

opportunitiesRouter.get("/", fetchOpportunitiesController);

opportunitiesRouter.get(
  "/:id",
  validateFetchOpportunityById,
  fetchOpportunitiesController
);

export { opportunitiesRouter };
