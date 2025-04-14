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

## 3. Project Development Guide

**Instruction:** Follow this outline/guide for developing our project.

Great! Based on your goal for a **simple, single-page vertical-scroll marketing site** (with minimal horizontal scroll sections) that fully reflects the **marketing plan structure**, and uses **campaign-specific Tailwind base styles** (e.g., Wawa branding), here's a complete setup plan and structure:

---

## ✅ Simple Static Marketing Page Plan  
### 🧱 Project Tech Stack
- **Frontend:** Vite + React + TypeScript + TailwindCSS + ShadCN UI
- **Backend:** ❌ *None needed* (Content is static per campaign)
- **Optional:** Local JSON file for stats, features, or timeline data
- **Brand Style Example:** Wawa (red, yellow, warm, friendly fonts)

---

## 🧩 1. Folder Structure (Static, Per Campaign)
```txt
src/
├── App.tsx
├── index.tsx
├── assets/
│   └── wawa-hero.jpg
├── campaigns/
│   └── wawa-2025/
│       └── index.tsx  <-- This is the page file you’ll edit per campaign
├── components/
│   ├── Hero.tsx
│   ├── MissionSection.tsx
│   ├── MetricsSlider.tsx
│   ├── TimelineScroller.tsx
│   └── ...
├── styles/
│   └── brand.ts         <-- Tailwind theme extension
└── data/
    └── wawa.json        <-- optional stats, SWOTs, etc.
```

---

## 📋 2. Section Outline (1:1 match with Marketing Plan)

Here’s how you’ll break the single page down:

### 🪪 Executive Summary
- Section: `<Hero />` with `About Company`, `Mission`, `Vision`, `Objective`

### 🎯 Mission Statement
- Section: `<MissionSection />`

### 🎯 Marketing Objectives
- Section: `<ObjectivesSection />` (Problem, Solutions)

### 📊 SWOT Analysis
- Section: `<SwotSection />`

### 📈 Market Research
- Section: `<MarketResearchSection />` (Competitors, Stats, Issues)

### 🧠 Strategy
- Section: `<StrategySection />` (Goals, Channels, Budget, Timeline, Requirements)

### 🛠️ Execution Plan
- Section: `<ExecutionSection />` (Steps, Team, Resources)

### 💰 Budget
- Section: `<BudgetSection />` (Campaign & Service Costs)

### ✅ Conclusion
- Section: `<ConclusionSection />` (Review + CTA)

---

## 🖼️ 3. Optional Horizontal Scroll Sections
You can carefully inject horizontal scrolls inside vertical flow using:
```tsx
<div className="overflow-x-auto whitespace-nowrap scroll-smooth snap-x flex space-x-4 p-4">
  {images.map(img => (
    <img src={img.src} alt="" className="w-[300px] inline-block snap-center rounded-lg shadow" />
  ))}
</div>
```

Use for:
- Timeline cards
- Metrics bar
- Image showcase (e.g. product visuals or customer interactions)

---

## 🎨 4. Tailwind Base Style per Campaign (e.g., Wawa)
In `styles/brand.ts`, define reusable brand classes:
```ts
export const wawaTheme = {
  primary: "bg-red-600 text-white",
  accent: "bg-yellow-400 text-red-900",
  section: "bg-white text-red-900",
  button: "bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold py-2 px-4 rounded",
}
```

Then use in sections like:
```tsx
<section className={`${wawaTheme.primary} p-8`}>
  <h1 className="text-4xl font-bold">Wawa's Vision 2025</h1>
</section>
```

---

## 🛠️ 5. To Get Started Right Now:
1. Scaffold Vite + React + Tailwind:
```bash
npm create vite@latest my-wawa-campaign --template react-ts
cd my-wawa-campaign
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Add Tailwind config:
```js
// tailwind.config.js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

3. Add base styles to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Create `campaigns/wawa-2025/index.tsx` and start building with:
```tsx
import React from 'react';
import { wawaTheme } from '../../styles/brand';

const Wawa2025 = () => {
  return (
    <div className="flex flex-col">
      <section className={`${wawaTheme.primary} p-8`}>
        <h1 className="text-4xl font-bold">Wawa’s 2025 Growth Campaign</h1>
        <p>Fueling communities. Fresh food. Fast and friendly.</p>
      </section>

      {/* Add each marketing section component here */}
    </div>
  );
};

export default Wawa2025;
```

---

Would you like me to generate the actual code components for each of these 9 sections (each matching a section in the marketing plan) and wrap them in the full campaign file (`index.tsx`) so you can start editing them per campaign?

**Example of good response:** [Example would go here]

## **4. Marketing Objectives**
This section should focus on marketing-specific goals that will help you achieve broader business objectives.

**a. Problem**  
- [Describe the key problem(s) the marketing plan aims to address.]

**b. Potential Solutions**  
- [Outline the potential solutions to the problem identified.]

---

## **4. SWOT Analysis**
A SWOT analysis helps identify internal strengths and weaknesses, as well as external opportunities and threats.

**a. Proposed Solution Based on SWOT**  
- [Based on the analysis, propose solutions for leveraging strengths, addressing weaknesses, seizing opportunities, and mitigating threats.]

---

## **5. Market Research**
This section of the plan addresses your market, competitors, existing solutions, and target audience.

**a. Competitors**  
- [List the main competitors and what they offer.]

**b. Stats**  
- [Provide relevant market statistics, data, or trends.]

**c. Metrics**  
- [Describe key metrics used to evaluate market performance.]

**d. Potential Issues**  
- [Outline any potential issues or challenges in the market.]

**e. Potential Solutions**  
- [Provide solutions to the identified issues.]

---

## **6. Marketing Strategy**
This part of the plan details how you will achieve your marketing goals.

**a. Goals and Objectives**  
- [Define your specific marketing goals and objectives.]

**b. Market Channels**  
  - **i. Traditional**: [Describe the traditional marketing channels (e.g., TV, radio, print).]  
  - **ii. Digital**: [Describe the digital marketing channels (e.g., social media, email, SEO).]

**c. Budget (Brief Overview)**  
- [Provide a high-level overview of your budget, highlighting the benefits of a diversified marketing strategy.]

**d. Timeline**  
- [Outline the key milestones and timeframes for executing the strategy.]

**e. Requirements**  
  - **i. Team**: [List the team members and roles required.]  
  - **ii. Resources**: [List the resources (e.g., tools, technologies) needed.]  
  - **iii. Process Adaptations**: [Describe any changes or adaptations to processes that will be made.]  
  - **iv. Partners**: [List any key partners or collaborators involved in the strategy.]

---

## **7. Execution**
The steps and resources required to execute the strategy.

**a. Process**  
  - **i. Steps and Substeps per Team**: [Detail the specific steps for each team involved in executing the strategy.]

**b. Team**  
- [Describe the team structure and responsibilities for executing the plan.]

**c. Resources**  
- [Provide a detailed list of the resources needed to execute the strategy.]

---

## **8. Budget**
Break down your marketing tactics and assign a budget for each area of your strategy.

**a. Campaign Cost**  
- [Estimate the cost for each campaign element (e.g., media buying, content creation, etc.)]

**b. Service Cost**  
- [Provide the costs for any third-party services (e.g., marketing consultants, platforms, etc.)]

**i. Negatives and Positives**  
- [Describe any potential negatives and positives of the marketing budget and expenditures.]

---

## **9. Conclusion**
A review and overview of the campaign goals, objectives, execution, and desired outcome. This section ends with a **Call to Action (CTA)** to execute on the strategy.

- [Summarize the campaign’s overall goals and objectives.]
- [Describe the desired outcome or impact of the campaign.]
- **CTA**: [Include a call to action to start implementing the marketing plan.]

---

## **10. Comments, Votes, and Suggestions**
This section is designed to collect feedback, votes, and suggestions from participants (e.g., executives, stakeholders) during the presentation or review of the marketing plan.

### **Feedback Form**
- **Vote on the Campaign**:  
  Rate the marketing plan from 1 to 5 stars.
  - [ ] 1 Star
  - [ ] 2 Stars
  - [ ] 3 Stars
  - [ ] 4 Stars
  - [ ] 5 Stars

- **Comments**:  
  Please provide any additional comments or thoughts on the campaign strategy.

  [Insert a text box for comments.]

- **Suggestions**:  
  Do you have any suggestions to improve the marketing strategy or execution?

  [Insert a text box for suggestions.]

### **How to Submit Feedback**:
- **Votes**: Each participant can select a star rating to provide their vote on the campaign’s viability or quality.
- **Comments**: Participants can add detailed feedback or thoughts on the campaign in the comments section.
- **Suggestions**: Suggestions allow stakeholders to provide recommendations for improvement.

---

### **Optional: How to Implement Feedback**

After gathering the votes, comments, and suggestions, compile the feedback into a report and review any actionable changes or improvements to the strategy based on the responses.

---

This structure ensures that you’re capturing important feedback, votes, and suggestions from those involved in reviewing the marketing plan. It gives stakeholders a way to participate in the decision-making process and provides a formal structure to assess the plan’s effectiveness based on their feedback.

Let me know if you'd like to add more details or make further adjustments!

**Example of good response:** [Example would go here]

## 5. When suggesting code improvements

**Instruction:** When suggesting improvements to existing code, explain the benefits of each change and potential trade-offs.

**Example of good response:** [Example would go here] 