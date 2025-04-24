import {
  Company,
  Department,
  Article,
  Project,
  Campaign,
  Proposal,
  Connection,
  Follow,
  Watch,
  Comment,
  Feedback,
  TeamMember,
  Task,
  Meeting,
  Link
} from './';

// Core User type with all possible relations
export interface User {
  // Core Information (always available)
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  // Basic Profile (optional)
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  bio?: string;

  // Professional Details (optional)
  yearsAtCompany?: number;
  yearsInDept?: number;
  yearsInRole?: number;

  // Organization (optional)
  companyId?: string;
  company?: Company;
  externalCompany?: string;
  departmentId?: string;
  department?: Department;
  externalDepartment?: string;

  // Work Relationships (optional)
  reportsTo?: User;
  managerId?: string;
  managerNameManual?: string;
  manages?: User[];

  // Professional History (optional arrays)
  education?: Education[];
  accolades?: Accolade[];
  experience?: Experience[];
  references?: Reference[];

  // Content Relationships (optional arrays)
  articles?: Article[];
  projects?: Project[];
  campaigns?: Campaign[];
  proposals?: Proposal[];
  contributedArticles?: Article[];
  contributedProjects?: Project[];
  contributedCampaigns?: Campaign[];
  contributedProposals?: Proposal[];
  affiliatedArticles?: Article[];
  affiliatedProjects?: Project[];
  affiliatedCampaigns?: Campaign[];
  affiliatedProposals?: Proposal[];

  // Social & Team (optional arrays)
  connections?: Connection[];
  connectedWith?: Connection[];
  followers?: Follow[];
  following?: Follow[];
  watches?: Watch[];
  comments?: Comment[];
  feedback?: Feedback[];
  teamMemberships?: TeamMember[];
  taskAssignments?: Task[];
  meetingAttendance?: Meeting[];
  links?: Link[];
}

// Professional History Types
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

export interface Accolade {
  id: string;
  userId: string;
  title: string;
  issuer: string;
  dateReceived: Date;
  description?: string;
}

export interface Reference {
  id: string;
  userId: string;
  internalUserId?: string;
  internalUser?: User;
  externalName?: string;
  externalEmail?: string;
  externalPhone?: string;
  relationship: string;
  position: string;
  company: string;
}

// Request/Response Types
export interface ProfileUpdateRequest {
  section: ProfileSection;
  data: Partial<User>;
}

export interface ProfileResponse {
  success: boolean;
  data: User;
  message?: string;
}

// Type for profile sections
export type ProfileSection = 
  | 'core'
  | 'professional'
  | 'organization'
  | 'workRelations'
  | 'history'
  | 'content'
  | 'social'; 