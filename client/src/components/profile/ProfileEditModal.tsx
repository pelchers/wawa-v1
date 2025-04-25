import React from 'react';
import { Profile } from '../../types/profile';
import { useProfileForm } from '../../hooks/useProfileForm';

interface ProfileEditModalProps {
  profile: Profile;
  onClose: () => void;
  onUpdate: (updatedProfile: Profile) => void;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ 
  profile, 
  onClose, 
  onUpdate 
}) => {
  const {
    formData,
    loading,
    error,
    handleChange,
    handleNumberChange,
    handleArrayChange,
    handleSubmit
  } = useProfileForm(profile, onUpdate);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex justify-center items-start pt-10">
      <div className="relative bg-white rounded-lg shadow-xl mx-4 mb-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Edit Profile</h2>
          <button 
            className="text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-6 mt-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Basic Information */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio || ''}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>
          
          {/* Company Information */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="companyRole" className="block text-sm font-medium text-gray-700 mb-1">Company Role</label>
                <input
                  type="text"
                  id="companyRole"
                  name="companyRole"
                  value={formData.companyRole || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="departmentName" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <input
                  type="text"
                  id="departmentName"
                  name="departmentName"
                  value={formData.departmentName || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="companyId" className="block text-sm font-medium text-gray-700 mb-1">Company ID</label>
                <input
                  type="text"
                  id="companyId"
                  name="companyId"
                  value={formData.companyId || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="yearsAtCompany" className="block text-sm font-medium text-gray-700 mb-1">Years at Company</label>
                <input
                  type="number"
                  id="yearsAtCompany"
                  name="yearsAtCompany"
                  value={formData.yearsAtCompany || 0}
                  onChange={handleNumberChange}
                  min="0"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="yearsInDept" className="block text-sm font-medium text-gray-700 mb-1">Years in Department</label>
                <input
                  type="number"
                  id="yearsInDept"
                  name="yearsInDept"
                  value={formData.yearsInDept || 0}
                  onChange={handleNumberChange}
                  min="0"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="yearsInRole" className="block text-sm font-medium text-gray-700 mb-1">Years in Role</label>
                <input
                  type="number"
                  id="yearsInRole"
                  name="yearsInRole"
                  value={formData.yearsInRole || 0}
                  onChange={handleNumberChange}
                  min="0"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>
          
          {/* Work Relationships */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Work Relationships</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="managerName" className="block text-sm font-medium text-gray-700 mb-1">Manager Name</label>
                <input
                  type="text"
                  id="managerName"
                  name="managerName"
                  value={formData.managerName || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="reportsToEmail" className="block text-sm font-medium text-gray-700 mb-1">Manager Email</label>
                <input
                  type="email"
                  id="reportsToEmail"
                  name="reportsToEmail"
                  value={formData.reportsToEmail || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>
          
          {/* Education & Experience */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Education & Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="years" className="block text-sm font-medium text-gray-700 mb-1">Years</label>
                <input
                  type="number"
                  id="years"
                  name="years"
                  value={formData.years || 0}
                  onChange={handleNumberChange}
                  min="0"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>
          
          {/* Skills & Certifications */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Skills & Certifications</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">Skills (comma-separated)</label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills?.join(', ') || ''}
                  onChange={handleArrayChange}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="React, TypeScript, Node.js"
                />
              </div>
              
              <div>
                <label htmlFor="certifications" className="block text-sm font-medium text-gray-700 mb-1">Certifications (comma-separated)</label>
                <textarea
                  id="certifications"
                  name="certifications"
                  value={formData.certifications?.join(', ') || ''}
                  onChange={handleArrayChange}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="AWS Certified Developer, Scrum Master"
                />
              </div>
            </div>
          </section>
          
          {/* Achievements & Publications */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Achievements & Publications</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 mb-1">Achievements (comma-separated)</label>
                <textarea
                  id="achievements"
                  name="achievements"
                  value={formData.achievements?.join(', ') || ''}
                  onChange={handleArrayChange}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Employee of the Month, Increased sales by 25%"
                />
              </div>
              
              <div>
                <label htmlFor="publications" className="block text-sm font-medium text-gray-700 mb-1">Publications (comma-separated)</label>
                <textarea
                  id="publications"
                  name="publications"
                  value={formData.publications?.join(', ') || ''}
                  onChange={handleArrayChange}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Modern Web Development, React Best Practices"
                />
              </div>
              
              <div>
                <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-1">References (comma-separated)</label>
                <textarea
                  id="references"
                  name="references"
                  value={formData.references?.join(', ') || ''}
                  onChange={handleArrayChange}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe, Jane Smith"
                />
              </div>
            </div>
          </section>
          
          {/* Links */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">Links</h3>
            <div>
              <label htmlFor="links" className="block text-sm font-medium text-gray-700 mb-1">Links (comma-separated)</label>
              <textarea
                id="links"
                name="links"
                value={formData.links?.join(', ') || ''}
                onChange={handleArrayChange}
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://github.com/username, https://linkedin.com/in/username"
              />
            </div>
          </section>
          
          <div className="flex justify-end space-x-4 pt-4">
            <button 
              type="button" 
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditModal; 