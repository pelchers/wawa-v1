# Improved User Profile Edit System Guide

## Overview
This guide outlines the implementation of a profile viewing and editing system that maintains 1-1 organizational structure between display and edit views, following our schema and authorization patterns.

## Schema-Based Section Organization

### 1. Core User Information
```typescript
 interface UserCore {
  id: string;
  email: string;
  password: string; // Only for auth, not displayed/edited in profile
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

### 2. Professional Details
```typescript
interface UserProfessional {
  jobTitle?: string;
  bio?: string;
  yearsAtCompany?: number;
  yearsInDept?: number;
  yearsInRole?: number;
}
```

### 3. Company & Department
```typescript
interface UserOrganization {
  // Company
  companyId?: string;
  company?: Company;
  externalCompany?: string;
  
  // Department
  departmentId?: string;
  department?: Department;
  externalDepartment?: string;
}
```

### 4. Work Relationships
```typescript
interface UserWorkRelations {
  // Management Structure
  reportsTo?: User;
  managerId?: string;
  managerNameManual?: string;
  manages: User[];
}
```

### 5. Professional History
```typescript
interface UserHistory {
  // Education
  education: {
    id: string;
    institution: string;
    degree: string;
    field: string;
    startYear: number;
    endYear?: number;
    ongoing: boolean;
  }[];

  // Experience
  experience: {
    id: string;
    position: string;
    startDate: Date;
    endDate?: Date;
    current: boolean;
    description?: string;
    companyId?: string;
    company?: Company;
    externalCompany?: string;
  }[];

  // Accolades
  accolades: {
    id: string;
    title: string;
    issuer: string;
    dateReceived: Date;
    description?: string;
  }[];

  // References
  references: {
    id: string;
    internalUserId?: string;
    internalUser?: User;
    externalName?: string;
    externalEmail?: string;
    externalPhone?: string;
    relationship: string;
    position: string;
    company: string;
  }[];
}
```

### 6. Content Relationships
```typescript
interface UserContent {
  // Authored Content
  articles: Article[];
  projects: Project[];
  campaigns: Campaign[];
  proposals: Proposal[];

  // Contributed Content
  contributedArticles: Article[];
  contributedProjects: Project[];
  contributedCampaigns: Campaign[];
  contributedProposals: Proposal[];

  // Affiliated Content
  affiliatedArticles: Article[];
  affiliatedProjects: Project[];
  affiliatedCampaigns: Campaign[];
  affiliatedProposals: Proposal[];
}
```

### 7. Social & Team
```typescript
interface UserSocial {
  // Social Connections
  connections: Connection[];
  connectedWith: Connection[];
  followers: Follow[];
  following: Follow[];
  watches: Watch[];
  comments: Comment[];
  feedback: Feedback[];

  // Team
  teamMemberships: TeamMember[];
  taskAssignments: Task[];
  meetingAttendance: Meeting[];
  
  // Links
  links: Link[];
}
```

## File Structure Implementation

Following our cursor rules for type organization and file flow:

```plaintext
client/src/
├── types/
│   └── users/
│       ├── entities.ts       # Core type definitions
│       ├── requests.ts       # API request types
│       └── responses.ts      # API response types
├── api/
│   └── users/
│       └── profile.ts        # Profile API calls
├── components/
│   └── users/
│       ├── profile/
│       │   ├── ProfileView.tsx
│       │   └── sections/
│       │       ├── CoreInfo.tsx
│       │       ├── Professional.tsx
│       │       ├── Organization.tsx
│       │       ├── WorkRelations.tsx
│       │       ├── History.tsx
│       │       ├── Content.tsx
│       │       └── Social.tsx
│       └── edit/
│           ├── ProfileEdit.tsx
│           └── sections/
│               ├── CoreInfoEdit.tsx
│               ├── ProfessionalEdit.tsx
│               ├── OrganizationEdit.tsx
│               ├── WorkRelationsEdit.tsx
│               ├── HistoryEdit.tsx
│               ├── ContentEdit.tsx
│               └── SocialEdit.tsx
└── hooks/
    └── users/
        ├── useProfile.ts
        └── useProfileEdit.ts
```

## Type Definitions

### Frontend Types (client/src/types/users/entities.ts)
```typescript
// Core entity types following cursor rules
export interface User {
  id: string;
  email: string;
  password?: string; // Only for auth flows
  firstName?: string;
  lastName?: string;
  professional?: UserProfessional;
  organization?: UserOrganization;
  workRelations?: UserWorkRelations;
  history?: UserHistory;
  content?: UserContent;
  social?: UserSocial;
  createdAt: Date;
  updatedAt: Date;
}

// Component-specific types go in component files
```

### API Types (client/src/api/users/profile.ts)
```typescript
import { User } from '../../types/users/entities';

export interface ProfileUpdateRequest {
  section: 'core' | 'professional' | 'organization' | 'workRelations' | 'history' | 'content' | 'social';
  data: Partial<User>;
}

export interface ProfileResponse {
  success: boolean;
  data: User;
  message?: string;
}
```

## Backend Implementation

### Routes (server/src/routes/users/profileRoutes.ts)
```typescript
import { Router } from 'express';
import { profileController } from '../../controllers/users/profileController';
import { authMiddleware } from '../../middleware/auth';
import { validateProfileUpdate } from '../../middleware/validation/profile';

const router = Router();

// Get profile - public route with optional auth for additional data
router.get(
  '/:userId/profile',
  authMiddleware.optional,
  profileController.getProfile
);

// Update profile - requires authentication
router.patch(
  '/:userId/profile',
  authMiddleware.required,
  validateProfileUpdate,
  profileController.updateProfile
);

export default router;
```

### Controller (server/src/controllers/users/profileController.ts)
```typescript
import { Request, Response } from 'express';
import { profileService } from '../../services/users/profileService';
import { ProfileUpdateRequest } from '../../types/users/profile';

export const profileController = {
  async getProfile(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const currentUser = req.user;
      
      const profile = await profileService.getProfile(userId, currentUser?.id);
      
      return res.json({
        success: true,
        data: profile
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  },

  async updateProfile(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const currentUser = req.user;
      
      // Check if user can edit this profile
      if (currentUser?.id !== userId) {
        return res.status(403).json({
          success: false,
          message: 'Unauthorized to edit this profile'
        });
      }

      const updateData: ProfileUpdateRequest = req.body;
      const updated = await profileService.updateProfile(userId, updateData);
      
      return res.json({
        success: true,
        data: updated,
        message: 'Profile updated successfully'
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    }
  }
};
```

### Service (server/src/services/users/profileService.ts)
```typescript
import { PrismaClient } from '@prisma/client';
import { ProfileUpdateRequest } from '../../types/users/profile';

const prisma = new PrismaClient();

export const profileService = {
  async getProfile(userId: string, currentUserId?: string) {
    // Base include object for relations
    const includeRelations = {
      education: true,
      experience: true,
      accolades: true,
      references: true,
      company: true,
      department: true,
      reportsTo: true,
      manages: true,
      // Include other relations based on view permissions
      ...(currentUserId ? {
        connections: true,
        teamMemberships: true
      } : {})
    };

    return await prisma.user.findUnique({
      where: { id: userId },
      include: includeRelations
    });
  },

  async updateProfile(userId: string, updateData: ProfileUpdateRequest) {
    const { section, data } = updateData;

    // Handle different section updates
    switch (section) {
      case 'core':
        return await prisma.user.update({
          where: { id: userId },
          data: {
            firstName: data.firstName,
            lastName: data.lastName
          }
        });

      case 'professional':
        return await prisma.user.update({
          where: { id: userId },
          data: {
            jobTitle: data.professional?.jobTitle,
            bio: data.professional?.bio,
            yearsAtCompany: data.professional?.yearsAtCompany,
            yearsInDept: data.professional?.yearsInDept,
            yearsInRole: data.professional?.yearsInRole
          }
        });

      case 'organization':
        return await prisma.user.update({
          where: { id: userId },
          data: {
            companyId: data.organization?.companyId,
            externalCompany: data.organization?.externalCompany,
            departmentId: data.organization?.departmentId,
            externalDepartment: data.organization?.externalDepartment
          }
        });

      // Add other section update handlers
      default:
        throw new Error(`Invalid section: ${section}`);
    }
  }
};
```

### Validation Middleware (server/src/middleware/validation/profile.ts)
```typescript
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

// Validation schemas for each section
const coreSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional()
});

const professionalSchema = z.object({
  jobTitle: z.string().optional(),
  bio: z.string().optional(),
  yearsAtCompany: z.number().min(0).optional(),
  yearsInDept: z.number().min(0).optional(),
  yearsInRole: z.number().min(0).optional()
});

// Add other section schemas...

export const validateProfileUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { section, data } = req.body;

    switch (section) {
      case 'core':
        coreSchema.parse(data);
        break;
      case 'professional':
        professionalSchema.parse(data);
        break;
      // Add other section validations
    }

    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invalid data provided',
      errors: error instanceof z.ZodError ? error.errors : undefined
    });
  }
};
```

## Component Implementation

### View Components

```typescript
// components/users/profile/ProfileView.tsx
import { User } from '../../../types/users/entities';
import { CoreInfo, Professional, Organization, Contact } from './sections';

interface ProfileViewProps {
  user: User;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ user }) => {
  return (
    <div className="profile-view">
      <CoreInfo data={user} />
      <Professional data={user.professional} />
      <Organization data={user.organization} />
      <Contact data={user.contact} />
    </div>
  );
};
```

### Edit Components

```typescript
// components/users/edit/ProfileEdit.tsx
import { User } from '../../../types/users/entities';
import { useProfileEdit } from '../../../hooks/users/useProfileEdit';

interface ProfileEditProps {
  user: User;
}

export const ProfileEdit: React.FC<ProfileEditProps> = ({ user }) => {
  const { updateSection, isLoading } = useProfileEdit(user.id);

  return (
    <div className="profile-edit">
      <CoreInfoEdit 
        data={user} 
        onUpdate={(data) => updateSection('core', data)} 
      />
      <ProfessionalEdit 
        data={user.professional}
        onUpdate={(data) => updateSection('professional', data)}
      />
      {/* Other sections */}
    </div>
  );
};
```

## API Implementation

```typescript
// api/users/profile.ts
import { User, ProfileUpdateRequest, ProfileResponse } from '../../types';

export const profileApi = {
  getProfile: async (userId: string): Promise<ProfileResponse> => {
    const response = await fetch(`/api/users/${userId}/profile`);
    return response.json();
  },

  updateProfile: async (
    userId: string, 
    request: ProfileUpdateRequest
  ): Promise<ProfileResponse> => {
    const response = await fetch(`/api/users/${userId}/profile`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request)
    });
    return response.json();
  }
};
```

## Authorization Flow

```typescript
// hooks/users/useProfileEdit.ts
import { useAuth } from '../auth/useAuth';
import { profileApi } from '../../api/users/profile';

export const useProfileEdit = (userId: string) => {
  const { user: currentUser } = useAuth();
  
  const canEdit = currentUser?.id === userId;

  const updateSection = async (section, data) => {
    if (!canEdit) {
      throw new Error('Unauthorized to edit profile');
    }
    
    return await profileApi.updateProfile(userId, { section, data });
  };

  return { updateSection, canEdit };
};
```

## Section Components Pattern

Each section follows the same pattern for consistency:

```typescript
// components/users/profile/sections/CoreInfo.tsx
interface SectionProps {
  data: User;
}

export const CoreInfo: React.FC<SectionProps> = ({ data }) => {
  return (
    <section className="profile-section">
      <h2>Basic Information</h2>
      {/* Display fields */}
    </section>
  );
};

// components/users/edit/sections/CoreInfoEdit.tsx
interface EditSectionProps {
  data: User;
  onUpdate: (data: Partial<User>) => Promise<void>;
}

export const CoreInfoEdit: React.FC<EditSectionProps> = ({ data, onUpdate }) => {
  return (
    <section className="profile-section">
      <h2>Edit Basic Information</h2>
      {/* Edit form fields */}
    </section>
  );
};
```

## Implementation Steps

1. Define types matching schema
2. Create view components
3. Create edit components
4. Implement API layer
5. Add authorization
6. Style components
7. Add validation
8. Implement error handling

## Best Practices

1. Keep view/edit components parallel
2. Use consistent section patterns
3. Maintain type safety
4. Handle loading/error states
5. Implement proper validation
6. Follow authorization rules

## Testing Strategy

1. Unit test components
2. Test authorization flow
3. Validate API integration
4. Test error handling
5. Verify type safety

This improved guide maintains:
- 1-1 schema alignment
- Consistent section organization
- Type safety throughout
- Clear authorization rules
- Proper separation of concerns 