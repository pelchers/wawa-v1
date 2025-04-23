# User Profile Edit System Guide

## Overview
This system allows users to view and edit profile information based on the Prisma schema, with proper authorization and a segmented form interface.

## Schema Reference.
```prisma
// Add our actual schema here, focusing on User and direct profile-related models
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Profile Information
  firstName      String?
  lastName       String?
  jobTitle       String?
  bio            String? @db.Text
  yearsAtCompany Int?
  yearsInDept    Int?
  yearsInRole    Int?

  // Relations
  education  Education[]
  accolades  Accolade[]
  experience Experience[]
  references Reference[]
  // ... other relations
}
```

## Flow Architecture

### 1. Frontend to Backend Flow
Following the full flow methodology:

```plaintext
Frontend (client/)
├── src/
│   ├── types/users/
│   │   └── profile.ts              # Frontend type definitions
│   ├── api/users/
│   │   └── profile.ts              # API calls for profile
│   ├── pages/users/
│   │   ├── Profile.tsx
│   │   └── ProfileEdit.tsx
│   ├── components/users/
│   │   ├── profile/
│   │   │   ├── ProfileHeader.tsx    # Profile header section
│   │   │   ├── ProfileContent.tsx   # Main profile content
│   │   │   └── ProfileActions.tsx   # Action buttons (edit, etc.)
│   │   └── edit/
│   │       ├── EditForm.tsx         # Main edit form container
│   │       ├── sections/
│   │       │   ├── BasicInfo.tsx    # Basic information section
│   │       │   ├── CompanyInfo.tsx  # Company details section
│   │       │   └── Experience.tsx   # Experience section
│   │       └── fields/
│   │           ├── TagInput.tsx     # Tag input component
│   │           └── BooleanToggle.tsx # Boolean toggle component
│   ├── hooks/users/
│   │   ├── useProfile.ts           # Profile data fetching hook
│   │   └── useProfileEdit.ts       # Profile editing hook
│   └── services/users/
│       └── profileService.ts       # API calls for profile

Backend (server/)
├── src/
│   ├── types/users/
│   │   └── profile.ts              # Backend type definitions
│   ├── routes/users/
│   │   └── profileRoutes.ts        # Profile-related routes
│   ├── controllers/users/
│   │   └── profileController.ts    # Profile logic handlers
│   ├── services/users/
│   │   └── profileService.ts       # Business logic for profiles
│   └── middleware/users/
│       └── profileAuth.ts          # Profile-specific auth
```

## Form Sections

### 1. Basic Profile
- First Name
- Last Name
- Job Title
- Bio
- Years Information
  - Years at Company
  - Years in Department
  - Years in Role

### 2. Work Information
- Company Details
  - Internal Company (select)
  - External Company (text)
- Department Details
  - Internal Department (select)
  - External Department (text)

### 3. Reporting Structure
- Reports To
  - Manager Selection
  - Manual Manager Name
- Direct Reports (view only)

### 4. Professional History
- Education Records
- Experience History
- Accolades
- References

## Profile View Layout

### 1. Visual Organization
```typescript
// pages/users/Profile.tsx
const Profile = () => {
  const sections = [
    {
      id: 'header',
      component: ProfileHeader, // Profile picture, name, title
      data: ['firstName', 'lastName', 'profilePicture', 'company.position']
    },
    {
      id: 'about',
      component: ProfileAbout, // Bio and basic info
      data: ['bio', 'phoneNumber', 'address']
    },
    {
      id: 'experience',
      component: ProfileExperience,
      data: ['experience', 'company']
    },
    // ... other sections matching form organization
  ];

  return (
    <div className="profile-container">
      {sections.map(section => (
        <section.component key={section.id} data={filterUserData(userData, section.data)} />
      ))}
    </div>
  );
};
```

### 2. Data Mapping
Each profile section maps directly to form sections with enhanced visual presentation:
- Basic Info → Profile Header with Years of Service
- Company & Department → Current Position Card with Company/Department Links
- Work Relationships → Organizational Chart View
- Education → Timeline/Cards with Ongoing Indicators
- Accolades → Achievement Showcase
- Experience → Career Timeline
- References → Reference Network Display

## Implementation Order

1. Phase 1: Core Structure
   - Basic database schema implementation
   - Basic types setup
   - Profile route setup
   - Simple profile view page

2. Phase 2: Edit Functionality
   - Form components development
   - Edit page routing
   - Basic CRUD operations
   - Authorization middleware

3. Phase 3: Enhanced Features
   - Field validation
   - Image uploads
   - Rich text editing
   - Tag management

4. Phase 4: UI/UX Polish
   - Animations
   - Loading states
   - Error handling
   - Responsive design

5. Phase 6: Advanced Features
   - Auto-save
   - Version history
   - Privacy controls
   - Profile completeness

## Simplified Implementation Approach

### 1. Extend Existing Profile
```typescript
// pages/auth/Profile.tsx (existing)
const Profile = () => {
  const { user } = useAuth(); // Has id, email, firstName, lastName
  const { profileData } = useProfile(user?.id); // Will add extended data

  return (
    <div>
      {/* Basic auth info - already exists */}
      <BasicInfo user={user} />

      {/* New sections - add one at a time */}
      {profileData && (
        <>
          <CompanyInfo data={profileData.company} />
          <WorkRelations data={profileData} />
          <EducationSection data={profileData.education} />
          {/* Add more sections progressively */}
        </>
      )}
    </div>
  );
};
```

### 2. Progressive Section Addition
Add sections in this order:
1. Basic Profile Fields (jobTitle, bio, years info)
2. Company & Department Info
3. Work Relationships (manager, reports)
4. Education History
5. Experience Records
6. References
7. Accolades

### 3. Edit Components
Keep it simple with three base components:
```typescript
// components/users/edit/fields/
- TextInput.tsx    // For text, numbers, dates
- SelectInput.tsx  // For dropdowns, relationships
- ArrayInput.tsx   // For education[], experience[]
```

### 4. Data Flow

src/
├── pages/
│   ├── auth/           # Auth-related pages
│   │   └── Profile.tsx # Base profile with auth
│   └── users/          # User-related pages
│       └── ProfileEdit.tsx
├── components/
│   ├── auth/          # Auth components
│   └── users/         # User profile components
├── types/
│   ├── auth/          # Auth types
│   └── users/         # User types
└── api/
    ├── auth/          # Auth API
    └── users/         # User API

```plaintext
Auth Context (existing)
     ↓
Profile Component
     ↓
Profile Sections
     ↓
Edit Components
```

### 5. API Integration
Start with read-only, then add edit functionality:
```typescript
// api/users/profile.ts
export const profileApi = {
  getProfile: async (userId: string) => {
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
  },
  // Add update methods later
};
```

### 6. Error Prevention
- Keep auth and profile logic separate
- All new fields are optional
- Progressive enhancement
- Type safety throughout
- Simple validation rules first

## Component Dependencies

```plaintext
Profile System Dependencies:
├── Core
│   ├── @prisma/client
│   ├── react-hook-form
│   ├── zod (validation)
│   └── @tanstack/react-query
├── UI
│   ├── @headlessui/react
│   ├── framer-motion
│   └── react-icons
└── Utils
    ├── date-fns
    └── lodash
```

## Getting Started

1. Database Setup
```bash
# Initialize Prisma
npx prisma init

# Apply schema
npx prisma db push

# Generate client
npx prisma generate
```

2. Type Generation
```bash
# Generate types from schema
npx prisma generate --generator typesafe-client
```

3. Initial Component Setup
```bash
# Create necessary directories
mkdir -p src/{components,pages,hooks,services,types}/users
```

4. Development Workflow
- Start with schema updates
- Generate types
- Update backend services
- Implement frontend components
- Add styling
- Test functionality

## Common Patterns

### 1. Data Fetching
```typescript
const useProfile = (userId: string) => {
  return useQuery(['profile', userId], () => profileApi.getProfile(userId), {
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
```

### 2. Form State Management
```typescript
const useProfileForm = (initialData: UserProfile) => {
  const form = useForm<UserProfile>({
    defaultValues: initialData,
    resolver: zodResolver(profileSchema)
  });

  const handleSubmit = async (data: UserProfile) => {
    // Implementation
  };

  return { form, handleSubmit };
};
```

### 3. Section Components
```typescript
interface SectionProps<T> {
  data: T;
  isEditing?: boolean;
  onUpdate?: (data: Partial<T>) => void;
}

const Section = <T,>({ data, isEditing, onUpdate }: SectionProps<T>) => {
  // Implementation
};
```

## Type Definitions

### Frontend Types (client/src/types/users/profile.ts)
```typescript
// Matches database schema 1-1
export interface UserProfile {
  id: string;
  email: string;
  password?: string; // Only for forms
  createdAt: Date;
  updatedAt: Date;

  // Profile Information
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  bio?: string;
  yearsAtCompany?: number;
  yearsInDept?: number;
  yearsInRole?: number;

  // Company and Department Info
  companyId?: string;
  company?: Company;
  externalCompany?: string;
  departmentId?: string;
  department?: Department;
  externalDepartment?: string;

  // Work Relationships
  reportsTo?: UserProfile;
  managerId?: string;
  managerNameManual?: string;
  manages?: UserProfile[];

  // Education and Experience
  education?: Education[];
  accolades?: Accolade[];
  experience?: Experience[];
  references?: Reference[];
}

export interface Education {
  id: string;
  userId: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  ongoing: boolean;
}

export interface Accolade {
  id: string;
  userId: string;
  title: string;
  issuer: string;
  dateReceived: Date;
  description?: string;
}

export interface Experience {
  id: string;
  userId: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description?: string;
  companyId?: string;
  company?: Company;
  externalCompany?: string;
}

export interface Reference {
  id: string;
  userId: string;
  internalUserId?: string;
  internalUser?: UserProfile;
  externalName?: string;
  externalEmail?: string;
  externalPhone?: string;
  relationship: string;
  position: string;
  company: string;
}
```

### API Types (client/src/api/users/profile.ts)
```typescript
import { UserProfile } from '../../types/users/profile';

export const profileApi = {
  getProfile: async (userId: string): Promise<UserProfile> => {
    const response = await fetch(`/api/users/${userId}/profile`);
    return response.json();
  },
  
  updateProfile: async (userId: string, data: Partial<UserProfile>): Promise<UserProfile> => {
    const response = await fetch(`/api/users/${userId}/profile`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};
```

## Backend Implementation

### 1. Route Handlers (routes/users/profileRoutes.ts)
```typescript
import { Router } from 'express';
import { profileController } from '../../controllers/users';
import { authMiddleware, profileAuth } from '../../middleware/users';

const router = Router();

router.get(
  '/:userId',
  authMiddleware.optional,
  profileController.getProfile
);

router.put(
  '/:userId',
  authMiddleware.required,
  profileAuth.canEditProfile,
  profileController.updateProfile
);

export default router;
```

### 2. Controllers (controllers/users/profileController.ts)
```typescript
import { Request, Response } from 'express';
import { profileService } from '../../services/users';
import { ProfileUpdateData } from '../../types/users/profile';

export const profileController = {
  async getProfile(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const profile = await profileService.getProfile(userId);
      
      res.json({
        success: true,
        message: 'Profile retrieved successfully',
        data: profile
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error retrieving profile',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  },

  async updateProfile(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const updateData: ProfileUpdateData = req.body;
      
      const updated = await profileService.updateProfile(userId, updateData);
      
      res.json({
        success: true,
        message: 'Profile updated successfully',
        data: {
          updated: true,
          profile: updated
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error updating profile',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
};
```

### 3. Services (services/users/profileService.ts)
```typescript
import { PrismaClient } from '@prisma/client';
import { ProfileUpdateData, UserProfile } from '../../types/users/profile';

const prisma = new PrismaClient();

export const profileService = {
  async getProfile(userId: string): Promise<UserProfile> {
    const profile = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        company: true,
        experience: true,
        contact: true
      }
    });

    if (!profile) {
      throw new Error('Profile not found');
    }

    return profile;
  },

  async updateProfile(
    userId: string, 
    data: ProfileUpdateData
  ): Promise<UserProfile> {
    return prisma.user.update({
      where: { id: userId },
      data: {
        ...data,
        company: data.company ? {
          upsert: {
            create: data.company,
            update: data.company
          }
        } : undefined,
        experience: data.experience ? {
          deleteMany: {},
          createMany: {
            data: data.experience
          }
        } : undefined
      },
      include: {
        company: true,
        experience: true,
        contact: true
      }
    });
  }
};
```

### 4. Middleware (middleware/users/profileAuth.ts)
```typescript
import { Request, Response, NextFunction } from 'express';
import { profileService } from '../../services/users';

export const profileAuth = {
  async canEditProfile(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { userId } = req.params;
    const currentUser = req.user;

    if (!currentUser) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    if (currentUser.id !== userId && !currentUser.isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to edit this profile'
      });
    }

    next();
  }
};
```

These additions provide:
1. Complete type definitions for frontend and backend
2. Detailed backend implementation
3. Proper error handling
4. Type safety throughout the system
5. Authorization middleware
6. Database integration with Prisma

## Type Correlation with Schema

### Backend Types (server/src/types/users/profile.ts)
```typescript
// These types exactly match the Prisma schema
import { Prisma } from '@prisma/client';

// Utility type to remove relation fields
type OmitRelations<T> = Omit<T, keyof { [K in keyof T]: T[K] extends Function ? K : never }>;

// Base types matching Prisma models
export type UserProfile = OmitRelations<Prisma.UserGetPayload<{
  include: {
    address: true,
    company: true,
    experience: true,
    education: true,
    certifications: true,
    socialLinks: true,
    preferences: true
  }
}>>;

export type AddressData = OmitRelations<Prisma.AddressGetPayload<{}>>;
export type CompanyData = OmitRelations<Prisma.CompanyGetPayload<{}>>;
export type ExperienceData = OmitRelations<Prisma.ExperienceGetPayload<{}>>;
export type EducationData = OmitRelations<Prisma.EducationGetPayload<{}>>;
export type CertificationData = OmitRelations<Prisma.CertificationGetPayload<{}>>;
export type SocialLinkData = OmitRelations<Prisma.SocialLinkGetPayload<{}>>;
export type UserPreferencesData = OmitRelations<Prisma.UserPreferencesGetPayload<{}>>;

// Update types for partial updates
export type ProfileUpdateData = Partial<Omit<UserProfile, 'id' | 'email' | 'createdAt' | 'updatedAt'>>;

// Response types
export interface ProfileResponse {
  success: boolean;
  message: string;
  data: UserProfile;
}

export interface ProfileError {
  success: false;
  message: string;
  errors?: Record<string, string>;
}
```

### Type Usage in Services
```typescript
// services/users/profileService.ts
import { PrismaClient } from '@prisma/client';
import { 
  UserProfile, 
  ProfileUpdateData,
  ProfileResponse,
  ProfileError 
} from '../../types/users/profile';

const prisma = new PrismaClient();

export const profileService = {
  async getProfile(userId: string): Promise<ProfileResponse | ProfileError> {
    try {
      const profile = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          address: true,
          company: true,
          experience: true,
          education: true,
          certifications: true,
          socialLinks: true,
          preferences: true
        }
      });

      if (!profile) {
        return {
          success: false,
          message: 'Profile not found'
        };
      }

      return {
        success: true,
        message: 'Profile retrieved successfully',
        data: profile
      };
    } catch (error) {
      return {
        success: false,
        message: 'Error retrieving profile',
        errors: { general: error instanceof Error ? error.message : 'Unknown error' }
      };
    }
  }
};
```

This ensures:
1. Perfect type alignment between database and application
2. Type safety throughout the stack
3. Consistent data structures
4. Proper error handling with types
5. Automatic type updates when schema changes

## Authorization Rules

1. Profile Viewing:
   - Public profiles viewable by all users
   - Some fields may be marked private

2. Profile Editing:
   - Only authenticated user can edit their own profile
   - Admin users can edit any profile
   - Field-level permissions possible

## Implementation Steps

### Phase 1: Core Profile
1. Extend existing Profile.tsx
2. Add basic profile fields
3. Implement read-only view
4. Add edit capability

### Phase 2: Work Info
1. Company selection/entry
2. Department selection/entry
3. Reporting structure

### Phase 3: History
1. Education records
2. Experience entries
3. Accolades
4. References

### Phase 4: Polish
1. Validation
2. Error handling
3. Loading states
4. Mobile responsiveness

## Styling Guidelines

1. Form Layout:
   - Consistent spacing between sections
   - Clear visual hierarchy
   - Mobile-responsive design

2. Input Fields:
   - Uniform styling across all inputs
   - Clear validation states
   - Helpful error messages

## Best Practices

1. Form Handling:
   - Debounced saves
   - Optimistic updates
   - Proper error handling

2. Performance:
   - Lazy loading of sections
   - Efficient re-renders
   - Proper memoization

3. Accessibility:
   - ARIA labels
   - Keyboard navigation
   - Screen reader support

## Testing Strategy

1. Unit Tests:
   - Individual form components
   - Validation logic
   - State management

2. Integration Tests:
   - Form submission flow
   - API integration
   - Authorization rules

3. E2E Tests:
   - Complete edit workflow
   - Cross-browser testing
   - Mobile responsiveness

## Future Enhancements

1. Real-time validation
2. Auto-save functionality
3. Change history tracking
4. Field-level permissions
5. Profile completeness score

## Support

For implementation questions:
1. Reference this guide
2. Check component documentation
3. Review schema definitions
4. Contact development team 