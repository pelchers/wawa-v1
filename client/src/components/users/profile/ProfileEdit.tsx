import { useState } from 'react';
import { User } from '../../../types/users';
import { profileStyles as styles } from '../../../styles/profile';
import { CoreInfoEdit } from './sections/edit/CoreInfoEdit';
import { ProfessionalEdit } from './sections/edit/ProfessionalEdit';
import { OrganizationEdit } from './sections/edit/OrganizationEdit';
import { WorkRelationsEdit } from './sections/edit/WorkRelationsEdit';
import { HistoryEdit } from './sections/edit/HistoryEdit';
import { ContentEdit } from './sections/edit/ContentEdit';
import { SocialEdit } from './sections/edit/SocialEdit';

interface ProfileEditProps {
  user: User;
  onSave: (data: Partial<User>) => Promise<void>;
  onCancel: () => void;
}

export const ProfileEdit: React.FC<ProfileEditProps> = ({ 
  user, 
  onSave, 
  onCancel 
}) => {
  // Create an object to store section data
  const [sectionData, setSectionData] = useState<Record<string, Partial<User>>>({
    core: {},
    professional: {},
    organization: {},
    workRelations: {},
    history: {},
    content: {},
    social: {}
  });

  // Update section data without re-renders
  const handleSectionChange = (section: string, data: Partial<User>) => {
    setSectionData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Combine all section data
    const formData = {
      ...user,
      ...Object.values(sectionData).reduce((acc, curr) => ({ ...acc, ...curr }), {})
    };
    
    console.log('Saving form data:', formData);
    await onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="profile-view space-y-6">
      {/* Sections with named data collection */}
      <CoreInfoEdit 
        data={user} 
        onChange={(data) => handleSectionChange('core', data)}
      />
      <ProfessionalEdit 
        data={user} 
        onChange={(data) => handleSectionChange('professional', data)}
      />
      <OrganizationEdit 
        data={user} 
        onChange={(data) => handleSectionChange('organization', data)}
      />
      <WorkRelationsEdit 
        data={user} 
        onChange={(data) => handleSectionChange('workRelations', data)}
      />
      <HistoryEdit 
        data={user} 
        onChange={(data) => handleSectionChange('history', data)}
      />
      <ContentEdit 
        data={user} 
        onChange={(data) => handleSectionChange('content', data)}
      />
      <SocialEdit 
        data={user} 
        onChange={(data) => handleSectionChange('social', data)}
      />

      {/* Global actions */}
      <div className="flex justify-end space-x-4 pt-4">
        <button 
          type="button"
          onClick={onCancel}
          className="btn btn-outline"
        >
          Cancel
        </button>
        <button 
          type="submit"
          className="btn btn-primary"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
}; 