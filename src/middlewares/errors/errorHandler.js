import StatusCodes from "http-status-codes";
import {
  ConnectionError,
  AuthenticationError,
  ValidationError,
  InternalServerError,
  DontFoundError,
} from "../../helpers/errorConfig/error.js";

const errorHandler = (err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  if (err instanceof ConnectionError) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      message: "Failed to connect to the database",
    });
  }
  if (err instanceof AuthenticationError) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      data: null,
      message: "Invalid or expired token",
    });
  }
  if (err instanceof ValidationError) {
    res.status(StatusCodes.BAD_REQUEST).json({
      data: null,
      message: "Validation error",
    });
  }
  if (err instanceof InternalServerError) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: null,
      message: "Internal server error",
    });
  }
  if (err instanceof DontFoundError) {
    res.status(StatusCodes.NOT_FOUND).json({
      data: null,
      message: err.message,
    });
  }
};

export default errorHandler;
