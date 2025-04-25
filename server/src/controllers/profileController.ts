import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { UpdateProfileRequest } from '../types/requests';

const prisma = new PrismaClient();

/**
 * Get the current user's profile
 */
export const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    
    if (!userId) {
      res.status(401).json({ 
        success: false, 
        message: 'Not authenticated' 
      });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        jobTitle: true,
        bio: true,
        yearsAtCompany: true,
        yearsInDept: true,
        yearsInRole: true,
        companyName: true,
        companyRole: true,
        departmentName: true,
        companyId: true,
        reportsToEmail: true,
        managerName: true,
        title: true,
        institution: true,
        years: true,
        references: true,
        certifications: true,
        skills: true,
        achievements: true,
        publications: true,
        links: true,
        createdAt: true,
        updatedAt: true
      }
    });

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'Profile not found'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Profile retrieved successfully',
      profile: user
    });
  } catch (error) {
    console.error('Error getting profile:', error);
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Internal server error'
    });
  }
};

/**
 * Update the current user's profile
 */
export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    
    if (!userId) {
      res.status(401).json({ 
        success: false, 
        message: 'Not authenticated' 
      });
      return;
    }

    const profileData: UpdateProfileRequest = req.body;
    
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        jobTitle: profileData.jobTitle,
        bio: profileData.bio,
        yearsAtCompany: profileData.yearsAtCompany,
        yearsInDept: profileData.yearsInDept,
        yearsInRole: profileData.yearsInRole,
        companyName: profileData.companyName,
        companyRole: profileData.companyRole,
        departmentName: profileData.departmentName,
        companyId: profileData.companyId,
        reportsToEmail: profileData.reportsToEmail,
        managerName: profileData.managerName,
        title: profileData.title,
        institution: profileData.institution,
        years: profileData.years,
        references: profileData.references,
        certifications: profileData.certifications,
        skills: profileData.skills,
        achievements: profileData.achievements,
        publications: profileData.publications,
        links: profileData.links
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        jobTitle: true,
        bio: true,
        yearsAtCompany: true,
        yearsInDept: true,
        yearsInRole: true,
        companyName: true,
        companyRole: true,
        departmentName: true,
        companyId: true,
        reportsToEmail: true,
        managerName: true,
        title: true,
        institution: true,
        years: true,
        references: true,
        certifications: true,
        skills: true,
        achievements: true,
        publications: true,
        links: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      profile: updatedUser
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}; 