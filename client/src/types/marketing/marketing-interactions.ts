import { User } from '../auth';
import { Profile } from '../profile';
import { MarketingPlanSection } from './marketing-sections';

export { MarketingPlanSection };

// Enhanced user info for interactions
export interface InteractionUser extends User {
  profile?: Profile;
}

// Base interface for all interactions matching Prisma schema
export interface BaseInteraction {
  id: string;
  section: MarketingPlanSection;
  sectionId?: string;
  createdAt: string;
  userId: string;
  user: InteractionUser;
}

// Comment interface matching Prisma schema
export interface Comment extends BaseInteraction {
  content: string;
  updatedAt: string;
}

// Question interface matching Prisma schema
export interface Question extends BaseInteraction {
  content: string;
  answer?: string;
  updatedAt: string;
}

// Like interface matching Prisma schema
export interface Like extends BaseInteraction {
  reaction?: string;
}

// Approval interface matching Prisma schema
export interface Approval extends BaseInteraction {
  status: 'approved' | 'rejected' | 'pending';
  comments?: string;
  updatedAt: string;
}

// Enhanced response types with user context
export interface InteractionWithContext<T extends BaseInteraction> {
  interaction: T;
  userContext: {
    fullName: string;
    department?: string;
    role?: string;
    companyName?: string;
    yearsAtCompany?: number;
    yearsInRole?: number;
    yearsInDept?: number;
  };
}

// Response types for API calls
export interface InteractionsResponse {
  success: boolean;
  message: string;
  data?: {
    comments?: InteractionWithContext<Comment>[];
    questions?: InteractionWithContext<Question>[];
    likes?: InteractionWithContext<Like>[];
    approvals?: InteractionWithContext<Approval>[];
  };
}

// Request types for API calls
export interface CreateCommentRequest {
  content: string;
  section: MarketingPlanSection;
  sectionId?: string;
}

export interface CreateQuestionRequest {
  content: string;
  section: MarketingPlanSection;
  sectionId?: string;
}

export interface CreateLikeRequest {
  reaction?: string;
  section: MarketingPlanSection;
  sectionId?: string;
}

export interface CreateApprovalRequest {
  status: 'approved' | 'rejected' | 'pending';
  comments?: string;
  section: MarketingPlanSection;
  sectionId?: string;
} 