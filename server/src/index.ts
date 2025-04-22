import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import db from './db';
import authRoutes from './routes/authRoutesV2';

// Load environment-specific variables
dotenv.config({
  path: process.env.NODE_ENV === 'production' 
    ? path.resolve(__dirname, '../.env.production')
    : path.resolve(__dirname, '../.env.development')
});

const app = express();
const PORT = process.env.PORT || 4100;
const isProduction = process.env.NODE_ENV === 'production';

// Configure CORS based on environment
app.use(cors({
  origin: isProduction
    ? process.env.FRONTEND_URL 
    : ['http://localhost:5173', 'http://localhost:5373'],
  credentials: true,
}));

app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Environment info route
app.get("/api/env", (req, res) => {
  res.json({
    environment: isProduction ? 'production' : 'development',
    apiUrl: isProduction ? process.env.FRONTEND_URL : 'http://localhost:5373',
    timestamp: new Date().toISOString()
  });
});

/**
 * In plain English:
 * This code creates a special address on your server that tells anyone who asks about the current environment settings.
 * When someone visits this address ("/api/env"), the server responds with three pieces of information:
 * 
 * 1. Whether the app is running in "production" mode (the real, live version) or "development" mode (the version programmers use while building the app)
 * 2. The web address where the front-end part of the app can be found - either a custom address for the production version or a standard local address for development
 * 3. The exact date and time when this information was requested
 * 
 * It's like having a status board that displays the current operating conditions of the application. This is useful for the app itself to know
 * how it should behave (differently in development vs. production) and for developers to quickly check what environment they're working with.
 * 
 * Think of it as a restaurant that has different menus and prices depending on whether it's lunch or dinner time - this endpoint tells you
 * which "menu" is currently active and where to find it.
 */

app.post("/api/log", (req, res) => {
  const { action, data } = req.body;
  console.log(`[CLIENT ACTION] ${action}:`, data);
  res.json({ success: true });
});

// Add auth routes
app.use('/api/auth', authRoutes);

// Add a test query to verify connection
db.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected successfully at:', res.rows[0].now);
  }
});

app.listen(PORT, () => {
  console.log(`Server running in ${isProduction ? 'production' : 'development'} mode`);
  console.log(`Server listening on port ${PORT}`);
}); 