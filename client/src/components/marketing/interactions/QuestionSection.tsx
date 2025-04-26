import React, { useState } from 'react';
import { InteractionCard } from '../common/InteractionCard';
import { InteractionForm } from '../common/InteractionForm';
import { Question, InteractionWithContext } from '../../../types/marketing-interactions';

interface QuestionSectionProps {
  questions: InteractionWithContext<Question>[];
  onAddQuestion: (content: string) => Promise<void>;
  onAnswerQuestion: (questionId: string, answer: string) => Promise<void>;
  isSubmitting?: boolean;
  className?: string;
  canAnswer?: boolean;
}

export const QuestionSection: React.FC<QuestionSectionProps> = ({
  questions = [],
  onAddQuestion,
  onAnswerQuestion,
  isSubmitting = false,
  className = '',
  canAnswer = false
}) => {
  const [answeringId, setAnsweringId] = useState<string | null>(null);

  const handleAnswer = async (questionId: string, answer: string) => {
    try {
      await onAnswerQuestion(questionId, answer);
      setAnsweringId(null);
    } catch (error) {
      console.error('Error answering question:', error);
    }
  };

  const validQuestions = questions.filter(q => 
    q && q.interaction && q.interaction.id && q.interaction.createdAt && q.userContext
  );

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions</h3>
        <InteractionForm
          onSubmit={onAddQuestion}
          placeholder="Ask a question..."
          buttonText="Post Question"
          isSubmitting={isSubmitting}
        />
      </div>

      <div className="space-y-4">
        {validQuestions.map((question) => (
          <div key={question.interaction.id} className="border rounded-lg p-4">
            <InteractionCard
              userContext={question.userContext}
              timestamp={question.interaction.createdAt}
            >
              <div className="space-y-4">
                <p className="text-gray-700 font-medium">
                  {question.interaction.content}
                </p>
                
                {question.interaction.answer && (
                  <div className="mt-4 pl-4 border-l-2 border-blue-200">
                    <p className="text-gray-600">
                      <span className="font-medium text-blue-600">Answer: </span>
                      {question.interaction.answer}
                    </p>
                  </div>
                )}

                {canAnswer && !question.interaction.answer && (
                  <div className="mt-4">
                    {answeringId === question.interaction.id ? (
                      <InteractionForm
                        onSubmit={(content) => handleAnswer(question.interaction.id, content)}
                        placeholder="Write your answer..."
                        buttonText="Submit Answer"
                        isSubmitting={isSubmitting}
                      />
                    ) : (
                      <button
                        onClick={() => setAnsweringId(question.interaction.id)}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Answer this question
                      </button>
                    )}
                  </div>
                )}
              </div>
            </InteractionCard>
          </div>
        ))}

        {validQuestions.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No questions yet. Be the first to ask!
          </div>
        )}
      </div>
    </div>
  );
}; 