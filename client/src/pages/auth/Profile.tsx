import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User as UserEntity } from '../../types/users';

// Import view sections
import { CoreInfo } from '../../components/users/profile/sections/CoreInfo';
import { Professional } from '../../components/users/profile/sections/Professional';
import { Organization } from '../../components/users/profile/sections/Organization';
import { WorkRelations } from '../../components/users/profile/sections/WorkRelations';
import { History } from '../../components/users/profile/sections/History';
import { Content } from '../../components/users/profile/sections/Content';
import { Social } from '../../components/users/profile/sections/Social';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Convert auth user to entity user format to match component types
  const userData: UserEntity = {
    ...user,
    createdAt: user?.createdAt ? new Date(user.createdAt) : new Date(),
    updatedAt: user?.updatedAt ? new Date(user.updatedAt) : new Date(),
  } as UserEntity;

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      logout();
      navigate('/login');
    }, 500);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-wawa-red-600">User Profile</h1>
            <p className="mt-2 text-gray-600">User not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-wawa-red-600">User Profile</h1>
          <p className="mt-2 text-gray-600">View your profile information</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mb-6">
          <button
            onClick={() => navigate('/profile/edit')}
            className="bg-wawa-yellow-400 text-wawa-red-600 py-2 px-4 rounded-md hover:bg-wawa-yellow-500 transition-colors"
          >
            Edit Profile
          </button>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="bg-wawa-red-600 text-white py-2 px-4 rounded-md hover:bg-wawa-red-700 transition-colors disabled:bg-gray-400"
          >
            {isLoggingOut ? 'Logging out...' : 'Logout'}
          </button>
        </div>

        {/* Profile Sections */}
        <div className="space-y-6">
          <CoreInfo data={userData} />
          <Professional data={userData} />
          <Organization data={userData} />
          <WorkRelations data={userData} />
          <History data={userData} />
          <Content data={userData} />
          <Social data={userData} />
        </div>
      </div>
    </div>
  );
};

export default Profile; 