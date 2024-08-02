import color from "../../../models/color.js";

export class PutController {
  static async putColor(req, res, next) {
    const {
      body,
      params: { id },
    } = req;
    try {
      const action = await color.UpdateOne(
        {
          _id: id,
          isActive: true,
        },
        body
      );
      if (action.matchedCount === 0) {
        const dontFoundError = new DontFoundError("Dont found Color");
        return next(dontFoundError);
      }
      res.status(HttpCodes.OK).json({
        data: null,
        message: "Color updated successfully",
      });
    } catch (err) {
      return next(new ServerError(err.message));
    }
  }
}
