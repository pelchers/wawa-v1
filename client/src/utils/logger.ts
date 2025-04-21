import axios from 'axios';
import config from '../config';
import { v4 as uuidv4 } from 'uuid';

// Generate a session ID when the app loads
// This creates a unique identifier for this browser session that will be included with all logs
// uuidv4() generates a random UUID like "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
const sessionId = uuidv4();

// Define the possible log severity levels as a TypeScript union type
// This restricts the level parameter to only these four specific string values
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/**
 * Base logging function with support for different severity levels
 * This is the core function that all other logging functions use internally
 * 
 * @param level - The severity level of the log ('debug', 'info', 'warn', 'error')
 * @param category - The category of the log (e.g., 'auth', 'api', 'ui')
 * @param action - A string identifier for the action (what happened)
 * @param data - An object containing relevant information (defaults to empty object)
 * 
 * NOTE ON PARAMETER FLEXIBILITY:
 * - Specialized logging functions can use any subset of these parameters
 * - They can also add their own custom parameters that make sense for specific contexts
 * - For example, logLogin() adds parameters like 'success' and 'method' that aren't in the base function
 * - These custom parameters are typically packaged into the 'data' object when passed to this base function
 * - This flexibility allows for creating intuitive, context-specific logging functions
 * - The server always receives a consistent structure regardless of which specialized function was used
 */
export const log = async (level: LogLevel, category: string, action: string, data: any = {}) => {
  // Parameter explanation:
  // When this function is called like log('info', 'auth', 'login', { userId: '123' }),
  // - 'level' will be 'info'
  // - 'category' will be 'auth'
  // - 'action' will be 'login'
  // - 'data' will be { userId: '123' }
  // The parameter names in the function definition (level, category, action, data)
  // determine how you access these values inside the function.
  
  // Enhance the data with additional context that's useful for debugging
  // The spread operator (...data) copies all properties from the original data object
  const enhancedData = {
    ...data,                          // Original data passed to the function
    sessionId,                        // Unique ID for this browser session
    timestamp: new Date().toISOString(), // ISO timestamp like "2023-04-26T16:42:13.351Z"
    url: window.location.href,        // Current page URL
    userAgent: navigator.userAgent,   // Browser information
  };
  
  // Format the log message with category and action for better readability
  // Example: "[AUTH] login_attempt" or "[API] GET_users"
  const message = `[${category.toUpperCase()}] ${action}`;
  
  // Log to browser console with the appropriate severity level
  // This uses bracket notation to dynamically access the right console method
  // For example, if level is 'info', this calls console.info()
  console[level](message, enhancedData);
  
  // Send the log to the server for centralized logging
  try {
    // Make a POST request to the log endpoint with all the information
    // This allows you to see client-side logs in your server logs
    
    // When we create this object { level, category, action, data: enhancedData },
    // it's equivalent to:
    // {
    //   level: level,
    //   category: category,
    //   action: action,
    //   data: enhancedData
    // }
    // This is using JavaScript's object property shorthand syntax
    
    // The server will receive this object as the request body
    // The server's route handler will access these same properties by name:
    // app.post("/api/log", (req, res) => {
    //   const { level, category, action, data } = req.body;
    //   // Now the server has the same values we sent
    // });
    await axios.post(`${config.apiUrl}/log`, { 
      level,      // Severity level
      category,   // Log category
      action,     // What happened
      data: enhancedData  // All the contextual data
    });
  } catch (error) {
    // If the log request fails, log the error to the console
    // We don't want logging failures to break the application
    console.error('Failed to send log to server:', error);
  }
};

// ===== GENERAL PURPOSE LOGGING =====
// These are the most commonly used logging functions

/**
 * Log a general user action (clicks, form submissions, etc.)
 * This is the most commonly used logging function for tracking user interactions
 * 
 * @param action - What the user did (e.g., 'button_click', 'menu_open')
 * @param data - Additional information about the action
 */
export const logAction = (action: string, data: any = {}) => 
  log('info', 'action', action, data);

/**
 * Log an error that occurred in the application
 * This extracts useful information from the error object
 * 
 * @param action - What was happening when the error occurred
 * @param error - The error object that was thrown
 * @param context - Additional context about what was happening
 */
export const logError = (action: string, error: any, context: any = {}) => {
  // Extract useful properties from the error object
  // The ?. is the optional chaining operator that safely accesses properties that might be undefined
  const errorData = {
    ...context,                         // Additional context
    message: error?.message || 'Unknown error', // Error message
    stack: error?.stack,                // Stack trace
    code: error?.code,                  // Error code if available
  };
  return log('error', 'error', action, errorData);
};

/**
 * Log debug information during development
 * These logs are useful for debugging but might be too verbose for production
 * 
 * @param action - What's being debugged
 * @param data - Debug information
 */
export const logDebug = (action: string, data: any = {}) => 
  log('debug', 'debug', action, data);

// ===== AUTHENTICATION LOGGING =====
// Specialized functions for tracking user authentication

/**
 * Log authentication-related events
 * 
 * @param action - The auth action (e.g., 'login', 'signup', 'password_reset')
 * @param data - Information about the auth action
 */
export const logAuth = (action: string, data: any = {}) => 
  log('info', 'auth', action, data);

/**
 * Log a user login attempt
 * This tracks both successful and failed login attempts
 * 
 * @param success - Whether the login was successful
 * @param method - The login method used (e.g., 'email', 'google', 'facebook')
 * @param userId - The user's ID (if available)
 * @param error - Error message if login failed
 */
export const logLogin = (success: boolean, method: string, userId?: string, error?: string) => {
  // Parameter explanation:
  // When this function is called like logLogin(true, 'email', '123'),
  // - 'success' will be true
  // - 'method' will be 'email'
  // - 'userId' will be '123'
  // - 'error' will be undefined (since it wasn't provided)
  // The '?' in the parameter type (userId?: string) means it's optional
  
  // Use 'info' level for successful logins and 'warn' for failed logins
  // This makes it easier to filter for login problems
  // The ternary operator (condition ? valueIfTrue : valueIfFalse) chooses between two values
  const level = success ? 'info' : 'warn';
  
  // When we call the log function, we're passing 4 arguments:
  // 1. level: Either 'info' or 'warn' depending on success
  // 2. category: The string 'auth'
  // 3. action: The string 'login_attempt'
  // 4. data: An object with properties success, method, userId, and error
  //
  // Inside the log function, these will be accessed using the parameter names
  // defined in that function: level, category, action, and data
  return log(level, 'auth', 'login_attempt', {
    success,  // Whether login succeeded (shorthand for success: success)
    method,   // How they tried to log in (shorthand for method: method)
    userId,   // Who they are (if known) (shorthand for userId: userId)
    error     // What went wrong (if anything) (shorthand for error: error)
  });
  
  // This is equivalent to:
  // return log(
  //   success ? 'info' : 'warn',
  //   'auth',
  //   'login_attempt',
  //   {
  //     success: success,
  //     method: method,
  //     userId: userId,
  //     error: error
  //   }
  // );
};

/**
 * Log a user logout
 * 
 * @param userId - The ID of the user who logged out
 * @param reason - Why they logged out (e.g., 'user_initiated', 'session_expired')
 */
export const logLogout = (userId: string, reason?: string) => 
  log('info', 'auth', 'logout', { userId, reason });

// ===== API LOGGING =====
// Functions for tracking API requests and responses

/**
 * Log API requests
 * This is useful for tracking API performance and errors
 * 
 * @param endpoint - The API endpoint that was called (e.g., '/users')
 * @param method - The HTTP method used (e.g., 'GET', 'POST')
 * @param status - The HTTP status code returned
 * @param duration - How long the request took in milliseconds
 * @param data - Additional information about the request and response
 */
export const logApi = (endpoint: string, method: string, status: number, duration: number, data?: any) => 
  // Use 'warn' level for 4xx and 5xx status codes, 'info' for successful requests
  // This makes it easier to spot API problems
  log(status >= 400 ? 'warn' : 'info', 'api', `${method}_${endpoint}`, {
    status,    // HTTP status code
    duration,  // Request duration in ms
    ...data    // Additional data
  });

/**
 * Log the start of an API request and return a function to log its completion
 * This makes it easy to track the duration of API requests
 * 
 * @param endpoint - The API endpoint being called
 * @param method - The HTTP method being used
 * @param requestData - The data being sent (if any)
 * @returns A function to call when the request completes
 */
export const logApiStart = (endpoint: string, method: string, requestData?: any) => {
  // Parameter explanation:
  // When this function is called like logApiStart('/users', 'GET', { filter: 'active' }),
  // - 'endpoint' will be '/users'
  // - 'method' will be 'GET'
  // - 'requestData' will be { filter: 'active' }
  
  // Record the start time using the high-resolution performance timer
  const startTime = performance.now();
  // Log that the request is starting
  log('debug', 'api', `${method}_${endpoint}_start`, { requestData });
  
  // Return a function to call when the request completes
  // This creates a closure that "remembers" the startTime and other parameters
  // A closure is a function that has access to variables from its outer function
  // even after the outer function has finished executing
  return (status: number, responseData?: any) => {
    // When this returned function is called like endLog(200, { users: [...] }),
    // - 'status' will be 200
    // - 'responseData' will be { users: [...] }
    
    // Calculate how long the request took
    // This can access startTime, endpoint, and method from the outer function
    // even though that function has already returned
    const duration = performance.now() - startTime;
    
    // Log the completed request with its duration and result
    // This calls the logApi function with:
    // 1. endpoint: The same endpoint passed to logApiStart
    // 2. method: The same method passed to logApiStart
    // 3. status: The status code passed to this inner function
    // 4. duration: The calculated duration
    // 5. An object containing both the request and response data
    logApi(endpoint, method, status, duration, { requestData, responseData });
  };
  
  // Usage example:
  // const endLog = logApiStart('/users', 'GET');
  // ... make the API request ...
  // endLog(200, { users: [...] });
};

// ===== PERFORMANCE LOGGING =====
// Functions for tracking performance metrics

/**
 * Log performance metrics
 * 
 * @param action - What operation was timed
 * @param duration - How long it took in milliseconds
 * @param metadata - Additional information about the operation
 */
export const logPerformance = (action: string, duration: number, metadata?: any) => 
  log('info', 'performance', action, { duration, ...metadata });

/**
 * Create a performance timer and return a function to stop and log it
 * This makes it easy to measure how long operations take
 * 
 * @param action - What operation is being timed
 * @param metadata - Additional information about the operation
 * @returns A function to call when the operation completes
 */
export const startPerformanceTimer = (action: string, metadata?: any) => {
  // Record the start time
  const startTime = performance.now();
  
  // Return a function to call when the operation completes
  // This creates a closure that "remembers" the startTime
  return () => {
    // Calculate how long the operation took
    const duration = performance.now() - startTime;
    // Log the performance metric
    logPerformance(action, duration, metadata);
    // Return the duration in case the caller wants to use it
    return duration;
  };
};

// ===== FEATURE USAGE LOGGING =====
// Functions for tracking which features users are using

/**
 * Log feature usage
 * This helps track which features are being used and how often
 * 
 * @param feature - The feature being used (e.g., 'chat', 'export', 'filter')
 * @param action - What the user did with the feature (e.g., 'open', 'use', 'close')
 * @param metadata - Additional information about the usage
 */
export const logFeatureUsage = (feature: string, action: string, metadata?: any) => 
  log('info', 'feature', `${feature}_${action}`, metadata);

// ===== STATE CHANGE LOGGING =====
// Functions for tracking changes to application state

/**
 * Log application state changes
 * This is useful for debugging state management issues
 * 
 * @param storeName - The name of the state store (e.g., 'userStore', 'cartStore')
 * @param action - What caused the state change (e.g., 'add_item', 'remove_item')
 * @param prevState - The state before the change
 * @param nextState - The state after the change
 */
export const logStateChange = (storeName: string, action: string, prevState: any, nextState: any) => 
  log('debug', 'state', `${storeName}_${action}`, {
    prev: prevState,     // State before the change
    next: nextState,     // State after the change
    changes: getStateChanges(prevState, nextState)  // Just the properties that changed
  });

/**
 * Helper function to compute what changed between two state objects
 * This makes it easier to see exactly what changed in complex state objects
 * 
 * @param prevState - The state before the change
 * @param nextState - The state after the change
 * @returns An object containing only the properties that changed
 */
const getStateChanges = (prevState: any, nextState: any) => {
  // Handle null or undefined states
  if (!prevState || !nextState) return {};
  
  // This will hold the changes we find
  // Record<string, { from: any, to: any }> is a TypeScript type that says
  // this is an object with string keys and values that have 'from' and 'to' properties
  const changes: Record<string, { from: any, to: any }> = {};
  
  // Find all keys in either object
  // The Set constructor with spread operator removes duplicates
  const allKeys = new Set([
    ...Object.keys(prevState),
    ...Object.keys(nextState)
  ]);
  
  // Check each key for changes
  allKeys.forEach(key => {
    // Only record keys where the value changed
    // This uses strict inequality (!==) to check if the values are different
    if (prevState[key] !== nextState[key]) {
      changes[key] = {
        from: prevState[key],  // Old value
        to: nextState[key]     // New value
      };
    }
  });
  
  return changes;
};

// ===== NAVIGATION LOGGING =====
// Functions for tracking page navigation

/**
 * Log navigation events
 * This helps track how users move through your application
 * 
 * @param from - The page they came from
 * @param to - The page they navigated to
 * @param params - Any route parameters or query parameters
 */
export const logNavigation = (from: string, to: string, params?: any) => 
  log('info', 'navigation', 'route_change', { from, to, params });

// ===== FORM LOGGING =====
// Functions for tracking form interactions

/**
 * Log form interactions
 * This helps track how users interact with forms
 * 
 * @param formId - Identifier for the form (e.g., 'login_form', 'signup_form')
 * @param action - What happened with the form (e.g., 'focus', 'blur', 'change')
 * @param data - Additional information about the interaction
 */
export const logForm = (formId: string, action: string, data?: any) => 
  log('info', 'form', `${formId}_${action}`, data);

/**
 * Log form submission
 * This tracks form submissions and whether they succeeded
 * 
 * @param formId - Identifier for the form
 * @param success - Whether the submission was successful
 * @param data - The form data that was submitted
 * @param errors - Any validation errors that occurred
 */
export const logFormSubmit = (formId: string, success: boolean, data?: any, errors?: any) => 
  log(success ? 'info' : 'warn', 'form', `${formId}_submit`, { 
    success,  // Whether submission succeeded
    // In production, we don't log the actual form data for privacy/security
    // In development, we include it to help with debugging
    data: config.isProduction ? 'REDACTED' : data, 
    errors    // Any validation errors
  });

export const logPageView = (page: string) => {
  console.log(`Page view: ${page}`);
  // Will implement actual logging later
}; 