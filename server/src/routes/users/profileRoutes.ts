import { Router } from 'express';
import { profileController } from '../../controllers/users/profileController';
import { authMiddleware } from '../../middlewares/auth';
import { validateProfileUpdate, validateEducation, validateFullProfile } from '../../middlewares/validation/profile';

const router = Router();

/**
 * Base profile routes
 */
// Get profile - public route with optional auth for additional data
router.get(
  '/:userId/profile',
  authMiddleware.optional,
  profileController.getProfile
);

// Update profile section - requires authentication
router.patch(
  '/:userId/profile',
  authMiddleware.required,
  validateProfileUpdate,
  profileController.updateProfile
);

// Update full profile - requires authentication
router.put(
  '/:userId/profile/full',
  authMiddleware.required,
  validateFullProfile,
  profileController.updateFullProfile
);

/**
 * Education routes
 */
// Add education
router.post(
  '/:userId/profile/education',
  authMiddleware.required,
  validateEducation,
  profileController.addEducation
);

// Update education
router.patch(
  '/:userId/profile/education/:educationId',
  authMiddleware.required,
  validateEducation,
  profileController.updateEducation
);

// Delete education
router.delete(
  '/:userId/profile/education/:educationId',
  authMiddleware.required,
  profileController.deleteEducation
);

/**
 * Similar routes can be added for experience, accolades, references, etc.
 * following the same pattern as education above
 */

export default router;