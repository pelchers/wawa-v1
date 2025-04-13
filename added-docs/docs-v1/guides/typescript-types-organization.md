# TypeScript Types Organization Guide

This guide explains best practices for organizing TypeScript types and interfaces in a monorepo application, with a focus on API communication flows.

## Table of Contents

- [TypeScript Types Organization Guide](#typescript-types-organization-guide)
  - [Table of Contents](#table-of-contents)
  - [Type Organization Approaches](#type-organization-approaches)
    - [1. Dedicated Types Directory](#1-dedicated-types-directory)
    - [2. API File Types](#2-api-file-types)
    - [3. Component File Types](#3-component-file-types)
    - [4. Shared Types with Backend](#4-shared-types-with-backend)
  - [Recommended Approach: Hybrid Model](#recommended-approach-hybrid-model)
    - [Implementation Example](#implementation-example)
  - [Best Practices](#best-practices)

## Type Organization Approaches

When building applications with TypeScript, there are several approaches to organizing your types and interfaces, especially for API communication flows.

### 1. Dedicated Types Directory

```
client/
  └── src/
      └── types/
          ├── api.ts
          ├── entities.ts
          └── responses.ts
```

**Benefits:**
- Centralized type definitions make them easy to find and update
- Types can be reused across API and component files
- Single source of truth for data structures
- Clear separation of concerns
- Types serve as documentation

**Example:**
```typescript
// client/src/types/entities.ts
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  likesCount: number;
}

// client/src/types/api.ts
export interface LikeEntityRequest {
  entityType: 'user' | 'post' | 'comment';
  entityId: string;
}

export interface LikeEntityResponse {
  success: boolean;
  likeId?: string;
  count?: number;
}
```

### 2. API File Types

```
client/
  └── src/
      └── api/
          ├── likes.ts (with types)
          └── users.ts (with types)
```

**Benefits:**
- Types are defined right where they're used
- Easier to understand types in the context of their API usage
- No need to import types from separate files
- When changing an API function, you can update its types in the same file

**Example:**
```typescript
// client/src/api/likes.ts
export interface LikeEntityRequest {
  entityType: 'user' | 'post' | 'comment';
  entityId: string;
}

export interface LikeEntityResponse {
  success: boolean;
  likeId?: string;
  count?: number;
}

export const likeEntity = async (
  entityType: string, 
  entityId: string
): Promise<LikeEntityResponse> => {
  // Implementation...
};
```

### 3. Component File Types

```
client/
  └── src/
      └── components/
          └── cards/
              └── UserCard.tsx (with types)
```

**Benefits:**
- Component-specific types stay with their component
- No need to navigate to other files to understand the component's data structure
- When changing a component, all related types are in the same file

**Example:**
```typescript
// client/src/components/cards/UserCard.tsx
interface User {
  id: string;
  name: string;
  avatarUrl?: string;
  likesCount: number;
}

interface UserCardProps {
  user: User;
  showActions?: boolean;
}

export default function UserCard({ user, showActions = true }: UserCardProps) {
  // Component implementation...
}
```

### 4. Shared Types with Backend

```
shared/
  └── types/
      ├── entities.ts
      ├── requests.ts
      └── responses.ts
```

**Benefits:**
- Frontend and backend share the same type definitions
- Types act as a contract between frontend and backend
- No need to define the same types twice
- TypeScript validates that data matches the expected shape
- Changes to the API are reflected in types, making it easier to update both sides

**Example:**
```typescript
// shared/types/entities.ts (used by both frontend and backend)
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  likesCount: number;
}

// shared/types/requests.ts
export interface LikeEntityRequest {
  entityType: 'user' | 'post' | 'comment';
  entityId: string;
}
```

## Recommended Approach: Hybrid Model

For most applications, a hybrid approach provides the best balance between reusability and colocation:

1. **Core entity types** in a shared directory (if using full-stack TypeScript) or in `client/src/types/entities.ts`
2. **API request/response types** in the API files where they're used
3. **Component-specific types** (like props) in the component files

This approach balances reusability with colocation, making your codebase both maintainable and easy to understand.

### Implementation Example

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
  likeId?: string;
  count: number;
}

export const likeEntity = async (
  entityType: string, 
  entityId: string
): Promise<LikeEntityResponse> => {
  // Implementation...
};

// client/src/components/cards/UserCard.tsx
import { User } from '../types/entities';
import { likeEntity, getLikeCount } from '../api/likes';

interface UserCardProps {
  user: User;
  showActions?: boolean;
}

export default function UserCard({ user, showActions = true }: UserCardProps) {
  // Component implementation...
}
```

## Best Practices

1. **Be consistent** with your approach across the codebase
2. **Use descriptive names** for types and interfaces
3. **Document complex types** with JSDoc comments
4. **Keep types focused** - each type should represent one concept
5. **Use type composition** to build complex types from simpler ones
6. **Consider using Zod or io-ts** for runtime validation of API responses
7. **Export types explicitly** rather than exporting interfaces as part of a class or function
8. **Use type aliases** (`type`) for unions and intersections, and **interfaces** for object shapes
9. **Avoid `any`** whenever possible - use `unknown` if you need a placeholder
10. **Use generics** for reusable type patterns, especially for API responses

By following these guidelines, you'll create a TypeScript codebase that's both type-safe and maintainable. 