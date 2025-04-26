export { CommentSection } from '../components/marketing/interactions/CommentSection';
export { QuestionSection } from '../components/marketing/interactions/QuestionSection';
export { LikeButton } from '../components/marketing/interactions/LikeButton';
export { ApprovalSection } from '../components/marketing/interactions/ApprovalSection';
export { InteractionStats } from '../components/marketing/interactions/InteractionStats';

// Common components
export { InteractionCard } from '../components/marketing/common/InteractionCard';
export { InteractionForm } from '../components/marketing/common/InteractionForm';

// Types
export type {
  Comment,
  Question,
  Like,
  Approval,
  InteractionUser,
  BaseInteraction,
  InteractionWithContext,
  InteractionsResponse,
  CreateCommentRequest,
  CreateQuestionRequest,
  CreateLikeRequest,
  CreateApprovalRequest
} from '../types/marketing/marketing-interactions';

// Re-export MarketingPlanSection from its own file
export { MarketingPlanSection } from '../types/marketing/marketing-sections'; 