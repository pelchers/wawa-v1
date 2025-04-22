import express from 'express';

const router = express.Router();

// Simple route handlers without TypeScript errors
router.post('/register', (req, res) => {
  res.json({ 
    success: true, 
    message: 'User registered successfully',
    token: 'dummy-token-for-now',
    user: {
      id: 'dummy-id',
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
  });
});

router.post('/login', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Login successful',
    token: 'dummy-token-for-now',
    user: {
      id: 'dummy-id',
      email: req.body.email,
      firstName: 'Dummy',
      lastName: 'User'
    }
  });
});

router.get('/me', (req, res) => {
  res.json({
    success: true,
    message: 'Get current user endpoint working',
    user: {
      id: 'dummy-id',
      email: 'dummy@example.com',
      firstName: 'Dummy',
      lastName: 'User'
    }
  });
});

export default router; 