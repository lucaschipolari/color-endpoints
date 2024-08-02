import express from "express";
import { Color } from "../../controllers/index.js";

export const colorPickerRouter = express.Router();

colorPickerRouter.put("/:id", Color.PutController.putColor);
colorPickerRouter.get("/:id", Color.GetController.getColor);
colorPickerRouter.post("/", Color.PostController.createColor);
colorPickerRouter.delete("/:id", Color.DeleteController.deleteColor);
