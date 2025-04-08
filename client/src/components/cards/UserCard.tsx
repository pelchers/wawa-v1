import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../types/entities';
import { likeEntity, unlikeEntity, checkLikeStatus, getLikeCount } from '../../api/likes';
import { HeartIcon } from '../icons/HeartIcon';

// Component-specific types defined in the component file
interface UserCardProps {
  user: User;
  showActions?: boolean;
}

export default function UserCard({ user, showActions = true }: UserCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(user.likesCount || 0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if the user has already liked this entity
    const checkLiked = async () => {
      const liked = await checkLikeStatus('user', user.id);
      setIsLiked(liked);
    };
    
    if (showActions) {
      checkLiked();
    }
  }, [user.id, showActions]);

  const handleLikeClick = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      let newCount;
      
      if (isLiked) {
        // Unlike the user
        await unlikeEntity('user', user.id);
        newCount = await getLikeCount('user', user.id);
        setIsLiked(false);
      } else {
        // Like the user
        await likeEntity('user', user.id);
        newCount = await getLikeCount('user', user.id);
        setIsLiked(true);
      }
      
      // Update with the actual count from the server
      setLikeCount(newCount);
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-500">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <Link to={`/users/${user.id}`} className="font-medium hover:underline">
            {user.name}
          </Link>
          {user.email && (
            <p className="text-sm text-gray-500">{user.email}</p>
          )}
        </div>
        
        {showActions && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleLikeClick}
              disabled={isLoading}
              className="flex items-center gap-1 text-sm"
            >
              <HeartIcon filled={isLiked} />
              <span>{likeCount}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 