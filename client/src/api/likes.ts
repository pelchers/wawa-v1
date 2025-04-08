import { getAuthHeaders } from '../utils/auth';

/**
 * API types specific to like functionality
 * Following our hybrid model, these are defined in the API file where they're used
 */
export interface LikeEntityRequest {
  entityType: 'user' | 'post' | 'comment';
  entityId: string;
}

export interface LikeEntityResponse {
  success: boolean;
  likeId?: string;
  count: number;
}

/**
 * Like an entity (user, post, comment)
 * 
 * @param entityType - Type of entity to like ('user', 'post', 'comment')
 * @param entityId - ID of the entity to like
 * @returns Promise with like result and updated count
 */
export const likeEntity = async (entityType: string, entityId: string): Promise<LikeEntityResponse> => {
  try {
    const response = await fetch(`/api/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeaders()
      },
      body: JSON.stringify({ entityType, entityId })
    });
    
    if (!response.ok) {
      throw new Error('Failed to like entity');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error liking entity:', error);
    throw error;
  }
};

/**
 * Unlike an entity (user, post, comment)
 * 
 * @param entityType - Type of entity to unlike ('user', 'post', 'comment')
 * @param entityId - ID of the entity to unlike
 * @returns Promise with unlike result and updated count
 */
export const unlikeEntity = async (entityType: string, entityId: string): Promise<LikeEntityResponse> => {
  try {
    const response = await fetch(`/api/likes/${entityType}/${entityId}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    
    if (!response.ok) {
      throw new Error('Failed to unlike entity');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error unliking entity:', error);
    throw error;
  }
};

/**
 * Check if the current user has liked an entity
 * 
 * @param entityType - Type of entity to check ('user', 'post', 'comment')
 * @param entityId - ID of the entity to check
 * @returns Promise with boolean indicating like status
 */
export const checkLikeStatus = async (entityType: string, entityId: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `/api/likes/check?entityType=${entityType}&entityId=${entityId}`,
      { headers: getAuthHeaders() }
    );
    
    if (!response.ok) {
      throw new Error('Failed to check like status');
    }
    
    const data = await response.json();
    return data.liked;
  } catch (error) {
    console.error('Error checking like status:', error);
    return false;
  }
};

/**
 * Get the like count for an entity
 * 
 * @param entityType - Type of entity to get count for ('user', 'post', 'comment')
 * @param entityId - ID of the entity to get count for
 * @returns Promise with the like count
 */
export const getLikeCount = async (entityType: string, entityId: string): Promise<number> => {
  try {
    const response = await fetch(
      `/api/likes/count?entityType=${entityType}&entityId=${entityId}`,
      { headers: getAuthHeaders() }
    );
    
    if (!response.ok) {
      throw new Error('Failed to get like count');
    }
    
    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error('Error getting like count:', error);
    return 0;
  }
}; 