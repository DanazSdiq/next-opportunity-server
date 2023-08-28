import express, { ErrorRequestHandler, Express } from "express";
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

const errorHandler: ErrorRequestHandler = (error, _req, res) => {
  console.log(`error ${error.message}`);

  const status = error.status || 400;
  res.status(status).send(error.message);
};

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server is running at http://localhost:${config.PORT}`);
});
