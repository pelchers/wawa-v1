interface FeatureToggles {
  showTestPanel: boolean;
  // Add more feature toggles here as needed
  // Example:
  // showQuickAccess: boolean;
  // showMarketingPlan: boolean;
}

export const featureToggles: FeatureToggles = {
  showTestPanel: true,  // Set to false to hide the test panel
  // showQuickAccess: true,
  // showMarketingPlan: true,
};

// Helper function to check if a feature is enabled
export const isFeatureEnabled = (featureName: keyof FeatureToggles): boolean => {
  return featureToggles[featureName];
}; 