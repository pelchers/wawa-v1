# Marketing Plan Interactions Implementation Guide

This guide outlines the step-by-step process for implementing likes, comments, questions, and approvals for the marketing plan sections.

## Overview

We'll implement interactive features for the marketing plan sections following our established file structure and conventions. We'll reuse existing user/profile types where possible and create new types specific to marketing interactions.

## Implementation Steps

### 1. Types Setup

#### 1.1 Frontend Types (`client/src/types/marketing-interactions.ts`)
```typescript
import { User } from './auth';
import { Profile } from './profile';
import { MarketingPlanSection } from './marketing';

// Enhanced user info for interactions
interface InteractionUser extends User {
  profile?: Profile;  // Include full profile information
}

// Base interface for all interactions
interface BaseInteraction {
  id: string;
  section: MarketingPlanSection;
  sectionId?: string;
  createdAt: string;
  userId: string;
  user: InteractionUser;  // Enhanced with profile information
}

export interface Comment extends BaseInteraction {
  content: string;
  updatedAt: string;
  // Additional user context fields
  userContext?: {
    department: string;
    role: string;
    yearsExperience: number;
  };
}

export interface Question extends BaseInteraction {
  content: string;
  answer?: string;
  updatedAt: string;
}

export interface Like extends BaseInteraction {
  reaction?: string;
}

export interface Approval extends BaseInteraction {
  status: 'approved' | 'rejected' | 'pending';
  comments?: string;
  updatedAt: string;
}

// Enhanced response types with user context
export interface InteractionWithContext {
  interaction: Comment | Question | Like | Approval;
  userContext: {
    fullName: string;
    department: string;
    role: string;
    companyName: string;
    yearsAtCompany: number;
  };
}

export interface InteractionsResponse {
  success: boolean;
  message: string;
  data?: {
    comments?: InteractionWithContext[];
    questions?: InteractionWithContext[];
    likes?: InteractionWithContext[];
    approvals?: InteractionWithContext[];
  };
}
```

#### 1.2 Backend Types (`server/src/types/marketing-interactions.ts`)
```typescript
import { MarketingPlanSection } from '@prisma/client';
import { ProfileData } from './profile';

// Reuse same interfaces as frontend but with ProfileData instead of User
export interface BaseInteraction {
  id: string;
  section: MarketingPlanSection;
  sectionId?: string;
  createdAt: Date;
  userId: string;
  user: ProfileData;
}

// Export same interfaces as frontend with Date instead of string for timestamps
```

### 2. API Integration

#### 2.1 Frontend API (`client/src/api/marketing-interactions.ts`)
```typescript
import { api } from './api';
import { InteractionsResponse } from '../types/marketing-interactions';

export const marketingInteractionsApi = {
  // Comments
  getComments: (section: string) => 
    api.get<InteractionsResponse>(`/marketing/comments/${section}`),
  addComment: (section: string, content: string) =>
    api.post<InteractionsResponse>(`/marketing/comments/${section}`, { content }),
  
  // Questions
  getQuestions: (section: string) =>
    api.get<InteractionsResponse>(`/marketing/questions/${section}`),
  addQuestion: (section: string, content: string) =>
    api.post<InteractionsResponse>(`/marketing/questions/${section}`, { content }),
  answerQuestion: (questionId: string, answer: string) =>
    api.put<InteractionsResponse>(`/marketing/questions/${questionId}/answer`, { answer }),
  
  // Likes
  getLikes: (section: string) =>
    api.get<InteractionsResponse>(`/marketing/likes/${section}`),
  toggleLike: (section: string, reaction?: string) =>
    api.post<InteractionsResponse>(`/marketing/likes/${section}`, { reaction }),
  
  // Approvals
  getApprovals: (section: string) =>
    api.get<InteractionsResponse>(`/marketing/approvals/${section}`),
  submitApproval: (section: string, status: string, comments?: string) =>
    api.post<InteractionsResponse>(`/marketing/approvals/${section}`, { status, comments })
};
```

### 3. Custom Hooks

#### 3.1 Enhanced Interaction Hooks (`client/src/hooks/useMarketingInteractions.ts`)
```typescript
import { useState, useCallback } from 'react';
import { marketingInteractionsApi } from '../api/marketing-interactions';
import { InteractionsResponse, InteractionWithContext } from '../types/marketing-interactions';
import { useAuth } from './useAuth';
import { useProfile } from './useProfile';

export const useMarketingInteractions = (section: string) => {
  const { user } = useAuth();
  const { profile } = useProfile();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<InteractionsResponse['data']>();

  // Helper to create user context
  const createUserContext = useCallback(() => ({
    fullName: `${profile?.firstName || ''} ${profile?.lastName || ''}`.trim(),
    department: profile?.departmentName || '',
    role: profile?.companyRole || '',
    companyName: profile?.companyName || '',
    yearsAtCompany: profile?.yearsAtCompany || 0
  }), [profile]);

  // Enhanced comment creation with user context
  const addComment = async (content: string) => {
    try {
      const userContext = createUserContext();
      const result = await marketingInteractionsApi.addComment(section, content, userContext);
      // Handle optimistic updates
      if (data?.comments) {
        setData({
          ...data,
          comments: [
            {
              interaction: {
                id: 'temp-id',
                content,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                section,
                userId: user?.id || '',
                user: { ...user, profile }
              },
              userContext
            },
            ...data.comments
          ]
        });
      }
      return result;
    } catch (err) {
      setError(err.message);
    }
  };

  // Implement hooks for each interaction type
  const fetchInteractions = useCallback(async () => {
    setLoading(true);
    try {
      const [comments, questions, likes, approvals] = await Promise.all([
        marketingInteractionsApi.getComments(section),
        marketingInteractionsApi.getQuestions(section),
        marketingInteractionsApi.getLikes(section),
        marketingInteractionsApi.getApprovals(section)
      ]);
      
      setData({
        comments: comments.data?.comments,
        questions: questions.data?.questions,
        likes: likes.data?.likes,
        approvals: approvals.data?.approvals
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [section]);

  // Add individual interaction handlers
  const addQuestion = async (content: string) => {/* implementation */};
  const toggleLike = async (reaction?: string) => {/* implementation */};
  const submitApproval = async (status: string, comments?: string) => {/* implementation */};

  return {
    loading,
    error,
    data,
    actions: {
      fetchInteractions,
      addComment,
      addQuestion,
      toggleLike,
      submitApproval
    }
  };
};
```

### 4. Components

Create reusable components in `client/src/components/marketing`:

#### 4.1 Component Structure
```
marketing/
  ├── interactions/
  │   ├── CommentSection.tsx
  │   ├── QuestionSection.tsx
  │   ├── LikeButton.tsx
  │   ├── ApprovalSection.tsx
  │   └── InteractionStats.tsx
  └── common/
      ├── InteractionCard.tsx
      └── InteractionForm.tsx
```

#### 4.2 Enhanced Comment Component (`client/src/components/marketing/interactions/CommentSection.tsx`)
```typescript
interface CommentCardProps {
  comment: InteractionWithContext;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const { interaction, userContext } = comment;
  
  return (
    <div className="comment-card">
      <div className="comment-header">
        <div className="user-info">
          <strong>{userContext.fullName}</strong>
          <span className="department">{userContext.department}</span>
          <span className="role">{userContext.role}</span>
          {userContext.yearsAtCompany > 0 && (
            <span className="experience">
              {userContext.yearsAtCompany} years at {userContext.companyName}
            </span>
          )}
        </div>
        <time>{new Date(interaction.createdAt).toLocaleDateString()}</time>
      </div>
      <div className="comment-content">{interaction.content}</div>
    </div>
  );
};
```

### 5. Page Integration

Update the home page to include interaction components:

#### 5.1 Home Page (`client/src/pages/home/index.tsx`)
```typescript
import { useMarketingInteractions } from '../../hooks/useMarketingInteractions';
import { CommentSection, QuestionSection, LikeButton, ApprovalSection } from '../../components/marketing/interactions';

const HomePage = () => {
  const { loading, error, data, actions } = useMarketingInteractions('FULL_PLAN');
  
  // Implement rendering logic
};
```

### 6. Backend Implementation

#### 6.1 Routes (`server/src/routes/marketing-interactions.ts`)
```typescript
import express from 'express';
import { marketingInteractionsController } from '../controllers/marketing-interactions';
import { authMiddleware } from '../middlewares/auth';

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Comments routes
router.get('/comments/:section', marketingInteractionsController.getComments);
router.post('/comments/:section', marketingInteractionsController.addComment);

// Questions routes
router.get('/questions/:section', marketingInteractionsController.getQuestions);
router.post('/questions/:section', marketingInteractionsController.addQuestion);
router.put('/questions/:id/answer', marketingInteractionsController.answerQuestion);

// Likes routes
router.get('/likes/:section', marketingInteractionsController.getLikes);
router.post('/likes/:section', marketingInteractionsController.toggleLike);

// Approvals routes
router.get('/approvals/:section', marketingInteractionsController.getApprovals);
router.post('/approvals/:section', marketingInteractionsController.submitApproval);

export default router;
```

#### 6.2 Controllers (`server/src/controllers/marketing-interactions.ts`)
```typescript
import { marketingInteractionsService } from '../services/marketing-interactions';
import { Request, Response } from 'express';

export const marketingInteractionsController = {
  // Implement controller methods for each route
  getComments: async (req: Request, res: Response) => {/* implementation */},
  addComment: async (req: Request, res: Response) => {/* implementation */},
  // ... other methods
};
```

#### 6.3 Services (`server/src/services/marketing-interactions.ts`)
```typescript
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const marketingInteractionsService = {
  // Implement service methods using Prisma
  getComments: async (section: string) => {/* implementation */},
  addComment: async (userId: string, section: string, content: string) => {/* implementation */},
  // ... other methods
};
```

## Implementation Notes

1. **Authentication**: All interactions require authentication. Reuse existing auth middleware.
2. **Real-time Updates**: Consider implementing WebSocket for real-time updates on interactions.
3. **Optimistic Updates**: Implement optimistic updates in the frontend for better UX.
4. **Error Handling**: Implement proper error handling and loading states.
5. **Validation**: Add validation for all user inputs.
6. **User Context Integration**:
   - All interactions automatically include relevant user profile information
   - User context is cached and updated with profile changes
   - Profile information enhances the credibility and context of interactions
   - Easy to extend with additional profile fields as needed
   - Consistent user information display across all interaction types

## Testing Strategy

1. Unit test each component
2. Integration test API endpoints
3. E2E test key user flows
4. Test error scenarios and edge cases

## Security Considerations

1. Validate user permissions for each action
2. Sanitize user input
3. Rate limit API endpoints
4. Implement CSRF protection
5. Validate section IDs and user ownership 