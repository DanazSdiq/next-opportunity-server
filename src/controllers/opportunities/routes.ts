import { Router } from "express";
import { createOpportunitiesController } from "./createOpportunities";
import {
  validateCreateOpportunities,
  validateFetchOpportunityById
} from "../../middlewares";
import { fetchOpportunitiesController } from "./fetchOpportunities";
import { viewedOpportunities } from "./viewedOpportunities";

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

opportunitiesRouter.patch("/:id", viewedOpportunities);

export { opportunitiesRouter };
