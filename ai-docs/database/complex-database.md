### **Database Schema for the Complex Version (Full Prisma Setup)**

This schema will cover the complex version with **multi-instance platform architecture** that includes various marketing campaigns, platform types (like Wawa, product launches, etc.), and associated content. We will structure it to support scalable, flexible content and allow for easy integration of additional marketing plans and campaigns, as well as integration with votes or user feedback where needed.

Here’s how we can structure the `schema.prisma` for the complex version:

---

### **Complete Prisma Schema for Complex Version**

```prisma
// Prisma schema for a complex marketing platform with multi-instance architecture

// Database connection to PostgreSQL
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Prisma Client generator
generator client {
  provider = "prisma-client-js"
}

// MARKETING CAMPAIGNS TABLE
model Campaign {
  id          Int       @id @default(autoincrement())  // Unique campaign ID
  title       String    // Campaign title
  description String?   // Campaign description
  date        DateTime  // Start date
  type        String    // Type of campaign (e.g., product launch, seasonal sale)
  platform_id Int       // Reference to platform (multi-instance support)
  platform    Platform  @relation(fields: [platform_id], references: [id])
  imageUrl    String?   // Optional: Image URL for the campaign
  features    String[]  // List of features related to the campaign
  created_at  DateTime  @default(now()) // Created date

  // Optional - For tracking feedback, comments, and votes
  votes       Vote[]
}

// PLATFORM TYPES TABLE (e.g., Wawa, product launches, seasonal sales)
model Platform {
  id          Int       @id @default(autoincrement())  // Unique platform ID
  name        String    // Name of the platform (e.g., Wawa, product launch)
  description String?   // Description of the platform
  campaigns   Campaign[] // List of campaigns associated with the platform
  created_at  DateTime  @default(now()) // Created date
}

// USER TABLE (for users interacting with campaigns, leaving votes or comments)
model User {
  id          Int       @id @default(autoincrement())  // Unique user ID
  username    String    // Username
  email       String    // User email (can be used for feedback submission)
  fullName    String?   // Full name of the user
  role        String?   // User role (e.g., exec, admin, team member)
  votes       Vote[]    // User votes on campaigns
  comments    Comment[] // Comments for campaigns
}

// VOTES TABLE (for feedback and votes on campaigns by users)
model Vote {
  id          Int      @id @default(autoincrement())  // Unique vote ID
  campaign_id Int      // Reference to Campaign
  campaign    Campaign @relation(fields: [campaign_id], references: [id])
  user_id     Int      // Reference to User
  user        User     @relation(fields: [user_id], references: [id])
  value       Int      // Vote value (e.g., 1-5 scale)
  created_at  DateTime @default(now())  // Vote timestamp
}

// COMMENTS TABLE (for user comments on campaigns)
model Comment {
  id          Int      @id @default(autoincrement())  // Unique comment ID
  campaign_id Int      // Reference to Campaign
  campaign    Campaign @relation(fields: [campaign_id], references: [id])
  user_id     Int      // Reference to User
  user        User     @relation(fields: [user_id], references: [id])
  content     String   // Comment content
  created_at  DateTime @default(now())  // Comment timestamp
}

// MARKETING PLAN TABLES - Related to the marketing plan structure (e.g., SWOT, strategy, objectives)
model MarketingPlan {
  id          Int       @id @default(autoincrement())  // Unique plan ID
  title       String    // Title of the marketing plan
  mission     String    // Mission statement for the campaign
  objectives  String    // Marketing objectives
  swotAnalysis String   // SWOT analysis
  budget      Float     // Campaign budget
  timeline    String    // Timeline for the campaign
  platform_id Int       // Reference to the platform the marketing plan belongs to
  platform    Platform  @relation(fields: [platform_id], references: [id])
  created_at  DateTime  @default(now())  // Created date
}

// CAMPAIGN STATISTICS - Tracks metrics for each campaign
model CampaignStats {
  id            Int      @id @default(autoincrement())  // Unique stats ID
  campaign_id   Int      // Reference to Campaign
  campaign      Campaign @relation(fields: [campaign_id], references: [id])
  impressions   Int      // Number of impressions
  conversions   Int      // Number of conversions
  ctr           Float    // Click-through rate
  created_at    DateTime @default(now())  // Stats timestamp
}

```

---

### Adding **Vote**, **Comment**, and **Suggestions** Sections for Both Versions

We'll need to include the ability for users to leave votes, comments, and suggestions directly on the presentation. This can be done in both the **complex version** (with a backend) and the **minimal version** (using JSON files).

Here’s how we can implement these features for both versions:

---

## **1. Complex Version (Backend + Database)**

### **Database Changes (Prisma Schema)**

For the **complex version**, we need to update the **Prisma schema** to allow users to vote, comment, and leave suggestions on each campaign. We’ll add models for **votes**, **comments**, and **suggestions**.

### **Updated Prisma Schema**

```prisma
// Voting, Comments, and Suggestions models
model Vote {
  id          Int      @id @default(autoincrement())  // Unique vote ID
  campaign_id Int      // Reference to Campaign
  campaign    Campaign @relation(fields: [campaign_id], references: [id])
  user_id     Int      // Reference to User
  user        User     @relation(fields: [user_id], references: [id])
  value       Int      // Vote value (e.g., 1-5 scale)
  created_at  DateTime @default(now())  // Vote timestamp
}

model Comment {
  id          Int      @id @default(autoincrement())  // Unique comment ID
  campaign_id Int      // Reference to Campaign
  campaign    Campaign @relation(fields: [campaign_id], references: [id])
  user_id     Int      // Reference to User
  user        User     @relation(fields: [user_id], references: [id])
  content     String   // Comment content
  created_at  DateTime @default(now())  // Comment timestamp
}

model Suggestion {
  id          Int      @id @default(autoincrement())  // Unique suggestion ID
  campaign_id Int      // Reference to Campaign
  campaign    Campaign @relation(fields: [campaign_id], references: [id])
  user_id     Int      // Reference to User
  user        User     @relation(fields: [user_id], references: [id])
  suggestion  String   // Suggestion content
  created_at  DateTime @default(now())  // Suggestion timestamp
}
```

### **Frontend Changes (React)**

Now, let's add the **vote**, **comment**, and **suggestions** sections in the frontend, where users can interact with the campaign.

**React Component for Vote, Comment, and Suggestion Section**:

```tsx
import React, { useState, useEffect } from 'react';

const FeedbackSection = ({ campaignId }: { campaignId: number }) => {
  const [vote, setVote] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');

  const handleVoteSubmit = async () => {
    if (vote !== null) {
      const response = await fetch(`/campaign/${campaignId}/vote`, {
        method: 'POST',
        body: JSON.stringify({ value: vote }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        alert('Vote submitted successfully');
      }
    }
  };

  const handleCommentSubmit = async () => {
    if (comment) {
      const response = await fetch(`/campaign/${campaignId}/comment`, {
        method: 'POST',
        body: JSON.stringify({ content: comment }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        alert('Comment submitted successfully');
      }
    }
  };

  const handleSuggestionSubmit = async () => {
    if (suggestion) {
      const response = await fetch(`/campaign/${campaignId}/suggestion`, {
        method: 'POST',
        body: JSON.stringify({ suggestion }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        alert('Suggestion submitted successfully');
      }
    }
  };

  return (
    <div className="feedback-section">
      {/* Vote Section */}
      <div>
        <h3>Rate the Campaign</h3>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setVote(star)}
              style={{ backgroundColor: vote === star ? 'yellow' : 'gray' }}
            >
              {star}
            </button>
          ))}
        </div>
        <button onClick={handleVoteSubmit}>Submit Vote</button>
      </div>

      {/* Comment Section */}
      <div>
        <h3>Leave a Comment</h3>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        <button onClick={handleCommentSubmit}>Submit Comment</button>
      </div>

      {/* Suggestion Section */}
      <div>
        <h3>Leave a Suggestion</h3>
        <textarea value={suggestion} onChange={(e) => setSuggestion(e.target.value)} />
        <button onClick={handleSuggestionSubmit}>Submit Suggestion</button>
      </div>
    </div>
  );
};

export default FeedbackSection;
```

### **Backend Routes for Handling Feedback**

In your backend (Node.js + Express):

```ts
// POST routes to handle vote, comment, and suggestion submissions
app.post('/campaign/:id/vote', async (req, res) => {
  const { id } = req.params;
  const { value } = req.body; // Expect a value for the vote (1-5)

  // Store the vote in the database
  await prisma.vote.create({
    data: {
      campaign_id: parseInt(id),
      value,
      user_id: req.user.id, // Assuming you have a way to get the logged-in user
    },
  });

  res.status(200).send('Vote submitted');
});

app.post('/campaign/:id/comment', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  // Store the comment in the database
  await prisma.comment.create({
    data: {
      campaign_id: parseInt(id),
      content,
      user_id: req.user.id, // Assuming you have a way to get the logged-in user
    },
  });

  res.status(200).send('Comment submitted');
});

app.post('/campaign/:id/suggestion', async (req, res) => {
  const { id } = req.params;
  const { suggestion } = req.body;

  // Store the suggestion in the database
  await prisma.suggestion.create({
    data: {
      campaign_id: parseInt(id),
      suggestion,
      user_id: req.user.id, // Assuming you have a way to get the logged-in user
    },
  });

  res.status(200).send('Suggestion submitted');
});
```

---

### **Explanation of the Schema for the Complex Version**

1. **Campaign Model**:
   - **Campaign** stores all the marketing campaign information like title, description, date, type, platform reference, and features.
   - The campaign can be tied to a **Platform**, which supports multi-instance platforms (e.g., Wawa, product launches).
   - You can also track **votes** and **comments** related to the campaign.

2. **Platform Model**:
   - **Platform** represents the multi-instance architecture that allows campaigns to be grouped by their platform types (e.g., Wawa, product launches).
   - Each **Platform** can have multiple **Campaigns** associated with it.

3. **User Model**:
   - **User** represents individuals who interact with campaigns, leaving **votes** and **comments**. Users can be admins, executives, or general participants.
   - This model is used for capturing user feedback on campaigns, which is important when sharing marketing plans with execs or clients for voting and comments.

4. **Vote and Comment Models**:
   - These models enable user interaction with campaigns by submitting votes (rating campaigns on a scale, for example) and comments (written feedback).
   - This structure allows capturing detailed feedback on campaigns.

5. **Marketing Plan Model**:
   - The **MarketingPlan** model ties directly into the marketing strategy for each campaign. It includes essential information like the **mission**, **SWOT analysis**, **objectives**, **budget**, and **timeline**.
   - It’s directly linked to the **Platform** to ensure that the plan is tied to a specific platform.

6. **Campaign Stats Model**:
   - This model tracks important **campaign metrics** like **impressions**, **conversions**, and **CTR** (Click-through rate), giving a clear understanding of campaign performance over time.

---


### **Conclusion**

1. **Complex Version (Database)**:
   - Uses **Prisma** with **PostgreSQL** for dynamic content and flexible structure.
   - Supports **multi-instance platform architecture**, user interaction (votes, comments), and detailed campaign tracking (e.g., statistics, SWOT).
   
Feel free to adjust based on your needs! Let me know if you'd like any further guidance or adjustments.











## **2. Minimal Version (Using JSON Files for Votes, Comments, Suggestions)**

In the **minimal version**, we can store feedback (votes, comments, suggestions) in a **JSON file**. This allows for easy management without a backend database.

### **JSON File (feedback.json)**

```json
{
  "campaign1": {
    "votes": [],
    "comments": [],
    "suggestions": []
  },
  "campaign2": {
    "votes": [],
    "comments": [],
    "suggestions": []
  }
}
```

### **React Component for Vote, Comment, and Suggestion Section**

For the minimal version, you would need to **load and update** the JSON file each time a new vote, comment, or suggestion is added. However, since we cannot update a JSON file directly from the frontend without a backend or server-side function, you would use **localStorage** or a serverless approach (like **Netlify Functions**) if you want to store the data temporarily.

For simplicity, we'll use **localStorage** to simulate saving votes, comments, and suggestions in a local file-like manner.

```tsx
import React, { useState, useEffect } from 'react';

const FeedbackSection = ({ campaignId }: { campaignId: string }) => {
  const [vote, setVote] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');

  const handleVoteSubmit = () => {
    if (vote !== null) {
      let feedbackData = JSON.parse(localStorage.getItem('feedbackData') || '{}');
      if (!feedbackData[campaignId]) {
        feedbackData[campaignId] = { votes: [], comments: [], suggestions: [] };
      }
      feedbackData[campaignId].votes.push(vote);
      localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
      alert('Vote submitted successfully');
    }
  };

  const handleCommentSubmit = () => {
    if (comment) {
      let feedbackData = JSON.parse(localStorage.getItem('feedbackData') || '{}');
      if (!feedbackData[campaignId]) {
        feedbackData[campaignId] = { votes: [], comments: [], suggestions: [] };
      }
      feedbackData[campaignId].comments.push(comment);
      localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
      alert('Comment submitted successfully');
    }
  };

  const handleSuggestionSubmit = () => {
    if (suggestion) {
      let feedbackData = JSON.parse(localStorage.getItem('feedbackData') || '{}');
      if (!feedbackData[campaignId]) {
        feedbackData[campaignId] = { votes: [], comments: [], suggestions: [] };
      }
      feedbackData[campaignId].suggestions.push(suggestion);
      localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
      alert('Suggestion submitted successfully');
    }
  };

  return (
    <div className="feedback-section">
      {/* Vote Section */}
      <div>
        <h3>Rate the Campaign</h3>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setVote(star)}
              style={{ backgroundColor: vote === star ? 'yellow' : 'gray' }}
            >
              {star}
            </button>
          ))}
        </div>
        <button onClick={handleVoteSubmit}>Submit Vote</button>
      </div>

      {/* Comment Section */}
      <div>
        <h3>Leave a Comment</h3>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        <button onClick={handleCommentSubmit}>Submit Comment</button>
      </div>

      {/* Suggestion Section */}
      <div>
        <h3>Leave a Suggestion</h3>
        <textarea value={suggestion} onChange={(e) => setSuggestion(e.target.value)} />
        <button onClick={handleSuggestionSubmit}>Submit Suggestion</button>
      </div>
    </div>
  );
};

export default FeedbackSection;
```

### **How It Works for the Minimal Version**

- **Data Storage**: Uses **localStorage** to simulate saving votes, comments, and suggestions.
- **No Backend**: There’s no server-side code involved in saving the feedback.
- **JSON**: Feedback is stored in the browser's local storage as a JSON object.

---

### **Can We Do Just Frontend for the Simple Version?**

Yes! For the **minimal version**, you **do not need a backend**. You can use **localStorage** to handle votes, comments, and suggestions. This will persist data only on the client-side for the duration of the session, making it easy to collect user feedback without any server-side infrastructure.

For more persistent data storage (e.g., saving feedback for future sessions), you would need a backend or a service like **Netlify Functions** or **Firebase**, but for simple campaigns, **localStorage** and **JSON files** can suffice.

---

### **Conclusion**

- **Complex Version (With Backend)**: Implements **votes**, **comments**, and **suggestions** with a **Prisma database** and backend routes.
- **Minimal Version (Without Backend)**: Uses **localStorage** to store votes, comments, and suggestions directly in the browser and optionally stores this data in a **JSON file**.

This allows you to collect feedback on your marketing presentations in both approaches depending on the level of complexity you want to manage.