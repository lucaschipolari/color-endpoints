import express from "express";

export const mainRouter = express.Router();

mainRouter.use("/colorPicker", colorPickerRouter);
