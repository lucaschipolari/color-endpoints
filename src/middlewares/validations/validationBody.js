import { ValidationError } from "../helpers/errorConfig/error.js";

const validationBody = (req, _, next, validationSchema) => {
  const { error } = validationSchema.validate(req.body);
  if (error) {
    next(new ValidationError(error.details[0].message));
  }
  next();
};

export default validationBody;
