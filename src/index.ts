import express, { Express, Request, Response } from "express";
import { config } from "./config";
import { opportunitiesRouter } from "./controllers/opportunities";

const app: Express = express();

app.use(express.json());

app.use("/opportunities", opportunitiesRouter);

app.get("/", (_req: Request, res: Response) => {
  res.json({ success: true });
});

app.listen(config.PORT, () => {
  console.log(`Server is running at http://localhost:${config.PORT}`);
});
