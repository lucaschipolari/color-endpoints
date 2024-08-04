import { InternalServerError } from "../../../helpers/errorConfig/error.js";
import ColorModel from "../../../models/color.js";
import { StatusCodes } from "http-status-codes";
export class PostController {
  static async createColor(req, res, next) {
    const { body } = req;
    const newColor = new ColorModel({
      name: body.name,
      hexCode: body.hexCode,
    });
    try {
      const result = await newColor.save();
      res.status(StatusCodes.OK).json({
        data: result,
        message: "Color created successfully",
      });
    } catch (err) {
      return next(
        new InternalServerError("An error occurred while saving the color")
      );
    }
  }
}
