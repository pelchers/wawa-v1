import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/UNUSEDauthRoutes';
import profileRoutes from './routes/users/profileRoutes';

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5373',
  credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', profileRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app; 