import { FC } from 'react';

interface ApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemId: string;
  itemType: string;
  planType: string;
  onSuccess: () => void;
}

const ApprovalModal: FC<ApprovalModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <h3 className="text-xl font-wawaHeading font-bold mb-4">
          Approve Marketing Plan
        </h3>
        <p className="mb-6">
          Approval functionality will be implemented with PostgreSQL/Prisma integration
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-wawa-gray-100 text-wawa-gray-700 hover:bg-wawa-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSuccess();
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-wawa-green-600 text-white hover:bg-wawa-green-700"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalModal; 