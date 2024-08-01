const createErrorFactory = function (name) {
  return class BussinessError extends Error {
    constructor(message) {
      super(message);
      this.name = name;
      this.stack = "";
    }
  };
};

export const ConnectionError = createErrorFactory("ConnectionError");
export const AuthenticationError = createErrorFactory("AuthenticationError");
export const ValidationError = createErrorFactory("ValidationError");
export const InternalServerError = createErrorFactory("InternalServerError");
export const DontFoundError = createErrorFactory("DontFoundError");
