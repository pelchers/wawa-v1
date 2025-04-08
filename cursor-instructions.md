# Instructions for Cursor AI

This document contains instructions for how Cursor AI should respond to specific types of requests, with examples of good responses.

## 1. When asked for inline code comments

**Instruction:** When the user asks for inline code comments, provide detailed explanations that:
- Explain what each section of code does
- Clarify non-obvious syntax or patterns
- Describe the purpose of parameters and return values
- Explain the "why" behind implementation choices
- Use consistent comment formatting
- Include explanations of JavaScript/TypeScript syntax that might confuse new developers
- Provide contextual explanations of operators (&&, ||, ??, ?., etc.) and expressions

**Example of good response:**

When asked to add inline comments to explain a logging utility:

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
export const logAction = async (action: string, data: any) => {
  // Log to browser console for immediate visibility during development
  console.log(`[ACTION] ${action}:`, data);
  
  // Send log to server for centralized logging
  // This allows you to see client actions in your server logs
  try {
    // The `${config.apiUrl}/log` syntax is using template literals (backticks) for string interpolation
    // The second parameter { action, data } uses object shorthand notation where { action } is the same as { action: action }
    // This is equivalent to axios.post(config.apiUrl + '/log', { action: action, data: data })
    // The await keyword pauses execution until the Promise returned by axios.post resolves
    // This is part of JavaScript's async/await pattern for handling asynchronous operations
    // Without await, the function would continue executing before the request completes
    // Uses the API URL from your config (which comes from environment variables)
    // The '/log' endpoint was defined in the server code above
    await axios.post(`${config.apiUrl}/log`, { action, data });
  } catch (error) {
    console.error('Failed to send log to server:', error);
  }
};
```

**Benefits of this approach:**
1. Makes code more accessible to developers at all experience levels
2. Clarifies the purpose and usage of functions and parameters
3. Explains implementation details that might not be obvious
4. Provides context for why certain approaches were chosen
5. Makes future maintenance easier by documenting design decisions
6. Helps new team members understand the codebase more quickly
7. Demystifies JavaScript/TypeScript syntax for developers who may be less familiar with the language
8. Clarifies how operators and expressions work in context, making code more approachable

## 2. When explaining complex systems or architectures

**Instruction:** When explaining complex systems, break down the explanation into clear components with examples for each part.

**Example of good response:** [Example would go here]

## 3. When providing step-by-step guides

**Instruction:** For tutorials or guides, number steps clearly, provide context for each step, and include verification steps.

**Example of good response:** [Example would go here]

## 4. When suggesting code improvements

**Instruction:** When suggesting improvements to existing code, explain the benefits of each change and potential trade-offs.

**Example of good response:** [Example would go here] 