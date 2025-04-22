generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Updated User Model (consolidated with Profile)
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Profile Information (moved from Profile model)
  firstName      String?
  lastName       String?
  jobTitle       String?
  bio            String? @db.Text
  yearsAtCompany Int?
  yearsInDept    Int?
  yearsInRole    Int?

  // Company and Department Info
  companyId       String?
  company         Company? @relation(fields: [companyId], references: [id])
  externalCompany String?

  departmentId       String?
  department         Department? @relation(fields: [departmentId], references: [id])
  externalDepartment String?

  // Work Relationships
  reportsTo         User?   @relation("ReportsTo", fields: [managerId], references: [id])
  managerId         String?
  managerNameManual String?
  manages           User[]  @relation("ReportsTo")

  // Education and Experience
  education  Education[]
  accolades  Accolade[]
  experience Experience[]
  references Reference[]  @relation("UserReferences")

  // Content Relationships
  articles  Article[]  @relation("AuthoredArticles")
  projects  Project[]  @relation("OwnedProjects")
  campaigns Campaign[] @relation("OwnedCampaigns")
  proposals Proposal[] @relation("OwnedProposals")

  // Contributing Relationships
  contributedArticles  Article[]  @relation("ContributedArticles")
  contributedProjects  Project[]  @relation("ContributedProjects")
  contributedCampaigns Campaign[] @relation("ContributedCampaigns")
  contributedProposals Proposal[] @relation("ContributedProposals")

  // Affiliated Relationships
  affiliatedArticles  Article[]  @relation("AffiliatedArticles")
  affiliatedProjects  Project[]  @relation("AffiliatedProjects")
  affiliatedCampaigns Campaign[] @relation("AffiliatedCampaigns")
  affiliatedProposals Proposal[] @relation("AffiliatedProposals")

  // Social Relationships
  connections   Connection[] @relation("UserConnections")
  connectedWith Connection[] @relation("ConnectedUser")
  followers     Follow[]     @relation("UserFollowers")
  following     Follow[]     @relation("UserFollowing")
  watches       Watch[]
  comments      Comment[]
  feedback      Feedback[]

  // Team memberships
  teamMemberships   TeamMember[]
  taskAssignments   Task[]       @relation("TaskAssignee")
  meetingAttendance Meeting[]    @relation("MeetingAttendees")

  // Links (consolidated from User and Profile links)
  links Link[]

  // Add missing relation fields
  internalReferences Reference[]          @relation("InternalReference")
  projectLeads       Project[]            @relation("ProjectLead")
  approvedProposals  Proposal[]           @relation("ProposalApprovers")
  ProjectContributor ProjectContributor[]
  Contributor        Contributor[]
}

// Updated Education model
model Education {
  id     String @id @default(uuid())
  userId String // Changed from profileId
  user   User   @relation(fields: [userId], references: [id]) // Changed from profile

  institution String
  degree      String
  field       String
  startYear   Int
  endYear     Int?
  ongoing     Boolean @default(false)
}

// Updated Accolade model
model Accolade {
  id     String @id @default(uuid())
  userId String // Changed from profileId
  user   User   @relation(fields: [userId], references: [id]) // Changed from profile

  title        String
  issuer       String
  dateReceived DateTime
  description  String?  @db.Text
}

// Updated Experience model
model Experience {
  id     String @id @default(uuid())
  userId String // Changed from profileId
  user   User   @relation(fields: [userId], references: [id]) // Changed from profile

  position    String
  startDate   DateTime
  endDate     DateTime?
  current     Boolean   @default(false)
  description String?   @db.Text

  // Company reference
  companyId       String?
  company         Company? @relation(fields: [companyId], references: [id])
  externalCompany String?
}

// Updated Reference model
model Reference {
  id     String @id @default(uuid())
  userId String // Changed from profileId
  user   User   @relation("UserReferences", fields: [userId], references: [id])

  // Internal Reference
  internalUserId String? @unique
  internalUser   User?   @relation("InternalReference", fields: [internalUserId], references: [id])

  // External Reference
  externalName  String?
  externalEmail String?
  externalPhone String?

  // Common fields
  relationship String
  position     String
  company      String
}

// Section Types Enum
enum SectionType {
  FULL_WIDTH_TEXT
  FULL_WIDTH_MEDIA
  RIGHT_TEXT_LEFT_MEDIA
  LEFT_MEDIA_RIGHT_TEXT
}

// Article Section Model
model ArticleSection {
  id        String      @id @default(uuid())
  articleId String
  article   Article     @relation(fields: [articleId], references: [id])
  type      SectionType
  order     Int // For ordering sections

  // Common fields for all section types
  header    String
  subtext   String?
  citations Citation[] // Relation to citations

  // Text content (for sections with text)
  body String? @db.Text

  // Media content (for sections with media)
  mediaUrl     String?
  mediaType    String? // video, image, etc
  mediaCaption String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Citation {
  id        String         @id @default(uuid())
  text      String
  url       String?
  sectionId String
  section   ArticleSection @relation(fields: [sectionId], references: [id])
}

// Updated Article Model
model Article {
  id        String           @id @default(uuid())
  title     String
  summary   String           @db.Text
  sections  ArticleSection[]
  createdAt DateTime         @default(now())
  updatedAt DateTime         @updatedAt
  published Boolean          @default(false)

  // Metadata
  tags     String[]
  category String?

  // Relationships
  author   User   @relation("AuthoredArticles", fields: [authorId], references: [id])
  authorId String

  contributors User[] @relation("ContributedArticles")
  affiliated   User[] @relation("AffiliatedArticles")

  comments Comment[]
  watches  Watch[]
  feedback Feedback[]

  // Add link relationships
  links Link[]
}

// Updated Project Model
model Project {
  id          String @id @default(uuid())
  title       String
  description String @db.Text
  status      String

  // Project Details
  department   Department @relation(fields: [departmentId], references: [id])
  departmentId String
  startDate    DateTime
  endDate      DateTime?
  budget       Float?
  priority     String // High, Medium, Low

  // Goals and Metrics
  objectives ProjectObjective[]
  milestones ProjectMilestone[]
  metrics    ProjectMetric[]

  // Team Structure
  owner        User    @relation("OwnedProjects", fields: [ownerId], references: [id])
  ownerId      String
  projectLead  User?   @relation("ProjectLead", fields: [leadId], references: [id])
  leadId       String?
  contributors User[]  @relation("ContributedProjects")
  affiliated   User[]  @relation("AffiliatedProjects")

  // Related Content
  documents Document[]
  meetings  Meeting[]
  tasks     Task[]

  // Tracking
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  comments  Comment[]
  watches   Watch[]
  feedback  Feedback[]

  // Add link relationships
  links               Link[]
  ExternalContributor ExternalContributor[]
  ProjectContributor  ProjectContributor[]
  Contributor         Contributor[]
}

// Project Support Models
model ProjectObjective {
  id          String    @id @default(uuid())
  projectId   String
  project     Project   @relation(fields: [projectId], references: [id])
  description String
  status      String
  dueDate     DateTime?
}

model ProjectMilestone {
  id          String   @id @default(uuid())
  projectId   String
  project     Project  @relation(fields: [projectId], references: [id])
  title       String
  description String
  dueDate     DateTime
  completed   Boolean  @default(false)
}

model ProjectMetric {
  id        String  @id @default(uuid())
  projectId String
  project   Project @relation(fields: [projectId], references: [id])
  name      String
  target    Float
  current   Float
  unit      String
}

// Updated Proposal Model based on wawa-plan-and-structure.md
model Proposal {
  id     String       @id @default(uuid())
  title  String
  type   ProposalType
  status String

  // Executive Summary
  summary String @db.Text
  vision  String @db.Text
  mission String @db.Text

  // Strategy Details
  objectives     ProposalObjective[]
  swotAnalysis   SwotAnalysis?
  marketResearch MarketResearch?
  strategy       MarketingStrategy?
  execution      ExecutionPlan?
  budget         Budget?

  // Team and Approvals
  owner        User   @relation("OwnedProposals", fields: [ownerId], references: [id])
  ownerId      String
  contributors User[] @relation("ContributedProposals")
  affiliated   User[] @relation("AffiliatedProposals")
  approvers    User[] @relation("ProposalApprovers")

  // Tracking
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  comments  Comment[]
  watches   Watch[]
  feedback  Feedback[]

  // Add link relationships
  links           Link[]
  Contributor     Contributor[]
  ProposalSection ProposalSection[]
}

// Proposal Support Models
enum ProposalType {
  MARKETING_PLAN
  BUSINESS_PROPOSAL
  PROJECT_PROPOSAL
  BUDGET_REQUEST
}

model ProposalObjective {
  id         String   @id @default(uuid())
  proposalId String
  proposal   Proposal @relation(fields: [proposalId], references: [id])
  objective  String
  metrics    String[]
  timeline   String
}

model SwotAnalysis {
  id         String   @id @default(uuid())
  proposalId String   @unique
  proposal   Proposal @relation(fields: [proposalId], references: [id])

  // Detailed SWOT items with descriptions
  strengths     SwotItem[] @relation("StrengthItems")
  weaknesses    SwotItem[] @relation("WeaknessItems")
  opportunities SwotItem[] @relation("OpportunityItems")
  threats       SwotItem[] @relation("ThreatItems")

  // Summary text
  strengthsSummary     String? @db.Text
  weaknessesSummary    String? @db.Text
  opportunitiesSummary String? @db.Text
  threatsSummary       String? @db.Text
}

model SwotItem {
  id          String  @id @default(uuid())
  text        String
  description String? @db.Text
  impact      Int? // 1-5 rating of impact

  // Relations to SWOT categories
  strengthAnalysisId String?
  strengthAnalysis   SwotAnalysis? @relation("StrengthItems", fields: [strengthAnalysisId], references: [id])

  weaknessAnalysisId String?
  weaknessAnalysis   SwotAnalysis? @relation("WeaknessItems", fields: [weaknessAnalysisId], references: [id])

  opportunityAnalysisId String?
  opportunityAnalysis   SwotAnalysis? @relation("OpportunityItems", fields: [opportunityAnalysisId], references: [id])

  threatAnalysisId String?
  threatAnalysis   SwotAnalysis? @relation("ThreatItems", fields: [threatAnalysisId], references: [id])
}

model MarketResearch {
  id         String   @id @default(uuid())
  proposalId String   @unique
  proposal   Proposal @relation(fields: [proposalId], references: [id])

  // Detailed research components
  competitors    Competitor[]
  marketStats    MarketStat[]
  targetAudience TargetAudience[]
  painPoints     PainPoint[]

  // Summary text
  summary     String  @db.Text
  methodology String? @db.Text
  conclusions String? @db.Text
}

model Competitor {
  id               String         @id @default(uuid())
  marketResearchId String
  marketResearch   MarketResearch @relation(fields: [marketResearchId], references: [id])
  name             String
  strengths        String[]
  weaknesses       String[]
  marketShare      Float?
  description      String?        @db.Text
}

model MarketStat {
  id               String         @id @default(uuid())
  marketResearchId String
  marketResearch   MarketResearch @relation(fields: [marketResearchId], references: [id])
  name             String
  value            String
  source           String?
  date             DateTime?
  description      String?        @db.Text
}

model TargetAudience {
  id               String         @id @default(uuid())
  marketResearchId String
  marketResearch   MarketResearch @relation(fields: [marketResearchId], references: [id])
  name             String
  demographics     String?        @db.Text
  psychographics   String?        @db.Text
  behaviors        String?        @db.Text
  size             Int?
  description      String?        @db.Text
}

model PainPoint {
  id               String         @id @default(uuid())
  marketResearchId String
  marketResearch   MarketResearch @relation(fields: [marketResearchId], references: [id])
  description      String         @db.Text
  severity         Int? // 1-5 rating
  frequency        Int? // 1-5 rating
  solution         String?        @db.Text
}

// Enhanced Budget model to match home.tsx
model Budget {
  id         String   @id @default(uuid())
  proposalId String   @unique
  proposal   Proposal @relation(fields: [proposalId], references: [id])

  // Budget details
  total    Float
  currency String @default("USD")

  // Budget categories
  categories BudgetCategory[]

  // Financial metrics
  roi       Float?
  breakEven Int? // Months to break even

  // Timeline
  fiscalYear String?
  startDate  DateTime?
  endDate    DateTime?

  // Additional info
  notes       String? @db.Text
  assumptions String? @db.Text
}

model BudgetCategory {
  id          String       @id @default(uuid())
  budgetId    String
  budget      Budget       @relation(fields: [budgetId], references: [id])
  name        String
  amount      Float
  percentage  Float
  description String?      @db.Text
  items       BudgetItem[]
}

model BudgetItem {
  id          String         @id @default(uuid())
  categoryId  String
  category    BudgetCategory @relation(fields: [categoryId], references: [id])
  name        String
  amount      Float
  description String?
  notes       String?
}

// Enhanced ExecutionPlan to match home.tsx
model ExecutionPlan {
  id         String   @id @default(uuid())
  proposalId String   @unique
  proposal   Proposal @relation(fields: [proposalId], references: [id])

  // Execution details
  phases    ExecutionPhase[]
  team      TeamMember[]
  resources Resource[]

  // Timeline
  startDate DateTime?
  endDate   DateTime?

  // Additional info
  risks        Risk[]
  dependencies String[]
  assumptions  String?  @db.Text
}

model ExecutionPhase {
  id          String        @id @default(uuid())
  executionId String
  execution   ExecutionPlan @relation(fields: [executionId], references: [id])
  name        String
  description String?       @db.Text
  startDate   DateTime
  endDate     DateTime?
  status      String?
  tasks       PhaseTask[]
}

model PhaseTask {
  id          String         @id @default(uuid())
  phaseId     String
  phase       ExecutionPhase @relation(fields: [phaseId], references: [id])
  name        String
  description String?        @db.Text
  dueDate     DateTime?
  status      String?
  assignee    String?
}

model TeamMember {
  id             String        @id @default(uuid())
  executionId    String
  execution      ExecutionPlan @relation(fields: [executionId], references: [id])
  name           String
  role           String
  responsibility String?
  userId         String?
  user           User?         @relation(fields: [userId], references: [id])
}

model Resource {
  id          String        @id @default(uuid())
  executionId String
  execution   ExecutionPlan @relation(fields: [executionId], references: [id])
  name        String
  type        String // human, financial, technical, etc.
  quantity    Int?
  cost        Float?
  description String?
}

model Risk {
  id          String        @id @default(uuid())
  executionId String
  execution   ExecutionPlan @relation(fields: [executionId], references: [id])
  description String
  impact      String // high, medium, low
  probability String // high, medium, low
  mitigation  String?
}

// Interaction Models
model Comment {
  id        String   @id @default(uuid())
  content   String   @db.Text
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relationships
  author   User   @relation(fields: [authorId], references: [id])
  authorId String

  // Polymorphic relations
  articleId  String?
  article    Article?  @relation(fields: [articleId], references: [id])
  projectId  String?
  project    Project?  @relation(fields: [projectId], references: [id])
  campaignId String?
  campaign   Campaign? @relation(fields: [campaignId], references: [id])
  proposalId String?
  proposal   Proposal? @relation(fields: [proposalId], references: [id])
}

model Feedback {
  id        String   @id @default(uuid())
  content   String   @db.Text
  rating    Int?     @db.SmallInt
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relationships
  author   User   @relation(fields: [authorId], references: [id])
  authorId String

  // Polymorphic relations
  articleId  String?
  article    Article?  @relation(fields: [articleId], references: [id])
  projectId  String?
  project    Project?  @relation(fields: [projectId], references: [id])
  campaignId String?
  campaign   Campaign? @relation(fields: [campaignId], references: [id])
  proposalId String?
  proposal   Proposal? @relation(fields: [proposalId], references: [id])
}

// Social Models
model Connection {
  id        String   @id @default(uuid())
  status    String // pending, accepted, rejected
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Internal Connection
  userId String
  user   User   @relation("UserConnections", fields: [userId], references: [id])

  // Can be either internal or external connection
  connectedUserId    String?
  connectedUser      User?   @relation("ConnectedUser", fields: [connectedUserId], references: [id])
  externalConnection String? // For storing external connection details as JSON
}

model Follow {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())

  // Relationships
  follower    User   @relation("UserFollowers", fields: [followerId], references: [id])
  followerId  String
  following   User   @relation("UserFollowing", fields: [followingId], references: [id])
  followingId String
}

model Watch {
  id        String   @id @default(uuid())
  createdAt DateTime @default(now())

  // Relationships
  user   User   @relation(fields: [userId], references: [id])
  userId String

  // Polymorphic relations
  articleId  String?
  article    Article?  @relation(fields: [articleId], references: [id])
  projectId  String?
  project    Project?  @relation(fields: [projectId], references: [id])
  campaignId String?
  campaign   Campaign? @relation(fields: [campaignId], references: [id])
  proposalId String?
  proposal   Proposal? @relation(fields: [proposalId], references: [id])
}

// New model for external contributors
model ExternalContributor {
  id        String  @id @default(uuid())
  name      String
  email     String?
  company   String?
  role      String
  projectId String
  project   Project @relation(fields: [projectId], references: [id])
}

// Similar approach for contributors
model ProjectContributor {
  id        String  @id @default(uuid())
  projectId String
  project   Project @relation(fields: [projectId], references: [id])

  // Internal Contributor
  userId String?
  user   User?   @relation(fields: [userId], references: [id])

  // External Contributor
  externalName  String?
  externalEmail String?
  externalRole  String?
}

// Organization Models
model Company {
  id    String @id @default(uuid())
  name  String
  users User[]

  // External company info if this represents an external company
  isExternal Boolean      @default(false)
  website    String?
  industry   String?
  Experience Experience[]
  Department Department[]
}

model Department {
  id        String    @id @default(uuid())
  name      String
  companyId String?
  company   Company?  @relation(fields: [companyId], references: [id])
  users     User[]
  Project   Project[]
}

// Replace both ExternalContributor and ProjectContributor with:
model Contributor {
  id String @id @default(uuid())

  // Internal Contributor
  userId String?
  user   User?   @relation(fields: [userId], references: [id])

  // External Contributor
  externalName    String?
  externalEmail   String?
  externalCompany String?
  externalRole    String?

  // Relationships to content
  projectId  String?
  project    Project?  @relation(fields: [projectId], references: [id])
  campaignId String?
  campaign   Campaign? @relation(fields: [campaignId], references: [id])
  proposalId String?
  proposal   Proposal? @relation(fields: [proposalId], references: [id])
}

// Missing models referenced in the schema
model Document {
  id          String   @id @default(uuid())
  title       String
  fileUrl     String
  fileType    String
  description String?
  projectId   String
  project     Project  @relation(fields: [projectId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Meeting {
  id        String   @id @default(uuid())
  title     String
  date      DateTime
  duration  Int // in minutes
  location  String?
  virtual   Boolean  @default(false)
  notes     String?  @db.Text
  projectId String
  project   Project  @relation(fields: [projectId], references: [id])
  attendees User[]   @relation("MeetingAttendees")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Task {
  id          String    @id @default(uuid())
  title       String
  description String?   @db.Text
  status      String // todo, in-progress, done
  priority    String // high, medium, low
  dueDate     DateTime?
  projectId   String
  project     Project   @relation(fields: [projectId], references: [id])
  assigneeId  String?
  assignee    User?     @relation("TaskAssignee", fields: [assigneeId], references: [id])
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

// Updated Campaign model to match home.tsx structure
model Campaign {
  id          String @id @default(uuid())
  title       String
  description String @db.Text
  status      String

  // Campaign Details
  tagline   String?
  theme     String?
  startDate DateTime
  endDate   DateTime?
  budget    Float?

  // Target Information
  targetAudience String           @db.Text
  targetRegions  String[]
  targetMetrics  CampaignMetric[]

  // Content Structure - similar to Article sections
  sections CampaignSection[]

  // Team Structure
  owner        User   @relation("OwnedCampaigns", fields: [ownerId], references: [id])
  ownerId      String
  contributors User[] @relation("ContributedCampaigns")
  affiliated   User[] @relation("AffiliatedCampaigns")

  // Related Content
  assets CampaignAsset[]
  events CampaignEvent[]

  // Tracking
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  comments  Comment[]
  watches   Watch[]
  feedback  Feedback[]

  // Add link relationships
  links       Link[]
  Contributor Contributor[]
}

// Campaign Support Models
model CampaignSection {
  id         String      @id @default(uuid())
  campaignId String
  campaign   Campaign    @relation(fields: [campaignId], references: [id])
  type       SectionType
  order      Int

  // Common fields for all section types
  header  String
  subtext String?

  // Content based on type
  body         String? @db.Text
  mediaUrl     String?
  mediaType    String?
  mediaCaption String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model CampaignMetric {
  id          String   @id @default(uuid())
  campaignId  String
  campaign    Campaign @relation(fields: [campaignId], references: [id])
  name        String
  target      Float
  current     Float?
  unit        String
  description String?
}

model CampaignAsset {
  id          String   @id @default(uuid())
  campaignId  String
  campaign    Campaign @relation(fields: [campaignId], references: [id])
  title       String
  fileUrl     String
  fileType    String
  description String?
  createdAt   DateTime @default(now())
}

model CampaignEvent {
  id          String    @id @default(uuid())
  campaignId  String
  campaign    Campaign  @relation(fields: [campaignId], references: [id])
  title       String
  description String?   @db.Text
  location    String?
  startDate   DateTime
  endDate     DateTime?
  attendees   Int?
  budget      Float?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

// Enhanced Proposal models to match wawa-plan-and-structure.md
model ProposalSection {
  id         String      @id @default(uuid())
  proposalId String
  proposal   Proposal    @relation(fields: [proposalId], references: [id])
  type       SectionType
  order      Int

  // Common fields for all section types
  header  String
  subtext String?

  // Content based on type
  body         String? @db.Text
  mediaUrl     String?
  mediaType    String?
  mediaCaption String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Unified Link Model
model Link {
  id          String   @id @default(uuid())
  url         String
  title       String?
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Link type
  type LinkType

  // Link metadata (used based on type)
  platform    String? // For social links
  username    String? // For social links
  fileType    String? // For file links
  fileSize    Int? // For file links
  docType     String? // For documentation links
  version     String? // For documentation links
  author      String? // For reference links
  publisher   String? // For reference links
  publishDate DateTime? // For reference links
  isVerified  Boolean? // For verification status
  isPublic    Boolean   @default(true)

  // Owner relations (only one should be non-null)
  userId String?
  user   User?   @relation(fields: [userId], references: [id])

  articleId String?
  article   Article? @relation(fields: [articleId], references: [id])

  projectId String?
  project   Project? @relation(fields: [projectId], references: [id])

  campaignId String?
  campaign   Campaign? @relation(fields: [campaignId], references: [id])

  proposalId String?
  proposal   Proposal? @relation(fields: [proposalId], references: [id])
}

// Link Type Enum
enum LinkType {
  SOCIAL
  WEBSITE
  DOCUMENTATION
  REFERENCE
  FILE
  PORTFOLIO
  CERTIFICATION
  RESUME
}

// Add missing MarketingStrategy model
model MarketingStrategy {
  id           String   @id @default(uuid())
  proposalId   String   @unique
  proposal     Proposal @relation(fields: [proposalId], references: [id])
  goals        String[]
  channels     String[]
  timeline     String   @db.Text // Changed from Json
  requirements String   @db.Text // Changed from Json
}
