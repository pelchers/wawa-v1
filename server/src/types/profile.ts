export interface ProfileData {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  jobTitle: string | null;
  bio: string | null;
  yearsAtCompany: number | null;
  yearsInDept: number | null;
  yearsInRole: number | null;
  companyName: string | null;
  companyRole: string | null;
  departmentName: string | null;
  companyId: string | null;
  reportsToEmail: string | null;
  managerName: string | null;
  title: string | null;
  institution: string | null;
  years: number | null;
  references: string[];
  certifications: string[];
  skills: string[];
  achievements: string[];
  publications: string[];
  links: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProfileResponse {
  success: boolean;
  message: string;
  profile?: ProfileData;
} 