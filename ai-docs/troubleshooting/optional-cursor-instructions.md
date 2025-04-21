DO NOT FOLLOW THESE UNLESS STIPULATED IN THIS FILE VIA A DENOTATION AT THE END OF THE NUMERIC TITLE INDICATED BY $$$FOLLOW THIS INSTRUCTION$$$

## 1. Path Conventions and Imports (DO NOT FOLLOW THIS CONVENTION FOR FRONTEND UNLESS SPECIFIED... USE TRADE-STANDARD IMPORTS FOR FRONTEND)

### Frontend Import Paths
All frontend imports should use the centralized `importPaths` utility from `src/utils/importPaths.ts`. This provides:
- Type-safe imports
- Centralized path management
- Easier refactoring
- Consistent import patterns

**Example of good imports:**
```typescript
import { apiPaths, componentPaths, typePaths, utilPaths } from '../../utils/importPaths';

// Use the imported paths
import { logPageView } from utilPaths.logger;
import { Section } from componentPaths.navigation;
import type { FeedbackFormProps } from typePaths.feedback;
```

**Example of bad imports:**
```typescript
// ❌ Don't use direct relative imports
import { logPageView } from '../../utils/logger';
import { Section } from '../../components/navigation/types';
```

### Backend Path Aliases
Backend code should use path aliases configured in `tsconfig.json` to provide:
- Shorter import paths
- Consistent module resolution
- Prevention of deep relative paths
- Better maintainability

**Example of good backend imports:**
```typescript
// tsconfig.json path aliases
{
  "compilerOptions": {
    "paths": {
      "@api/*": ["src/api/*"],
      "@models/*": ["src/models/*"],
      "@utils/*": ["src/utils/*"],
      "@config/*": ["src/config/*"]
    }
  }
}

// Usage in code
import { UserModel } from '@models/User';
import { validateToken } from '@utils/auth';
import { apiConfig } from '@config/api';
```

**Example of bad backend imports:**
```typescript
// ❌ Don't use relative paths
import { UserModel } from '../../../models/User';
import { validateToken } from '../../utils/auth';
```

### Benefits
1. Consistent import patterns across the codebase
2. Easier module relocation without breaking imports
3. Better IDE support and autocompletion
4. Simplified refactoring
5. Clearer dependency structure
6. Reduced chance of circular dependencies
7. Easier to understand module relationships

### Implementation
- Frontend: Use the `importPaths.ts` utility for all imports
- Backend: Configure and use path aliases in `tsconfig.json`
- Both: Avoid relative paths with more than two levels (`../../`)
- Both: Group related imports together using the path utilities

### Maintenance
- Keep `importPaths.ts` updated when adding new modules
- Update path aliases in `tsconfig.json` when adding new backend directories
- Use IDE features to automatically update imports when moving files
- Run TypeScript compiler to catch any broken imports
