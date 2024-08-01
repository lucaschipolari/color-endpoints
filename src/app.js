import express from "express";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "errorHandler";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", mainRouter);
app.use("/api", colorRouter);

app.use(errorHandler);
