const requestCounts = new Map();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 10;

export const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();

  if (!requestCounts.has(ip)) {
    requestCounts.set(ip, []);
  }

  const timestamps = requestCounts.get(ip).filter((ts) => now - ts < WINDOW_MS);
  requestCounts.set(ip, timestamps);

  if (timestamps.length >= MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  }

  timestamps.push(now);
  next();
};

// Clean up old entries every 30 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of requestCounts.entries()) {
    const recent = timestamps.filter((ts) => now - ts < WINDOW_MS);
    if (recent.length === 0) {
      requestCounts.delete(ip);
    } else {
      requestCounts.set(ip, recent);
    }
  }
}, 30 * 60 * 1000);