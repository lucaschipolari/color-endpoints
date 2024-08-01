import express from "express";
import { Color } from "../../controllers/index.js";

export const colorPickerRouter = express.Router();

colorPickerRouter.put("/", Color.PutController);
colorPickerRouter.get("/", Color.GetController);
colorPickerRouter.post("/", Color.PostController);
colorPickerRouter.delete("/", Color.DeleteController);
