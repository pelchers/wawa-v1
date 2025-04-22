# Authentication Implementation

This document outlines the complete authentication system implementation for our application, covering the database schema, backend API, and frontend integration.

## Database Schema

Our user authentication is built on the Prisma schema, which defines the User model with authentication-related fields:

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  firstName String?
  lastName  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  // Additional fields omitted for brevity
}
```

## Backend Implementation

### 1. Authentication Routes

The authentication routes are defined in `server/src/routes/authRoutes.ts`:

```typescript
import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Use environment variable in production

// Register route with password hashing and JWT
router.post('/register', (req, res) => {
  console.log('Register route hit', req.body);
  
  const { email, password, firstName, lastName } = req.body;
  
  // Validate input
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }
  
  // Hash password
  bcrypt.hash(password, 10)
    .then(hashedPassword => {
      // Create user with hashed password
      return prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName
        }
      });
    })
    .then(user => {
      console.log('User created successfully:', user.id);
      
      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '24h' }
      );
      
      // Remove password from response
      const { password, ...userWithoutPassword } = user;
      
      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        token,
        user: userWithoutPassword
      });
    })
    .catch(error => {
      console.error('Error creating user:', error);
      res.status(400).json({
        success: false,
        message: 'Error registering user',
        error: error.message
      });
    });
});

// Login route with password verification and JWT
router.post('/login', (req, res) => {
  console.log('Login route hit', req.body);
  
  const { email, password } = req.body;
  
  // Validate input
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }
  
  let foundUser;
  
  // Find user by email
  prisma.user.findUnique({
    where: { email }
  })
    .then(user => {
      if (!user) {
        return Promise.reject(new Error('Invalid credentials'));
      }
      
      foundUser = user;
      
      // Compare password with hashed password
      return bcrypt.compare(password, user.password);
    })
    .then(isPasswordValid => {
      if (!isPasswordValid) {
        return Promise.reject(new Error('Invalid credentials'));
      }
      
      // Generate JWT token
      const token = jwt.sign(
        { userId: foundUser.id, email: foundUser.email },
        JWT_SECRET,
        { expiresIn: '24h' }
      );
      
      // Remove password from response
      const { password, ...userWithoutPassword } = foundUser;
      
      res.json({
        success: true,
        message: 'Login successful',
        token,
        user: userWithoutPassword
      });
    })
    .catch(error => {
      console.error('Error during login:', error);
      res.status(401).json({
        success: false,
        message: error.message || 'Invalid credentials'
      });
    });
});

// Authentication middleware
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

// Get current user route with authentication
router.get('/me', authenticate, (req, res) => {
  console.log('Get current user route hit', req.user);
  
  prisma.user.findUnique({
    where: { id: req.user.userId }
  })
    .then(user => {
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }
      
      // Remove password from response
      const { password, ...userWithoutPassword } = user;
      
      res.json({
        success: true,
        message: 'User retrieved successfully',
        user: userWithoutPassword
      });
    })
    .catch(error => {
      console.error('Error retrieving user:', error);
      res.status(500).json({
        success: false,
        message: 'Error retrieving user',
        error: error.message
      });
    });
});

export default router;
```

### 2. Server Configuration

The routes are connected to the Express application in `server/src/index.ts`:

```typescript
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import db from './db';
import authRoutes from './routes/authRoutes';

// Load environment-specific variables
dotenv.config({
  path: process.env.NODE_ENV === 'production' 
    ? path.resolve(__dirname, '../.env.production')
    : path.resolve(__dirname, '../.env.development')
});

const app = express();
const PORT = process.env.PORT || 4100;
const isProduction = process.env.NODE_ENV === 'production';

// Configure CORS
app.use(cors({
  origin: isProduction
    ? process.env.FRONTEND_URL 
    : ['http://localhost:5173', 'http://localhost:5373'],
  credentials: true,
}));

app.use(express.json());

// Basic routes omitted for brevity

// Add auth routes
app.use('/api/auth', authRoutes);

// Database connection check
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
```

## Frontend Implementation

### 1. Authentication Types

The frontend defines types for authentication in `client/src/types/auth.ts`:

```typescript
// User type
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Authentication state
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Login request
export interface LoginRequest {
  email: string;
  password: string;
}

// Register request
export interface RegisterRequest {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

// Auth response from API
export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
}
```

### 2. Authentication API

The frontend API functions for authentication are defined in `client/src/api/auth.ts`:

```typescript
import { LoginRequest, RegisterRequest, AuthResponse } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4100/api';

/**
 * Register a new user
 */
export const register = async (userData: RegisterRequest): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred during registration',
    };
  }
};

/**
 * Login a user
 */
export const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred during login',
    };
  }
};

/**
 * Get the current user
 */
export const getCurrentUser = async (token: string): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred',
    };
  }
};
```

### 3. Authentication Context

The authentication context manages the global authentication state in `client/src/contexts/AuthContext.tsx`:

```typescript
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState, LoginRequest, RegisterRequest } from '../types/auth';
import * as authApi from '../api/auth';

// Default auth state
const defaultAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
  error: null,
};

// Context interface
interface AuthContextType extends AuthState {
  login: (credentials: LoginRequest) => Promise<boolean>;
  register: (userData: RegisterRequest) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider props
interface AuthProviderProps {
  children: ReactNode;
}

// Auth provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<AuthState>(defaultAuthState);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setAuthState({
          ...defaultAuthState,
          loading: false,
        });
        return;
      }

      try {
        const response = await authApi.getCurrentUser(token);
        
        if (response.success && response.user) {
          setAuthState({
            isAuthenticated: true,
            user: response.user,
            loading: false,
            error: null,
          });
        } else {
          // Token is invalid, clear it
          localStorage.removeItem('token');
          setAuthState({
            ...defaultAuthState,
            loading: false,
          });
        }
      } catch (error) {
        localStorage.removeItem('token');
        setAuthState({
          ...defaultAuthState,
          loading: false,
          error: 'Failed to load user',
        });
      }
    };

    loadUser();
  }, []);

  // Login function
  const login = async (credentials: LoginRequest): Promise<boolean> => {
    setAuthState({
      ...authState,
      loading: true,
      error: null,
    });

    try {
      const response = await authApi.login(credentials);
      
      if (response.success && response.token && response.user) {
        localStorage.setItem('token', response.token);
        
        setAuthState({
          isAuthenticated: true,
          user: response.user,
          loading: false,
          error: null,
        });
        
        return true;
      } else {
        setAuthState({
          ...authState,
          loading: false,
          error: response.message,
        });
        
        return false;
      }
    } catch (error) {
      setAuthState({
        ...authState,
        loading: false,
        error: error instanceof Error ? error.message : 'An error occurred during login',
      });
      
      return false;
    }
  };

  // Register function
  const register = async (userData: RegisterRequest): Promise<boolean> => {
    setAuthState({
      ...authState,
      loading: true,
      error: null,
    });

    try {
      const response = await authApi.register(userData);
      
      if (response.success && response.token && response.user) {
        localStorage.setItem('token', response.token);
        
        setAuthState({
          isAuthenticated: true,
          user: response.user,
          loading: false,
          error: null,
        });
        
        return true;
      } else {
        setAuthState({
          ...authState,
          loading: false,
          error: response.message,
        });
        
        return false;
      }
    } catch (error) {
      setAuthState({
        ...authState,
        loading: false,
        error: error instanceof Error ? error.message : 'An error occurred during registration',
      });
      
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    
    setAuthState({
      isAuthenticated: false,
      user: null,
      loading: false,
      error: null,
    });
  };

  // Clear error
  const clearError = () => {
    setAuthState({
      ...authState,
      error: null,
    });
  };

  // Context value
  const value = {
    ...authState,
    login,
    register,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};
```

### 4. Authentication Components

The frontend includes components for login and registration forms, as well as a protected route component to restrict access to authenticated users.

### 5. Routing

The application uses React Router for routing, with routes defined in `client/src/routes/routes.tsx`:

```typescript
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/home';
import MainLayout from '../components/layout/MainLayout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Profile from '../pages/auth/Profile';
import ProtectedRoute from '../components/auth/ProtectedRoute';

// Import section pages
// ...

// Define the router configuration
const router = createBrowserRouter([
  // Auth routes
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: <ProtectedRoute><MainLayout><Profile /></MainLayout></ProtectedRoute>,
  },
  
  // Main routes with protection
  {
    path: '/',
    element: <ProtectedRoute><MainLayout><Home /></MainLayout></ProtectedRoute>,
  },
  
  // Section pages with protection
  // ...
]);

export default router;
```

## Authentication Flow

1. **Registration**:
   - User enters registration details on the frontend
   - Frontend sends data to the `/api/auth/register` endpoint
   - Backend creates a new user in the database
   - Backend returns user data and token
   - Frontend stores token and updates authentication state

2. **Login**:
   - User enters login credentials on the frontend
   - Frontend sends data to the `/api/auth/login` endpoint
   - Backend verifies credentials against the database
   - Backend returns user data and token
   - Frontend stores token and updates authentication state

3. **Authentication Check**:
   - On application load, frontend checks for stored token
   - If token exists, frontend sends request to `/api/auth/me` endpoint
   - Backend verifies token and returns user data
   - Frontend updates authentication state based on response

4. **Protected Routes**:
   - Routes that require authentication are wrapped in `ProtectedRoute` component
   - Component checks authentication state
   - If not authenticated, user is redirected to login page

## Issues Encountered and Solutions

During the implementation, we encountered several challenges:

### 1. TypeScript Type Errors with Express Route Handlers

**Issue**: When trying to implement the authentication routes with TypeScript, we encountered type errors related to Express route handlers:

```
error TS2769: No overload matches this call.
  The last overload gave the following error.
    Argument of type '(req: Request, res: Response) => Promise<Response<any, Record<string, any>>>' is not assignable to parameter of type 'Application<Record<string, any>>'.
```

This error occurred because TypeScript was having difficulty with the type definitions for Express route handlers, particularly when using async/await with the handlers.

**Solution**: We simplified our approach by:

1. Removing explicit type annotations from the request and response parameters
2. Using promise chains (.then/.catch) instead of async/await
3. Keeping the route handlers simple and focused on their specific tasks

### 2. Routing Conflicts

**Issue**: We initially had two different routing systems trying to work simultaneously - one defined in App.tsx using React Router's `Routes` and `Route` components, and another using `createBrowserRouter` in routes.tsx.

**Solution**: We consolidated all routes into a single system using `createBrowserRouter` in routes.tsx and used `RouterProvider` in App.tsx to provide these routes to the application.

### 3. Database Connection Issues

**Issue**: Initially, we were unable to save users to the database despite the server receiving the registration requests correctly.

**Solution**: We implemented direct Prisma database operations in the route handlers, with detailed logging to help diagnose issues. This approach allowed us to:

1. Verify that the database connection was working
2. Confirm that the user data was being received correctly
3. Track the user creation process through the logs
4. Identify and fix any issues with the database operations

**Note on Solution**: The key insight was that TypeScript type errors were preventing our more complex implementations from working correctly. By simplifying our approach and focusing on direct database operations with minimal TypeScript annotations, we were able to bypass these issues. This highlights the importance of starting with a simple, working implementation before adding complexity, especially when dealing with TypeScript and Express.

## Implementing JWT Authentication for Production

To make this application production-ready with secure JWT authentication, follow these steps:

### 1. Install Required Packages

```bash
npm install bcrypt jsonwebtoken
npm install @types/bcrypt @types/jsonwebtoken --save-dev
```

### 2. Update the Authentication Routes

```typescript
import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Use environment variable in production

// Register route with password hashing and JWT
router.post('/register', (req, res) => {
  console.log('Register route hit', req.body);
  
  const { email, password, firstName, lastName } = req.body;
  
  // Validate input
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }
  
  // Hash password
  bcrypt.hash(password, 10)
    .then(hashedPassword => {
      // Create user with hashed password
      return prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName
        }
      });
    })
    .then(user => {
      console.log('User created successfully:', user.id);
      
      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '24h' }
      );
      
      // Remove password from response
      const { password, ...userWithoutPassword } = user;
      
      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        token,
        user: userWithoutPassword
      });
    })
    .catch(error => {
      console.error('Error creating user:', error);
      res.status(400).json({
        success: false,
        message: 'Error registering user',
        error: error.message
      });
    });
});

// Login route with password verification and JWT
router.post('/login', (req, res) => {
  console.log('Login route hit', req.body);
  
  const { email, password } = req.body;
  
  // Validate input
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }
  
  let foundUser;
  
  // Find user by email
  prisma.user.findUnique({
    where: { email }
  })
    .then(user => {
      if (!user) {
        return Promise.reject(new Error('Invalid credentials'));
      }
      
      foundUser = user;
      
      // Compare password with hashed password
      return bcrypt.compare(password, user.password);
    })
    .then(isPasswordValid => {
      if (!isPasswordValid) {
        return Promise.reject(new Error('Invalid credentials'));
      }
      
      // Generate JWT token
      const token = jwt.sign(
        { userId: foundUser.id, email: foundUser.email },
        JWT_SECRET,
        { expiresIn: '24h' }
      );
      
      // Remove password from response
      const { password, ...userWithoutPassword } = foundUser;
      
      res.json({
        success: true,
        message: 'Login successful',
        token,
        user: userWithoutPassword
      });
    })
    .catch(error => {
      console.error('Error during login:', error);
      res.status(401).json({
        success: false,
        message: error.message || 'Invalid credentials'
      });
    });
});

// Authentication middleware
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

// Get current user route with authentication
router.get('/me', authenticate, (req, res) => {
  console.log('Get current user route hit', req.user);
  
  prisma.user.findUnique({
    where: { id: req.user.userId }
  })
    .then(user => {
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }
      
      // Remove password from response
      const { password, ...userWithoutPassword } = user;
      
      res.json({
        success: true,
        message: 'User retrieved successfully',
        user: userWithoutPassword
      });
    })
    .catch(error => {
      console.error('Error retrieving user:', error);
      res.status(500).json({
        success: false,
        message: 'Error retrieving user',
        error: error.message
      });
    });
});

export default router;
```

### 3. Security Best Practices for Production

1. **Environment Variables**: Store your JWT secret in environment variables, not in code.
   ```
   // .env.production
   JWT_SECRET=your-very-long-and-random-secret-key
   ```

2. **Token Expiration**: Set appropriate expiration times for tokens.
   ```javascript
   jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
   ```

3. **HTTPS**: Always use HTTPS in production to protect tokens in transit.

4. **Refresh Tokens**: Implement refresh tokens for better security.
   ```javascript
   // Generate refresh token
   const refreshToken = jwt.sign(
     { userId: user.id },
     REFRESH_TOKEN_SECRET,
     { expiresIn: '7d' }
   );
   
   // Store refresh token in database
   await prisma.refreshToken.create({
     data: {
       token: refreshToken,
       userId: user.id,
       expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
     }
   });
   ```

5. **Token Revocation**: Implement a way to revoke tokens.
   ```javascript
   // Create a blacklist table in your database
   // When a user logs out, add their token to the blacklist
   await prisma.tokenBlacklist.create({
     data: {
       token: token,
       expiresAt: decoded.exp * 1000 // Convert to milliseconds
     }
   });
   ```

6. **Rate Limiting**: Implement rate limiting to prevent brute force attacks.
   ```javascript
   const rateLimit = require('express-rate-limit');
   
   const loginLimiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 5, // 5 requests per window
     message: 'Too many login attempts, please try again later'
   });
   
   router.post('/login', loginLimiter, (req, res) => {
     // Login logic
   });
   ```

7. **Password Policies**: Enforce strong password policies.
   ```javascript
   // Validate password strength
   const isPasswordStrong = (password) => {
     const minLength = 8;
     const hasUpperCase = /[A-Z]/.test(password);
     const hasLowerCase = /[a-z]/.test(password);
     const hasNumbers = /\d/.test(password);
     const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
     
     return password.length >= minLength && 
            hasUpperCase && 
            hasLowerCase && 
            hasNumbers && 
            hasSpecialChars;
   };
   
   // Use in registration
   if (!isPasswordStrong(password)) {
     return res.status(400).json({
       success: false,
       message: 'Password must be at least 8 characters and include uppercase, lowercase, numbers, and special characters'
     });
   }
   ```

By implementing these security measures, your authentication system will be much more secure and suitable for a public-facing application. Remember that security is an ongoing process, and you should regularly review and update your security practices as new vulnerabilities and best practices emerge.

### 4. Security Considerations

**Note**: The current implementation stores passwords in plain text, which is not secure for a production environment. In a real-world application, we would:

1. Hash passwords using bcrypt before storing them
2. Implement proper JWT token generation and verification
3. Add CSRF protection
4. Implement rate limiting to prevent brute force attacks
5. Use HTTPS for all API requests

## Next Steps

To enhance the authentication system, we should:

1. Implement password hashing using bcrypt
2. Add JWT token generation and verification
3. Enhance error handling and validation
4. Add email verification for new accounts
5. Implement password reset functionality
6. Add account management features (update profile, change password, etc.)
7. Implement role-based access control
8. Add session management (logout from all devices, session timeout, etc.)

By addressing these enhancements, we can create a more secure and feature-rich authentication system for our application. 