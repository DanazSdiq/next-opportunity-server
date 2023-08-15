import express, { Express, Request, Response } from "express";
import { config } from "./config";

const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
  res.json({ success: true });
});

app.listen(config.PORT, () => {
  console.log(`Server is running at http://localhost:${config.PORT}`);
});
