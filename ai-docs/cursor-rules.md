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

## 3. Conventional File Flow: Types, Frontend, and Backend

We follow a consistent flow for data through our application, from type definitions to frontend components to backend services and database.

### Type Definitions Flow

1. **Database Schema** (Prisma schema)
   ```prisma
   // prisma/schema.prisma
   model User {
     id          String   @id @default(uuid())
     name        String
     email       String   @unique
     avatarUrl   String?
     likesCount  Int      @default(0)
     // ...other fields
   }
   ```

2. **Backend Types** (TypeScript interfaces matching Prisma models)
   ```typescript
   // server/src/types/entities.ts
   export interface User {
     id: string;
     name: string;
     email: string;
     avatarUrl?: string;
     likesCount: number;
     // ...other fields
   }

   // server/src/types/requests.ts
   export interface LikeEntityRequest {
     entityType: 'user' | 'post' | 'comment';
     entityId: string;
   }

   // server/src/controllers/likeController.ts - Controller-specific types
   interface LikeRequestBody {
     entityType: string;
     entityId: string;
   }
   ```

3. **Frontend Types** (TypeScript interfaces matching backend types)
   ```typescript
   // Core entity types in dedicated types directory
   // client/src/types/entities/index.ts
   export interface User {
     id: string;
     name: string;
     email?: string;
     avatarUrl?: string;
     likesCount: number;
     // ...other fields
   }

   // API-specific types defined in the API file
   // client/src/api/likes.ts
   export interface LikeEntityResponse {
     success: boolean;
     likeId?: string;
     count: number;
   }

   // Component-specific types defined in the component file
   // client/src/components/cards/UserCard.tsx
   interface UserCardProps {
     user: User;
     showActions?: boolean;
   }
   ```

### Data Flow: Frontend to Backend to Database

The complete flow for a typical operation (e.g., liking a user) follows this path:

```
UI Component → Frontend API → Backend Route → Controller → Service → Database → Service → Controller → Frontend API → UI Component
```

#### Detailed Flow Example

1. **UI Component** (React component initiates action)
   ```typescript
   // client/src/components/cards/UserCard.tsx
   const handleLikeClick = async () => {
     await likeEntity('user', user.id);
     const newCount = await getLikeCount('user', user.id);
     setLikeCount(newCount);
   };
   ```

2. **Frontend API** (API functions make HTTP requests)
   ```typescript
   // client/src/api/likes.ts
   export const likeEntity = async (entityType: string, entityId: string) => {
     const response = await fetch(`/api/likes`, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
       body: JSON.stringify({ entityType, entityId })
     });
     return await response.json();
   };
   ```

3. **Backend Routes** (Express routes direct requests)
   ```typescript
   // server/src/routes/likeRoutes.ts
   router.post('/', authenticate, likeController.likeEntity);
   ```

4. **Backend Controllers** (Controllers validate and process requests)
   ```typescript
   // server/src/controllers/likeController.ts
   export const likeEntity = async (req: Request, res: Response) => {
     const userId = req.user?.id;
     const { entityType, entityId } = req.body;
     const result = await likeService.likeEntity(userId, entityType, entityId);
     res.status(201).json(result);
   };
   ```

5. **Backend Services** (Services implement business logic)
   ```typescript
   // server/src/services/likeService.ts
   export const likeEntity = async (userId: string, entityType: string, entityId: string) => {
     const like = await prisma.likes.create({
       data: { user_id: userId, entity_type: entityType, entity_id: entityId }
     });
     await updateEntityLikeCount(entityType, entityId);
     return like;
   };
   ```

6. **Database** (Prisma ORM interacts with the database)
   ```typescript
   // Inside likeService.ts
   const like = await prisma.likes.create({
     data: { user_id: userId, entity_type: entityType, entity_id: entityId }
   });
   ```

7. **Response Flow** (Data flows back to the frontend)
   - Database returns created record to service
   - Service returns data to controller
   - Controller formats and sends HTTP response
   - Frontend API receives and parses response
   - UI component updates state with new data

### Flow Diagram

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Type Definitions│     │  Frontend Flow  │     │  Backend Flow   │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Prisma Schema   │     │ UI Component    │     │ Routes          │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Backend Types   │     │ Frontend API    │     │ Controllers     │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         ▼                       │                       ▼
┌─────────────────┐     │        │        │     ┌─────────────────┐
│ Frontend Types  │◄────┘        └────────┼────►│ Services        │
└─────────────────┘                       │     └────────┬────────┘
                                          │              │
                                          │              ▼
                                          │     ┌─────────────────┐
                                          └────►│ Database (ORM)  │
                                                └─────────────────┘
```

### Benefits of This Approach

1. **Type Safety**: Consistent types across the stack reduce errors
2. **Clear Responsibility**: Each layer has a specific role
3. **Maintainability**: Standardized flow makes code easier to understand
4. **Testability**: Each layer can be tested in isolation
5. **Scalability**: New features follow the same pattern

For more details on type organization, see the [TypeScript Types Organization Guide](../docs-v1/guides/typescript-types-organization.md).

For a complete example of the API call flow, see the [API Call Flow Reference](reference/file-communication-info-1.md). 