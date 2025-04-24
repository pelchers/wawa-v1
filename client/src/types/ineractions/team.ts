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