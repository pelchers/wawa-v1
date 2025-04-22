import express from 'express';
import { 
  getLikes,
  addLike,
  removeLike,
  getUserLikes 
} from '../controllers/likeController';
import { authenticate } from '../middlewares/auth';

const router = express.Router();

// Like an entity (requires authentication)
router.post('/', authenticate, async (req, res) => {
  try {
    await addLike(req, res);
    res.status(200).json({ message: 'Like added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add like' });
  }
});

// Unlike an entity (requires authentication)
router.delete('/:entityType/:entityId', authenticate, async (req, res) => {
  try {
    await removeLike(req, res);
    res.status(200).json({ message: 'Like removed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove like' });
  }
});

// Check if user has liked an entity (requires authentication)
router.get('/check', authenticate, async (req, res) => {
  try {
    const isLiked = await getUserLikes(req, res);
    res.json({ isLiked });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check like status' });
  }
});

// Get like count for an entity (public)
router.get('/count', async (req, res) => {
  try {
    const count = await getLikes(req, res);
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get like count' });
  }
});

export default router; 