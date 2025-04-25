export interface User {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  // Basic Profile Information
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  bio?: string;
  yearsAtCompany?: number;
  yearsInDept?: number;
  yearsInRole?: number;

  // Company and Department Info
  companyName?: string;
  companyRole?: string;
  departmentName?: string;
  companyId?: string;

  // Work Relationships
  reportsToEmail?: string;
  managerName?: string;

  // Education and Experience
  title?: string;
  institution?: string;
  years?: number;
  references?: string[];
  certifications?: string[];
  skills?: string[];
  achievements?: string[];
  publications?: string[];
  
  // Social and External Links
  links?: string[];
} 