import { useState } from 'react';
import { Profile, UpdateProfileRequest } from '../types/profile';
import { updateProfile } from '../api/profile';
import { useAuth } from '../contexts/AuthContext';

export const useProfileForm = (profile: Profile, onSuccess: (updatedProfile: Profile) => void) => {
  const [formData, setFormData] = useState<UpdateProfileRequest>({
    firstName: profile.firstName || '',
    lastName: profile.lastName || '',
    jobTitle: profile.jobTitle || '',
    bio: profile.bio || '',
    yearsAtCompany: profile.yearsAtCompany || 0,
    yearsInDept: profile.yearsInDept || 0,
    yearsInRole: profile.yearsInRole || 0,
    companyName: profile.companyName || '',
    companyRole: profile.companyRole || '',
    departmentName: profile.departmentName || '',
    companyId: profile.companyId || '',
    reportsToEmail: profile.reportsToEmail || '',
    managerName: profile.managerName || '',
    title: profile.title || '',
    institution: profile.institution || '',
    years: profile.years || 0,
    references: profile.references || [],
    certifications: profile.certifications || [],
    skills: profile.skills || [],
    achievements: profile.achievements || [],
    publications: profile.publications || [],
    links: profile.links || []
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { token, isAuthenticated } = useAuth();

  // Handle text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle number input changes
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseInt(value) || 0
    }));
  };

  // Handle array input changes (comma-separated)
  const handleArrayChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const arrayValues = value.split(',').map(item => item.trim());
    setFormData(prev => ({
      ...prev,
      [name]: arrayValues
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated || !token) {
      setError('You must be authenticated to update your profile');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await updateProfile(token, formData);
      
      if (response.success && response.profile) {
        onSuccess(response.profile);
      } else {
        setError(response.message || 'Failed to update profile');
      }
    } catch (err) {
      setError('Failed to update profile');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    handleChange,
    handleNumberChange,
    handleArrayChange,
    handleSubmit
  };
}; 