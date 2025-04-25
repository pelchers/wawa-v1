interface ScalingConfiguration {
  global: {
    enabled: boolean;
    scale: number;  // 1 = 100%, 0.5 = 50%, 1.5 = 150%
  };
  mobile: {
    enabled: boolean;
    scale: number;
    breakpoint: number;  // Mobile breakpoint in pixels
    scaleUpContent: boolean;  // Allow upscaling for better visibility
  };
}

export const scalingConfig: ScalingConfiguration = {
  global: {
    enabled: true,
    scale: .75,  // Default no scaling
  },
  mobile: {
    enabled: false,
    scale: 1,
    breakpoint: 768,  // Standard mobile breakpoint
    scaleUpContent: false,
  }
};

// Helper to get computed scale based on screen size and config
export const getComputedScale = (screenWidth: number): number => {
  const { global, mobile } = scalingConfig;
  
  // If global scaling is enabled, it takes precedence
  if (global.enabled) {
    return global.scale;
  }
  
  // If mobile scaling is enabled and we're below breakpoint
  if (mobile.enabled && screenWidth <= mobile.breakpoint) {
    return mobile.scale;
  }
  
  return 1; // Default no scaling
};

// Helper to apply scaling to a component
export const getScaledStyles = (screenWidth: number) => {
  const scale = getComputedScale(screenWidth);
  
  return {
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    width: `${100 / scale}%`,
    height: 'auto',
  };
}; 