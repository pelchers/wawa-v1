import { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { getScaledStyles } from '../../utils/featureConfig';

interface ScaleWrapperProps {
  children: ReactNode;
}

const ScaleWrapper: FC<ScaleWrapperProps> = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      style={{
        ...getScaledStyles(screenWidth),
        minHeight: '100%',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default ScaleWrapper; 