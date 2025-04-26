import { PrismaClient, MarketingPlanSection } from '@prisma/client';
import {
  InteractionServiceResponse,
  InteractionsServiceResponse,
  CommentData,
  QuestionData,
  LikeData,
  ApprovalData
} from '../types/marketing-interactions';

const prisma = new PrismaClient();

export const marketingInteractionsService = {
  // Comments
  getComments: async (section: MarketingPlanSection): Promise<InteractionsServiceResponse> => {
    try {
      const comments = await prisma.comment.findMany({
        where: { section },
        include: {
          user: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return {
        success: true,
        message: 'Comments retrieved successfully',
        data: { comments: comments as CommentData[] }
      };
    } catch (error) {
      console.error('Error in getComments service:', error);
      throw error;
    }
  },

  addComment: async (
    userId: string,
    section: MarketingPlanSection,
    content: string
  ): Promise<InteractionServiceResponse> => {
    try {
      const comment = await prisma.comment.create({
        data: {
          content,
          section,
          userId
        },
        include: {
          user: true
        }
      });

      return {
        success: true,
        message: 'Comment added successfully',
        data: comment as CommentData
      };
    } catch (error) {
      console.error('Error in addComment service:', error);
      throw error;
    }
  },

  // Questions
  getQuestions: async (section: MarketingPlanSection): Promise<InteractionsServiceResponse> => {
    try {
      const questions = await prisma.question.findMany({
        where: { section },
        include: {
          user: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return {
        success: true,
        message: 'Questions retrieved successfully',
        data: { questions: questions as QuestionData[] }
      };
    } catch (error) {
      console.error('Error in getQuestions service:', error);
      throw error;
    }
  },

  addQuestion: async (
    userId: string,
    section: MarketingPlanSection,
    content: string
  ): Promise<InteractionServiceResponse> => {
    try {
      const question = await prisma.question.create({
        data: {
          content,
          section,
          userId
        },
        include: {
          user: true
        }
      });

      return {
        success: true,
        message: 'Question added successfully',
        data: question as QuestionData
      };
    } catch (error) {
      console.error('Error in addQuestion service:', error);
      throw error;
    }
  },

  answerQuestion: async (
    questionId: string,
    answer: string
  ): Promise<InteractionServiceResponse> => {
    try {
      const question = await prisma.question.update({
        where: { id: questionId },
        data: { answer },
        include: {
          user: true
        }
      });

      return {
        success: true,
        message: 'Question answered successfully',
        data: question as QuestionData
      };
    } catch (error) {
      console.error('Error in answerQuestion service:', error);
      throw error;
    }
  },

  // Likes
  getLikes: async (section: MarketingPlanSection): Promise<InteractionsServiceResponse> => {
    try {
      const likes = await prisma.like.findMany({
        where: { section },
        include: {
          user: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return {
        success: true,
        message: 'Likes retrieved successfully',
        data: { likes: likes as LikeData[] }
      };
    } catch (error) {
      console.error('Error in getLikes service:', error);
      throw error;
    }
  },

  toggleLike: async (
    userId: string,
    section: MarketingPlanSection,
    reaction?: string | null
  ): Promise<InteractionServiceResponse> => {
    try {
      // Check if user has already liked this section
      const existingLike = await prisma.like.findFirst({
        where: {
          userId,
          section
        }
      });

      if (existingLike) {
        // Remove like if it exists
        await prisma.like.delete({
          where: { id: existingLike.id }
        });

        return {
          success: true,
          message: 'Like removed successfully'
        };
      }

      // Add new like
      const like = await prisma.like.create({
        data: {
          reaction,
          section,
          userId
        },
        include: {
          user: true
        }
      });

      return {
        success: true,
        message: 'Like added successfully',
        data: like as LikeData
      };
    } catch (error) {
      console.error('Error in toggleLike service:', error);
      throw error;
    }
  },

  // Approvals
  getApprovals: async (section: MarketingPlanSection): Promise<InteractionsServiceResponse> => {
    try {
      const approvals = await prisma.approval.findMany({
        where: { section },
        include: {
          user: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return {
        success: true,
        message: 'Approvals retrieved successfully',
        data: { approvals: approvals as ApprovalData[] }
      };
    } catch (error) {
      console.error('Error in getApprovals service:', error);
      throw error;
    }
  },

  submitApproval: async (
    userId: string,
    section: MarketingPlanSection,
    status: 'approved' | 'rejected' | 'pending',
    comments?: string | null
  ): Promise<InteractionServiceResponse> => {
    try {
      const approval = await prisma.approval.create({
        data: {
          status,
          comments,
          section,
          userId
        },
        include: {
          user: true
        }
      });

      return {
        success: true,
        message: 'Approval submitted successfully',
        data: approval as ApprovalData
      };
    } catch (error) {
      console.error('Error in submitApproval service:', error);
      throw error;
    }
  }
}; 