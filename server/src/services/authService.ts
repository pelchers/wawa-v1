import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RegisterUserRequest, LoginUserRequest, JwtPayload } from '../types/auth';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || '2322'; // Default from .env.development

/**
 * Register a new user
 */
export const registerUser = async (userData: RegisterUserRequest): Promise<User> => {
  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: userData.email }
  });

  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  // Create the user
  const user = await prisma.user.create({
    data: {
      email: userData.email,
      password: hashedPassword,
      firstName: userData.firstName,
      lastName: userData.lastName
    }
  });

  return user;
};

/**
 * Login a user
 */
export const loginUser = async (credentials: LoginUserRequest): Promise<{ user: User; token: string }> => {
  // Find the user
  const user = await prisma.user.findUnique({
    where: { email: credentials.email }
  });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  // Check password
  const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  // Generate JWT token
  const token = generateToken(user);

  return { user, token };
};

/**
 * Generate JWT token
 */
export const generateToken = (user: User): string => {
  const payload: JwtPayload = {
    userId: user.id,
    email: user.email
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};

/**
 * Verify JWT token
 */
export const verifyToken = (token: string): JwtPayload => {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

/**
 * Get user by ID
 */
export const getUserById = async (userId: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { id: userId }
  });
}; 