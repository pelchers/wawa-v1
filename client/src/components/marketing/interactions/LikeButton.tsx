import React, { useState } from 'react';
import { Like, InteractionWithContext } from '../../../types/marketing/marketing-interactions';

interface LikeButtonProps {
  likes: InteractionWithContext<Like>[];
  onToggleLike: (reaction?: string) => Promise<void>;
  currentUserId?: string;
  isSubmitting?: boolean;
  className?: string;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  likes,
  onToggleLike,
  currentUserId,
  isSubmitting = false,
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const userHasLiked = currentUserId && likes?.some(
    like => like?.interaction?.userId === currentUserId
  );

  const likeCount = likes?.length || 0;

  console.log('LikeButton render:', {
    userHasLiked,
    likeCount,
    currentUserId,
    likes
  });

  const handleClick = async () => {
    if (isLoading || isSubmitting) return;
    
    try {
      setIsLoading(true);
      console.log('Handling like click:', {
        userHasLiked,
        currentUserId
      });
      
      await onToggleLike();
    } catch (error) {
      console.error('Error in like button click:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonText = isLoading || isSubmitting ? 'Processing...' : (userHasLiked ? 'Liked' : 'Like');
  const buttonColor = userHasLiked ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700';
  const hoverColor = userHasLiked ? 'hover:bg-blue-600' : 'hover:bg-gray-200';

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={handleClick}
        disabled={isLoading || isSubmitting}
        className={`
          inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
          transition-colors duration-200 ease-in-out
          ${buttonColor}
          ${hoverColor}
          ${(isLoading || isSubmitting) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <svg
          className={`w-4 h-4 mr-1 ${userHasLiked ? 'text-white' : 'text-gray-500'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
        <span>{buttonText}</span>
      </button>
      
      {likeCount > 0 && (
        <div className="text-sm text-gray-500">
          {likeCount} {likeCount === 1 ? 'like' : 'likes'}
        </div>
      )}

      {likes?.length > 0 && (
        <div className="relative group">
          <button
            className="text-gray-400 hover:text-gray-600"
            title="View who liked this"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-lg shadow-lg p-2 text-sm hidden group-hover:block">
            <div className="text-gray-700">
              {likes.map(like => like?.userContext && (
                <div key={like.interaction.id} className="py-1">
                  {like.userContext.fullName}
                  {like.userContext.role && (
                    <span className="text-gray-500 text-xs ml-1">
                      ({like.userContext.role})
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 