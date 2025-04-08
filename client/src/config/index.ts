/**
 * Application configuration
 * Values are determined based on the environment
 */
const config = {
  // API URL for backend requests
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:4100/api',
  
  // Environment flag
  isProduction: import.meta.env.MODE === 'production',
  
  // Feature flags
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableNotifications: import.meta.env.VITE_ENABLE_NOTIFICATIONS === 'true'
  },
  
  // Authentication settings
  auth: {
    tokenStorageKey: 'authToken',
    userIdStorageKey: 'userId',
    tokenExpiry: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
  }
};

export default config; 