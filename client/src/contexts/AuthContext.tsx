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