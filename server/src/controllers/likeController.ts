import { Request, Response } from 'express';
import * as likeService from '../services/likeService';

export const likeEntity = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    
    const { entityType, entityId } = req.body;
    
    if (!entityType || !entityId) {
      return res.status(400).json({ message: 'Entity type and ID are required' });
    }
    
    const result = await likeService.likeEntity(userId, entityType, entityId);
    res.status(201).json(result);
  } catch (error: any) {
    console.error('Error in likeEntity controller:', error);
    
    // Check for specific error types
    if (error.message === 'Already liked') {
      return res.status(409).json({ message: 'Entity already liked by user' });
    }
    
    res.status(500).json({ message: 'Failed to like entity' });
  }
};

export const unlikeEntity = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    
    const { entityType, entityId } = req.params;
    
    if (!entityType || !entityId) {
      return res.status(400).json({ message: 'Entity type and ID are required' });
    }
    
    const result = await likeService.unlikeEntity(userId, entityType, entityId);
    res.json(result);
  } catch (error) {
    console.error('Error in unlikeEntity controller:', error);
    res.status(500).json({ message: 'Failed to unlike entity' });
  }
};

export const checkLikeStatus = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    
    const { entityType, entityId } = req.query;
    
    if (!entityType || !entityId) {
      return res.status(400).json({ message: 'Entity type and ID are required' });
    }
    
    const liked = await likeService.checkLikeStatus(
      userId, 
      entityType as string, 
      entityId as string
    );
    
    res.json({ liked });
  } catch (error) {
    console.error('Error in checkLikeStatus controller:', error);
    res.status(500).json({ message: 'Failed to check like status' });
  }
};

export const getLikeCount = async (req: Request, res: Response) => {
  try {
    const { entityType, entityId } = req.query;
    
    if (!entityType || !entityId) {
      return res.status(400).json({ message: 'Entity type and ID are required' });
    }
    
    const count = await likeService.getLikeCount(
      entityType as string, 
      entityId as string
    );
    
    res.json({ count });
  } catch (error) {
    console.error('Error in getLikeCount controller:', error);
    res.status(500).json({ message: 'Failed to get like count' });
  }
}; 