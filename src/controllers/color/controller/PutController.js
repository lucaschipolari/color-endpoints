import { StatusCodes } from "http-status-codes";
import {
  DontFoundError,
  InternalServerError,
} from "../../../helpers/errorConfig/error.js";
import Color from "../../../models/color.js";

export class PutController {
  static async putColor(req, res, next) {
    const {
      body,
      params: { id },
    } = req;

    console.log("ID:", id);
    console.log("Body:", body);

    try {
      const action = await Color.updateOne(
        {
          _id: id,
        },
        body
      );

      console.log("Action:", action);

      if (action.matchedCount === 0) {
        const dontFoundError = new DontFoundError("Dont found Color");
        return next(dontFoundError);
      }

      res.status(StatusCodes.OK).json({
        data: null,
        message: "Color updated successfully",
      });
    } catch (err) {
      console.error("Error:", err.message);
      return next(new InternalServerError(err.message));
    }
  }
}
