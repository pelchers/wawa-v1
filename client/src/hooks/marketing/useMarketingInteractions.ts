import { useState, useCallback, useMemo } from 'react';
import { marketingInteractionsApi } from '../../api/marketing-interactions';
import { useAuth } from '../../contexts/AuthContext';
import { useProfile } from '../profile/useProfile';
import { 
  InteractionsResponse, 
  MarketingPlanSection,
  InteractionUser
} from '../../types/marketing/marketing-interactions';

export const useMarketingInteractions = (section: MarketingPlanSection) => {
  const { user } = useAuth();
  const { profile } = useProfile();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<InteractionsResponse['data']>();

  // Helper to create user context
  const createUserContext = useCallback(() => ({
    fullName: `${profile?.firstName || ''} ${profile?.lastName || ''}`.trim(),
    department: profile?.departmentName || '',
    role: profile?.companyRole || '',
    companyName: profile?.companyName || '',
    yearsAtCompany: profile?.yearsAtCompany || 0,
    yearsInRole: profile?.yearsInRole || 0,
    yearsInDept: profile?.yearsInDept || 0
  }), [profile]);

  // Helper to create interaction user
  const createInteractionUser = useCallback((): InteractionUser => {
    if (!user?.id) throw new Error('User not authenticated');
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      createdAt: user.createdAt || new Date().toISOString(),
      profile: profile || undefined
    };
  }, [user, profile]);

  // Fetch all interactions
  const fetchInteractions = useCallback(async () => {
    console.log('Fetching interactions for section:', section);
    setLoading(true);
    setError(null);
    try {
      const [comments, questions, likes, approvals] = await Promise.all([
        marketingInteractionsApi.getComments(section),
        marketingInteractionsApi.getQuestions(section),
        marketingInteractionsApi.getLikes(section),
        marketingInteractionsApi.getApprovals(section)
      ]);
      
      console.log('Fetched data:', { comments, questions, likes, approvals });
      
      setData({
        comments: comments.data?.comments,
        questions: questions.data?.questions,
        likes: likes.data?.likes,
        approvals: approvals.data?.approvals
      });
    } catch (err) {
      console.error('Error fetching interactions:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch interactions');
    } finally {
      setLoading(false);
    }
  }, [section]);

  // Like handlers
  const toggleLike = useCallback(async (reaction?: string): Promise<void> => {
    console.log('Toggling like for section:', section);
    if (!user?.id) {
      console.error('No user ID found');
      throw new Error('User not authenticated');
    }
    
    setError(null);
    try {
      const request = {
        reaction,
        section,
      };
      
      const userContext = createUserContext();
      console.log('Sending like request:', request);
      const result = await marketingInteractionsApi.toggleLike(request);
      console.log('Like result:', result);
      
      if (result.success) {
        // Refresh data after successful action
        await fetchInteractions();
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Error toggling like:', err);
      setError(err instanceof Error ? err.message : 'Failed to toggle like');
    }
  }, [section, user?.id, createUserContext, fetchInteractions]);

  // Comment handlers
  const addComment = useCallback(async (content: string): Promise<void> => {
    if (!user?.id) throw new Error('User not authenticated');
    try {
      const request = {
        content,
        section,
      };
      
      const userContext = createUserContext();
      const result = await marketingInteractionsApi.addComment(request);
      
      if (result.success) {
        await fetchInteractions();
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add comment');
    }
  }, [section, user?.id, createUserContext, fetchInteractions]);

  // Question handlers
  const addQuestion = useCallback(async (content: string): Promise<void> => {
    if (!user?.id) throw new Error('User not authenticated');
    try {
      const request = {
        content,
        section,
      };
      
      const userContext = createUserContext();
      const result = await marketingInteractionsApi.addQuestion(request);
      
      if (result.success) {
        await fetchInteractions();
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add question');
    }
  }, [section, user?.id, createUserContext, fetchInteractions]);

  const answerQuestion = useCallback(async (questionId: string, answer: string): Promise<void> => {
    try {
      const result = await marketingInteractionsApi.answerQuestion(questionId, answer);
      
      if (result.success) {
        await fetchInteractions();
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to answer question');
    }
  }, [fetchInteractions]);

  // Approval handlers
  const submitApproval = useCallback(async (status: 'approved' | 'rejected' | 'pending', comments?: string): Promise<void> => {
    if (!user?.id) throw new Error('User not authenticated');
    try {
      const request = {
        status,
        comments,
        section,
      };
      
      const result = await marketingInteractionsApi.submitApproval(request);
      
      if (result.success) {
        await fetchInteractions();
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit approval');
    }
  }, [section, user?.id, fetchInteractions]);

  // Cleanup function
  const cleanup = useCallback(() => {
    setData(undefined);
    setError(null);
    setLoading(false);
  }, []);

  // Memoize actions object to prevent unnecessary rerenders
  const actions = useMemo(() => ({
    fetchInteractions,
    addComment,
    addQuestion,
    answerQuestion,
    toggleLike,
    submitApproval,
    cleanup
  }), [
    fetchInteractions,
    addComment,
    addQuestion,
    answerQuestion,
    toggleLike,
    submitApproval,
    cleanup
  ]);

  return {
    loading,
    error,
    data,
    actions
  };
}; 