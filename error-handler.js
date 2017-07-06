module.exports = {
  catch404Errors,
  developmentErrorHandler,
  productionErrorHandler
};

// catch 404 and forward to error handler
function catch404Errors(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}

// development error handler
// will print stacktrace
function developmentErrorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
}

// production error handler
// no stacktraces leaked to userRouter
function productionErrorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
}