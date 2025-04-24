import { LoginRequest, RegisterRequest, AuthResponse } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4100/api';

/**
 * Get authorization headers for authenticated requests
 */
export const getAuthHeaders = (): Record<string, string> => {
  const token = localStorage.getItem('token');
  if (!token) return {};
  
  return {
    'Authorization': `Bearer ${token}`
  };
};

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