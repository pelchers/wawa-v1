# Comprehensive Logging Guide for Monorepo Applications

This guide explains how to implement a robust logging system in your monorepo application, from simple console logs to a full-featured logging service that captures user interactions across your client and server.

## Table of Contents

- [Comprehensive Logging Guide for Monorepo Applications](#comprehensive-logging-guide-for-monorepo-applications)
  - [Table of Contents](#table-of-contents)
  - [1. Simple Direct Logging](#1-simple-direct-logging)
  - [2. Advanced Logging System](#2-advanced-logging-system)
    - [Setting Up the Server Endpoint](#setting-up-the-server-endpoint)
    - [Creating a Client Logger Utility](#creating-a-client-logger-utility)
    - [Integrating the Logger in Components](#integrating-the-logger-in-components)
  - [3. Best Practices](#3-best-practices)
    - [When to Log](#when-to-log)
    - [What to Log](#what-to-log)
    - [Structured Logging](#structured-logging)
  - [4. Extending the Logger](#4-extending-the-logger)
    - [Adding Log Levels](#adding-log-levels)
    - [Logging User Sessions](#logging-user-sessions)
    - [Logging Component Lifecycle Events](#logging-component-lifecycle-events)

## 1. Simple Direct Logging

The simplest approach is to add console logs directly in your component functions:

```tsx
// client/src/components/Counter.tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Simple console.log with relevant information about what's happening
    // This will appear in the browser console and in Turbo's output (if configured correctly)
    console.log('Incrementing count from', count, 'to', count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

This approach is quick and easy but has limitations:
- Logs only appear in the browser console
- No centralized logging
- No persistence of logs
- No way to track logs across client and server

## 2. Advanced Logging System

For a more comprehensive solution, we'll create a logging system that:
- Logs actions on the client
- Sends logs to the server
- Displays logs in the Turbo console

### Setting Up the Server Endpoint

First, add a logging endpoint to your Express server:

```typescript
// server/src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// ... other imports and setup

// Add this route to your existing routes
app.post("/api/log", (req, res) => {
  // Extract the 'action' and 'data' from the request body
  // 'action' is a string identifier for what happened (e.g., 'button_click', 'form_submit')
  // 'data' is an object containing relevant information about the action
  const { action, data } = req.body;
  
  // Log the action to the server console with a prefix for clarity
  // This will be visible in your Turbo terminal output
  console.log(`[CLIENT ACTION] ${action}:`, data);
  
  // Send a success response back to the client
  res.json({ success: true });
});

// ... rest of your server code
```

This endpoint receives log data from the client and outputs it to the server console, which will be visible in your Turbo logs.

### Creating a Client Logger Utility

Next, create a logger utility on the client side:

```typescript
// client/src/utils/logger.ts
import axios from 'axios';
import config from '../config';

/**
 * Logs an action to both the browser console and the server
 * 
 * @param action - A string identifier for the action (e.g., 'button_click', 'form_submit')
 *                 This should be descriptive and follow a consistent naming pattern
 * @param data - An object containing relevant information about the action
 *               This can include any data that would be helpful for debugging
 */
// The 'async' keyword declares that this function returns a Promise
// This allows us to use 'await' inside the function to handle asynchronous operations
// without blocking the main thread
export const logAction = async (action: string, data: any) => {
  // Log to browser console for immediate visibility during development
  console.log(`[ACTION] ${action}:`, data);
  
  // Send log to server for centralized logging
  // This allows you to see client actions in your server logs
  try {
    // axios.post returns a Promise that resolves when the HTTP request completes
    // The 'await' keyword pauses execution until that Promise resolves
    // This makes asynchronous code look more like synchronous code
    
    // The backtick syntax (`${config.apiUrl}/log`) is a template literal that allows variable interpolation
    // It's equivalent to config.apiUrl + '/log' but more readable
    
    // Uses the API URL from your config (which comes from environment variables)
    // Template literals (`${variable}`) allow embedding variables inside strings
    // This is a modern JavaScript feature that's more readable than string concatenation
    // The '/log' endpoint was defined in the server code above
    await axios.post(`${config.apiUrl}/log`, { action, data });
  } catch (error) {
    // The 'catch' block executes only if an error occurs during the try block
    // This is JavaScript's error handling mechanism
    console.error('Failed to send log to server:', error);
  }
};
```

This utility:
1. Logs the action to the browser console
2. Sends the log data to the server endpoint
3. Handles any errors that occur during the request

### Integrating the Logger in Components

Now you can use the logger in your components:

```tsx
// client/src/App.tsx
import { useState } from 'react';
import { logAction } from './utils/logger';
import config from './config';

function App() {
  const [count, setCount] = useState(0);

  const handleCountClick = () => {
    // Log the action with a descriptive name ('increment_count')
    // and relevant data (the current count and what it will be after incrementing)
    logAction('increment_count', { from: count, to: count + 1 });
    
    // The arrow function inside setCount ((count) => count + 1) creates a new function
    // This pattern ensures we're using the latest state value rather than a stale closure value
    // It's equivalent to setCount(count + 1) but safer in certain scenarios
    // Perform the actual state update
    setCount((count) => count + 1);
  };

  return (
    <>
      {/* ... other JSX */}
      <div className="card">
        <button onClick={handleCountClick}>
          count is {count}
        </button>
        {/* ... other JSX */}
      </div>
      <div>
        <p>API URL: {config.apiUrl}</p>
        <p>Environment: {config.isProduction ? 'Production' : 'Development'}</p>
      </div>
    </>
  );
}

export default App;
```

With this implementation:
1. When a user clicks the button, the `handleCountClick` function is called
2. The function logs the action using our `logAction` utility
3. The log appears in the browser console
4. The log is sent to the server
5. The server logs the action to its console
6. Turbo displays both client and server logs in your terminal

## 3. Best Practices

### When to Log

Log important user interactions and application state changes:

- **User Actions**: Button clicks, form submissions, navigation
- **State Changes**: Data updates, authentication status changes
- **API Calls**: Before and after API requests
- **Errors**: Caught exceptions, failed requests

### What to Log

Include relevant context in your logs:

```typescript
// Good logging - includes context
// The 'action' parameter is a descriptive string that identifies what happened
// The 'data' parameter is an object with all relevant information
logAction('submit_form', { 
  formId: 'registration',  // Which form was submitted
  email: user.email,       // Important form data
  hasAcceptedTerms: true,  // Status information
  timestamp: new Date().toISOString()  // When it happened
});

// Bad logging - lacks context
// This doesn't provide enough information to understand what happened
logAction('click', { button: 'submit' });  // Too vague
```

### Structured Logging

Use consistent action names and data structures:

```typescript
// Action naming convention: noun_verb
// This pattern makes it easy to filter and search logs
logAction('user_login', { userId, method: 'email' });
// The object passed as the second parameter uses shorthand property notation
// The comma operator (,) separates properties in the object literal
// Each property can be a simple value or a more complex expression
// The colon (:) separates property names from their values when not using shorthand
// { userId } is equivalent to { userId: userId } when the variable name matches the property name
logAction('cart_add', { productId, quantity, price });
logAction('payment_complete', { orderId, amount, method });

// The 'action' string is defined by you - it's not a special JavaScript syntax
// It's just a convention for identifying what happened in your application
// You can choose any naming scheme, but being consistent is important
```

## 4. Extending the Logger

### Adding Log Levels

Enhance the logger with different severity levels:

```typescript
// client/src/utils/logger.ts
// Define the possible log levels
// TypeScript's type system allows us to define a union type
// This restricts the 'level' parameter to only these four specific string values
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/**
 * Enhanced logger with support for different severity levels
 * 
 * @param level - The severity level of the log ('debug', 'info', 'warn', 'error')
 * @param action - A string identifier for the action
 * @param data - An object containing relevant information
 */
export const log = async (level: LogLevel, action: string, data: any) => {
  // Use the appropriate console method based on the level
  // console.debug, console.info, console.warn, or console.error
  // This uses bracket notation to dynamically access a method on the console object
  // For example, if level is 'info', this calls console.info()
  // This is more concise than using if/else statements for each level
  console[level](`[${level.toUpperCase()}] ${action}:`, data);
  
  // The .toUpperCase() method converts a string to all uppercase letters
  // This is a built-in JavaScript string method
  // For example, 'info'.toUpperCase() returns 'INFO'
  
  try {
    // Send to server with the level included
    await axios.post(`${config.apiUrl}/log`, { level, action, data });
  } catch (error) {
    console.error('Failed to send log to server:', error);
  }
};

// These helper functions make the logger easier to use
// They call the main log function with a specific level
// Convenience methods for different log levels
export const logDebug = (action: string, data: any) => log('debug', action, data);
export const logInfo = (action: string, data: any) => log('info', action, data);
export const logWarn = (action: string, data: any) => log('warn', action, data);
export const logError = (action: string, data: any) => log('error', action, data);

// For backward compatibility with the original logAction function
export const logAction = (action: string, data: any) => logInfo(action, data);
```

### Logging User Sessions

Track user sessions by enhancing the logger:

```typitten
// client/src/utils/logger.ts
import { v4 as uuidv4 } from 'uuid';

// Generate a session ID when the app loads
// This code runs once when the module is imported
// This will be the same for all logs during this browser session
const sessionId = uuidv4();

export const logAction = async (action: string, data: any) => {
  // Enhance the data with additional context
  // The spread operator (...data) copies all properties from the original data object
  // Then we add additional properties to create an enhanced object
  // This is a non-destructive way to add properties to an object
  // The curly braces {} create an object literal
  const enhancedData = {
    // The spread operator copies all properties from data
    // If data = { name: 'John', age: 30 }, then ...data expands to name: 'John', age: 30
    ...data,                          // Original data
    // The following are additional properties we're adding to the object
    // The comma operator (,) separates each property
    sessionId,                        // Unique ID for this browser session
    timestamp: new Date().toISOString(), // When the action occurred
    url: window.location.href,        // Which page the user was on
  };
  
  console.log(`[ACTION] ${action}:`, enhancedData);
  
  try {
    // Here we're passing an object with two properties: action and data
    // The data property is set to our enhanced data object
    // Send the enhanced data to the server
    await axios.post(`${config.apiUrl}/log`, { action, data: enhancedData });
  } catch (error) {
    console.error('Failed to send log to server:', error);
  }
};
```

### Logging Component Lifecycle Events

Create a hook for logging component lifecycle:

```typescript
// client/src/hooks/useLogger.ts
import { useEffect } from 'react';
import { logAction } from '../utils/logger';

/**
 * A React hook that logs component lifecycle events
 * 
 * @param componentName - The name of the component (used in the action name)
 * @param props - The component props (included in the log data)
 * @returns An object with a logEvent function for logging component-specific events
 */
export const useLogger = (componentName: string, props: any = {}) => {
  // useEffect is a React Hook that runs side effects in function components
  // It's similar to lifecycle methods in class components
  // The function inside useEffect runs after the component renders
  useEffect(() => {
    // Log when the component mounts
    logAction('component_mount', { component: componentName, props });
    
    // Return a cleanup function that logs when the component unmounts
    return () => {
      logAction('component_unmount', { component: componentName });
      // This function runs when the component is removed from the DOM
      // It's equivalent to componentWillUnmount in class components
    };
    // The dependency array [componentName] means this effect only runs when componentName changes
    // The square brackets [] create an array literal
    // An empty array [] would mean "run only once when the component mounts"
    // Omitting the array entirely would mean "run after every render"
  }, [componentName]); // Re-run if the component name changes
  
  // Return a function for logging events specific to this component
  // This prefixes the action with the component name for better organization
  return {
    logEvent: (action: string, data: any) => 
      logAction(`${componentName}_${action}`, data)
    // This is returning an object with a single method called logEvent
    // The method is defined as an arrow function that calls logAction with a modified action name
    // The template literal combines the component name with the action using an underscore
  };
};

// Usage in a component
function UserProfile({ userId }) {
  // Initialize the logger with the component name
  const { logEvent } = useLogger('UserProfile', { userId });
  
  // This uses object destructuring to extract the logEvent function from the object returned by useLogger
  // It's equivalent to: const loggerObject = useLogger('UserProfile', { userId }); const logEvent = loggerObject.logEvent;
  const handleSaveProfile = (data) => {
    // Log a component-specific event
    // The action will be 'UserProfile_save_profile'
    logEvent('save_profile', { data });
    // Save profile logic
  };
  
  // ...
}
```

By implementing this comprehensive logging system, you'll have complete visibility into your application's behavior, making debugging and monitoring much easier. 