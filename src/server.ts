import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "./config";
import { opportunitiesRouter } from "./controllers/opportunities/routes";
import { organizationsRouter } from "./controllers/organizations/routes";

const app: Express = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use(morgan("dev"));

app.use("/opportunities", opportunitiesRouter);
app.use("/organizations", organizationsRouter);

app.listen(config.PORT, () => {
  console.log(`Server is running at http://localhost:${config.PORT}`);
});
