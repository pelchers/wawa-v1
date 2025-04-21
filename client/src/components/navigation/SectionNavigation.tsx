import { FC } from 'react';

export interface Section {
  id: string;
  title: string;
}

interface SectionNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const SectionNavigation: FC<SectionNavigationProps> = ({
  sections,
  activeSection,
  onSectionChange
}) => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <ul className="flex overflow-x-auto space-x-4 py-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionChange(section.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-wawa-red-600 text-white'
                    : 'text-wawa-gray-600 hover:bg-wawa-red-50'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SectionNavigation; 