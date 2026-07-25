const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS MUST be the very first middleware to handle OPTIONS preflight requests
app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// Security & Rate Limiting Middleware
app.use(helmet()); // Secures Express apps by setting various HTTP headers

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: { message: 'Too many requests from this IP, please try again after 15 minutes' }
});
app.use('/api/', apiLimiter); // Apply the rate limiting middleware to all API calls

// Standard Middleware
app.use(express.json({ limit: '10kb' })); // Limit body payload to 10kb to prevent DOS

app.use(express.json({ limit: '10kb' })); // Limit body payload to 10kb to prevent DOS

// Strict Auth Rate Limiter (Prevents brute-force credential stuffing)
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 Hour
  max: 15, // Limit each IP to 15 auth requests per hour
  message: { message: 'Too many authentication attempts from this IP, please try again in an hour.' }
});

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authLimiter, authRoutes);

// Protected Test Route
const authMiddleware = require('./middleware/auth');
app.get('/api/user/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to your profile!', user: req.user });
});

// Database Start & Server Init
const startServer = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log(`PWA Backend connected to persistent MongoDB at: ${process.env.MONGODB_URI.split('@').pop()}`);
    } else {
      const mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      await mongoose.connect(uri);
      console.log(`PWA Backend attached to in-memory MongoDB at: ${uri}`);
    }

    app.listen(PORT, () => {
      console.log(`Backend Auth API running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();
