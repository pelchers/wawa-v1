import React, { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MarketingPlanDropdown from '../navigation/MarketingPlanDropdown';
import BackButton from '../navigation/BackButton';
import SettingsMenu from '../navigation/SettingsMenu';
import ScaleWrapper from './ScaleWrapper';
import TestPanel from '../test/TestPanel';
import { isFeatureEnabled } from '../../utils/featureToggles';
import { getComputedScale } from '../../utils/featureConfig';
import { useState, useEffect } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Navigation elements - outside ScaleWrapper */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <RouterLink to="/home">
          <div className="w-24 h-12 bg-wawa-red-600 rounded-b-full flex items-center justify-center pb-2 shadow-lg hover:bg-wawa-red-700 transition-colors">
            <span className="text-white font-wawaHeading font-bold text-xl translate-y-[-2px]">WAWA</span>
          </div>
        </RouterLink>
      </div>
      
      <BackButton />
      <SettingsMenu />
      
      {/* Quick Access Menu Button */}
      <div className="fixed bottom-3 left-3 z-50">
        <button 
          className="w-12 h-12 bg-wawa-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-wawa-red-700 transition-colors group"
          aria-label="Open Quick Access Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white transform transition-transform group-hover:translate-y-[-2px]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>

      {/* Content area - inside ScaleWrapper */}
      <div className="min-h-screen bg-wawa-gray-50 relative">
        <div 
          className="pt-12" 
          style={{ 
            height: `${100 / getComputedScale(screenWidth)}vh`,
            minHeight: '100vh'
          }}
        >
          <ScaleWrapper>
            {children}
          </ScaleWrapper>
        </div>
        <MarketingPlanDropdown />
        
        {/* Conditionally render TestPanel */}
        {isFeatureEnabled('showTestPanel') && <TestPanel />}
      </div>
    </>
  );
};

export default MainLayout; 