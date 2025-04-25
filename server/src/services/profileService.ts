import { PrismaClient } from '@prisma/client';
import { ProfileData, UpdateProfileRequest } from '../types/profile';

const prisma = new PrismaClient();

/**
 * Get a user's profile by ID
 */
export const getProfileById = async (userId: string): Promise<ProfileData> => {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

/**
 * Update a user's profile
 */
export const updateProfile = async (
  userId: string, 
  profileData: UpdateProfileRequest
): Promise<ProfileData> => {
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
    }
  });

  return updatedUser;
}; 