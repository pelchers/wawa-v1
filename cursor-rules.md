# Cursor Rules

This document outlines the coding standards and best practices for this project. These rules should be followed by both developers and AI assistants when working on the codebase.

## 1. TypeScript Type Organization: Hybrid Model

We follow a hybrid approach to organizing TypeScript types:

1. **Core entity types** should be defined in `client/src/types/entities.ts`
2. **API request/response types** should be defined in the API files where they're used
3. **Component-specific types** (like props) should be defined in the component files

Example:
```typescript
// client/src/types/entities.ts
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  likesCount: number;
}

// client/src/api/likes.ts
import { User } from '../types/entities';

export interface LikeEntityResponse {
  success: boolean;
  count: number;
}

// client/src/components/cards/UserCard.tsx
import { User } from '../types/entities';

interface UserCardProps {
  user: User;
  showActions?: boolean;
}
```

For more details, see the [TypeScript Types Organization Guide](docs-v1/guides/typescript-types-organization.md).

## 2. File and Folder Naming Conventions: Lowercase with Hyphens

We follow a consistent naming convention for files and folders:

1. **All filenames and folders should be lowercase**
2. **Use hyphens (-) to separate words in filenames and folders**
3. **Exception: React component files can be PascalCase (e.g., UserCard.tsx)**

Examples:

```
✅ Good:
client/src/pages/user-profile.tsx
client/src/components/cards/UserCard.tsx
client/src/utils/date-formatter.ts
server/src/middlewares/auth.ts

❌ Bad:
client/src/Pages/UserProfile.tsx
client/src/components/Cards/userCard.tsx
client/src/Utils/dateFormatter.ts
server/src/Middlewares/Auth.ts
```

This convention:
- Ensures consistency across the codebase
- Avoids issues with case-sensitive file systems
- Makes URLs more readable when they map to file paths
- Follows common conventions in modern web development

For more details, see the [File Organization Guide](docs-v1/guides/file-organization.md).

## 3. [Additional rules will be added here] 