import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../api/auth';
import { User } from '../../types/users/entities';

/**
 * Simple auth hook for managing user authentication state
 */
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch current user on mount
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setUser(null);
          setIsLoading(false);
          return;
        }

        const response = await getCurrentUser(token);
        
        if (response.success && response.user) {
          setUser(response.user);
        } else {
          setUser(null);
          setError(response.message || 'Failed to get user');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return {
    user,
    isLoading,
    error,
    isAuthenticated: !!user
  };
}; 