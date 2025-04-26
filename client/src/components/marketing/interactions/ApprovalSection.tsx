import React, { useState } from 'react';
import { InteractionCard } from '../common/InteractionCard';
import { InteractionForm } from '../common/InteractionForm';
import { Approval, InteractionWithContext } from '../../../types/marketing-interactions';

interface ApprovalSectionProps {
  approvals: InteractionWithContext<Approval>[];
  onSubmitApproval: (status: 'approved' | 'rejected' | 'pending', comments?: string) => Promise<void>;
  isSubmitting?: boolean;
  className?: string;
  canApprove?: boolean;
}

export const ApprovalSection: React.FC<ApprovalSectionProps> = ({
  approvals,
  onSubmitApproval,
  isSubmitting = false,
  className = '',
  canApprove = false
}) => {
  const [showApprovalForm, setShowApprovalForm] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<'approved' | 'rejected' | 'pending'>('pending');

  const handleSubmit = async (comments: string) => {
    await onSubmitApproval(selectedStatus, comments);
    setShowApprovalForm(false);
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-2.5 py-0.5 rounded-full text-xs font-medium';
    switch (status) {
      case 'approved':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'rejected':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Approvals</h3>
        {canApprove && !showApprovalForm && (
          <button
            onClick={() => setShowApprovalForm(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Approval
          </button>
        )}
      </div>

      {showApprovalForm && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <div className="flex space-x-4">
              {(['approved', 'rejected', 'pending'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium capitalize
                    ${selectedStatus === status
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border hover:bg-gray-50'
                    }
                  `}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
          <InteractionForm
            onSubmit={handleSubmit}
            placeholder="Add comments about your approval decision..."
            buttonText="Submit Approval"
            isSubmitting={isSubmitting}
          />
        </div>
      )}

      <div className="space-y-4">
        {approvals.map((approval) => (
          <InteractionCard
            key={approval.interaction.id}
            userContext={approval.userContext}
            timestamp={approval.interaction.createdAt}
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className={getStatusBadge(approval.interaction.status)}>
                  {approval.interaction.status}
                </span>
                {approval.userContext.role && (
                  <span className="text-sm text-gray-500">
                    by {approval.userContext.role}
                  </span>
                )}
              </div>
              {approval.interaction.comments && (
                <p className="text-gray-700 mt-2">
                  {approval.interaction.comments}
                </p>
              )}
            </div>
          </InteractionCard>
        ))}

        {approvals.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No approvals submitted yet.
          </div>
        )}
      </div>
    </div>
  );
}; 