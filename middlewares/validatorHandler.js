const Boom = require("@hapi/boom");

const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(Boom.badRequest(error));
    }
    next();
  };
};


module.exports = validatorHandler;