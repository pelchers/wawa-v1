import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile, updateProfile } from '../../api/profile';
import { Profile as ProfileType } from '../../types/profile';
import Profile from '../../components/profile/Profile';
import { useAuth } from '../../contexts/AuthContext';

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !token) {
      navigate('/auth/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getProfile(token);
        
        if (response.success && response.profile) {
          setProfile(response.profile);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Failed to load profile');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, isAuthenticated, navigate]);

  const handleUpdateProfile = async (updatedProfile: ProfileType) => {
    if (!token) {
      setError('Not authenticated');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const response = await updateProfile(token, updatedProfile);
      
      if (response.success && response.profile) {
        setProfile(response.profile);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Failed to update profile');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 text-red-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">No Profile Found</h2>
          <p>Unable to load profile data.</p>
        </div>
      </div>
    );
  }

  return <Profile user={profile} onUpdateProfile={handleUpdateProfile} />;
};

export default ProfilePage; 