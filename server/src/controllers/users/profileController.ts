import { Request, Response } from 'express';
import { profileService } from '../../services/users/profileService';
import { ProfileUpdateRequest } from '../../types/users/profile';

export const profileController = {
  /**
   * Get a user's profile
   */
  async getProfile(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const currentUser = req.user;
      
      // Get profile data with appropriate visibility
      const profile = await profileService.getProfile(userId, currentUser?.id);
      
      return res.json({
        success: true,
        data: profile
      });
    } catch (error) {
      console.error('Error getting profile:', error);
      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  },

  /**
   * Update a section of a user's profile
   */
  async updateProfile(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const currentUser = req.user;
      
      // Check if user is authorized to edit this profile
      if (currentUser?.id !== userId) {
        return res.status(403).json({
          success: false,
          message: 'Unauthorized to edit this profile'
        });
      }

      const updateData: ProfileUpdateRequest = req.body;
      const updated = await profileService.updateProfile(userId, updateData);
      
      return res.json({
        success: true,
        data: updated,
        message: 'Profile updated successfully'
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  },

  /**
   * Update the full profile in a single request
   */
  async updateFullProfile(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const currentUser = req.user;
      
      // Check if user is authorized to edit this profile
      if (currentUser?.id !== userId) {
        return res.status(403).json({
          success: false,
          message: 'Unauthorized to edit this profile'
        });
      }

      const profileData = req.body;
      const updated = await profileService.updateFullProfile(userId, profileData);
      
      return res.json({
        success: true,
        data: updated,
        message: 'Profile updated successfully'
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  },

  /**
   * Add an education item to user profile
   */
  async addEducation(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const currentUser = req.user;
      
      // Check if user is authorized to edit this profile
      if (currentUser?.id !== userId) {
        return res.status(403).json({
          success: false,
          message: 'Unauthorized to edit this profile'
        });
      }

      const educationData = req.body;
      const updated = await profileService.addEducation(userId, educationData);
      
      return res.json({
        success: true,
        data: updated,
        message: 'Education added successfully'
      });
    } catch (error) {
      console.error('Error adding education:', error);
      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  },

  /**
   * Update an education item
   */
  async updateEducation(req: Request, res: Response) {
    try {
      const { userId, educationId } = req.params;
      const currentUser = req.user;
      
      // Check if user is authorized to edit this profile
      if (currentUser?.id !== userId) {
        return res.status(403).json({
          success: false,
          message: 'Unauthorized to edit this profile'
        });
      }

      const educationData = req.body;
      const updated = await profileService.updateEducation(userId, educationId, educationData);
      
      return res.json({
        success: true,
        data: updated,
        message: 'Education updated successfully'
      });
    } catch (error) {
      console.error('Error updating education:', error);
      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  },

  /**
   * Delete an education item
   */
  async deleteEducation(req: Request, res: Response) {
    try {
      const { userId, educationId } = req.params;
      const currentUser = req.user;
      
      // Check if user is authorized to edit this profile
      if (currentUser?.id !== userId) {
        return res.status(403).json({
          success: false,
          message: 'Unauthorized to edit this profile'
        });
      }

      const updated = await profileService.deleteEducation(userId, educationId);
      
      return res.json({
        success: true,
        data: updated,
        message: 'Education deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting education:', error);
      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  }
}; 