import express, { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/profileController';
import { authenticate } from '../middlewares/auth';

const router: Router = express.Router();

// Get current user's profile
router.get('/', authenticate as express.RequestHandler, getProfile as express.RequestHandler);

// Update current user's profile
router.put('/', authenticate as express.RequestHandler, updateProfile as express.RequestHandler);

export default router; 