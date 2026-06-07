export const errorHandler = (err, req, res, _next) => {
  console.error(`❌ ${err.message}`);

  const statusCode = err.status || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};