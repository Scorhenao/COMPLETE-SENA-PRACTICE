const logErrors = (err, res, req, next) => {
  console.log(err);
};

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
};

module.exports = { logErrors, errorHandler, boomErrorHandler };
