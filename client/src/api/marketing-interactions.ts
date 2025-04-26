import { 
  InteractionsResponse, 
  CreateCommentRequest,
  CreateQuestionRequest,
  CreateLikeRequest,
  CreateApprovalRequest,
  MarketingPlanSection
} from '../types/marketing/marketing-interactions';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4100/api';

const handleResponse = async (response: Response): Promise<InteractionsResponse> => {
  const contentType = response.headers.get('content-type');
  const isJson = contentType && contentType.includes('application/json');
  const data = isJson ? await response.json() : null;

  if (!response.ok) {
    console.error('API Error:', {
      status: response.status,
      statusText: response.statusText,
      data
    });
    throw new Error(data?.message || `HTTP error! status: ${response.status}`);
  }

  return data;
};

export const marketingInteractionsApi = {
  // Comments
  getComments: async (section: MarketingPlanSection): Promise<InteractionsResponse> => {
    try {
      console.log('Fetching comments for section:', section);
      const response = await fetch(`${API_URL}/marketing/comments/${section}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      return await handleResponse(response);
    } catch (error) {
      console.error('Error fetching comments:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to fetch comments',
      };
    }
  },

  addComment: async (request: CreateCommentRequest): Promise<InteractionsResponse> => {
    try {
      const response = await fetch(`${API_URL}/marketing/comments/${request.section}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error adding comment:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to add comment',
      };
    }
  },

  // Questions
  getQuestions: async (section: MarketingPlanSection): Promise<InteractionsResponse> => {
    try {
      const response = await fetch(`${API_URL}/marketing/questions/${section}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching questions:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to fetch questions',
      };
    }
  },

  addQuestion: async (request: CreateQuestionRequest): Promise<InteractionsResponse> => {
    try {
      const response = await fetch(`${API_URL}/marketing/questions/${request.section}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error adding question:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to add question',
      };
    }
  },

  answerQuestion: async (questionId: string, answer: string): Promise<InteractionsResponse> => {
    try {
      const response = await fetch(`${API_URL}/marketing/questions/${questionId}/answer`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ answer }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error answering question:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to answer question',
      };
    }
  },

  // Likes
  getLikes: async (section: MarketingPlanSection): Promise<InteractionsResponse> => {
    try {
      const response = await fetch(`${API_URL}/marketing/likes/${section}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching likes:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to fetch likes',
      };
    }
  },

  toggleLike: async (request: CreateLikeRequest): Promise<InteractionsResponse> => {
    try {
      console.log('Sending like request:', request);
      const response = await fetch(`${API_URL}/marketing/likes/${request.section}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(request),
      });

      const result = await handleResponse(response);
      console.log('Like response:', result);
      return result;
    } catch (error) {
      console.error('Error toggling like:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to toggle like',
      };
    }
  },

  // Approvals
  getApprovals: async (section: MarketingPlanSection): Promise<InteractionsResponse> => {
    try {
      const response = await fetch(`${API_URL}/marketing/approvals/${section}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching approvals:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to fetch approvals',
      };
    }
  },

  submitApproval: async (request: CreateApprovalRequest): Promise<InteractionsResponse> => {
    try {
      const response = await fetch(`${API_URL}/marketing/approvals/${request.section}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error submitting approval:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to submit approval',
      };
    }
  },
}; 