import { FC } from 'react';
import { Link } from 'react-router-dom';

interface SectionPageProps {
  title: string;
  children: React.ReactNode;
  nextSection?: {
    title: string;
    path: string;
  };
  prevSection?: {
    title: string;
    path: string;
  };
}

const SectionPage: FC<SectionPageProps> = ({ 
  title, 
  children, 
  nextSection, 
  prevSection 
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="w-full bg-wawa-red-600 text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
          <div className="text-center">
            <h1 className="font-wawaHeading text-4xl md:text-5xl font-bold mb-6">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {children}
        </div>

        {/* Navigation Links */}
        <div className="mt-12 flex justify-between">
          {prevSection ? (
            <Link 
              to={prevSection.path}
              className="flex items-center text-wawa-gray-600 hover:text-wawa-red-600 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              {prevSection.title}
            </Link>
          ) : (
            <div></div>
          )}

          <Link 
            to="/home"
            className="text-wawa-gray-600 hover:text-wawa-red-600 transition-colors"
          >
            Back to Marketing Plan
          </Link>

          {nextSection ? (
            <Link 
              to={nextSection.path}
              className="flex items-center text-wawa-gray-600 hover:text-wawa-red-600 transition-colors"
            >
              {nextSection.title}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionPage; 