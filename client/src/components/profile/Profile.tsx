import React, { useState } from 'react';
import { Profile as ProfileType } from '../../types/profile';
import ProfileEditModal from './ProfileEditModal';

interface ProfileProps {
  user: ProfileType;
  onUpdateProfile: (updatedProfile: ProfileType) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onUpdateProfile }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <button
          onClick={handleEditClick}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Edit Profile
        </button>
      </div>

      {/* Basic Information */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-lg">{`${user.firstName || ''} ${user.lastName || ''}`}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg">{user.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Job Title</p>
            <p className="text-lg">{user.jobTitle || 'Not specified'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Bio</p>
            <p className="text-lg">{user.bio || 'No bio provided'}</p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Company Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Company</p>
            <p className="text-lg">{user.companyName || 'Not specified'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Department</p>
            <p className="text-lg">{user.departmentName || 'Not specified'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Years in Role</p>
            <p className="text-lg">{user.yearsInRole || '0'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Manager</p>
            <p className="text-lg">{user.managerName || 'Not specified'}</p>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills & Certifications</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <p className="text-sm text-gray-500">Skills</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.skills?.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              )) || 'No skills listed'}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Certifications</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.certifications?.map((cert: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {cert}
                </span>
              )) || 'No certifications listed'}
            </div>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">External Links</h2>
        <div className="flex flex-wrap gap-4">
          {user.links?.map((link: string, index: number) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              {new URL(link).hostname}
            </a>
          )) || 'No external links provided'}
        </div>
      </section>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <ProfileEditModal
          profile={user}
          onClose={handleCloseModal}
          onUpdate={(updatedProfile) => {
            onUpdateProfile(updatedProfile);
            handleCloseModal();
          }}
        />
      )}
    </div>
  );
};

export default Profile; 