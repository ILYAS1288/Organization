module.exports = (req, res, next) => {
  

  if (!req || !req.method || !req.url) {
    return next(new Error('Invalid request object'));
  }
  if (typeof req.method !== 'string' || typeof req.url !== 'string') {
    return next(new Error('Invalid request method or URL'));
  }
  if (!req.method.trim() || !req.url.trim()) {
    return next(new Error('Request method or URL cannot be empty'));
  }
  if (!req.headers || typeof req.headers !== 'object') {
    return next(new Error('Invalid request headers'));
  }
  if (!req.headers['user-agent'] || typeof req.headers['user-agent'] !== 'string') {
    return next(new Error('Invalid or missing User-Agent header'));
  }

  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next();



};

