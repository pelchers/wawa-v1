/**
 * Get authentication headers for API requests
 * Retrieves the auth token from localStorage and formats it for use in fetch requests
 */
export const getAuthHeaders = (): Record<string, string> => {
  const token = localStorage.getItem('authToken');
  
  if (!token) {
    return {};
  }
  
  return {
    'Authorization': `Bearer ${token}`
  };
};

/**
 * Check if the user is currently authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('authToken');
};

/**
 * Get the current user's ID from the JWT token
 * Note: In a real app, you might want to decode the JWT to get the user ID
 */
export const getCurrentUserId = (): string | null => {
  // This is a simplified version - in a real app, you'd decode the JWT
  return localStorage.getItem('userId');
}; 