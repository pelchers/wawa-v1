import { User } from '../../db/prisma/generated/client';

/**
 * Type for profile sections
 */
export enum ProfileSection {
  CORE = 'core',
  PROFESSIONAL = 'professional',
  ORGANIZATION = 'organization',
  WORK_RELATIONS = 'workRelations',
  HISTORY = 'history',
  CONTENT = 'content',
  SOCIAL = 'social'
}

/**
 * Request type for profile updates
 */
export interface ProfileUpdateRequest {
  section: ProfileSection;
  data: Partial<User>;
}

/**
 * Type for education items
 */
export interface EducationData {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  ongoing: boolean;
}

/**
 * Type for experience items
 */
export interface ExperienceData {
  position: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description?: string;
  companyId?: string;
  externalCompany?: string;
}

/**
 * Type for accolade items
 */
export interface AccoladeData {
  title: string;
  issuer: string;
  dateReceived: Date;
  description?: string;
}

/**
 * Type for reference items
 */
export interface ReferenceData {
  internalUserId?: string;
  externalName?: string;
  externalEmail?: string;
  externalPhone?: string;
  relationship: string;
  position: string;
  company: string;
} 