export interface UpdateProfileRequest {
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
} 