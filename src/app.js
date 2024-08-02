import express from "express";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "../src/middlewares/errors/errorHandler.js";

import { mainRouter } from "./routes/mainRouter.js";

import { colorPickerRouter } from "./routes/router/colorPickerRouter.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", mainRouter);
app.use("/api", colorPickerRouter);

app.use(errorHandler);

export default app;
