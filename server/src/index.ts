import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import likeRoutes from './routes/likeRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4100;
const isProduction = process.env.NODE_ENV === 'production';

// Configure CORS based on environment
app.use(cors({
  origin: isProduction
    ? process.env.FRONTEND_URL // In production, only allow the specific frontend URL
    : ['http://localhost:5173', 'http://localhost:5373'], // In development, allow local dev servers
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

// Register API routes
app.use('/api/likes', likeRoutes);

app.post("/api/log", (req, res) => {
  const { action, data } = req.body;
  console.log(`[CLIENT ACTION] ${action}:`, data);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running in ${isProduction ? 'production' : 'development'} mode`);
  console.log(`Server listening on port ${PORT}`);
}); 