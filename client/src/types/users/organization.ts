export interface Company {
  id: string;
  name: string;
  description?: string;
  // Add other company fields as needed
}

export interface Department {
  id: string;
  name: string;
  companyId: string;
  company?: Company;
  description?: string;
  // Add other department fields as needed
} 