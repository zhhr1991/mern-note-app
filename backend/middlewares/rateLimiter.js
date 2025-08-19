import rateLimit from "../config/upstashRateLim.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit("app-rate-limit");
    if (!success) {
      return res.status(429).json({ message: "Too many requests" });
    }
    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error); 
  }
}

export default rateLimiter;