import React from 'react';
import { InteractionCard } from '../common/InteractionCard';
import { InteractionForm } from '../common/InteractionForm';
import { Comment, InteractionWithContext } from '../../../types/marketing-interactions';

interface CommentSectionProps {
  comments: InteractionWithContext<Comment>[];
  onAddComment: (content: string) => Promise<void>;
  isSubmitting?: boolean;
  className?: string;
}

export const CommentSection: React.FC<CommentSectionProps> = ({
  comments,
  onAddComment,
  isSubmitting = false,
  className = ''
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Comments</h3>
        <InteractionForm
          onSubmit={onAddComment}
          placeholder="Add a comment..."
          buttonText="Post Comment"
          isSubmitting={isSubmitting}
        />
      </div>

      <div className="space-y-4">
        {comments
          .filter(comment => comment?.interaction)
          .sort((a, b) => {
            const dateA = new Date(a?.interaction?.createdAt || 0);
            const dateB = new Date(b?.interaction?.createdAt || 0);
            return dateB.getTime() - dateA.getTime();
          })
          .map((comment) => (
            <InteractionCard
              key={comment.interaction.id}
              userContext={comment.userContext}
              timestamp={comment.interaction.createdAt}
            >
              <p className="text-gray-700 whitespace-pre-wrap">
                {comment.interaction.content}
              </p>
            </InteractionCard>
          ))}

        {comments.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No comments yet. Be the first to comment!
          </div>
        )}
      </div>
    </div>
  );
}; 