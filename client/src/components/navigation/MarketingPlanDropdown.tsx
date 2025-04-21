import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MarketingPlanDropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'section' | 'page'>('section');
  const navigate = useNavigate();

  const sections = [
    { id: 'executive-summary', title: 'Executive Summary', path: '/executive-summary' },
    { id: 'mission-statement', title: 'Mission Statement', path: '/mission-statement' },
    { id: 'marketing-objectives', title: 'Marketing Objectives', path: '/marketing-objectives' },
    { id: 'key-performance', title: 'Key Performance Areas', path: '/key-performance' },
    { id: 'swot-analysis', title: 'SWOT Analysis', path: '/swot-analysis' },
    { id: 'market-research', title: 'Market Research', path: '/market-research' },
    { id: 'marketing-strategy', title: 'Marketing Strategy', path: '/marketing-strategy' },
    { id: 'challenges-solutions', title: 'Challenges & Solutions', path: '/challenges-solutions' },
    { id: 'execution', title: 'Execution', path: '/execution' },
    { id: 'budget', title: 'Budget', path: '/budget' },
    { id: 'conclusion', title: 'Conclusion', path: '/conclusion' },
    { id: 'feedback', title: 'Feedback', path: '/feedback' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add padding to account for any fixed headers
      const padding = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight / 2) + (element.clientHeight / 2);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleItemClick = (section: typeof sections[0]) => {
    if (mode === 'section') {
      scrollToSection(section.id);
    } else {
      navigateToPage(section.path);
    }
  };

  return (
    <div className="fixed bottom-3 right-3 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-white bg-opacity-80 shadow-lg 
                   hover:bg-wawa-yellow-400 transition-all duration-200 group"
        aria-label="Jump to section"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-wawa-gray-600 group-hover:text-wawa-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute bottom-full right-0 mb-2 w-56 rounded-xl bg-white bg-opacity-90 
                        shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-sm">
            {/* Toggle Switch */}
            <div className="px-4 py-3 border-b border-wawa-gray-200">
              <div className="flex items-center justify-center bg-wawa-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setMode('section')}
                  className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                    mode === 'section'
                      ? 'bg-white text-wawa-red-600 shadow-sm'
                      : 'text-wawa-gray-600 hover:text-wawa-gray-800'
                  }`}
                >
                  Sections
                </button>
                <button
                  onClick={() => setMode('page')}
                  className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                    mode === 'page'
                      ? 'bg-white text-wawa-red-600 shadow-sm'
                      : 'text-wawa-gray-600 hover:text-wawa-gray-800'
                  }`}
                >
                  Pages
                </button>
              </div>
            </div>
            
            <div className="py-1 max-h-[calc(100vh-10rem)] overflow-y-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleItemClick(section)}
                  className="block w-full text-left px-4 py-2 text-sm text-wawa-gray-700 bg-white
                           hover:bg-wawa-yellow-400 hover:text-wawa-red-600 transition-all duration-200"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MarketingPlanDropdown; 