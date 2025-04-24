import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types/users';
import { profileStyles as styles } from '../../styles/profile';
import { useProfileEdit } from '../../hooks/users/useProfileEdit';
import { ProfileEdit as ProfileEditComponent } from '../../components/users/profile/ProfileEdit';

// Import edit sections
import { CoreInfoEdit } from '../../components/users/profile/sections/edit/CoreInfoEdit';
import { ProfessionalEdit } from '../../components/users/profile/sections/edit/ProfessionalEdit';
import { OrganizationEdit } from '../../components/users/profile/sections/edit/OrganizationEdit';
import { WorkRelationsEdit } from '../../components/users/profile/sections/edit/WorkRelationsEdit';
import { HistoryEdit } from '../../components/users/profile/sections/edit/HistoryEdit';
import { ContentEdit } from '../../components/users/profile/sections/edit/ContentEdit';
import { SocialEdit } from '../../components/users/profile/sections/edit/SocialEdit';

const ProfileEdit = () => {
  const navigate = useNavigate();
  // TODO: Get actual user data from context/API
  const [userData, setUserData] = useState<User>({
    id: '1',
    firstName: 'Luke',
    lastName: 'Pelych',
    email: 'pelchers@gmail.com',
    // Add other required fields with default values
  } as User);

  const { updateFullProfile, isLoading, error } = useProfileEdit(userData.id);

  const handleSave = async (updatedData: Partial<User>) => {
    try {
      console.log('Saving full profile data:', updatedData);
      // Update the profile using the hook that calls the API
      const success = await updateFullProfile(updatedData);
      
      if (success) {
        setUserData(prev => ({ ...prev, ...updatedData }));
        // Optionally navigate back to profile view
        navigate('/profile');
      }
    } catch (err) {
      console.error('Error saving profile:', err);
    }
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-wawa-red-600">Edit Profile</h1>
          <p className="mt-2 text-gray-600">Update your profile information</p>
          {error && <p className="mt-2 text-red-600">{error}</p>}
        </div>

        {/* Use the refactored component with single update button */}
        <ProfileEditComponent 
          user={userData}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default ProfileEdit; 