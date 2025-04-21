import { FC } from 'react';

interface SectionFeedbackProps {
  sectionId: string;
  sectionTitle: string;
  onFeedbackSubmit: () => void;
}

const SectionFeedback: FC<SectionFeedbackProps> = ({
  sectionTitle
}) => {
  return (
    <div className="bg-white rounded-xl p-6">
      <h4 className="font-wawaHeading text-lg font-semibold mb-2">{sectionTitle}</h4>
      <p className="text-wawa-gray-600 italic">
        Section feedback functionality will be implemented with PostgreSQL/Prisma integration
      </p>
    </div>
  );
};

export default SectionFeedback; 