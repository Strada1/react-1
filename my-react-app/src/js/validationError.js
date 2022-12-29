class ValidationError extends Error {
    constructor(message, cause) {
      super(message);
      this.cause = cause;
      this.name = "ValidationError";
    }
  }

  export {ValidationError}