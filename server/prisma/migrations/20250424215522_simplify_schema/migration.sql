/*
  Warnings:

  - You are about to drop the column `articleId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `campaignId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `proposalId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `externalCompany` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `externalDepartment` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `managerId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `managerNameManual` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Accolade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArticleSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Budget` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BudgetCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BudgetItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Campaign` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CampaignAsset` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CampaignEvent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CampaignMetric` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CampaignSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Citation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Competitor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Connection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contributor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Education` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExecutionPhase` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExecutionPlan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ExternalContributor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Feedback` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Follow` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Link` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MarketResearch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MarketStat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MarketingStrategy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Meeting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PainPoint` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PhaseTask` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectContributor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectMetric` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectMilestone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectObjective` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Proposal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProposalObjective` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProposalSection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Resource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Risk` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SwotAnalysis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SwotItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TargetAudience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeamMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Watch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AffiliatedArticles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AffiliatedCampaigns` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AffiliatedProjects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AffiliatedProposals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContributedArticles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContributedCampaigns` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContributedProjects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContributedProposals` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MeetingAttendees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProposalApprovers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `section` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MarketingPlanSection" AS ENUM ('FULL_PLAN', 'EXECUTIVE_SUMMARY', 'MISSION_STATEMENT', 'MARKETING_OBJECTIVES', 'SWOT_ANALYSIS', 'MARKET_RESEARCH', 'MARKETING_STRATEGY', 'CHALLENGES_SOLUTIONS', 'EXECUTION', 'BUDGET', 'CONCLUSION', 'FEEDBACK', 'KEY_PERFORMANCE');

-- DropForeignKey
ALTER TABLE "Accolade" DROP CONSTRAINT "Accolade_userId_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_authorId_fkey";

-- DropForeignKey
ALTER TABLE "ArticleSection" DROP CONSTRAINT "ArticleSection_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Budget" DROP CONSTRAINT "Budget_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "BudgetCategory" DROP CONSTRAINT "BudgetCategory_budgetId_fkey";

-- DropForeignKey
ALTER TABLE "BudgetItem" DROP CONSTRAINT "BudgetItem_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Campaign" DROP CONSTRAINT "Campaign_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "CampaignAsset" DROP CONSTRAINT "CampaignAsset_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "CampaignEvent" DROP CONSTRAINT "CampaignEvent_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "CampaignMetric" DROP CONSTRAINT "CampaignMetric_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "CampaignSection" DROP CONSTRAINT "CampaignSection_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "Citation" DROP CONSTRAINT "Citation_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "Competitor" DROP CONSTRAINT "Competitor_marketResearchId_fkey";

-- DropForeignKey
ALTER TABLE "Connection" DROP CONSTRAINT "Connection_connectedUserId_fkey";

-- DropForeignKey
ALTER TABLE "Connection" DROP CONSTRAINT "Connection_userId_fkey";

-- DropForeignKey
ALTER TABLE "Contributor" DROP CONSTRAINT "Contributor_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "Contributor" DROP CONSTRAINT "Contributor_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Contributor" DROP CONSTRAINT "Contributor_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "Contributor" DROP CONSTRAINT "Contributor_userId_fkey";

-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_userId_fkey";

-- DropForeignKey
ALTER TABLE "ExecutionPhase" DROP CONSTRAINT "ExecutionPhase_executionId_fkey";

-- DropForeignKey
ALTER TABLE "ExecutionPlan" DROP CONSTRAINT "ExecutionPlan_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_userId_fkey";

-- DropForeignKey
ALTER TABLE "ExternalContributor" DROP CONSTRAINT "ExternalContributor_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_followerId_fkey";

-- DropForeignKey
ALTER TABLE "Follow" DROP CONSTRAINT "Follow_followingId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_userId_fkey";

-- DropForeignKey
ALTER TABLE "MarketResearch" DROP CONSTRAINT "MarketResearch_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "MarketStat" DROP CONSTRAINT "MarketStat_marketResearchId_fkey";

-- DropForeignKey
ALTER TABLE "MarketingStrategy" DROP CONSTRAINT "MarketingStrategy_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "Meeting" DROP CONSTRAINT "Meeting_projectId_fkey";

-- DropForeignKey
ALTER TABLE "PainPoint" DROP CONSTRAINT "PainPoint_marketResearchId_fkey";

-- DropForeignKey
ALTER TABLE "PhaseTask" DROP CONSTRAINT "PhaseTask_phaseId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_leadId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectContributor" DROP CONSTRAINT "ProjectContributor_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectContributor" DROP CONSTRAINT "ProjectContributor_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectMetric" DROP CONSTRAINT "ProjectMetric_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectMilestone" DROP CONSTRAINT "ProjectMilestone_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectObjective" DROP CONSTRAINT "ProjectObjective_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "ProposalObjective" DROP CONSTRAINT "ProposalObjective_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "ProposalSection" DROP CONSTRAINT "ProposalSection_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "Reference" DROP CONSTRAINT "Reference_internalUserId_fkey";

-- DropForeignKey
ALTER TABLE "Reference" DROP CONSTRAINT "Reference_userId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_executionId_fkey";

-- DropForeignKey
ALTER TABLE "Risk" DROP CONSTRAINT "Risk_executionId_fkey";

-- DropForeignKey
ALTER TABLE "SwotAnalysis" DROP CONSTRAINT "SwotAnalysis_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "SwotItem" DROP CONSTRAINT "SwotItem_opportunityAnalysisId_fkey";

-- DropForeignKey
ALTER TABLE "SwotItem" DROP CONSTRAINT "SwotItem_strengthAnalysisId_fkey";

-- DropForeignKey
ALTER TABLE "SwotItem" DROP CONSTRAINT "SwotItem_threatAnalysisId_fkey";

-- DropForeignKey
ALTER TABLE "SwotItem" DROP CONSTRAINT "SwotItem_weaknessAnalysisId_fkey";

-- DropForeignKey
ALTER TABLE "TargetAudience" DROP CONSTRAINT "TargetAudience_marketResearchId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_projectId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMember" DROP CONSTRAINT "TeamMember_executionId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMember" DROP CONSTRAINT "TeamMember_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_managerId_fkey";

-- DropForeignKey
ALTER TABLE "Watch" DROP CONSTRAINT "Watch_articleId_fkey";

-- DropForeignKey
ALTER TABLE "Watch" DROP CONSTRAINT "Watch_campaignId_fkey";

-- DropForeignKey
ALTER TABLE "Watch" DROP CONSTRAINT "Watch_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Watch" DROP CONSTRAINT "Watch_proposalId_fkey";

-- DropForeignKey
ALTER TABLE "Watch" DROP CONSTRAINT "Watch_userId_fkey";

-- DropForeignKey
ALTER TABLE "_AffiliatedArticles" DROP CONSTRAINT "_AffiliatedArticles_A_fkey";

-- DropForeignKey
ALTER TABLE "_AffiliatedArticles" DROP CONSTRAINT "_AffiliatedArticles_B_fkey";

-- DropForeignKey
ALTER TABLE "_AffiliatedCampaigns" DROP CONSTRAINT "_AffiliatedCampaigns_A_fkey";

-- DropForeignKey
ALTER TABLE "_AffiliatedCampaigns" DROP CONSTRAINT "_AffiliatedCampaigns_B_fkey";

-- DropForeignKey
ALTER TABLE "_AffiliatedProjects" DROP CONSTRAINT "_AffiliatedProjects_A_fkey";

-- DropForeignKey
ALTER TABLE "_AffiliatedProjects" DROP CONSTRAINT "_AffiliatedProjects_B_fkey";

-- DropForeignKey
ALTER TABLE "_AffiliatedProposals" DROP CONSTRAINT "_AffiliatedProposals_A_fkey";

-- DropForeignKey
ALTER TABLE "_AffiliatedProposals" DROP CONSTRAINT "_AffiliatedProposals_B_fkey";

-- DropForeignKey
ALTER TABLE "_ContributedArticles" DROP CONSTRAINT "_ContributedArticles_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContributedArticles" DROP CONSTRAINT "_ContributedArticles_B_fkey";

-- DropForeignKey
ALTER TABLE "_ContributedCampaigns" DROP CONSTRAINT "_ContributedCampaigns_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContributedCampaigns" DROP CONSTRAINT "_ContributedCampaigns_B_fkey";

-- DropForeignKey
ALTER TABLE "_ContributedProjects" DROP CONSTRAINT "_ContributedProjects_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContributedProjects" DROP CONSTRAINT "_ContributedProjects_B_fkey";

-- DropForeignKey
ALTER TABLE "_ContributedProposals" DROP CONSTRAINT "_ContributedProposals_A_fkey";

-- DropForeignKey
ALTER TABLE "_ContributedProposals" DROP CONSTRAINT "_ContributedProposals_B_fkey";

-- DropForeignKey
ALTER TABLE "_MeetingAttendees" DROP CONSTRAINT "_MeetingAttendees_A_fkey";

-- DropForeignKey
ALTER TABLE "_MeetingAttendees" DROP CONSTRAINT "_MeetingAttendees_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProposalApprovers" DROP CONSTRAINT "_ProposalApprovers_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProposalApprovers" DROP CONSTRAINT "_ProposalApprovers_B_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "articleId",
DROP COLUMN "authorId",
DROP COLUMN "campaignId",
DROP COLUMN "projectId",
DROP COLUMN "proposalId",
ADD COLUMN     "section" "MarketingPlanSection" NOT NULL,
ADD COLUMN     "sectionId" TEXT,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "companyId",
DROP COLUMN "departmentId",
DROP COLUMN "externalCompany",
DROP COLUMN "externalDepartment",
DROP COLUMN "managerId",
DROP COLUMN "managerNameManual",
ADD COLUMN     "achievements" TEXT[],
ADD COLUMN     "certifications" TEXT[],
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "companyRole" TEXT,
ADD COLUMN     "departmentName" TEXT,
ADD COLUMN     "institution" TEXT,
ADD COLUMN     "links" TEXT[],
ADD COLUMN     "managerName" TEXT,
ADD COLUMN     "publications" TEXT[],
ADD COLUMN     "references" TEXT[],
ADD COLUMN     "reportsToEmail" TEXT,
ADD COLUMN     "skills" TEXT[],
ADD COLUMN     "title" TEXT,
ADD COLUMN     "years" INTEGER;

-- DropTable
DROP TABLE "Accolade";

-- DropTable
DROP TABLE "Article";

-- DropTable
DROP TABLE "ArticleSection";

-- DropTable
DROP TABLE "Budget";

-- DropTable
DROP TABLE "BudgetCategory";

-- DropTable
DROP TABLE "BudgetItem";

-- DropTable
DROP TABLE "Campaign";

-- DropTable
DROP TABLE "CampaignAsset";

-- DropTable
DROP TABLE "CampaignEvent";

-- DropTable
DROP TABLE "CampaignMetric";

-- DropTable
DROP TABLE "CampaignSection";

-- DropTable
DROP TABLE "Citation";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "Competitor";

-- DropTable
DROP TABLE "Connection";

-- DropTable
DROP TABLE "Contributor";

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "Document";

-- DropTable
DROP TABLE "Education";

-- DropTable
DROP TABLE "ExecutionPhase";

-- DropTable
DROP TABLE "ExecutionPlan";

-- DropTable
DROP TABLE "Experience";

-- DropTable
DROP TABLE "ExternalContributor";

-- DropTable
DROP TABLE "Feedback";

-- DropTable
DROP TABLE "Follow";

-- DropTable
DROP TABLE "Link";

-- DropTable
DROP TABLE "MarketResearch";

-- DropTable
DROP TABLE "MarketStat";

-- DropTable
DROP TABLE "MarketingStrategy";

-- DropTable
DROP TABLE "Meeting";

-- DropTable
DROP TABLE "PainPoint";

-- DropTable
DROP TABLE "PhaseTask";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "ProjectContributor";

-- DropTable
DROP TABLE "ProjectMetric";

-- DropTable
DROP TABLE "ProjectMilestone";

-- DropTable
DROP TABLE "ProjectObjective";

-- DropTable
DROP TABLE "Proposal";

-- DropTable
DROP TABLE "ProposalObjective";

-- DropTable
DROP TABLE "ProposalSection";

-- DropTable
DROP TABLE "Reference";

-- DropTable
DROP TABLE "Resource";

-- DropTable
DROP TABLE "Risk";

-- DropTable
DROP TABLE "SwotAnalysis";

-- DropTable
DROP TABLE "SwotItem";

-- DropTable
DROP TABLE "TargetAudience";

-- DropTable
DROP TABLE "Task";

-- DropTable
DROP TABLE "TeamMember";

-- DropTable
DROP TABLE "Watch";

-- DropTable
DROP TABLE "_AffiliatedArticles";

-- DropTable
DROP TABLE "_AffiliatedCampaigns";

-- DropTable
DROP TABLE "_AffiliatedProjects";

-- DropTable
DROP TABLE "_AffiliatedProposals";

-- DropTable
DROP TABLE "_ContributedArticles";

-- DropTable
DROP TABLE "_ContributedCampaigns";

-- DropTable
DROP TABLE "_ContributedProjects";

-- DropTable
DROP TABLE "_ContributedProposals";

-- DropTable
DROP TABLE "_MeetingAttendees";

-- DropTable
DROP TABLE "_ProposalApprovers";

-- DropEnum
DROP TYPE "LinkType";

-- DropEnum
DROP TYPE "ProposalType";

-- DropEnum
DROP TYPE "SectionType";

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "answer" TEXT,
    "section" "MarketingPlanSection" NOT NULL,
    "sectionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Like" (
    "id" TEXT NOT NULL,
    "reaction" TEXT,
    "section" "MarketingPlanSection" NOT NULL,
    "sectionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Approval" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "comments" TEXT,
    "section" "MarketingPlanSection" NOT NULL,
    "sectionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Approval_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_section_sectionId_key" ON "Like"("userId", "section", "sectionId");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Approval" ADD CONSTRAINT "Approval_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
