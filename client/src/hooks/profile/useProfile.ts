import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Profile } from '../../types/profile';
import * as profileApi from '../../api/profile';

export const useProfile = () => {
  const { token } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await profileApi.getProfile(token);
        if (response.success && response.profile) {
          setProfile(response.profile);
        } else {
          setError(response.message);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [token]);

  return {
    profile,
    loading,
    error,
    setProfile
  };
}; 