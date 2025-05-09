import { ProfileResponse, UpdateProfileRequest } from '../types/profile';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4100/api';

/**
 * Get the current user's profile
 */
export const getProfile = async (token: string): Promise<ProfileResponse> => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Profile fetch error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to fetch profile',
    };
  }
};

/**
 * Update the current user's profile
 */
export const updateProfile = async (token: string, profileData: UpdateProfileRequest): Promise<ProfileResponse> => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Profile update error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to update profile',
    };
  }
}; 