import React, { useState } from 'react';

interface InteractionFormProps {
  onSubmit: (content: string) => Promise<void>;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  isSubmitting?: boolean;
}

export const InteractionForm: React.FC<InteractionFormProps> = ({
  onSubmit,
  placeholder = 'Write your message...',
  buttonText = 'Submit',
  className = '',
  isSubmitting = false
}) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || isSubmitting) return;

    try {
      await onSubmit(content.trim());
      setContent('');
    } catch (error) {
      console.error('Error submitting interaction:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex flex-col space-y-2">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          disabled={isSubmitting}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!content.trim() || isSubmitting}
            className={`
              px-4 py-2 text-sm font-medium text-white rounded-lg
              ${!content.trim() || isSubmitting
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              }
            `}
          >
            {isSubmitting ? 'Submitting...' : buttonText}
          </button>
        </div>
      </div>
    </form>
  );
}; 