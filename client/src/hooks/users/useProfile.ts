`import { useState, useEffect } from 'react';
import { User, ProfileResponse } from '../../types/users/entities';
import { profileApi } from '../../api/users/profile';

interface UseProfileReturn {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Hook for fetching and managing a user's profile data
 */
export const useProfile = (userId: string): UseProfileReturn => {
  const [profile, setProfile] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await profileApi.getProfile(userId);
      
      if (response.success) {
        setProfile(response.data);
      } else {
        setError(response.message || 'Failed to fetch profile');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [userId]);

  return {
    profile,
    isLoading,
    error,
    refetch: fetchProfile
  };
}; 