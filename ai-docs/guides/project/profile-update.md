# Profile Update Flow Guide

This document outlines the complete flow for updating user profiles in our application, following our project's type organization and file communication conventions.

## 1. Type Definitions

### Database Schema (Prisma)

Our user model in Prisma schema already contains all the necessary fields:

```prisma
// server/prisma/schema.prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Basic Profile Information
  firstName      String?
  lastName       String?
  jobTitle       String?
  bio            String? @db.Text
  yearsAtCompany Int?
  yearsInDept    Int?
  yearsInRole    Int?

  // Company and Department Info
  companyName    String?
  companyRole    String?
  departmentName String?
  companyId      String?

  // Work Relationships
  reportsToEmail String?
  managerName    String?

  // Education and Experience
  title           String?
  institution     String?
  years           Int?
  references      String[]
  certifications  String[]
  skills          String[]
  achievements    String[]
  publications    String[]
  
  // Social and External Links
  links String[]

  // Relations to activities
  comments   Comment[]
  questions  Question[]
  likes      Like[]
  approvals  Approval[]
}
```

### Backend Types

```typescript
// server/src/types/profile.ts
export interface ProfileData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  bio?: string;
  yearsAtCompany?: number;
  yearsInDept?: number;
  yearsInRole?: number;
  companyName?: string;
  companyRole?: string;
  departmentName?: string;
  companyId?: string;
  reportsToEmail?: string;
  managerName?: string;
  title?: string;
  institution?: string;
  years?: number;
  references: string[];
  certifications: string[];
  skills: string[];
  achievements: string[];
  publications: string[];
  links: string[];
  createdAt: Date;
  updatedAt: Date;
}

// server/src/types/requests.ts
export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  bio?: string;
  yearsAtCompany?: number;
  yearsInDept?: number;
  yearsInRole?: number;
  companyName?: string;
  companyRole?: string;
  departmentName?: string;
  companyId?: string;
  reportsToEmail?: string;
  managerName?: string;
  title?: string;
  institution?: string;
  years?: number;
  references?: string[];
  certifications?: string[];
  skills?: string[];
  achievements?: string[];
  publications?: string[];
  links?: string[];
}
```

### Frontend Types

```typescript
// client/src/types/profile.ts
export interface Profile {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  bio?: string;
  yearsAtCompany?: number;
  yearsInDept?: number;
  yearsInRole?: number;
  companyName?: string;
  companyRole?: string;
  departmentName?: string;
  companyId?: string;
  reportsToEmail?: string;
  managerName?: string;
  title?: string;
  institution?: string;
  years?: number;
  references: string[];
  certifications: string[];
  skills: string[];
  achievements: string[];
  publications: string[];
  links: string[];
  createdAt: string;
  updatedAt: string;
}

// client/src/api/profile.ts
export interface ProfileResponse {
  success: boolean;
  message: string;
  profile?: Profile;
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  bio?: string;
  yearsAtCompany?: number;
  yearsInDept?: number;
  yearsInRole?: number;
  companyName?: string;
  companyRole?: string;
  departmentName?: string;
  companyId?: string;
  reportsToEmail?: string;
  managerName?: string;
  title?: string;
  institution?: string;
  years?: number;
  references?: string[];
  certifications?: string[];
  skills?: string[];
  achievements?: string[];
  publications?: string[];
  links?: string[];
}
```

## 2. Data Flow: Frontend to Backend to Database

### Frontend API

```typescript
// client/src/api/profile.ts
import { Profile, ProfileResponse, UpdateProfileRequest } from '../types/profile';

/**
 * Get the current user's profile
 */
export const getProfile = async (token: string): Promise<ProfileResponse> => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to fetch profile',
    };
  }
};

/**
 * Update the current user's profile
 */
export const updateProfile = async (token: string, profileData: UpdateProfileRequest): Promise<ProfileResponse> => {
  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to update profile',
    };
  }
};
```

### Backend Routes

```typescript
// server/src/routes/profileRoutes.ts
import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController';
import { authenticate } from '../middlewares/auth';

const router = express.Router();

// Get the current user's profile
router.get('/', authenticate, getProfile);

// Update the current user's profile
router.put('/', authenticate, updateProfile);

export default router;
```

### Backend Controller

```typescript
// server/src/controllers/profileController.ts
import { Request, Response } from 'express';
import * as profileService from '../services/profileService';
import { UpdateProfileRequest } from '../types/requests';

/**
 * Get the current user's profile
 */
export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authenticated' 
      });
    }

    const profile = await profileService.getProfileById(userId);
    
    return res.status(200).json({
      success: true,
      message: 'Profile retrieved successfully',
      profile
    });
  } catch (error) {
    console.error('Error getting profile:', error);
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Internal server error'
    });
  }
};

/**
 * Update the current user's profile
 */
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authenticated' 
      });
    }

    const profileData: UpdateProfileRequest = req.body;
    
    const updatedProfile = await profileService.updateProfile(userId, profileData);
    
    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      profile: updatedProfile
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Internal server error'
    });
  }
};
```

### Backend Service

```typescript
// server/src/services/profileService.ts
import { PrismaClient } from '@prisma/client';
import { ProfileData, UpdateProfileRequest } from '../types/profile';

const prisma = new PrismaClient();

/**
 * Get a user's profile by ID
 */
export const getProfileById = async (userId: string): Promise<ProfileData> => {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

/**
 * Update a user's profile
 */
export const updateProfile = async (
  userId: string, 
  profileData: UpdateProfileRequest
): Promise<ProfileData> => {
  // Validate any required fields or business rules here
  
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      jobTitle: profileData.jobTitle,
      bio: profileData.bio,
      yearsAtCompany: profileData.yearsAtCompany,
      yearsInDept: profileData.yearsInDept,
      yearsInRole: profileData.yearsInRole,
      companyName: profileData.companyName,
      companyRole: profileData.companyRole,
      departmentName: profileData.departmentName,
      companyId: profileData.companyId,
      reportsToEmail: profileData.reportsToEmail,
      managerName: profileData.managerName,
      title: profileData.title,
      institution: profileData.institution,
      years: profileData.years,
      references: profileData.references,
      certifications: profileData.certifications,
      skills: profileData.skills,
      achievements: profileData.achievements,
      publications: profileData.publications,
      links: profileData.links
    }
  });

  return updatedUser;
};
```

## 3. Frontend Components

### Profile Component

```tsx
// client/src/components/profile/Profile.tsx
import React, { useState, useEffect } from 'react';
import { getProfile } from '../../api/profile';
import { Profile as ProfileType } from '../../types/profile';
import ProfileEditModal from './ProfileEditModal';
import { useAuth } from '../../hooks/useAuth';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
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
  }, [token]);

  const handleProfileUpdate = (updatedProfile: ProfileType) => {
    setProfile(updatedProfile);
  };

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile data available</div>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>{profile.firstName} {profile.lastName}</h1>
        <button 
          className="edit-profile-button"
          onClick={() => setIsEditModalOpen(true)}
        >
          Edit Profile
        </button>
      </div>

      <div className="profile-details">
        {/* Basic Info */}
        <section className="profile-section">
          <h2>Basic Information</h2>
          <p><strong>Job Title:</strong> {profile.jobTitle || 'Not specified'}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Bio:</strong> {profile.bio || 'No bio available'}</p>
        </section>

        {/* Company Info */}
        <section className="profile-section">
          <h2>Company Information</h2>
          <p><strong>Company:</strong> {profile.companyName || 'Not specified'}</p>
          <p><strong>Role:</strong> {profile.companyRole || 'Not specified'}</p>
          <p><strong>Department:</strong> {profile.departmentName || 'Not specified'}</p>
          <p><strong>Years at Company:</strong> {profile.yearsAtCompany || 0}</p>
          <p><strong>Years in Department:</strong> {profile.yearsInDept || 0}</p>
          <p><strong>Years in Role:</strong> {profile.yearsInRole || 0}</p>
        </section>

        {/* Work Relationships */}
        <section className="profile-section">
          <h2>Work Relationships</h2>
          <p><strong>Reports To:</strong> {profile.managerName || 'Not specified'}</p>
          <p><strong>Manager Email:</strong> {profile.reportsToEmail || 'Not specified'}</p>
        </section>

        {/* Education & Experience */}
        <section className="profile-section">
          <h2>Education & Experience</h2>
          <p><strong>Title:</strong> {profile.title || 'Not specified'}</p>
          <p><strong>Institution:</strong> {profile.institution || 'Not specified'}</p>
          <p><strong>Years:</strong> {profile.years || 0}</p>
        </section>

        {/* Skills & Certifications */}
        <section className="profile-section">
          <h2>Skills & Certifications</h2>
          <div className="skills-list">
            <h3>Skills</h3>
            {profile.skills.length > 0 ? (
              <ul>
                {profile.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            ) : (
              <p>No skills listed</p>
            )}
          </div>
          <div className="certifications-list">
            <h3>Certifications</h3>
            {profile.certifications.length > 0 ? (
              <ul>
                {profile.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            ) : (
              <p>No certifications listed</p>
            )}
          </div>
        </section>

        {/* Achievements & Publications */}
        <section className="profile-section">
          <h2>Achievements & Publications</h2>
          <div className="achievements-list">
            <h3>Achievements</h3>
            {profile.achievements.length > 0 ? (
              <ul>
                {profile.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            ) : (
              <p>No achievements listed</p>
            )}
          </div>
          <div className="publications-list">
            <h3>Publications</h3>
            {profile.publications.length > 0 ? (
              <ul>
                {profile.publications.map((publication, index) => (
                  <li key={index}>{publication}</li>
                ))}
              </ul>
            ) : (
              <p>No publications listed</p>
            )}
          </div>
        </section>

        {/* Links */}
        <section className="profile-section">
          <h2>Links</h2>
          {profile.links.length > 0 ? (
            <ul className="links-list">
              {profile.links.map((link, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No links provided</p>
          )}
        </section>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <ProfileEditModal
          profile={profile}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleProfileUpdate}
        />
      )}
    </div>
  );
};

export default Profile;
```

### Profile Edit Modal

```tsx
// client/src/components/profile/ProfileEditModal.tsx
import React, { useState } from 'react';
import { Profile, UpdateProfileRequest } from '../../types/profile';
import { updateProfile } from '../../api/profile';
import { useAuth } from '../../hooks/useAuth';

interface ProfileEditModalProps {
  profile: Profile;
  onClose: () => void;
  onUpdate: (updatedProfile: Profile) => void;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ 
  profile, 
  onClose, 
  onUpdate 
}) => {
  const [formData, setFormData] = useState<UpdateProfileRequest>({
    firstName: profile.firstName || '',
    lastName: profile.lastName || '',
    jobTitle: profile.jobTitle || '',
    bio: profile.bio || '',
    yearsAtCompany: profile.yearsAtCompany || 0,
    yearsInDept: profile.yearsInDept || 0,
    yearsInRole: profile.yearsInRole || 0,
    companyName: profile.companyName || '',
    companyRole: profile.companyRole || '',
    departmentName: profile.departmentName || '',
    companyId: profile.companyId || '',
    reportsToEmail: profile.reportsToEmail || '',
    managerName: profile.managerName || '',
    title: profile.title || '',
    institution: profile.institution || '',
    years: profile.years || 0,
    references: profile.references || [],
    certifications: profile.certifications || [],
    skills: profile.skills || [],
    achievements: profile.achievements || [],
    publications: profile.publications || [],
    links: profile.links || []
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuth();

  // Handle text input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle number input changes
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseInt(value) || 0
    }));
  };

  // Handle array input changes (comma-separated)
  const handleArrayChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const arrayValues = value.split(',').map(item => item.trim());
    setFormData(prev => ({
      ...prev,
      [name]: arrayValues
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await updateProfile(token, formData);
      
      if (response.success && response.profile) {
        onUpdate(response.profile);
        onClose();
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

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Edit Profile</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="profile-form">
          {/* Basic Information */}
          <section className="form-section">
            <h3>Basic Information</h3>
            
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
              />
            </div>
          </section>
          
          {/* Company Information */}
          <section className="form-section">
            <h3>Company Information</h3>
            
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="companyRole">Company Role</label>
              <input
                type="text"
                id="companyRole"
                name="companyRole"
                value={formData.companyRole}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="departmentName">Department</label>
              <input
                type="text"
                id="departmentName"
                name="departmentName"
                value={formData.departmentName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyId">Company ID</label>
              <input
                type="text"
                id="companyId"
                name="companyId"
                value={formData.companyId}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="yearsAtCompany">Years at Company</label>
              <input
                type="number"
                id="yearsAtCompany"
                name="yearsAtCompany"
                value={formData.yearsAtCompany}
                onChange={handleNumberChange}
                min="0"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="yearsInDept">Years in Department</label>
              <input
                type="number"
                id="yearsInDept"
                name="yearsInDept"
                value={formData.yearsInDept}
                onChange={handleNumberChange}
                min="0"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="yearsInRole">Years in Role</label>
              <input
                type="number"
                id="yearsInRole"
                name="yearsInRole"
                value={formData.yearsInRole}
                onChange={handleNumberChange}
                min="0"
              />
            </div>
          </section>
          
          {/* Work Relationships */}
          <section className="form-section">
            <h3>Work Relationships</h3>
            
            <div className="form-group">
              <label htmlFor="managerName">Manager Name</label>
              <input
                type="text"
                id="managerName"
                name="managerName"
                value={formData.managerName}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="reportsToEmail">Manager Email</label>
              <input
                type="email"
                id="reportsToEmail"
                name="reportsToEmail"
                value={formData.reportsToEmail}
                onChange={handleChange}
              />
            </div>
          </section>
          
          {/* Education & Experience */}
          <section className="form-section">
            <h3>Education & Experience</h3>
            
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="institution">Institution</label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="years">Years</label>
              <input
                type="number"
                id="years"
                name="years"
                value={formData.years}
                onChange={handleNumberChange}
                min="0"
              />
            </div>
          </section>
          
          {/* Skills & Certifications */}
          <section className="form-section">
            <h3>Skills & Certifications</h3>
            
            <div className="form-group">
              <label htmlFor="skills">Skills (comma-separated)</label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills?.join(', ')}
                onChange={handleArrayChange}
                rows={3}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="certifications">Certifications (comma-separated)</label>
              <textarea
                id="certifications"
                name="certifications"
                value={formData.certifications?.join(', ')}
                onChange={handleArrayChange}
                rows={3}
              />
            </div>
          </section>
          
          {/* Achievements & Publications */}
          <section className="form-section">
            <h3>Achievements & Publications</h3>
            
            <div className="form-group">
              <label htmlFor="achievements">Achievements (comma-separated)</label>
              <textarea
                id="achievements"
                name="achievements"
                value={formData.achievements?.join(', ')}
                onChange={handleArrayChange}
                rows={3}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="publications">Publications (comma-separated)</label>
              <textarea
                id="publications"
                name="publications"
                value={formData.publications?.join(', ')}
                onChange={handleArrayChange}
                rows={3}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="references">References (comma-separated)</label>
              <textarea
                id="references"
                name="references"
                value={formData.references?.join(', ')}
                onChange={handleArrayChange}
                rows={3}
              />
            </div>
          </section>
          
          {/* Links */}
          <section className="form-section">
            <h3>Links</h3>
            
            <div className="form-group">
              <label htmlFor="links">Links (comma-separated)</label>
              <textarea
                id="links"
                name="links"
                value={formData.links?.join(', ')}
                onChange={handleArrayChange}
                rows={3}
              />
            </div>
          </section>
          
          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-button" 
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="save-button"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditModal;
```

## 4. Complete Flow Diagram

```
┌────────────────────┐     ┌────────────────────┐     ┌────────────────────┐
│  Type Definitions  │     │   Frontend Flow    │     │    Backend Flow    │
└──────────┬─────────┘     └──────────┬─────────┘     └──────────┬─────────┘
           │                          │                          │
           ▼                          ▼                          ▼
┌────────────────────┐     ┌────────────────────┐     ┌────────────────────┐
│  Profile Types     │     │ Profile Component  │     │ Profile Routes     │
└──────────┬─────────┘     └──────────┬─────────┘     └──────────┬─────────┘
           │                          │                          │
           ▼                          ▼                          ▼
┌────────────────────┐     ┌────────────────────┐     ┌────────────────────┐
│ UpdateProfileReq   │     │ ProfileEditModal   │     │ Profile Controller │
└──────────┬─────────┘     └──────────┬─────────┘     └──────────┬─────────┘
           │                          │                          │
           ▼                          ▼                          ▼
┌────────────────────┐     ┌────────────────────┐     ┌────────────────────┐
│ ProfileResponse    │     │ Profile API        │     │ Profile Service    │
└────────────────────┘     └──────────┬─────────┘     └──────────┬─────────┘
                                      │                          │
                                      │                          ▼
                                      │                ┌────────────────────┐
                                      └───────────────►│ Database (Prisma)  │
                                                       └────────────────────┘



## 5. Implementation Guide

Follow these steps to implement the profile update functionality in your application:

### 1. Create Type Definitions

First, create the necessary type definitions in the appropriate files:

- For frontend: `client/src/types/profile.ts`
- For backend: `server/src/types/profile.ts` and `server/src/types/requests.ts`

### 2. Backend Implementation

1. **Create Profile Service**

   Start by implementing the profile service functions that will interact with your database:

   ```
   cd /c:/Users/dev/projects/vrttpp/Marketing/wawa-v1/server/src
   mkdir -p services
   touch services/profileService.ts
   ```

   Add the service code as shown in the guide.

2. **Create Profile Controller**

   Next, implement the controller functions that will handle HTTP requests:

   ```
   mkdir -p controllers
   touch controllers/profileController.ts
   ```

   Add the controller code as shown in the guide.

3. **Set Up Routes**

   Create the routes file to define the API endpoints:

   ```
   mkdir -p routes
   touch routes/profileRoutes.ts
   ```

   Implement the routes as shown in the guide.

4. **Register Routes**

   In your main server file (usually `server.ts` or `app.ts`), register the new routes:

   ```typescript
   // server/src/app.ts or server.ts
   import profileRoutes from './routes/profileRoutes';
   
   // ... other imports and setup code
   
   app.use('/api/profile', profileRoutes);
   ```

### 3. Frontend Implementation

1. **Create API Functions**

   Implement the API functions to interact with your backend:

   ```
   cd /c:/Users/dev/projects/vrttpp/Marketing/wawa-v1/client/src
   mkdir -p api
   touch api/profile.ts
   ```

   Add the API code as shown in the guide.

2. **Create Profile Component**

   Create the main Profile component that displays user information:

   ```
   mkdir -p components/profile
   touch components/profile/Profile.tsx
   ```

   Implement the component as shown in the guide.

3. **Create Profile Edit Modal**

   Implement the modal component for editing profile information:

   ```
   touch components/profile/ProfileEditModal.tsx
   ```

   Add the code as shown in the guide.

4. **Add Profile Route**

   Update your application's routing to include the profile page:

   ```typescript
   // client/src/App.tsx or your routing file
   import Profile from './components/profile/Profile';
   
   // ... inside your router component
   <Route path="/profile" element={<Profile />} />
   ```

## 6. Testing the Implementation

To test your profile update functionality:

1. **Backend Testing**

   Test the API endpoints using a tool like Postman or cURL:

   ```bash
   # Get profile
   curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:4100/api/profile
   
   # Update profile
   curl -X PUT \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -d '{"firstName":"Updated","lastName":"Name"}' \
     http://localhost:4100/api/profile
   ```

2. **Frontend Testing**

   - Navigate to the profile page in your application
   - Verify that the user information is displayed correctly
   - Click "Edit Profile" and modify some fields
   - Submit the form and verify that the changes are saved and displayed

## 7. Security Considerations

1. **Authentication**: Ensure all profile routes are properly protected with authentication middleware.

2. **Input Validation**: Validate all user inputs on both client and server sides to prevent malicious data.

3. **Sensitive Data**: Never expose sensitive information like passwords through the profile API.

4. **CORS**: Configure CORS properly to ensure only authorized origins can access your API.

5. **Rate Limiting**: Consider implementing rate limiting to prevent abuse of your profile update API.

## 8. Performance Optimization

1. **Selective Updates**: In the backend service, consider only updating fields that have changed rather than sending the entire object.

2. **Caching**: Implement caching for profile data to reduce database load.

3. **Pagination**: If profile data includes large collections, implement pagination.

## 9. Accessibility Considerations

1. **Form Labels**: Ensure all form fields have proper labels for screen readers.

2. **Keyboard Navigation**: Make sure users can navigate the form using keyboard only.

3. **Error Messages**: Provide clear error messages that are accessible to screen readers.

4. **Focus Management**: When opening and closing the modal, manage focus correctly for keyboard users.

## 10. Future Enhancements

Consider these potential enhancements for the profile update functionality:

1. **Avatar Upload**: Add functionality for users to upload and update profile pictures.

2. **Multi-step Form**: For larger profiles, consider breaking the edit form into multiple steps.

3. **Auto-save**: Implement auto-saving for form fields as users type.

4. **Form Validation**: Add more sophisticated validation with helpful error messages.

5. **Change History**: Track and display a history of profile changes.

By following this guide, you'll have a complete profile update flow that follows the project's type organization and file communication conventions, allowing users to edit all fields from their profile.
```
