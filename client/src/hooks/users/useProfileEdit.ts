import { useState } from 'react';
import { User, ProfileSection } from '../../types/users/entities';
import { profileApi } from '../../api/users/profile';
import { useAuth } from '../auth/useAuth';

type Education = NonNullable<User['education']>[number];

interface UseProfileEditReturn {
  updateSection: (section: ProfileSection, data: Partial<User>) => Promise<boolean>;
  updateFullProfile: (data: Partial<User>) => Promise<boolean>;
  addEducation: (data: Omit<Education, 'id' | 'userId'>) => Promise<boolean>;
  updateEducation: (educationId: string, data: Partial<Education>) => Promise<boolean>;
  deleteEducation: (educationId: string) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
  canEdit: boolean;
}

/**
 * Hook for editing a user's profile
 */
export const useProfileEdit = (userId: string): UseProfileEditReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { user: currentUser } = useAuth();
  
  // Determine if current user can edit this profile
  const canEdit = !!(currentUser?.id === userId);

  /**
   * Update a specific section of the profile
   */
  const updateSection = async (section: ProfileSection, data: Partial<User>): Promise<boolean> => {
    if (!canEdit) {
      setError('Unauthorized to edit this profile');
      return false;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const response = await profileApi.updateProfile(userId, section, data);
      
      if (!response.success) {
        setError(response.message || 'Failed to update profile');
        return false;
      }
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Update all profile data in a single call
   */
  const updateFullProfile = async (data: Partial<User>): Promise<boolean> => {
    if (!canEdit) {
      setError('Unauthorized to edit this profile');
      return false;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const response = await profileApi.updateFullProfile(userId, data);
      
      if (!response.success) {
        setError(response.message || 'Failed to update profile');
        return false;
      }
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const addEducation = async (data: Omit<Education, 'id' | 'userId'>): Promise<boolean> => {
    if (!canEdit) {
      setError('Unauthorized to edit this profile');
      return false;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const response = await profileApi.addEducation(userId, data);
      
      if (!response.success) {
        setError(response.message || 'Failed to add education');
        return false;
      }
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateEducation = async (educationId: string, data: Partial<Education>): Promise<boolean> => {
    if (!canEdit) {
      setError('Unauthorized to edit this profile');
      return false;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const response = await profileApi.updateEducation(userId, educationId, data);
      
      if (!response.success) {
        setError(response.message || 'Failed to update education');
        return false;
      }
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteEducation = async (educationId: string): Promise<boolean> => {
    if (!canEdit) {
      setError('Unauthorized to edit this profile');
      return false;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const response = await profileApi.deleteEducation(userId, educationId);
      
      if (!response.success) {
        setError(response.message || 'Failed to delete education');
        return false;
      }
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    updateSection,
    updateFullProfile,
    addEducation,
    updateEducation,
    deleteEducation,
    isLoading,
    error,
    canEdit
  };
}; 