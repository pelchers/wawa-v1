# Setting Up shadcn/ui

This guide explains how to set up shadcn/ui in our project.

## Prerequisites

Before initializing shadcn/ui, you need to set up the import alias in your TypeScript and Vite configurations:

1. Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    // ... other options
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

2. Update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

3. Install the required dependencies:

```bash
npm install -D @types/node
```

## Installation

1. Navigate to the client directory:

```bash
cd client
```

2. Initialize shadcn/ui:

```bash
npx shadcn-ui@latest init
```

3. During initialization, you'll be asked several questions:
   - For styling, choose "Default" (Tailwind CSS)
   - For the base color, choose "Slate" (or your preference)
   - For the location of your global CSS file, use "src/index.css"
   - For CSS variables for colors, choose "Yes"
   - For the tailwind config location, use "tailwind.config.js"
   - For the import alias for components, use "@/components"
   - For the import alias for utilities, use "@/lib/utils"
   - For React Server Components support, choose "No" (since we're using Vite)

## Adding Components

To add a shadcn/ui component, use the CLI:

```bash
npx shadcn@latest add button
```

This will add the Button component to your project. You can then import and use it:

```tsx
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return (
    <Button variant="outline">Click me</Button>
  );
}
```

## Available Components

You can view all available components on the [shadcn/ui website](https://ui.shadcn.com/docs/components).

Some commonly used components include:
- Button
- Card
- Dialog
- Dropdown Menu
- Form
- Input
- Select
- Tabs
- Toast

## Customizing Components

One of the benefits of shadcn/ui is that it installs the components directly into your project, allowing you to customize them as needed.

To customize a component, simply edit its file in the `src/components/ui` directory.

## Theming

shadcn/ui uses Tailwind CSS for styling. You can customize the theme by editing your `tailwind.config.js` file.

For more information on theming, see the [shadcn/ui theming documentation](https://ui.shadcn.com/docs/theming). 