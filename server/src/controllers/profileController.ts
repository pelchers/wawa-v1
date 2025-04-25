import { Request, Response } from 'express';
import * as profileService from '../services/profileService';
import { UpdateProfileRequest } from '../types/requests';

/**
 * Get the current user's profile
 */
export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authenticated' 
      });
    }

    const profile = await profileService.getProfileById(userId);
    
    return res.status(200).json({
      success: true,
      message: 'Profile retrieved successfully',
      profile
    });
  } catch (error) {
    console.error('Error getting profile:', error);
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Internal server error'
    });
  }
};

/**
 * Update the current user's profile
 */
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authenticated' 
      });
    }

    const profileData: UpdateProfileRequest = req.body;
    
    const updatedProfile = await profileService.updateProfile(userId, profileData);
    
    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      profile: updatedProfile
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}; 