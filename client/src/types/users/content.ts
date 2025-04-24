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