import { FC } from 'react';

interface SectionApprovalListProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
  onApprovalChange: (approvals: any) => void;
}

const SectionApprovalList: FC<SectionApprovalListProps> = ({
  sections
}) => {
  return (
    <div className="bg-white rounded-xl p-6">
      <p className="text-wawa-gray-600 italic">
        Section approval functionality will be implemented with PostgreSQL/Prisma integration
      </p>
    </div>
  );
};

export default SectionApprovalList; 