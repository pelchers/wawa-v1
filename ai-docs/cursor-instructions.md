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

## 2. When asked for plain English explanations of code

**Instruction:** When the user asks for a "plain English explainer" for code segments, provide a simple, jargon-free explanation directly below each code block with the heading "In plain English:". The explanation should:
- Use everyday language that non-programmers can understand
- Explain what the code does, not just how it works
- Relate the code to real-world concepts when possible
- Avoid technical jargon unless absolutely necessary (and explain it when used)
- Focus on the purpose and outcome of the code, not just the syntax

**Example of good response:**

When asked to explain this code segment:

```typescript
function App() {
  const [count, setCount] = useState(0)

  const handleCountClick = () => {
    logAction('increment_count', { from: count, to: count + 1 })
    setCount((count) => count + 1)
  }
```

**In plain English:**
This code creates a counter that keeps track of a number (starting at 0) and increases it when something is clicked. When the click happens, two things occur:
1. The app records this action in a log, noting what the count was before and what it will be after
2. The count is increased by 1

It's like a tally counter that not only counts but also keeps a record of each time you pressed the button and what the count was before and after.

**Benefits of this approach:**
1. Makes code accessible to stakeholders with limited technical knowledge
2. Helps new developers understand the purpose of code, not just the mechanics
3. Bridges the gap between technical implementation and business requirements
4. Provides context that might not be obvious from the code alone
5. Helps identify when code is overly complex (if it's hard to explain simply)
6. Serves as a form of documentation that's easier to understand than technical comments

## 3. When explaining complex systems or architectures

**Instruction:** When explaining complex systems, break down the explanation into clear components with examples for each part.

**Example of good response:** [Example would go here]

## 4. When providing step-by-step guides

**Instruction:** For tutorials or guides, number steps clearly, provide context for each step, and include verification steps.

**Example of good response:** [Example would go here]

## 5. When suggesting code improvements

**Instruction:** When suggesting improvements to existing code, explain the benefits of each change and potential trade-offs.

**Example of good response:** [Example would go here] 