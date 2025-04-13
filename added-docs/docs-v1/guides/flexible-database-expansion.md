# Flexible Database Expansion Guide

This guide explains how to expand your database schema without breaking existing functionality, allowing for platform-specific customizations and gradual feature additions.

## Table of Contents

- [Flexible Database Expansion Guide](#flexible-database-expansion-guide)
  - [Table of Contents](#table-of-contents)
  - [1. Understanding the Mega Schema Approach](#1-understanding-the-mega-schema-approach)
  - [2. Non-Breaking Schema Extension Strategies](#2-non-breaking-schema-extension-strategies)
    - [Strategy 1: Specialized Tables (this is a fallback strategy)](#strategy-1-specialized-tables-this-is-a-fallback-strategy)
    - [Strategy 2: Platform-Specific Extension Tables (this is the primary strategy)](#strategy-2-platform-specific-extension-tables-this-is-the-primary-strategy)
    - [Clarification on Extension Table Structure](#clarification-on-extension-table-structure)
    - [Implementing Form Conditional Logic](#implementing-form-conditional-logic)
    - [Database Implementation](#database-implementation)
  - [3. Implementation Examples](#3-implementation-examples)
    - [Creating Specialized Project Tables](#creating-specialized-project-tables)
    - [Adding Platform-Type Support](#adding-platform-type-support)
    - [Implementing Extension Tables in Detail](#implementing-extension-tables-in-detail)
    - [Implementing Project Extension Tables](#implementing-project-extension-tables)
  - [4. Integrating with Frontend Forms](#4-integrating-with-frontend-forms)
    - [Multi-Form Approach with Detailed Implementation](#multi-form-approach-with-detailed-implementation)
  - [5. Following the Conventional File Flow](#5-following-the-conventional-file-flow)
    - [Type Definitions](#type-definitions)
    - [Backend Implementation](#backend-implementation)
    - [Frontend Implementation](#frontend-implementation)
    - [Expanding Existing Site Flows](#expanding-existing-site-flows)
  - [6. Best Practices for Implementation](#6-best-practices-for-implementation)
    - [Handling Database Migrations](#handling-database-migrations)
    - [Conclusion](#conclusion)

## 1. Understanding the Mega Schema Approach

Our database uses a "mega schema" approach designed to be:

- **Broadly applicable** across many different types of projects
- **Comprehensive** with extensive fields for core entities (users, projects, articles, posts)
- **Extensible** through specialized subtables for specific use cases
- **Flexible** enough to adapt to various project requirements

The core tables (`users`, `projects`, `articles`, `posts`) contain common fields that apply to most use cases, while specialized tables handle specific functionality.

## 2. Non-Breaking Schema Extension Strategies

### Strategy 1: Specialized Tables (this is a fallback strategy)

Create specialized versions of core tables for specific use cases without modifying the original tables.

**Example: Project Types**

Instead of adding fields to the `projects` table for different project types, create specialized tables:

```prisma
// Original projects table remains unchanged
model projects {
  id              String    @id @default(uuid())
  user_id         String
  project_name    String?
  // ... existing fields
  
  users users @relation(fields: [user_id], references: [id], onDelete: Cascade)
  
  // Add relation to specialized tables
  creative_details project_creative?
  dev_details      project_development?
  
  @@map("projects")
}

// New specialized table for creative projects
model project_creative {
  id              String    @id @default(uuid())
  project_id      String    @unique // One-to-one with projects
  design_style    String?
  color_palette   String[]
  target_audience String?
  
  // Relation back to main projects table
  project         projects  @relation(fields: [project_id], references: [id], onDelete: Cascade)
  
  @@map("project_creative")
}

// New specialized table for development projects
model project_development {
  id              String    @id @default(uuid())
  project_id      String    @unique // One-to-one with projects
  repository_url  String?
  tech_stack      String[]
  deployment_url  String?
  
  // Relation back to main projects table
  project         projects  @relation(fields: [project_id], references: [id], onDelete: Cascade)
  
  @@map("project_development")
}
```

### Strategy 2: Platform-Specific Extension Tables (this is the primary strategy)

Use a `platform_types` table to define different platforms, then create extension tables for platform-specific fields.

> **Important Note:** In this context, "platform_type" refers to what the site is designed for (e.g., a scam investigation platform or a sponsorship negotiation site), not the type of user. The platform_type determines the overall purpose and feature set of the application, while user types (like investigator, journalist, creator, brand) represent roles within that platform.

```prisma
// Define platform types
model platform_types {
  id              String    @id @default(uuid())
  name            String    @unique // e.g., "scam_platform", "sponsorship_platform"
  description     String?
  
  // Relations to platform-specific extension tables
  user_fields     platform_user_fields[]
  project_fields  platform_project_fields[]
  
  @@map("platform_types")
}

// Platform-specific user fields
model platform_user_fields {
  id              String    @id @default(uuid())
  platform_id     String
  user_id         String
  
  // Platform-specific fields
  custom_field1   String?
  custom_field2   Int?
  preferences     Json?     // Flexible storage for platform-specific preferences
  
  // Relations
  platform        platform_types @relation(fields: [platform_id], references: [id])
  user            users @relation(fields: [user_id], references: [id], onDelete: Cascade)
  
  @@unique([platform_id, user_id]) // A user can only have one record per platform
  @@map("platform_user_fields")
}

// Platform-specific project fields
model platform_project_fields {
  id              String    @id @default(uuid())
  platform_id     String
  project_id      String
  
  // Platform-specific fields
  custom_field1   String?
  custom_field2   Int?
  metadata        Json?     // Flexible storage for platform-specific metadata
  
  // Relations
  platform        platform_types @relation(fields: [platform_id], references: [id])
  project         projects @relation(fields: [project_id], references: [id], onDelete: Cascade)
  
  @@unique([platform_id, project_id]) // A project can only have one record per platform
  @@map("platform_project_fields")
}
```

**In plain English:**
This approach creates a system where:
1. We define different "platform types" (like "creator", "agency", "freelancer") in a dedicated table
2. For each platform type, we can store custom fields in separate tables
3. These custom fields are linked to the main user or project through a relationship
4. This lets us add platform-specific fields without changing the main tables
5. It's like having optional "add-on forms" for each platform type that connect to the main form

**Key benefits:**
- The main tables (`users`, `projects`) remain unchanged, so existing code continues to work
- We can add as many platform-specific fields as needed without cluttering the main tables
- Each platform type can have completely different fields
- We can easily add new platform types without modifying the database structure

### Clarification on Extension Table Structure

Unlike the specialized tables approach (Strategy 1), with the platform-specific extension tables approach (Strategy 2), we use **a single extension table per entity type** (e.g., one for users, one for projects) that contains **all possible fields** for all platform types. This gives us maximum flexibility:

```prisma
// A single extension table for all user platform types
model platform_user_fields {
  id                      String    @id @default(uuid())
  platform_id             String
  user_id                 String
  platform_user_type      String?   // Sub-type within the platform (e.g., "investigator" within "scam_platform")
  
  // Creator-specific fields (for sponsorship_platform)
  content_categories      String[]  // For creators
  audience_size           Int?      // For creators
  content_platforms       String[]  // For creators
  
  // Brand-specific fields (for sponsorship_platform)
  industry                String?   // For brands
  target_markets          String[]  // For brands
  product_categories      String[]  // For brands
  
  // Freelancer/Contractor-specific fields (for sponsorship_platform)
  skills                  String[]  // For freelancers/contractors
  experience_years        Int?      // For freelancers/contractors
  availability_hours      Int?      // For freelancers/contractors
  
  // Investigator-specific fields (for scam_platform)
  investigation_areas     String[]  // For investigators
  credentials             String[]  // For investigators
  investigation_methods   String[]  // For investigators
  
  // Journalist-specific fields (for scam_platform)
  publication_affiliations String[] // For journalists
  reporting_specialties   String[]  // For journalists
  published_works         String[]  // For journalists
  
  // Archivist-specific fields (for scam_platform)
  archive_specialties     String[]  // For archivists
  archiving_tools         String[]  // For archivists
  preservation_methods    String[]  // For archivists
  
  // Reporter-specific fields (for scam_platform)
  reporting_regions       String[]  // For reporters
  languages               String[]  // For reporters
  reporting_mediums       String[]  // For reporters
  
  // Common fields that might apply to multiple user types
  portfolio_url           String?
  team_size               Int?
  
  // Relations
  platform                platform_types @relation(fields: [platform_id], references: [id])
  user                    users @relation(fields: [user_id], references: [id], onDelete: Cascade)
  
  @@unique([platform_id, user_id]) // A user can only have one record per platform
  @@map("platform_user_fields")
}
```

**In plain English:**
This approach:
1. Uses a **single extension table** for each main entity (users, projects, etc.)
2. Includes **all possible fields** for all platform types in that one table
3. Adds a `platform_user_type` or `platform_project_type` field to further categorize within a platform
4. Allows us to **mix and match fields** in forms based on both platform type and sub-type
5. Keeps the database structure simple while maintaining flexibility

**How this works in practice:**
- When a user selects "scam_platform" as their platform type, we create a record in `platform_user_fields`
- They can then select a more specific sub-type like "Investigator" or "Journalist" in the `platform_user_type` field
- Our forms show only the relevant fields based on both the platform type and sub-type
- All data is stored in the same extension table, with unused fields simply left as null
- This makes queries simpler since we only need to join with one extension table

### Implementing Form Conditional Logic

With this approach, our forms can dynamically show fields based on both platform type and sub-type:

```typescript
// client/src/components/forms/PlatformFieldsForm.tsx

function PlatformFieldsForm({ userId, platformType }) {
  const [subType, setSubType] = useState('');
  const [formData, setFormData] = useState({});
  
  // Define which fields to show based on platform type and sub-type
  const getVisibleFields = () => {
    const fields = [];
    
    // Fields based on platform type
    if (platformType === 'scam_platform') {
      fields.push('credentials'); // Common for all scam platform users
      
      // Additional fields based on sub-type
      if (subType === 'investigator') {
        fields.push('investigation_areas', 'investigation_methods');
      } else if (subType === 'journalist') {
        fields.push('publication_affiliations', 'reporting_specialties', 'published_works');
      } else if (subType === 'archivist') {
        fields.push('archive_specialties', 'archiving_tools', 'preservation_methods');
      } else if (subType === 'reporter') {
        fields.push('reporting_regions', 'languages', 'reporting_mediums');
      }
    } else if (platformType === 'sponsorship_platform') {
      fields.push('portfolio_url'); // Common for all sponsorship platform users
      
      // Additional fields based on sub-type
      if (subType === 'creator') {
        fields.push('content_categories', 'audience_size', 'content_platforms');
      } else if (subType === 'brand') {
        fields.push('industry', 'target_markets', 'product_categories');
      } else if (subType === 'freelancer' || subType === 'contractor') {
        fields.push('skills', 'experience_years', 'availability_hours');
      }
    }
    
    return fields;
  };
  
  return (
    <form>
      {/* Platform sub-type selection */}
      <div className="form-group">
        <label>I am specifically a:</label>
        <select value={subType} onChange={(e) => setSubType(e.target.value)}>
          {platformType === 'scam_platform' && (
            <>
              <option value="">Select type</option>
              <option value="investigator">Investigator</option>
              <option value="journalist">Journalist</option>
              <option value="archivist">Archivist</option>
              <option value="reporter">Reporter</option>
            </>
          )}
          {platformType === 'sponsorship_platform' && (
            <>
              <option value="">Select type</option>
              <option value="creator">Creator</option>
              <option value="brand">Brand</option>
              <option value="freelancer">Freelancer</option>
              <option value="contractor">Contractor</option>
            </>
          )}
        </select>
      </div>
      
      {/* Dynamically render form fields based on visible fields */}
      {getVisibleFields().includes('investigation_areas') && (
        <div className="form-group">
          <label>Investigation Areas</label>
          {/* Field input for investigation areas */}
        </div>
      )}
      
      {getVisibleFields().includes('content_categories') && (
        <div className="form-group">
          <label>Content Categories</label>
          {/* Field input for content categories */}
        </div>
      )}
      
      {/* Other conditional fields */}
      
      <button type="submit">Save</button>
    </form>
  );
}
```

### Database Implementation

When saving the form data, we store all fields in the same extension table:

```typescript
// server/src/services/platformService.ts

export const updatePlatformUserFields = async (
  userId: string,
  platformId: string,
  platformUserType: string,
  fieldData: any
) => {
  // Check if record exists
  const existing = await prisma.platform_user_fields.findUnique({
    where: {
      platform_id_user_id: {
        platform_id: platformId,
        user_id: userId,
      },
    },
  });
  
  // Prepare data object with all possible fields
  // Only the fields that were filled in the form will have values
  // The rest will be null or undefined and won't affect the database
  const data = {
    platform_user_type: platformUserType,
    
    // Scam platform fields
    investigation_areas: fieldData.investigation_areas,
    credentials: fieldData.credentials,
    investigation_methods: fieldData.investigation_methods,
    publication_affiliations: fieldData.publication_affiliations,
    reporting_specialties: fieldData.reporting_specialties,
    published_works: fieldData.published_works,
    archive_specialties: fieldData.archive_specialties,
    archiving_tools: fieldData.archiving_tools,
    preservation_methods: fieldData.preservation_methods,
    reporting_regions: fieldData.reporting_regions,
    languages: fieldData.languages,
    reporting_mediums: fieldData.reporting_mediums,
    
    // Sponsorship platform fields
    content_categories: fieldData.content_categories,
    audience_size: fieldData.audience_size,
    content_platforms: fieldData.content_platforms,
    industry: fieldData.industry,
    target_markets: fieldData.target_markets,
    product_categories: fieldData.product_categories,
    skills: fieldData.skills,
    experience_years: fieldData.experience_years,
    availability_hours: fieldData.availability_hours,
    
    // Common fields
    portfolio_url: fieldData.portfolio_url,
    team_size: fieldData.team_size,
  };
  
  if (existing) {
    // Update existing record
    return prisma.platform_user_fields.update({
      where: { id: existing.id },
      data,
    });
  } else {
    // Create new record
    return prisma.platform_user_fields.create({
      data: {
        platform_id: platformId,
        user_id: userId,
        ...data,
      },
    });
  }
};
```

This approach gives us the best of both worlds:
1. **Simplicity**: One extension table per entity type
2. **Flexibility**: Can show different fields based on platform type and sub-type
3. **Maintainability**: Easy to add new fields or platform types without schema changes
4. **Performance**: Simple joins with just one extension table
5. **Compatibility**: Existing code continues to work with the main tables

By using this strategy, we can create rich, customized experiences for different user types while maintaining a clean database structure and preserving compatibility with existing code.

## 3. Implementation Examples

> **Note:** While Strategy 1 (Specialized Tables) is useful for specific project types with very different requirements, Strategy 2 (Platform-Specific Extension Tables) is our primary approach for extending functionality without breaking existing code.

### Creating Specialized Project Tables

To add support for different project types:

1. **Create specialized tables** for each project type
2. **Add relations** to the main `projects` table
3. **Keep the original table unchanged** to maintain compatibility

```prisma
// Example: Adding a scam investigation project type
model project_scam_investigation {
  id                  String    @id @default(uuid())
  project_id          String    @unique
  scam_type           String?
  investigation_status String?
  evidence_links      String[]
  victim_count        Int?
  
  project             projects  @relation(fields: [project_id], references: [id], onDelete: Cascade)
  
  @@map("project_scam_investigation")
}
```

### Adding Platform-Type Support

To implement platform-specific customization:

1. **Add a platform_type field** to the users table
2. **Create a platform_types table** to define available platforms
3. **Create extension tables** for platform-specific fields

```prisma
// Modify the users table to add platform_type
model users {
  // ... existing fields
  
  // Add a reference to the platform type
  platform_type_id   String?
  platform_type      platform_types? @relation(fields: [platform_type_id], references: [id])
  
  // Add relation to platform-specific fields
  platform_fields    platform_user_fields[]
  
  // ... rest of the model
}

// Define platform types
model platform_types {
  id              String    @id @default(uuid())
  name            String    @unique // e.g., "scam_platform", "sponsorship_platform"
  description     String?
  
  // Relations
  users           users[]
  platform_user_fields platform_user_fields[]
  
  @@map("platform_types")
}
```

**In plain English:**
We're adding a new field to the users table that tells us what "type" of platform this user belongs to (scam_platform, sponsorship_platform, etc.). This is like adding a dropdown to a form that changes what other fields appear. We're also setting up a connection to those extra fields that will be stored in separate tables.

### Implementing Extension Tables in Detail

For a complete implementation of platform-specific fields:

```prisma
// A single extension table for all user platform types
model platform_user_fields {
  id                      String    @id @default(uuid())
  platform_id             String
  user_id                 String
  platform_user_type      String?   // Sub-type within the platform
  
  // Scam platform - Investigator fields
  investigation_areas     String[]
  credentials             String[]
  investigation_methods   String[]
  
  // Scam platform - Journalist fields
  publication_affiliations String[]
  reporting_specialties   String[]
  published_works         String[]
  
  // Scam platform - Archivist fields
  archive_specialties     String[]
  archiving_tools         String[]
  preservation_methods    String[]
  
  // Scam platform - Reporter fields
  reporting_regions       String[]
  languages               String[]
  reporting_mediums       String[]
  
  // Sponsorship platform - Creator fields
  content_categories      String[]
  audience_size           Int?
  content_platforms       String[]
  
  // Sponsorship platform - Brand fields
  industry                String?
  target_markets          String[]
  product_categories      String[]
  
  // Sponsorship platform - Freelancer/Contractor fields
  skills                  String[]
  experience_years        Int?
  availability_hours      Int?
  
  // Common fields
  portfolio_url           String?
  team_size               Int?
  
  // Relations
  platform                platform_types @relation(fields: [platform_id], references: [id])
  user                    users @relation(fields: [user_id], references: [id], onDelete: Cascade)
  
  @@unique([platform_id, user_id])
  @@map("platform_user_fields")
}
```

**In plain English:**
This table stores all the extra information we need for different types of users. Instead of creating separate tables for each user type, we put all possible fields in one table. When a user fills out their profile:

1. They first select their platform (scam_platform or sponsorship_platform)
2. Then they select their specific role (investigator, journalist, creator, brand, etc.)
3. Based on these selections, we show them only the relevant fields to fill out
4. All their data is stored in this one table, with unused fields left empty
5. This makes it easier to query and maintain the database

### Implementing Project Extension Tables

Similarly, we can create extension tables for projects:

```prisma
// A single extension table for all project platform types
model platform_project_fields {
  id                      String    @id @default(uuid())
  platform_id             String
  project_id              String
  platform_project_type   String?   // Sub-type within the platform
  
  // Scam platform - Investigation project fields
  scam_type               String?
  investigation_status    String?
  evidence_links          String[]
  victim_count            Int?
  scammer_details         Json?
  
  // Scam platform - Report project fields
  report_type             String?
  publication_status      String?
  sources                 String[]
  fact_checking_status    String?
  
  // Sponsorship platform - Campaign project fields
  campaign_objective      String?
  target_audience         String[]
  budget_range            String?
  timeline                String?
  deliverables            String[]
  
  // Sponsorship platform - Content project fields
  content_type            String?
  distribution_channels   String[]
  content_brief           String?
  brand_guidelines        String?
  
  // Common fields
  attachments             String[]
  external_links          String[]
  
  // Relations
  platform                platform_types @relation(fields: [platform_id], references: [id])
  project                 projects @relation(fields: [project_id], references: [id], onDelete: Cascade)
  
  @@unique([platform_id, project_id])
  @@map("platform_project_fields")
}
```

**In plain English:**
Just like with users, this table stores all the extra information for different types of projects. When a user creates a project:

1. The platform type is automatically determined based on the user's platform
2. They select what specific type of project they're creating
3. They see only the relevant fields for that project type
4. All project data is stored in this one table, with unused fields left empty
5. This keeps our database clean while allowing for very different project types

## 4. Integrating with Frontend Forms

### Multi-Form Approach with Detailed Implementation

The most flexible way to implement platform-specific forms is to create separate form components for each platform type and user/project sub-type:

```typescript
// client/src/components/forms/UserProfileForm.tsx

import { useState, useEffect } from 'react';
import { useUser } from '../../hooks/useUser';
import { updateUserProfile } from '../../api/users';
import ScamPlatformUserForm from './ScamPlatformUserForm';
import SponsorshipPlatformUserForm from './SponsorshipPlatformUserForm';

function UserProfileForm() {
  const { user, isLoading, refetch } = useUser();
  const [basicData, setBasicData] = useState({
    username: '',
    email: '',
    bio: '',
  });
  const [platformData, setPlatformData] = useState({});
  
  useEffect(() => {
    if (user) {
      setBasicData({
        username: user.username || '',
        email: user.email || '',
        bio: user.bio || '',
      });
      
      // Set platform-specific data if available
      if (user.platformFields) {
        setPlatformData(user.platformFields);
      }
    }
  }, [user]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // First update basic profile
      await updateUserProfile(user.id, basicData);
      
      // Then update platform-specific fields
      if (user.platformType) {
        if (user.platformType.name === 'scam_platform') {
          await updateScamPlatformFields(user.id, platformData);
        } else if (user.platformType.name === 'sponsorship_platform') {
          await updateSponsorshipPlatformFields(user.id, platformData);
        }
      }
      
      // Refresh user data
      refetch();
      
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };
  
  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Basic Information</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={basicData.username}
          onChange={(e) => setBasicData({...basicData, username: e.target.value})}
        />
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={basicData.email}
          onChange={(e) => setBasicData({...basicData, email: e.target.value})}
        />
      </div>
      
      <div className="form-group">
        <label>Bio</label>
        <textarea
          value={basicData.bio}
          onChange={(e) => setBasicData({...basicData, bio: e.target.value})}
        />
      </div>
      
      {/* Platform-specific forms */}
      {user.platformType?.name === 'scam_platform' && (
        <ScamPlatformUserForm
          userType={user.platformFields?.platform_user_type}
          initialData={platformData}
          onChange={setPlatformData}
        />
      )}
      
      {user.platformType?.name === 'sponsorship_platform' && (
        <SponsorshipPlatformUserForm
          userType={user.platformFields?.platform_user_type}
          initialData={platformData}
          onChange={setPlatformData}
        />
      )}
      
      <button type="submit">Save Profile</button>
    </form>
  );
}

// Platform-specific form components
function ScamPlatformUserForm({ userType, initialData, onChange }) {
  const [formData, setFormData] = useState(initialData || {});
  
  const handleChange = (field, value) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onChange(newData);
  };
  
  return (
    <div className="platform-specific-form">
      <h3>Scam Platform Information</h3>
      
      {/* User type selection */}
      <div className="form-group">
        <label>I am a:</label>
        <select
          value={formData.platform_user_type || userType || ''}
          onChange={(e) => handleChange('platform_user_type', e.target.value)}
        >
          <option value="">Select role</option>
          <option value="investigator">Investigator</option>
          <option value="journalist">Journalist</option>
          <option value="archivist">Archivist</option>
          <option value="reporter">Reporter</option>
        </select>
      </div>
      
      {/* Investigator fields */}
      {(formData.platform_user_type === 'investigator' || userType === 'investigator') && (
        <>
          <div className="form-group">
            <label>Investigation Areas</label>
            <input
              type="text"
              placeholder="e.g., financial, romance, cryptocurrency"
              value={formData.investigation_areas?.join(', ') || ''}
              onChange={(e) => handleChange('investigation_areas', e.target.value.split(', '))}
            />
          </div>
          
          <div className="form-group">
            <label>Credentials</label>
            <input
              type="text"
              placeholder="e.g., PI License, Certifications"
              value={formData.credentials?.join(', ') || ''}
              onChange={(e) => handleChange('credentials', e.target.value.split(', '))}
            />
          </div>
          
          <div className="form-group">
            <label>Investigation Methods</label>
            <input
              type="text"
              placeholder="e.g., OSINT, forensic analysis"
              value={formData.investigation_methods?.join(', ') || ''}
              onChange={(e) => handleChange('investigation_methods', e.target.value.split(', '))}
            />
          </div>
        </>
      )}
      
      {/* Journalist fields */}
      {(formData.platform_user_type === 'journalist' || userType === 'journalist') && (
        <>
          <div className="form-group">
            <label>Publication Affiliations</label>
            <input
              type="text"
              placeholder="e.g., NY Times, BBC"
              value={formData.publication_affiliations?.join(', ') || ''}
              onChange={(e) => handleChange('publication_affiliations', e.target.value.split(', '))}
            />
          </div>
          
          {/* Other journalist fields */}
        </>
      )}
      
      {/* Fields for other user types */}
    </div>
  );
}

function SponsorshipPlatformUserForm({ userType, initialData, onChange }) {
  // Similar implementation to ScamPlatformUserForm but with sponsorship-specific fields
  // ...
}
```

**In plain English:**
This code creates a profile form that:
1. Loads the user's basic information (username, email, bio) for everyone
2. Checks what "platform type" the user is (scam_platform, sponsorship_platform)
3. Based on the platform type, it shows different additional fields
4. When the form is submitted, it:
   - Saves the basic information to the main users table
   - Saves the platform-specific information to the platform_user_fields table
5. This approach keeps the forms organized and makes it easy to add new platform types

## 5. Following the Conventional File Flow

### Type Definitions

Following our conventional file flow, we need to define types at each level:

1. **Prisma Schema** (Database level)
   ```prisma
   // server/prisma/schema.prisma
   
   model platform_types {
     id              String    @id @default(uuid())
     name            String    @unique
     description     String?
     
     // Relations
     users           users[]
     platform_user_fields platform_user_fields[]
     
     @@map("platform_types")
   }
   
   model platform_user_fields {
     // ... fields as defined above
   }
   ```

2. **Backend Types** (Server level)
   ```typescript
   // server/src/types/entities.ts
   
   export interface PlatformType {
     id: string;
     name: string;
     description?: string;
   }
   
   export interface PlatformUserFields {
     id: string;
     platform_id: string;
     user_id: string;
     platform_user_type?: string;
     
     // Scam platform fields
     investigation_areas?: string[];
     credentials?: string[];
     investigation_methods?: string[];
     publication_affiliations?: string[];
     reporting_specialties?: string[];
     published_works?: string[];
     archive_specialties?: string[];
     archiving_tools?: string[];
     preservation_methods?: string[];
     reporting_regions?: string[];
     languages?: string[];
     reporting_mediums?: string[];
     
     // Sponsorship platform fields
     content_categories?: string[];
     audience_size?: number;
     content_platforms?: string[];
     industry?: string;
     target_markets?: string[];
     product_categories?: string[];
     skills?: string[];
     experience_years?: number;
     availability_hours?: number;
   }
   
   export interface UserWithPlatformFields extends User {
     platform_type?: PlatformType;
     platformFields?: PlatformUserFields;
   }
   ```

3. **Frontend Types** (Client level)
   ```typescript
   // client/src/types/entities.ts
   
   export interface PlatformType {
     id: string;
     name: string;
     description?: string;
   }
   
   export interface PlatformUserFields {
     id?: string;
     platform_user_type?: string;
     
     // Scam platform fields
     investigation_areas?: string[];
     credentials?: string[];
     investigation_methods?: string[];
     publication_affiliations?: string[];
     reporting_specialties?: string[];
     published_works?: string[];
     archive_specialties?: string[];
     archiving_tools?: string[];
     preservation_methods?: string[];
     reporting_regions?: string[];
     languages?: string[];
     reporting_mediums?: string[];
     
     // Sponsorship platform fields
     content_categories?: string[];
     audience_size?: number;
     content_platforms?: string[];
     industry?: string;
     target_markets?: string[];
     product_categories?: string[];
     skills?: string[];
     experience_years?: number;
     availability_hours?: number;
     
     // Common fields
     portfolio_url?: string;
     team_size?: number;
   }
   
   export interface User {
     id: string;
     username?: string;
     email: string;
     bio?: string;
     platform_type_id?: string;
     platform_type?: PlatformType;
     platformFields?: PlatformUserFields;
   }
   ```

### Backend Implementation

1. **Controllers** for handling platform-specific requests
   ```typescript
   // server/src/controllers/platformController.ts
   
   import { Request, Response } from 'express';
   import * as platformService from '../services/platformService';
   
   export const updatePlatformUserFields = async (req: Request, res: Response) => {
     try {
       const userId = req.params.userId;
       const { platformId, platformUserType, ...fieldData } = req.body;
       
       const result = await platformService.updatePlatformUserFields(
         userId,
         platformId,
         platformUserType,
         fieldData
       );
       
       res.json(result);
     } catch (error) {
       console.error('Error updating platform fields:', error);
       res.status(500).json({ error: 'Failed to update platform fields' });
     }
   };
   ```

2. **Services** for implementing business logic
   ```typescript
   // server/src/services/platformService.ts
   
   import { PrismaClient } from '@prisma/client';
   
   const prisma = new PrismaClient();
   
   export const updatePlatformUserFields = async (
     userId: string,
     platformId: string,
     platformUserType: string,
     fieldData: any
   ) => {
     // Check if record exists
     const existing = await prisma.platform_user_fields.findUnique({
       where: {
         platform_id_user_id: {
           platform_id: platformId,
           user_id: userId,
         },
       },
     });
     
     // Prepare data object with all possible fields
     const data = {
       platform_user_type: platformUserType,
       
       // Scam platform fields
       investigation_areas: fieldData.investigation_areas,
       credentials: fieldData.credentials,
       investigation_methods: fieldData.investigation_methods,
       publication_affiliations: fieldData.publication_affiliations,
       reporting_specialties: fieldData.reporting_specialties,
       published_works: fieldData.published_works,
       archive_specialties: fieldData.archive_specialties,
       archiving_tools: fieldData.archiving_tools,
       preservation_methods: fieldData.preservation_methods,
       reporting_regions: fieldData.reporting_regions,
       languages: fieldData.languages,
       reporting_mediums: fieldData.reporting_mediums,
       
       // Sponsorship platform fields
       content_categories: fieldData.content_categories,
       audience_size: fieldData.audience_size,
       content_platforms: fieldData.content_platforms,
       industry: fieldData.industry,
       target_markets: fieldData.target_markets,
       product_categories: fieldData.product_categories,
       skills: fieldData.skills,
       experience_years: fieldData.experience_years,
       availability_hours: fieldData.availability_hours,
       
       // Common fields
       portfolio_url: fieldData.portfolio_url,
       team_size: fieldData.team_size,
     };
     
     if (existing) {
       // Update existing record
       return prisma.platform_user_fields.update({
         where: { id: existing.id },
         data,
       });
     } else {
       // Create new record
       return prisma.platform_user_fields.create({
         data: {
           platform_id: platformId,
           user_id: userId,
           ...data,
         },
       });
     }
   };
   ```

3. **Routes** for defining API endpoints
   ```typescript
   // server/src/routes/platformRoutes.ts
   
   import express from 'express';
   import * as platformController from '../controllers/platformController';
   import { authenticate } from '../middleware/auth';
   
   const router = express.Router();
   
   router.post('/users/:userId/platform-fields', authenticate, platformController.updatePlatformUserFields);
   
   export default router;
   ```

### Frontend Implementation

1. **API Functions** for platform-specific operations
   ```typescript
   // client/src/api/platform.ts
   
   import { PlatformUserFields } from '../types/entities';
   import { getAuthHeaders } from '../utils/auth';
   
   export const updatePlatformUserFields = async (
     userId: string,
     platformId: string,
     platformUserType: string,
     fieldData: Partial<PlatformUserFields>
   ): Promise<PlatformUserFields> => {
     const response = await fetch(`/api/users/${userId}/platform-fields`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         ...getAuthHeaders(),
       },
       body: JSON.stringify({
         platformId,
         platformUserType,
         ...fieldData,
       }),
     });
     
     if (!response.ok) {
       throw new Error('Failed to update platform fields');
     }
     
     return await response.json();
   };
   ```

2. **Custom Hooks** for accessing platform-specific data
   ```typescript
   // client/src/hooks/useUserWithPlatformFields.ts
   
   import { useState, useEffect } from 'react';
   import { getUserWithPlatformFields } from '../api/users';
   import { UserWithPlatformFields } from '../types/entities';
   
   export const useUserWithPlatformFields = (userId: string) => {
     const [user, setUser] = useState<UserWithPlatformFields | null>(null);
     const [isLoading, setIsLoading] = useState<boolean>(true);
     const [error, setError] = useState<Error | null>(null);
     
     useEffect(() => {
       const fetchUser = async () => {
         try {
           setIsLoading(true);
           const userData = await getUserWithPlatformFields(userId);
           setUser(userData);
         } catch (err) {
           setError(err as Error);
         } finally {
           setIsLoading(false);
         }
       };
       
       fetchUser();
     }, [userId]);
     
     return { user, isLoading, error };
   };
   ```

### Expanding Existing Site Flows

To integrate platform-specific fields into existing site flows:

1. **User Registration Flow**
   ```typescript
   // client/src/components/auth/RegisterForm.tsx
   
   function RegisterForm() {
     const [step, setStep] = useState(1);
     const [userData, setUserData] = useState({
       username: '',
       email: '',
       password: '',
     });
     const [platformType, setPlatformType] = useState('');
     const [platformUserType, setPlatformUserType] = useState('');
     const [platformFields, setPlatformFields] = useState({});
     
     const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       
       if (step === 1) {
         // First step: basic user info and platform selection
         setStep(2);
       } else if (step === 2 && platformType) {
         // Second step: platform user type selection
         setStep(3);
       } else {
         // Final step: submit all data
         try {
           // Register the user with platform type
           const user = await registerUser({
             ...userData,
             platformTypeId: platformType,
           });
           
           // Save platform-specific fields
           await updatePlatformUserFields(
             user.id,
             platformType,
             platformUserType,
             platformFields
           );
           
           // Redirect to dashboard
           navigate('/dashboard');
         } catch (error) {
           console.error('Registration failed:', error);
         }
       }
     };
     
     return (
       <form onSubmit={handleSubmit}>
         {step === 1 && (
           // Step 1: Basic user info and platform selection
           <>
             <input
               type="text"
               placeholder="Username"
               value={userData.username}
               onChange={(e) => setUserData({...userData, username: e.target.value})}
             />
             <input
               type="email"
               placeholder="Email"
               value={userData.email}
               onChange={(e) => setUserData({...userData, email: e.target.value})}
             />
             <input
               type="password"
               placeholder="Password"
               value={userData.password}
               onChange={(e) => setUserData({...userData, password: e.target.value})}
             />
             
             <div className="platform-selection">
               <h3>I want to join:</h3>
               <div className="platform-options">
                 <button
                   type="button"
                   className={platformType === 'scam-platform-id' ? 'selected' : ''}
                   onClick={() => setPlatformType('scam-platform-id')}
                 >
                   Scam Platform
                 </button>
                 <button
                   type="button"
                   className={platformType === 'sponsorship-platform-id' ? 'selected' : ''}
                   onClick={() => setPlatformType('sponsorship-platform-id')}
                 >
                   Sponsorship Platform
                 </button>
               </div>
             </div>
             
             <button type="submit">Continue</button>
           </>
         )}
         
         {step === 2 && (
           // Step 2: Platform user type selection
           <>
             <h2>Tell us more about yourself</h2>
             
             {platformType === 'scam-platform-id' && (
               <div className="user-type-selection">
                 <h3>I am a:</h3>
                 <div className="user-type-options">
                   {['investigator', 'journalist', 'archivist', 'reporter'].map((type) => (
                     <button
                       key={type}
                       type="button"
                       className={platformUserType === type ? 'selected' : ''}
                       onClick={() => setPlatformUserType(type)}
                     >
                       {type.charAt(0).toUpperCase() + type.slice(1)}
                     </button>
                   ))}
                 </div>
               </div>
             )}
             
             {platformType === 'sponsorship-platform-id' && (
               <div className="user-type-selection">
                 <h3>I am a:</h3>
                 <div className="user-type-options">
                   {['creator', 'brand', 'freelancer', 'contractor'].map((type) => (
                     <button
                       key={type}
                       type="button"
                       className={platformUserType === type ? 'selected' : ''}
                       onClick={() => setPlatformUserType(type)}
                     >
                       {type.charAt(0).toUpperCase() + type.slice(1)}
                     </button>
                   ))}
                 </div>
               </div>
             )}
             
             <div className="form-actions">
               <button type="button" onClick={() => setStep(1)}>Back</button>
               <button type="submit">Continue</button>
             </div>
           </>
         )}
         
         {step === 3 && (
           // Step 3: Platform-specific fields
           <>
             <h2>Complete your profile</h2>
             
             {platformType === 'scam-platform-id' && platformUserType === 'investigator' && (
               <div className="platform-fields">
                 <div className="form-group">
                   <label>Investigation Areas</label>
                   <input
                     type="text"
                     placeholder="e.g., financial, romance, cryptocurrency"
                     onChange={(e) => setPlatformFields({
                       ...platformFields,
                       investigation_areas: e.target.value.split(', ')
                     })}
                   />
                 </div>
                 
                 <div className="form-group">
                   <label>Credentials</label>
                   <input
                     type="text"
                     placeholder="e.g., PI License, Certifications"
                     onChange={(e) => setPlatformFields({
                       ...platformFields,
                       credentials: e.target.value.split(', ')
                     })}
                   />
                 </div>
                 
                 {/* Other investigator fields */}
               </div>
             )}
             
             {/* Similar sections for other platform types and user types */}
             
             <div className="form-actions">
               <button type="button" onClick={() => setStep(2)}>Back</button>
               <button type="submit">Complete Registration</button>
             </div>
           </>
         )}
       </form>
     );
   }
   ```

   **In plain English:**
   This registration form works in three steps:
   1. First, the user enters their basic information and selects which platform they want to join
   2. Then, they select what specific role they have within that platform
   3. Finally, they fill out fields specific to their role
   4. When they submit the form, we save their basic info in the users table and their role-specific info in the platform_user_fields table

2. **Project Creation Flow**
   ```typescript
   // client/src/components/projects/CreateProjectPage.tsx
   
   function CreateProjectPage() {
     const { user } = useUser();
     const [basicData, setBasicData] = useState({
       project_name: '',
       description: '',
     });
     const [platformProjectType, setPlatformProjectType] = useState('');
     const [platformData, setPlatformData] = useState({});
     
     const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       
       try {
         // First, create the basic project
         const project = await createProject(basicData);
         
         // Then, save platform-specific fields
         if (user?.platform_type_id && platformProjectType) {
           await updatePlatformProjectFields(
             project.id,
             user.platform_type_id,
             platformProjectType,
             platformData
           );
         }
         
         // Redirect to project page
         navigate(`/projects/${project.id}`);
       } catch (error) {
         console.error('Failed to create project:', error);
       }
     };
     
     // Get available project types based on user's platform
     const getProjectTypes = () => {
       if (!user?.platform_type?.name) return [];
       
       if (user.platform_type.name === 'scam_platform') {
         return ['investigation', 'report', 'archive', 'analysis'];
       } else if (user.platform_type.name === 'sponsorship_platform') {
         return ['campaign', 'content', 'collaboration', 'event'];
       }
       
       return [];
     };
     
     return (
       <div className="create-project-page">
         <h1>Create New Project</h1>
         
         <form onSubmit={handleSubmit}>
           {/* Basic project information */}
           <div className="form-section">
             <h2>Basic Information</h2>
             
             <div className="form-group">
               <label>Project Name</label>
               <input
                 type="text"
                 value={basicData.project_name}
                 onChange={(e) => setBasicData({
                   ...basicData,
                   project_name: e.target.value
                 })}
                 required
               />
             </div>
             
             <div className="form-group">
               <label>Description</label>
               <textarea
                 value={basicData.description}
                 onChange={(e) => setBasicData({
                   ...basicData,
                   description: e.target.value
                 })}
               />
             </div>
           </div>
           
           {/* Project type selection */}
           <div className="form-section">
             <h2>Project Type</h2>
             
             <div className="project-type-selection">
               {getProjectTypes().map((type) => (
                 <button
                   key={type}
                   type="button"
                   className={platformProjectType === type ? 'selected' : ''}
                   onClick={() => setPlatformProjectType(type)}
                 >
                   {type.charAt(0).toUpperCase() + type.slice(1)}
                 </button>
               ))}
             </div>
           </div>
           
           {/* Platform-specific fields */}
           {platformProjectType && (
             <div className="form-section">
               <h2>Additional Information</h2>
               
               {user?.platform_type?.name === 'scam_platform' && platformProjectType === 'investigation' && (
                 <>
                   <div className="form-group">
                     <label>Scam Type</label>
                     <select
                       onChange={(e) => setPlatformData({
                         ...platformData,
                         scam_type: e.target.value
                       })}
                     >
                       <option value="">Select type</option>
                       <option value="financial">Financial</option>
                       <option value="romance">Romance</option>
                       <option value="cryptocurrency">Cryptocurrency</option>
                       <option value="identity_theft">Identity Theft</option>
                       <option value="other">Other</option>
                     </select>
                   </div>
                   
                   <div className="form-group">
                     <label>Investigation Status</label>
                     <select
                       onChange={(e) => setPlatformData({
                         ...platformData,
                         investigation_status: e.target.value
                       })}
                     >
                       <option value="new">New</option>
                       <option value="in_progress">In Progress</option>
                       <option value="gathering_evidence">Gathering Evidence</option>
                       <option value="ready_for_review">Ready for Review</option>
                     </select>
                   </div>
                   
                   {/* Other investigation fields */}
                 </>
               )}
               
               {user?.platform_type?.name === 'sponsorship_platform' && platformProjectType === 'campaign' && (
                 <>
                   <div className="form-group">
                     <label>Campaign Objective</label>
                     <select
                       onChange={(e) => setPlatformData({
                         ...platformData,
                         campaign_objective: e.target.value
                       })}
                     >
                       <option value="">Select objective</option>
                       <option value="brand_awareness">Brand Awareness</option>
                       <option value="lead_generation">Lead Generation</option>
                       <option value="sales">Sales</option>
                       <option value="engagement">Engagement</option>
                     </select>
                   </div>
                   
                   <div className="form-group">
                     <label>Target Audience</label>
                     <input
                       type="text"
                       placeholder="e.g., 18-24 year olds, tech enthusiasts"
                       onChange={(e) => setPlatformData({
                         ...platformData,
                         target_audience: e.target.value.split(', ')
                       })}
                     />
                   </div>
                   
                   {/* Other campaign fields */}
                 </>
               )}
               
               {/* Similar sections for other project types */}
             </div>
           )}
           
           <button type="submit" className="submit-button">Create Project</button>
         </form>
       </div>
     );
   }
   ```

   **In plain English:**
   This project creation form:
   1. First asks for basic project information (name, description)
   2. Then shows project type options based on the user's platform (investigation, report, etc. for scam platform; campaign, content, etc. for sponsorship platform)
   3. Finally shows fields specific to the selected project type
   4. When submitted, it creates a record in the projects table and another in the platform_project_fields table

3. **Profile Update Flow**
   ```typescript
   // client/src/components/profile/EditProfilePage.tsx
   
   function EditProfilePage() {
     const { user, isLoading } = useUserWithPlatformFields();
     const [basicData, setBasicData] = useState({
       username: '',
       email: '',
       bio: '',
     });
     const [platformFields, setPlatformFields] = useState({});
     
     // Initialize form with user data when loaded
     useEffect(() => {
       if (user) {
         setBasicData({
           username: user.username || '',
           email: user.email || '',
           bio: user.bio || '',
         });
         
         if (user.platformFields) {
           setPlatformFields(user.platformFields);
         }
       }
     }, [user]);
     
     const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       
       try {
         // Update basic user info
         await updateUserProfile(basicData);
         
         // Update platform-specific fields
         if (user?.platform_type_id) {
           await updatePlatformUserFields(
             user.id,
             user.platform_type_id,
             user.platformFields?.platform_user_type || '',
             platformFields
           );
         }
         
         // Show success message
         toast.success('Profile updated successfully');
       } catch (error) {
         console.error('Failed to update profile:', error);
         toast.error('Failed to update profile');
       }
     };
     
     if (isLoading) return <div>Loading...</div>;
     
     return (
       <div className="edit-profile-page">
         <h1>Edit Profile</h1>
         
         <form onSubmit={handleSubmit}>
           {/* Basic user information */}
           <div className="form-section">
             <h2>Basic Information</h2>
             
             <div className="form-group">
               <label>Username</label>
               <input
                 type="text"
                 value={basicData.username}
                 onChange={(e) => setBasicData({
                   ...basicData,
                   username: e.target.value
                 })}
               />
             </div>
             
             <div className="form-group">
               <label>Email</label>
               <input
                 type="email"
                 value={basicData.email}
                 onChange={(e) => setBasicData({
                   ...basicData,
                   email: e.target.value
                 })}
               />
             </div>
             
             <div className="form-group">
               <label>Bio</label>
               <textarea
                 value={basicData.bio}
                 onChange={(e) => setBasicData({
                   ...basicData,
                   bio: e.target.value
                 })}
               />
             </div>
           </div>
           
           {/* Platform-specific fields */}
           {user?.platform_type?.name === 'scam_platform' && (
             <div className="form-section">
               <h2>Scam Platform Information</h2>
               
               {user.platformFields?.platform_user_type === 'investigator' && (
                 <>
                   <div className="form-group">
                     <label>Investigation Areas</label>
                     <input
                       type="text"
                       value={platformFields.investigation_areas?.join(', ') || ''}
                       onChange={(e) => setPlatformFields({
                         ...platformFields,
                         investigation_areas: e.target.value.split(', ')
                       })}
                     />
                   </div>
                   
                   {/* Other investigator fields */}
                 </>
               )}
               
               {/* Similar sections for other user types */}
             </div>
           )}
           
           {user?.platform_type?.name === 'sponsorship_platform' && (
             <div className="form-section">
               <h2>Sponsorship Platform Information</h2>
               
               {user.platformFields?.platform_user_type === 'creator' && (
                 <>
                   <div className="form-group">
                     <label>Content Categories</label>
                     <input
                       type="text"
                       value={platformFields.content_categories?.join(', ') || ''}
                       onChange={(e) => setPlatformFields({
                         ...platformFields,
                         content_categories: e.target.value.split(', ')
                       })}
                     />
                   </div>
                   
                   {/* Other creator fields */}
                 </>
               )}
               
               {/* Similar sections for other user types */}
             </div>
           )}
           
           <button type="submit" className="submit-button">Save Changes</button>
         </form>
       </div>
     );
   }
   ```

   **In plain English:**
   This profile editing form:
   1. Loads the user's existing data (both basic info and platform-specific fields)
   2. Shows different sections based on the user's platform type and role
   3. When submitted, it updates both the users table and the platform_user_fields table
   4. This allows users to edit all their information in one place, even though it's stored in different tables

## 6. Best Practices for Implementation

1. **Keep core tables stable**: Avoid modifying existing tables that are already in use
2. **Use relations for extensions**: Link specialized tables to core tables with clear relationships
3. **Follow naming conventions**: Use consistent naming for related tables (e.g., `platform_user_fields`, `platform_project_fields`)
4. **Document relationships**: Clearly document how specialized tables relate to core tables
5. **Use transactions**: When updating multiple tables, use transactions to ensure data consistency
6. **Validate data integrity**: Ensure that related records exist before creating extension records
7. **Consider performance**: Be mindful of join performance when querying across multiple tables
8. **Use migrations carefully**: Create and test migrations thoroughly before applying them
9. **Update types throughout the stack**: When adding new tables or fields, update types at all levels
10. **Maintain backward compatibility**: Ensure existing code continues to work with schema extensions

### Handling Database Migrations

When implementing these extension tables, follow these migration best practices:

1. **Create the platform_types table first**:
   ```sql
   -- Create platform_types table
   CREATE TABLE "platform_types" (
     "id" TEXT NOT NULL,
     "name" TEXT NOT NULL,
     "description" TEXT,
     PRIMARY KEY ("id")
   );
   
   -- Add unique constraint on name
   CREATE UNIQUE INDEX "platform_types_name_key" ON "platform_types"("name");
   
   -- Insert initial platform types
   INSERT INTO "platform_types" ("id", "name", "description") 
   VALUES 
     ('scam-platform-id', 'scam_platform', 'Platform for scam investigation and reporting'),
     ('sponsorship-platform-id', 'sponsorship_platform', 'Platform for connecting creators and brands');
   ```

2. **Add the platform_type_id field to the users table**:
   ```sql
   -- Add platform_type_id to users table
   ALTER TABLE "users" ADD COLUMN "platform_type_id" TEXT;
   
   -- Add foreign key constraint
   ALTER TABLE "users" ADD CONSTRAINT "users_platform_type_id_fkey"
     FOREIGN KEY ("platform_type_id") REFERENCES "platform_types"("id") ON DELETE SET NULL;
   ```

3. **Create the extension tables**:
   ```sql
   -- Create platform_user_fields table
   CREATE TABLE "platform_user_fields" (
     "id" TEXT NOT NULL,
     "platform_id" TEXT NOT NULL,
     "user_id" TEXT NOT NULL,
     "platform_user_type" TEXT,
     -- Add all possible fields for all platform types
     -- Scam platform fields
     "investigation_areas" TEXT[],
     "credentials" TEXT[],
     -- ... other fields
     -- Sponsorship platform fields
     "content_categories" TEXT[],
     "audience_size" INTEGER,
     -- ... other fields
     -- Common fields
     "portfolio_url" TEXT,
     "team_size" INTEGER,
     PRIMARY KEY ("id")
   );
   
   -- Add foreign key constraints
   ALTER TABLE "platform_user_fields" ADD CONSTRAINT "platform_user_fields_platform_id_fkey"
     FOREIGN KEY ("platform_id") REFERENCES "platform_types"("id") ON DELETE CASCADE;
   
   ALTER TABLE "platform_user_fields" ADD CONSTRAINT "platform_user_fields_user_id_fkey"
     FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE;
   
   -- Add unique constraint
   CREATE UNIQUE INDEX "platform_user_fields_platform_id_user_id_key" 
     ON "platform_user_fields"("platform_id", "user_id");
   ```

### Conclusion

By following this flexible database expansion approach, you can extend your application's capabilities without breaking existing functionality. The platform-specific extension tables strategy provides a clean way to add customization for different user types and project types while maintaining compatibility with your existing codebase.

This approach is particularly valuable when:
1. You need to support multiple distinct use cases within the same application
2. You want to avoid modifying existing tables that are already in use
3. You need to gradually add new features without disrupting existing functionality
4. You want to provide customized experiences for different user types

Remember to follow the conventional file flow pattern throughout your implementation, ensuring that types, backend services, and frontend components are all updated consistently to support your extended database schema.