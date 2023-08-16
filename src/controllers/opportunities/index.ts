import { Router } from "express";
import { createOpportunitiesController } from "./createOpportunities";

const opportunitiesRouter = Router();

// /opportunities routes

opportunitiesRouter.post("/", createOpportunitiesController);

export { opportunitiesRouter };
