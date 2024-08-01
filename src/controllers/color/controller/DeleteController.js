import { StatusCodes } from "http-status-codes";
import color from "../../../models/color.js";
import { ConnectionError } from "../../../helpers/errorConfig/error.js";

export class DeleteController {
  static async deleteColor(req, res, next) {
    try {
      const { id } = req.params;
      const action = await color.updateOne(
        {
          _id: id,
          isActive: true,
        },
        {
          isActive: false,
        }
      );

      if (action.matchedCount === 0) {
        return next(new DontFoundError("Dont found color"));
      }
      res.status(StatusCodes.ACCEPTED).json({
        data: null,
        message: "Color deleted successfully",
      });
    } catch (err) {
      return next(new ConnectionError(err.message));
    }
  }
}
