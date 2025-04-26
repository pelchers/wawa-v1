import { MarketingPlanSection } from '@prisma/client';
import { ProfileData } from './profile';

// Base interface for all interactions matching Prisma schema
export interface BaseInteraction {
  id: string;
  section: MarketingPlanSection;
  sectionId: string | null;
  createdAt: Date;
  userId: string;
  user: ProfileData;
}

// Comment interface matching Prisma schema
export interface CommentData extends BaseInteraction {
  content: string;
  updatedAt: Date;  // Required for comments
}

// Question interface matching Prisma schema
export interface QuestionData extends BaseInteraction {
  content: string;
  answer: string | null;
  updatedAt: Date;  // Required for questions
}

// Like interface matching Prisma schema
export interface LikeData extends BaseInteraction {
  reaction: string | null;
  // No updatedAt field for likes as per Prisma schema
}

// Approval interface matching Prisma schema
export interface ApprovalData extends BaseInteraction {
  status: string;  // "approved", "rejected", "pending"
  comments: string | null;
  updatedAt: Date;  // Required for approvals
}

// Response types for API
export interface InteractionResponse {
  success: boolean;
  message: string;
  data?: {
    comments?: CommentData[];
    questions?: QuestionData[];
    likes?: LikeData[];
    approvals?: ApprovalData[];
  };
}

// Request types for API
export interface CreateCommentRequest {
  content: string;
  section: MarketingPlanSection;
  sectionId?: string | null;
}

export interface CreateQuestionRequest {
  content: string;
  section: MarketingPlanSection;
  sectionId?: string | null;
}

export interface CreateLikeRequest {
  reaction?: string | null;
  section: MarketingPlanSection;
  sectionId?: string | null;
}

export interface CreateApprovalRequest {
  status: 'approved' | 'rejected' | 'pending';
  comments?: string | null;
  section: MarketingPlanSection;
  sectionId?: string | null;
}

// Service response types
export interface InteractionServiceResponse {
  success: boolean;
  message: string;
  data?: CommentData | QuestionData | LikeData | ApprovalData;
}

export interface InteractionsServiceResponse {
  success: boolean;
  message: string;
  data?: {
    comments?: CommentData[];
    questions?: QuestionData[];
    likes?: LikeData[];
    approvals?: ApprovalData[];
  };
} 