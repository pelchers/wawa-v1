// This is a simplified version without a real database
// In a real app, you would use Prisma or another ORM

// In-memory storage for likes
const likes: Array<{
  id: string;
  userId: string;
  entityType: string;
  entityId: string;
  createdAt: Date;
}> = [];

// Generate a simple UUID
const generateId = () => Math.random().toString(36).substring(2, 15);

export const likeEntity = async (
  userId: string, 
  entityType: string, 
  entityId: string
) => {
  // Check if already liked
  const existingLike = likes.find(like => 
    like.userId === userId && 
    like.entityType === entityType && 
    like.entityId === entityId
  );
  
  if (existingLike) {
    throw new Error('Already liked');
  }
  
  // Create like
  const like = {
    id: generateId(),
    userId,
    entityType,
    entityId,
    createdAt: new Date()
  };
  
  likes.push(like);
  
  // Get updated count
  const count = await getLikeCount(entityType, entityId);
  
  return {
    success: true,
    likeId: like.id,
    count
  };
};

export const unlikeEntity = async (
  userId: string, 
  entityType: string, 
  entityId: string
) => {
  // Find the like
  const index = likes.findIndex(like => 
    like.userId === userId && 
    like.entityType === entityType && 
    like.entityId === entityId
  );
  
  if (index === -1) {
    throw new Error('Like not found');
  }
  
  // Remove the like
  likes.splice(index, 1);
  
  // Get updated count
  const count = await getLikeCount(entityType, entityId);
  
  return {
    success: true,
    count
  };
};

export const checkLikeStatus = async (
  userId: string, 
  entityType: string, 
  entityId: string
): Promise<boolean> => {
  return likes.some(like => 
    like.userId === userId && 
    like.entityType === entityType && 
    like.entityId === entityId
  );
};

export const getLikeCount = async (
  entityType: string, 
  entityId: string
): Promise<number> => {
  return likes.filter(like => 
    like.entityType === entityType && 
    like.entityId === entityId
  ).length;
}; 