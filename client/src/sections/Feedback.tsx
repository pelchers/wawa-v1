import React, { useState } from 'react';
import { wawaTheme } from '../styles/wawa-theme';

const Feedback = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log({ rating, comment, suggestion });
    setSubmitted(true);
  };

  return (
    <section className={`${wawaTheme.tertiary} ${wawaTheme.section}`} id="feedback">
      <div className={wawaTheme.container}>
        <h2 className="text-display-md font-wawa-heading font-bold text-wawa-red-600 mb-8 text-center">
          Feedback
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-wawa-green-100 border border-wawa-green-500 text-wawa-green-700 p-8 rounded-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-wawa-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-heading-md font-wawa-heading font-bold mb-2">Thank You for Your Feedback!</h3>
              <p className="text-body-lg">Your input is valuable and will help us refine our marketing strategy.</p>
              <button 
                className="mt-6 bg-wawa-green-500 hover:bg-wawa-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 border border-wawa-black-100">
              <h3 className="text-heading-md font-wawa-heading font-bold text-wawa-black-800 mb-6">
                We Value Your Input
              </h3>
              
              {/* Rating */}
              <div className="mb-8">
                <label className="block text-wawa-black-700 font-medium mb-3">
                  Rate the Campaign (1-5 stars)
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                        rating && rating >= star 
                          ? 'bg-wawa-yellow-400 text-wawa-black-800' 
                          : 'bg-wawa-black-100 text-wawa-black-400'
                      } transition-colors`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Comments */}
              <div className="mb-6">
                <label htmlFor="comments" className="block text-wawa-black-700 font-medium mb-2">
                  Comments
                </label>
                <textarea
                  id="comments"
                  rows={4}
                  className="w-full border border-wawa-black-200 rounded-md p-3 focus:ring-2 focus:ring-wawa-red-500 focus:border-transparent"
                  placeholder="Please provide any additional comments or thoughts on the campaign strategy."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              
              {/* Suggestions */}
              <div className="mb-8">
                <label htmlFor="suggestions" className="block text-wawa-black-700 font-medium mb-2">
                  Suggestions
                </label>
                <textarea
                  id="suggestions"
                  rows={4}
                  className="w-full border border-wawa-black-200 rounded-md p-3 focus:ring-2 focus:ring-wawa-red-500 focus:border-transparent"
                  placeholder="Do you have any suggestions to improve the marketing strategy or execution?"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className={wawaTheme.buttonPrimary}
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          )}
          
          <div className="mt-8 text-center text-wawa-black-500 text-body-sm">
            <p>Your feedback will be compiled into a report and reviewed by the marketing team.</p>
            <p>Actionable suggestions will be incorporated into the final marketing plan.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback; 