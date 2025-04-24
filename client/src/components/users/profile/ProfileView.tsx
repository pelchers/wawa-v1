import { User } from '../../../types/users/entities';
import { CoreInfo } from './sections/CoreInfo';
import { Professional } from './sections/Professional';
import { Organization } from './sections/Organization';
import { WorkRelations } from './sections/WorkRelations';
import { History } from './sections/History';
import { Content } from './sections/Content';
import { Social } from './sections/Social';

interface ProfileViewProps {
  user: User;
  isCurrentUser?: boolean;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ user, isCurrentUser }) => {
  return (
    <div className="profile-view space-y-6">
      <CoreInfo data={user} isCurrentUser={isCurrentUser} />
      <Professional data={user} />
      <Organization data={user} />
      <WorkRelations data={user} />
      <History data={user} />
      <Content data={user} />
      <Social data={user} />
    </div>
  );
}; 