import { Request, Response } from 'express';
import { marketingInteractionsService } from '../services/marketing-interactions';
import { MarketingPlanSection } from '@prisma/client';
import {
  CreateCommentRequest,
  CreateQuestionRequest,
  CreateLikeRequest,
  CreateApprovalRequest
} from '../types/marketing-interactions';

export const marketingInteractionsController = {
  // Comments
  getComments: async (req: Request, res: Response): Promise<void> => {
    try {
      const section = req.params.section as MarketingPlanSection;
      const result = await marketingInteractionsService.getComments(section);
      res.json(result);
    } catch (error) {
      console.error('Error getting comments:', error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to get comments'
      });
    }
  },

  addComment: async (req: Request, res: Response): Promise<void> => {
    try {
      const section = req.params.section as MarketingPlanSection;
      const { content } = req.body as CreateCommentRequest;
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({
          success: false,
          message: 'User not authenticated'
        });
        return;
      }

      const result = await marketingInteractionsService.addComment(userId, section, content);
      res.json(result);
    } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to add comment'
      });
    }
  },

  // Questions
  getQuestions: async (req: Request, res: Response): Promise<void> => {
    try {
      const section = req.params.section as MarketingPlanSection;
      const result = await marketingInteractionsService.getQuestions(section);
      res.json(result);
    } catch (error) {
      console.error('Error getting questions:', error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to get questions'
      });
    }
  },

  addQuestion: async (req: Request, res: Response): Promise<void> => {
    try {
      const section = req.params.section as MarketingPlanSection;
      const { content } = req.body as CreateQuestionRequest;
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({
          success: false,
          message: 'User not authenticated'
        });
        return;
      }

      const result = await marketingInteractionsService.addQuestion(userId, section, content);
      res.json(result);
    } catch (error) {
      console.error('Error adding question:', error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to add question'
      });
    }
  },

  answerQuestion: async (req: Request, res: Response): Promise<void> => {
    try {
      const questionId = req.params.id;
      const { answer } = req.body;
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({
          success: false,
          message: 'User not authenticated'
        });
        return;
      }

      const result = await marketingInteractionsService.answerQuestion(questionId, answer);
      res.json(result);
    } catch (error) {
      console.error('Error answering question:', error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to answer question'
      });
    }
  },

  // Likes
  getLikes: async (req: Request, res: Response): Promise<void> => {
    try {
      const section = req.params.section as MarketingPlanSection;
      const result = await marketingInteractionsService.getLikes(section);
      res.json(result);
    } catch (error) {
      console.error('Error getting likes:', error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to get likes'
      });
    }
  },

  toggleLike: async (req: Request, res: Response): Promise<void> => {
    try {
      const section = req.params.section as MarketingPlanSection;
      const { reaction } = req.body as CreateLikeRequest;
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({
          success: false,
          message: 'User not authenticated'
        });
        return;
      }

      const result = await marketingInteractionsService.toggleLike(userId, section, reaction);
      res.json(result);
    } catch (error) {
      console.error('Error toggling like:', error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to toggle like'
      });
    }
  },

  // Approvals
  getApprovals: async (req: Request, res: Response): Promise<void> => {
    try {
      const section = req.params.section as MarketingPlanSection;
      const result = await marketingInteractionsService.getApprovals(section);
      res.json(result);
    } catch (error) {
      console.error('Error getting approvals:', error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to get approvals'
      });
    }
  },

  submitApproval: async (req: Request, res: Response): Promise<void> => {
    try {
      const section = req.params.section as MarketingPlanSection;
      const { status, comments } = req.body as CreateApprovalRequest;
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({
          success: false,
          message: 'User not authenticated'
        });
        return;
      }

      const result = await marketingInteractionsService.submitApproval(userId, section, status, comments);
      res.json(result);
    } catch (error) {
      console.error('Error submitting approval:', error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to submit approval'
      });
    }
  }
}; 