// Middleware for logging requests.

const logger = (handler) => {
  return (req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    return handler(req, res);
  };
};

export default logger;
