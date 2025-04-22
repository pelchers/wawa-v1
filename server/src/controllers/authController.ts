import { Request, Response } from 'express';
import { RegisterUserRequest, LoginUserRequest, AuthResponse } from '../types/auth';
import * as authService from '../services/authService';

/**
 * Register a new user
 */
export const register = async (req: Request, res: Response) => {
  try {
    const userData: RegisterUserRequest = req.body;
    
    // Validate input
    if (!userData.email || !userData.password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      } as AuthResponse);
    }

    // Register user
    const user = await authService.registerUser(userData);
    
    // Generate token
    const token = authService.generateToken(user);
    
    // Remove password from response
    const { password, ...userWithoutPassword } = user;
    
    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: userWithoutPassword
    } as AuthResponse);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An error occurred during registration';
    return res.status(400).json({
      success: false,
      message
    } as AuthResponse);
  }
};

/**
 * Login a user
 */
export const login = async (req: Request, res: Response) => {
  try {
    const credentials: LoginUserRequest = req.body;
    
    // Validate input
    if (!credentials.email || !credentials.password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      } as AuthResponse);
    }

    // Login user
    const { user, token } = await authService.loginUser(credentials);
    
    // Remove password from response
    const { password, ...userWithoutPassword } = user;
    
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: userWithoutPassword
    } as AuthResponse);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An error occurred during login';
    return res.status(401).json({
      success: false,
      message
    } as AuthResponse);
  }
};

/**
 * Get current user
 */
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Not authenticated'
      } as AuthResponse);
    }

    const user = await authService.getUserById(req.user.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      } as AuthResponse);
    }
    
    // Remove password from response
    const { password, ...userWithoutPassword } = user;
    
    return res.status(200).json({
      success: true,
      message: 'User retrieved successfully',
      user: userWithoutPassword
    } as AuthResponse);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An error occurred';
    return res.status(500).json({
      success: false,
      message
    } as AuthResponse);
  }
}; 