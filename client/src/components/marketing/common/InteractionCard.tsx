import React from 'react';
import { InteractionWithContext, BaseInteraction } from '../../../types/marketing/marketing-interactions';

interface InteractionCardProps {
  userContext: InteractionWithContext<BaseInteraction>['userContext'];
  timestamp: string;
  children: React.ReactNode;
  className?: string;
}

export const InteractionCard: React.FC<InteractionCardProps> = ({
  userContext,
  timestamp,
  children,
  className = ''
}) => {
  // Format timestamp with fallback
  const formattedDate = (() => {
    try {
      return new Date(timestamp).toLocaleDateString();
    } catch (error) {
      console.error('Invalid timestamp:', timestamp);
      return 'Invalid date';
    }
  })();

  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 mb-4 ${className}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="user-info">
          <h4 className="font-semibold text-gray-900">{userContext?.fullName || 'Unknown User'}</h4>
          <div className="text-sm text-gray-600 flex flex-wrap gap-2">
            {userContext?.role && (
              <span className="bg-blue-50 px-2 py-1 rounded-full">
                {userContext.role}
              </span>
            )}
            {userContext?.department && (
              <span className="bg-gray-50 px-2 py-1 rounded-full">
                {userContext.department}
              </span>
            )}
            {userContext?.yearsAtCompany && userContext.yearsAtCompany > 0 && (
              <span className="text-gray-500">
                {userContext.yearsAtCompany} years at {userContext.companyName || 'company'}
              </span>
            )}
          </div>
        </div>
        <time className="text-sm text-gray-500">
          {formattedDate}
        </time>
      </div>
      <div className="interaction-content">{children}</div>
    </div>
  );
}; 