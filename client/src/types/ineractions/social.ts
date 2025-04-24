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