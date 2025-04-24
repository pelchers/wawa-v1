// Re-export all types from their respective files
export * from './entities';
export * from './organization';

// Import and re-export interaction types
export * from '../ineractions/social';
export * from '../ineractions/team';
export * from '../ineractions/content';

// Content Types
export interface Article {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  status: 'planning' | 'active' | 'completed' | 'on-hold';
  startDate: Date;
  endDate?: Date;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  ownerId: string;
  status: 'draft' | 'active' | 'completed';
  startDate: Date;
  endDate?: Date;
}

export interface Proposal {
  id: string;
  title: string;
  content: string;
  ownerId: string;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  submittedAt?: Date;
  approvedAt?: Date;
}

// Social Types
export interface Connection {
  id: string;
  userId: string;
  connectedUserId: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

export interface Follow {
  id: string;
  followerId: string;
  followingId: string;
  createdAt: Date;
}

export interface Watch {
  id: string;
  userId: string;
  entityType: 'article' | 'project' | 'campaign' | 'proposal';
  entityId: string;
  createdAt: Date;
}

export interface Comment {
  id: string;
  userId: string;
  entityType: 'article' | 'project' | 'campaign' | 'proposal';
  entityId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Feedback {
  id: string;
  userId: string;
  entityType: 'article' | 'project' | 'campaign' | 'proposal';
  entityId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
}

// Team Types
export interface TeamMember {
  id: string;
  userId: string;
  teamId: string;
  role: 'member' | 'lead' | 'admin';
  joinedAt: Date;
  leftAt?: Date;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  assigneeId: string;
  status: 'todo' | 'in-progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Meeting {
  id: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  virtual: boolean;
  meetingLink?: string;
}

export interface Link {
  id: string;
  userId: string;
  type: 'website' | 'linkedin' | 'github' | 'twitter' | 'other';
  url: string;
  title?: string;
  primary: boolean;
} 