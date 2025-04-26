import express from 'express';
import { marketingInteractionsController } from '../controllers/marketing-interactions';
import { authenticate } from '../middlewares/auth';
import { z } from 'zod';

const router = express.Router();

// Apply auth middleware to all routes
router.use(authenticate as express.RequestHandler);

// Comments routes
router.get(
  '/comments/:section',
  marketingInteractionsController.getComments
);

router.post(
  '/comments/:section',
  marketingInteractionsController.addComment
);

// Questions routes
router.get(
  '/questions/:section',
  marketingInteractionsController.getQuestions
);

router.post(
  '/questions/:section',
  marketingInteractionsController.addQuestion
);

router.put(
  '/questions/:id/answer',
  marketingInteractionsController.answerQuestion
);

// Likes routes
router.get(
  '/likes/:section',
  marketingInteractionsController.getLikes
);

router.post(
  '/likes/:section',
  marketingInteractionsController.toggleLike
);

// Approvals routes
router.get(
  '/approvals/:section',
  marketingInteractionsController.getApprovals
);

router.post(
  '/approvals/:section',
  marketingInteractionsController.submitApproval
);

export default router; 