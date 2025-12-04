// Middleware for error handling.

const errorHandler = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error(error);
      res.status(error.status || 500).json({
        message: error.message || 'Something went wrong',
      });
    }
  };
};

export default errorHandler;
