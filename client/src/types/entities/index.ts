/**
 * Core entity types used throughout the application
 * Following our hybrid model, these are centralized here for reuse
 */

export interface User {
  id: string;
  name: string;
  email?: string;
  avatarUrl?: string;
  likesCount: number;
  followersCount?: number;
  followingCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  author?: User;
  likesCount: number;
  commentsCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  author?: User;
  postId: string;
  likesCount: number;
  createdAt?: string;
  updatedAt?: string;
}

// Common response type for paginated data
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
} 