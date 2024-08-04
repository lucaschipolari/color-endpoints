import { StatusCodes } from "http-status-codes";
import Color from "../../../models/color.js";
import { InternalServerError } from "../../../helpers/errorConfig/error.js";

export class GetController {
  static async getColor(req, res, next) {
    try {
      const {
        params: { id },
      } = req;
      const color = await Color.findOne({ _id: id, isActive: true });

      if (!color) {
        throw new ClientError("Color not found", 404);
      }

      const colorFiltered = {
        id: color._id,
        name: color.name,
        hexCode: color.hexCode,
      };

      res.status(StatusCodes.OK).json({
        data: colorFiltered,
        message: "Color retrieved successfully",
      });
    } catch (err) {
      return next(new InternalServerError(err.message));
    }
  }
  static async getAllColors(req, res, next) {
    try {
      const colors = await Color.find({ isActive: true });
      const colorData = colors.map((color) => ({
        id: color._id,
        name: color.name,
        hexCode: color.hexCode,
      }));
      res.status(StatusCodes.OK).json({
        data: colorData,
        message: "Colors retrieved successfully",
      });
    } catch (err) {
      return next(new InternalServerError(err.message));
    }
  }
}
