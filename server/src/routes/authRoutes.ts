import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Register route
router.post('/register', (req, res) => {
  console.log('Register route hit', req.body);
  
  // Try to create a user in the database
  prisma.user.create({
    data: {
      email: req.body.email,
      password: req.body.password, // Note: In production, this should be hashed
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
  })
  .then(user => {
    console.log('User created successfully:', user);
    res.json({ 
      success: true, 
      message: 'User registered successfully',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  })
  .catch(error => {
    console.error('Error creating user:', error);
    res.status(400).json({ 
      success: false, 
      message: 'Error registering user',
      error: error.message
    });
  });
});

// Login route
router.post('/login', (req, res) => {
  console.log('Login route hit', req.body);
  
  // Find user by email
  prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    if (!user) {
      console.log('User not found:', req.body.email);
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }
    
    // In a real app, we would compare hashed passwords here
    if (user.password !== req.body.password) {
      console.log('Password mismatch for user:', req.body.email);
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }
    
    console.log('User logged in successfully:', user.id);
    res.json({ 
      success: true, 
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  })
  .catch(error => {
    console.error('Error during login:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error during login',
      error: error.message
    });
  });
});

// Get current user route
router.get('/me', (req, res) => {
  console.log('Get current user route hit');
  
  // In a real app, we would extract the user ID from a JWT token
  // For now, we'll just return a dummy response
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