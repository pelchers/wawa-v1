import React from 'react';
import { Comment, Question, Like, Approval, InteractionWithContext } from '../../../types/marketing-interactions';

interface InteractionStatsProps {
  comments?: InteractionWithContext<Comment>[];
  questions?: InteractionWithContext<Question>[];
  likes?: InteractionWithContext<Like>[];
  approvals?: InteractionWithContext<Approval>[];
  className?: string;
}

export const InteractionStats: React.FC<InteractionStatsProps> = ({
  comments = [],
  questions = [],
  likes = [],
  approvals = [],
  className = ''
}) => {
  const stats = [
    {
      label: 'Comments',
      count: comments.length,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      label: 'Questions',
      count: questions.length,
      answeredCount: questions.filter(q => q?.interaction?.answer).length,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      label: 'Likes',
      count: likes.length,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      label: 'Approvals',
      count: approvals.length,
      approved: approvals.filter(a => a.interaction.status === 'approved').length,
      rejected: approvals.filter(a => a.interaction.status === 'rejected').length,
      pending: approvals.filter(a => a.interaction.status === 'pending').length,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {stats.map(({ label, count, icon, answeredCount, approved, rejected, pending }) => (
        <div
          key={label}
          className="bg-white rounded-lg shadow-sm p-4 flex flex-col"
        >
          <div className="flex items-center mb-2">
            <div className="p-2 rounded-full bg-blue-50 text-blue-600 mr-3">
              {icon}
            </div>
            <h4 className="text-lg font-semibold text-gray-900">{label}</h4>
          </div>
          
          <div className="mt-2">
            <div className="text-2xl font-bold text-gray-900">{count}</div>
            {answeredCount !== undefined && (
              <div className="text-sm text-gray-500">
                {answeredCount} answered
              </div>
            )}
            {approved !== undefined && (
              <div className="text-sm space-y-1">
                <div className="text-green-600">{approved} approved</div>
                <div className="text-red-600">{rejected} rejected</div>
                <div className="text-yellow-600">{pending} pending</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}; 