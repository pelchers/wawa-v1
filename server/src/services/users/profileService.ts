import { PrismaClient } from '@prisma/client';
import { ProfileUpdateRequest, EducationData, ExperienceData, AccoladeData, ReferenceData, ProfileSection } from '../../types/users/profile';

const prisma = new PrismaClient();

export const profileService = {
  /**
   * Get a user profile with appropriate visibility based on viewer
   */
  async getProfile(userId: string, currentUserId?: string) {
    // Base include object for relations that anyone can see
    const includeRelations = {
      education: true,
      experience: {
        include: {
          company: true
        }
      },
      accolades: true,
      company: true,
      department: true,
      
      // Public content
      articles: {
        where: { isPublic: true }
      },
      projects: {
        where: { isPublic: true }
      }
    };

    // Additional relations to include if current user is viewing their own profile
    // or has appropriate permissions
    const authenticatedInclude = currentUserId ? {
      // Non-public content
      articles: true,
      projects: true,
      campaigns: true,
      proposals: true,
      
      // Work relationships
      reportsTo: true,
      manages: true,
      
      // Social
      connections: true,
      teamMemberships: true,
      references: {
        include: {
          internalUser: true
        }
      }
    } : {};

    const profile = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        ...includeRelations,
        ...(currentUserId === userId ? authenticatedInclude : {})
      }
    });

    if (!profile) {
      throw new Error('User not found');
    }

    return profile;
  },

  /**
   * Update a section of a user's profile
   */
  async updateProfile(userId: string, updateData: ProfileUpdateRequest) {
    const { section, data } = updateData;

    // Handle different section updates
    switch (section) {
      case ProfileSection.CORE:
        return await prisma.user.update({
          where: { id: userId },
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email
          },
          include: { education: true, experience: true }
        });

      case ProfileSection.PROFESSIONAL:
        return await prisma.user.update({
          where: { id: userId },
          data: {
            jobTitle: data.jobTitle,
            bio: data.bio,
            yearsAtCompany: data.yearsAtCompany,
            yearsInDept: data.yearsInDept,
            yearsInRole: data.yearsInRole
          },
          include: { education: true, experience: true }
        });

      case ProfileSection.ORGANIZATION:
        return await prisma.user.update({
          where: { id: userId },
          data: {
            companyId: data.companyId,
            externalCompany: data.externalCompany,
            departmentId: data.departmentId,
            externalDepartment: data.externalDepartment
          },
          include: { 
            education: true, 
            experience: true,
            company: true,
            department: true
          }
        });

      case ProfileSection.WORK_RELATIONS:
        return await prisma.user.update({
          where: { id: userId },
          data: {
            managerId: data.managerId,
            managerNameManual: data.managerNameManual
          },
          include: { 
            education: true, 
            experience: true,
            reportsTo: true,
            manages: true
          }
        });

      // Add other section update handlers

      default:
        throw new Error(`Invalid section: ${section}`);
    }
  },

  /**
   * Update the full profile in a single request
   */
  async updateFullProfile(userId: string, profileData: Partial<any>) {
    // First verify user exists
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Extract only the fields that we want to update
    // This prevents unauthorized updates to sensitive fields
    const updatableFields = {
      // Core
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      
      // Professional
      jobTitle: profileData.jobTitle,
      bio: profileData.bio,
      yearsAtCompany: profileData.yearsAtCompany,
      yearsInDept: profileData.yearsInDept,
      yearsInRole: profileData.yearsInRole,
      
      // Organization
      companyId: profileData.companyId,
      externalCompany: profileData.externalCompany,
      departmentId: profileData.departmentId,
      externalDepartment: profileData.externalDepartment,
      
      // Work Relations
      managerId: profileData.managerId,
      managerNameManual: profileData.managerNameManual
    };
    
    // Update user with filtered data
    return await prisma.user.update({
      where: { id: userId },
      data: updatableFields,
      include: {
        education: true,
        experience: true,
        company: true,
        department: true,
        reportsTo: true
      }
    });
  },

  /**
   * Add an education item to a user's profile
   */
  async addEducation(userId: string, educationData: EducationData) {
    // First verify user exists
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Create education record
    await prisma.education.create({
      data: {
        ...educationData,
        userId
      }
    });

    // Return updated user with education
    return await prisma.user.findUnique({
      where: { id: userId },
      include: { education: true }
    });
  },

  /**
   * Update an education item
   */
  async updateEducation(userId: string, educationId: string, educationData: Partial<EducationData>) {
    // Verify education belongs to user
    const education = await prisma.education.findUnique({
      where: { id: educationId }
    });

    if (!education || education.userId !== userId) {
      throw new Error('Education not found or not authorized to edit');
    }

    // Update education
    await prisma.education.update({
      where: { id: educationId },
      data: educationData
    });

    // Return updated user with education
    return await prisma.user.findUnique({
      where: { id: userId },
      include: { education: true }
    });
  },

  /**
   * Delete an education item
   */
  async deleteEducation(userId: string, educationId: string) {
    // Verify education belongs to user
    const education = await prisma.education.findUnique({
      where: { id: educationId }
    });

    if (!education || education.userId !== userId) {
      throw new Error('Education not found or not authorized to delete');
    }

    // Delete education
    await prisma.education.delete({
      where: { id: educationId }
    });

    // Return updated user with education
    return await prisma.user.findUnique({
      where: { id: userId },
      include: { education: true }
    });
  }

  /**
   * Similar methods can be added for experience, accolades, references, etc.
   * following the same pattern as education above
   */
}; 