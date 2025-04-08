import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

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

app.post("/api/log", (req, res) => {
  const { action, data } = req.body;
  console.log(`[CLIENT ACTION] ${action}:`, data);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running in ${isProduction ? 'production' : 'development'} mode`);
  console.log(`Server listening on port ${PORT}`);
}); 