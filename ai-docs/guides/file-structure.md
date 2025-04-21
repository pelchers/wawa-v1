# File Structure Conventions Guide

This guide outlines our project's file structure conventions, focusing on how pages are organized and named throughout the application.

## Page Organization

Pages in our application follow a folder-based structure where each page has its own dedicated folder, even if it currently contains only a single file. This approach allows for future expansion with page-specific files.

```markdown:ai-docs/guides/file-structure.md
# File Structure Conventions

## Page Organization

### Frontend Structure

```
client/src/
├── pages/
│   ├── home/
│   │   ├── Home.tsx                 # Main page component
│   │   └── HomeHero.tsx             # Page-specific component (optional)
│   ├── explore/
│   │   ├── Explore.tsx              # Main page component
│   │   ├── ExploreFilters.tsx       # Page-specific component (optional)
│   │   └── config/                  # Page-specific configuration (optional)
│   │       └── explore-config.ts
│   ├── profile/
│   │   └── Profile.tsx              # Main page component
│   └── settings/
│       └── Settings.tsx             # Main page component
├── components/                      # Shared components
├── api/
│   ├── page/                        # Page-specific API wrappers
│   │   ├── homeApi.ts               # API for home page
│   │   ├── exploreApi.ts            # API for explore page
│   │   ├── profileApi.ts            # API for profile page
│   │   └── settingsApi.ts           # API for settings page
│   └── utility/                     # Entity-specific API wrappers
│       ├── usersApi.ts              # API for user operations
│       ├── projectsApi.ts           # API for project operations
│       ├── groupsApi.ts             # API for group operations
│       └── authApi.ts               # API for authentication
└── ...
```

### Key Principles:

1. **One-to-One Named Folders**: Each page has its own folder named after the page (e.g., `home/`, `explore/`).

2. **Descriptive File Names**: Files should be named descriptively according to their purpose:
   - Main page component: `PageName.tsx` (e.g., `Home.tsx`, `Explore.tsx`)
   - Page-specific components: `PageNameFeature.tsx` (e.g., `HomeHero.tsx`, `ExploreFilters.tsx`)

3. **No Generic Names**: Avoid generic names like `index.tsx` or `page.tsx`. Always use descriptive names that reflect the component's purpose.

4. **Consistent Naming Across File Flow**: Maintain consistent naming throughout the entire file flow from frontend to backend.

## Complete File Flow Example

For a feature like "Explore Groups", the naming should be consistent across all layers:

```
Frontend:
- pages/explore/Explore.tsx                  # Main page component
- pages/explore/ExploreFilters.tsx           # Filters component
- api/page/exploreApi.ts                     # Page-specific API wrapper
- api/utility/groupsApi.ts                   # Entity-specific API wrapper

Backend:
- routes/exploreRoutes.ts                    # API routes
- controllers/exploreController.ts           # Request handlers
- services/exploreService.ts                 # Business logic
- types/exploreTypes.ts                      # Type definitions (if needed)
```

## Edge Cases

### Page-Specific Resources

When a page requires additional resources (configurations, utilities, etc.), place them in a subfolder within the page folder:

```
pages/explore/
├── Explore.tsx
├── ExploreFilters.tsx
└── config/
    └── explore-config.ts
```

### Shared Components

Components used across multiple pages should be placed in the shared `components/` directory:

```
components/
├── Button.tsx
├── Card.tsx
└── group-card/
    ├── GroupCard.tsx
    ├── GroupCardGrid.tsx
    └── GroupCardList.tsx
```

## API Structure

Our API structure is organized into two main categories:

### 1. Page-Specific APIs

These APIs are directly tied to specific pages and handle the data needs of those pages:

```
api/page/
├── homeApi.ts                # API for home page
├── exploreApi.ts             # API for explore page
├── profileApi.ts             # API for profile page
└── settingsApi.ts            # API for settings page
```

Page-specific APIs are imported directly into their corresponding page components and handle the specific data requirements of that page.

### 2. Utility APIs

These APIs are organized around entities or features rather than pages, and can be used across multiple pages:

```
api/utility/
├── usersApi.ts               # API for user operations
├── projectsApi.ts            # API for project operations
├── groupsApi.ts              # API for group operations
└── authApi.ts                # API for authentication
```

Utility APIs are imported into page-specific APIs or directly into components when needed. They provide reusable API functions for common entities across the application.

### API Usage Convention

When building a page:
1. Import page-specific APIs directly into the page component
2. Page-specific APIs can internally use utility APIs for common operations
3. For simple cases, utility APIs can be imported directly into components
4. pages can either use page-specific APIs or utility APIs, or even a combination based on their specific requirements and whether or not the utility apis exist or not... page apis are more so for the gaps not filled by a combination of utility apis and the utility apis meant for specific purposes

Example:
```tsx
// In pages/profile/Profile.tsx
import { getUserProfile } from '@/api/page/profileApi';

// In api/page/profileApi.ts
import { getUser, updateUser } from '@/api/utility/usersApi';

export const getUserProfile = async (userId) => {
  // May combine user data with additional profile-specific data
  const userData = await getUser(userId);
  // ...additional logic
  return { ...userData, ...additionalData };
};
```

## Backend Structure

Backend files should maintain consistent naming with their frontend counterparts:

```
server/src/
├── routes/
│   ├── homeRoutes.ts
│   ├── exploreRoutes.ts
│   ├── profileRoutes.ts
│   └── settingsRoutes.ts
├── controllers/
│   ├── homeController.ts
│   ├── exploreController.ts
│   ├── profileController.ts
│   └── settingsController.ts
├── services/
│   ├── homeService.ts
│   ├── exploreService.ts
│   ├── profileService.ts
│   └── settingsService.ts
└── ...
```

By following these conventions, we ensure a consistent, maintainable, and scalable file structure throughout the project.
```

This guide provides clear conventions for our file structure, emphasizing descriptive naming and consistent organization across the entire application. The folder-per-page approach allows for future expansion while maintaining a clean and intuitive structure.
