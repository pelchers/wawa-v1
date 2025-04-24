import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { ProfileSection } from '../../types/users/profile';

// Validation schemas for each section
const coreSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional()
});

const professionalSchema = z.object({
  jobTitle: z.string().optional(),
  bio: z.string().optional(),
  yearsAtCompany: z.number().min(0).optional(),
  yearsInDept: z.number().min(0).optional(),
  yearsInRole: z.number().min(0).optional()
});

const organizationSchema = z.object({
  companyId: z.string().optional(),
  externalCompany: z.string().optional(),
  departmentId: z.string().optional(),
  externalDepartment: z.string().optional()
});

const workRelationsSchema = z.object({
  managerId: z.string().optional(),
  managerNameManual: z.string().optional()
});

// Full profile schema combines all updatable fields
const fullProfileSchema = z.object({
  // Core
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  
  // Professional
  jobTitle: z.string().optional(),
  bio: z.string().optional(),
  yearsAtCompany: z.number().min(0).optional(),
  yearsInDept: z.number().min(0).optional(),
  yearsInRole: z.number().min(0).optional(),
  
  // Organization
  companyId: z.string().optional(),
  externalCompany: z.string().optional(),
  departmentId: z.string().optional(),
  externalDepartment: z.string().optional(),
  
  // Work Relations
  managerId: z.string().optional(),
  managerNameManual: z.string().optional()
});

// Schema for education items
const educationSchema = z.object({
  institution: z.string().min(1, 'Institution is required'),
  degree: z.string().min(1, 'Degree is required'),
  field: z.string().min(1, 'Field of study is required'),
  startYear: z.number().min(1900, 'Start year must be after 1900'),
  endYear: z.number().min(1900, 'End year must be after 1900').optional(),
  ongoing: z.boolean().default(false)
});

/**
 * Validates profile update requests
 */
export const validateProfileUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { section, data } = req.body;

    // First validate that section is valid
    if (!Object.values(ProfileSection).includes(section)) {
      return res.status(400).json({
        success: false,
        message: `Invalid section: ${section}`
      });
    }

    // Then validate data based on section
    switch (section) {
      case 'core':
        coreSchema.parse(data);
        break;
      case 'professional':
        professionalSchema.parse(data);
        break;
      case 'organization':
        organizationSchema.parse(data);
        break;
      case 'workRelations':
        workRelationsSchema.parse(data);
        break;
      // Add validations for other sections as needed
    }

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Invalid data provided',
      errors: error instanceof z.ZodError ? error.errors : undefined
    });
  }
};

/**
 * Validates full profile update requests
 */
export const validateFullProfile = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    fullProfileSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Invalid profile data',
      errors: error instanceof z.ZodError ? error.errors : undefined
    });
  }
};

/**
 * Validates education data
 */
export const validateEducation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    educationSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Invalid education data',
      errors: error instanceof z.ZodError ? error.errors : undefined
    });
  }
}; 