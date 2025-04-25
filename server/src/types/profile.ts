export interface ProfileData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  bio?: string;
  yearsAtCompany?: number;
  yearsInDept?: number;
  yearsInRole?: number;
  companyName?: string;
  companyRole?: string;
  departmentName?: string;
  companyId?: string;
  reportsToEmail?: string;
  managerName?: string;
  title?: string;
  institution?: string;
  years?: number;
  references?: string[];
  certifications?: string[];
  skills?: string[];
  achievements?: string[];
  publications?: string[];
  links?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProfileResponse {
  success: boolean;
  message: string;
  profile?: ProfileData;
} 