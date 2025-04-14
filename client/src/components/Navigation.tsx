import React, { useState } from 'react';
import { wawaTheme } from '../styles/wawa-theme';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'executive-summary', name: 'Executive Summary' },
    { id: 'mission-statement', name: 'Mission Statement' },
    { id: 'marketing-objectives', name: 'Marketing Objectives' },
    { id: 'swot-analysis', name: 'SWOT Analysis' },
    { id: 'market-research', name: 'Market Research' },
    { id: 'marketing-strategy', name: 'Marketing Strategy' },
    { id: 'execution-plan', name: 'Execution Plan' },
    { id: 'budget', name: 'Budget' },
    { id: 'conclusion', name: 'Conclusion' },
    { id: 'feedback', name: 'Feedback' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-wawa-red-600 hover:bg-wawa-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        aria-label="Navigation menu"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute top-14 right-0 bg-white rounded-lg shadow-xl border border-wawa-black-100 w-64 py-2 mt-2">
          <div className="py-2 px-4 bg-wawa-red-600 text-white font-wawa-heading font-bold rounded-t-lg">
            Sections
          </div>
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="w-full text-left px-4 py-2 hover:bg-wawa-red-50 text-wawa-black-700 hover:text-wawa-red-600 transition-colors"
                >
                  {section.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation; 