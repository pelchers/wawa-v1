import { Company, Department } from './organization';

export interface UserProfile {
  id: string;
  email: string;
  password?: string; // Only for forms
  createdAt: Date;
  updatedAt: Date;

  // Profile Information
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  bio?: string;
  yearsAtCompany?: number;
  yearsInDept?: number;
  yearsInRole?: number;

  // Company and Department Info
  companyId?: string;
  company?: Company;
  externalCompany?: string;
  departmentId?: string;
  department?: Department;
  externalDepartment?: string;

  // Work Relationships
  reportsTo?: UserProfile;
  managerId?: string;
  managerNameManual?: string;
  manages?: UserProfile[];

  // Education and Experience
  education?: Education[];
  accolades?: Accolade[];
  experience?: Experience[];
  references?: Reference[];
}

export interface Education {
  id: string;
  userId: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  ongoing: boolean;
}

export interface Accolade {
  id: string;
  userId: string;
  title: string;
  issuer: string;
  dateReceived: Date;
  description?: string;
}

export interface Experience {
  id: string;
  userId: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description?: string;
  companyId?: string;
  company?: Company;
  externalCompany?: string;
}

export interface Reference {
  id: string;
  userId: string;
  internalUserId?: string;
  internalUser?: UserProfile;
  externalName?: string;
  externalEmail?: string;
  externalPhone?: string;
  relationship: string;
  position: string;
  company: string;
}

// API Types
export interface ProfileResponse {
  success: boolean;
  message: string;
  data: UserProfile;
}

export interface ProfileUpdateData extends Partial<Omit<UserProfile, 'id' | 'email' | 'createdAt' | 'updatedAt'>> {}

export interface ProfileError {
  success: false;
  message: string;
  errors?: Record<string, string>;
} 