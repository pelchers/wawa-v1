# Path Aliases Guide

This guide explains how path aliases are set up and used in our project.

## What Are Path Aliases?

Path aliases are shortcuts that map a symbol (like `@/`) to a specific directory in your project. Instead of writing long relative paths with multiple `../` segments, you can use a consistent, short alias.

For example, instead of:
```tsx
import { Button } from "../../../../components/ui/button";
```

You can write:
```tsx
import { Button } from "@/components/ui/button";
```

## Benefits of Path Aliases

1. **Simplified imports**: No need to count directory levels with `../`
2. **Location independence**: Moving files doesn't break imports
3. **Improved readability**: Clearer where imports come from
4. **Consistent patterns**: All imports follow the same structure
5. **Better IDE support**: Enhanced autocomplete and navigation

## How Path Aliases Are Configured

Our project uses path aliases through configuration in two key files:

### 1. TypeScript Configuration (tsconfig.json)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

This tells TypeScript that when it sees an import path starting with `@/`, it should resolve it to the `./src/` directory.

### 2. Vite Configuration (vite.config.ts)

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

This tells Vite (our build tool) to resolve `@/` imports to the `src` directory at runtime.

## Why Two Configuration Files?

- **TypeScript config**: Handles type checking, IDE features, and static analysis
- **Vite config**: Handles actual module resolution during development and build

Both configurations must be in sync for path aliases to work correctly.

## Using Path Aliases in Your Code

### For Component Imports

```tsx
// Instead of this (relative path):
import { Button } from "../components/ui/button";

// Use this (path alias):
import { Button } from "@/components/ui/button";
```

### For Utility Functions

```tsx
// Instead of this:
import { formatDate } from "../../utils/date-formatter";

// Use this:
import { formatDate } from "@/utils/date-formatter";
```

### For Type Imports

```tsx
// Instead of this:
import { User } from "../../types/entities";

// Use this:
import { User } from "@/types/entities";
```

## Path Aliases with shadcn/ui

shadcn/ui components are designed to work with path aliases. When you install a component using:

```bash
npx shadcn@latest add button
```

The component will be added to your project with imports that use the `@/` alias. For example:

```tsx
// Inside the generated button.tsx
import { cn } from "@/lib/utils";
```

This is why setting up path aliases correctly is essential for using shadcn/ui components.

## Troubleshooting Path Aliases

If you encounter issues with path aliases:

1. **Check both configuration files**: Ensure both `tsconfig.json` and `vite.config.ts` have the correct alias configuration
2. **Restart your development server**: Sometimes changes to configuration files require a server restart
3. **Clear your cache**: If using Vite, try running `npm run dev -- --force` to clear the cache
4. **Check for typos**: Ensure you're using the exact alias pattern (`@/` not `@` or `~/`)
5. **Verify file paths**: Make sure the file you're importing actually exists at the specified path

## Example: Directory Structure and Imports

Given this directory structure:

```
client/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   └── cards/
│   │       └── UserCard.tsx
│   ├── pages/
│   │   └── component-testing.tsx
│   ├── utils/
│   │   └── date-formatter.ts
│   └── types/
│       └── entities/
│           └── index.ts
```

Here's how imports would look:

```tsx
// In component-testing.tsx
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/date-formatter";
import { User } from "@/types/entities";

// In UserCard.tsx
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/date-formatter";
```

Notice how the imports are consistent regardless of the file's location in the directory structure.

## Best Practices

1. **Always use path aliases for src imports**: Avoid relative paths for anything in the src directory
2. **Use relative paths for nearby files**: For closely related files in the same directory, relative paths can be clearer
3. **Keep your directory structure organized**: Path aliases work best with a well-organized project structure
4. **Document your aliases**: Make sure all team members understand the alias patterns used in the project 