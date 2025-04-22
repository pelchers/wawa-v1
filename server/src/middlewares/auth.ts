import { Request, Response, NextFunction } from 'express';
import { AuthUser } from '../types/auth';
import * as authService from '../services/authService';

// Extend Express Request type to include user property
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
      };
    }
  }
}

/**
 * Authenticate user from JWT token
 */
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Authentication token is missing'
      });
    }
    
    // Extract token
    const token = authHeader.split(' ')[1];
    
    // Verify token
    const decoded = authService.verifyToken(token);
    
    // Set user in request
    req.user = {
      id: decoded.userId,
      email: decoded.email
    } as AuthUser;
    
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid authentication token'
    });
  }
};

/**
 * Optional authentication - doesn't fail if no token is provided
 */
export const optionalAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      // Extract token
      const token = authHeader.split(' ')[1];
      
      // Verify token
      const decoded = authService.verifyToken(token);
      
      // Set user in request
      req.user = {
        id: decoded.userId,
        email: decoded.email
      } as AuthUser;
    }
    
    next();
  } catch (error) {
    // Continue without setting user
    next();
  }
}; 