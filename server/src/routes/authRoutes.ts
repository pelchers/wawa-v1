import express, { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import * as jwtService from '../services/jwtService';

const router: Router = express.Router();
const prisma = new PrismaClient();

// Define route handlers separately
const registerHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Register route hit', req.body);
    
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      }
    });

    console.log('User created successfully:', user);
    const token = jwtService.generateToken({
      userId: user.id,
      email: user.email
    });

    res.json({ 
      success: true, 
      message: 'User registered successfully',
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ 
      success: false, 
      message: 'Error registering user',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const loginHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Login route hit', req.body);
    
    const user = await prisma.user.findUnique({
      where: { email: req.body.email }
    });

    if (!user) {
      console.log('User not found:', req.body.email);
      res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
      return;
    }
    
    if (user.password !== req.body.password) {
      console.log('Password mismatch for user:', req.body.email);
      res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
      return;
    }
    
    console.log('User logged in successfully:', user.id);
    const token = jwtService.generateToken({
      userId: user.id,
      email: user.email
    });

    res.json({ 
      success: true, 
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error during login',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

const getCurrentUserHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({
        success: false,
        message: 'Authentication token missing'
      });
      return;
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwtService.verifyToken(token);
    
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    });

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'User retrieved successfully',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid authentication token'
    });
  }
};

// Register routes
router.post('/register', registerHandler);
router.post('/login', loginHandler);
router.get('/me', getCurrentUserHandler);

export default router; 