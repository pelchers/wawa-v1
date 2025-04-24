import { User } from '../../../../types/users/entities';

interface ProfessionalProps {
  data: User;
}

export const Professional: React.FC<ProfessionalProps> = ({ data }) => {
  return (
    <section className="profile-section">
      <h2 className="text-xl font-semibold mb-4">Professional Details</h2>
      
      <div className="space-y-4">
        {data.jobTitle && (
          <div>
            <h3 className="text-sm text-gray-500">Current Position</h3>
            <p className="font-medium">{data.jobTitle}</p>
          </div>
        )}

        {data.bio && (
          <div>
            <h3 className="text-sm text-gray-500">Professional Summary</h3>
            <p className="text-gray-700 mt-1">{data.bio}</p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4">
          {data.yearsAtCompany && (
            <div>
              <h3 className="text-sm text-gray-500">Company Tenure</h3>
              <p className="font-medium">{data.yearsAtCompany} years</p>
            </div>
          )}
          {data.yearsInDept && (
            <div>
              <h3 className="text-sm text-gray-500">Department Tenure</h3>
              <p className="font-medium">{data.yearsInDept} years</p>
            </div>
          )}
          {data.yearsInRole && (
            <div>
              <h3 className="text-sm text-gray-500">Role Tenure</h3>
              <p className="font-medium">{data.yearsInRole} years</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}; 