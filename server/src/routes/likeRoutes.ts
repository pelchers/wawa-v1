import express from 'express';
import * as likeController from '../controllers/likeController';
import { authenticate } from '../middlewares/auth';

const router = express.Router();

// Like an entity (requires authentication)
router.post('/', authenticate, likeController.likeEntity);

// Unlike an entity (requires authentication)
router.delete('/:entityType/:entityId', authenticate, likeController.unlikeEntity);

// Check if user has liked an entity (requires authentication)
router.get('/check', authenticate, likeController.checkLikeStatus);

// Get like count for an entity (public)
router.get('/count', likeController.getLikeCount);

export default router; 