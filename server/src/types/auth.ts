import { User } from '@prisma/client';

// Request types
export interface RegisterUserRequest {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

// Response types
export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: Omit<User, 'password'>;
}

// JWT payload type
export interface JwtPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

// Auth user for request object
export interface AuthUser {
  id: string;
  email: string;
}

// Extend Express Request
declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
} 