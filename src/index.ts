import express, { Express, Request, Response } from "express";
import { config } from "./config";
import { opportunitiesRouter } from "./controllers/opportunities";
import { organizationsRouter } from "./controllers/organizations";

const app: Express = express();

app.use(express.json());

app.use("/opportunities", opportunitiesRouter);
app.use("/organizations", organizationsRouter);

app.get("/", (_req: Request, res: Response) => {
  res.json({ success: true });
});

app.listen(config.PORT, () => {
  console.log(`Server is running at http://localhost:${config.PORT}`);
});
