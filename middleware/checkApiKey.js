const apiKeys = ["key1", "key2"];

export const checkApiKey = (req, res, next) => {
  const { API_KEY } = req.query;

  if (apiKeys.includes(API_KEY)) {
    return next();
  }

  res.status(401).json({
    error: true,
    statusCode: 401,
    message: "Invalid API Key",
  });
};
