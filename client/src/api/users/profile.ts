import { User, ProfileSection, ProfileResponse, ProfileUpdateRequest } from '../../types/users/entities';
import { getAuthHeaders } from '../auth';

type Education = NonNullable<User['education']>[number];

export const profileApi = {
  /**
   * Get a user's profile data
   */
  getProfile: async (userId: string): Promise<ProfileResponse> => {
    try {
      const response = await fetch(`/api/users/${userId}/profile`, {
        method: 'GET',
        headers: { ...getAuthHeaders() }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch profile: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching profile:', error);
      return {
        success: false,
        data: {} as User,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  },

  /**
   * Update a section of a user's profile
   */
  updateProfile: async (
    userId: string, 
    section: ProfileSection,
    data: Partial<User>
  ): Promise<ProfileResponse> => {
    try {
      const response = await fetch(`/api/users/${userId}/profile`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify({ section, data })
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update profile: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating profile:', error);
      return {
        success: false,
        data: {} as User,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  },

  /**
   * Update full profile with all sections in one call
   */
  updateFullProfile: async (
    userId: string,
    profileData: Partial<User>
  ): Promise<ProfileResponse> => {
    try {
      const response = await fetch(`/api/users/${userId}/profile/full`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(profileData)
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update profile: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating profile:', error);
      return {
        success: false,
        data: {} as User,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  },

  /**
   * Add an education item to user profile
   */
  addEducation: async (userId: string, educationData: Omit<Education, 'id' | 'userId'>): Promise<ProfileResponse> => {
    try {
      const response = await fetch(`/api/users/${userId}/profile/education`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(educationData)
      });
      
      if (!response.ok) {
        throw new Error(`Failed to add education: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error adding education:', error);
      return {
        success: false,
        data: {} as User,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  },

  /**
   * Update an education item
   */
  updateEducation: async (userId: string, educationId: string, educationData: Partial<Education>): Promise<ProfileResponse> => {
    try {
      const response = await fetch(`/api/users/${userId}/profile/education/${educationId}`, {
        method: 'PATCH',
        headers: { 
          'Content-Type': 'application/json',
          ...getAuthHeaders()
        },
        body: JSON.stringify(educationData)
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update education: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating education:', error);
      return {
        success: false,
        data: {} as User,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  },

  /**
   * Delete an education item
   */
  deleteEducation: async (userId: string, educationId: string): Promise<ProfileResponse> => {
    try {
      const response = await fetch(`/api/users/${userId}/profile/education/${educationId}`, {
        method: 'DELETE',
        headers: { ...getAuthHeaders() }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete education: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error deleting education:', error);
      return {
        success: false,
        data: {} as User,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  },

  /**
   * Similar methods can be created for experience, accolades, references, etc.
   * Following the same pattern as education above
   */
}; 