import express from "express";
import { colorPickerRouter } from "./router/colorPickerRouter.js";

export const mainRouter = express.Router();

mainRouter.use("/color", colorPickerRouter);
