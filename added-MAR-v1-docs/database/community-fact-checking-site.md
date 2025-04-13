Absolutely — here’s the **full schema specification** for:

# ✅ 10. Platform Type: Community Fact Checking Site  
_A user-driven verification and source-checking platform for analyzing videos, articles, social posts, AI images, podcasts, and other internet media. Users collaborate by contributing sources, identifying misleading claims, linking to original context, and grouping content by creator, publisher, origin, topic, or format._

---

## ⚙️ Summary of Schema Changes

### ✅ Core Table Updates:
- `users`
- `projects`
- `articles`
- `posts`
- `comments`

### ✅ New Tables Introduced:
- `factcheck_groups` (main organizing table, similar to `ai_groups`)
- `factcheck_items`
- `factcheck_sources`
- `factcheck_votes`
- `factcheck_summaries`
- `factcheck_labels`
- `factcheck_digests`
- `factcheck_collections`
- `factcheck_testimonials`
- 🆕 `group_sorting_categories` (universal table for sorting in any grouped content model)

---

# 🧍 Users (`platform_user_fields`)

```ts
platform_user_type: researcher | journalist | expert-reviewer | citizen-fact-checker | linguist | verifier | archiver
expertise_domains: string[] // e.g., geopolitics, AI, finance, media
verification_methods: string[] // reverse search, metadata, OSINT, official source lookup
factcheck_accuracy_rating: Float?
language_proficiencies: string[]
platforms_reviewed: string[] // YouTube, TikTok, X, Reddit, IG
conflict_disclosure: string?
preferred_focus_tags: string[] // elections, deepfakes, virality, etc.
collaboration_preference: string // solo | open-collab | by-invite
availability_status: string
```

---

# 📁 Projects (`platform_project_fields`)

```ts
project_type: content-claim-analysis | narrative-thread | correction-packet | source-mapping | misinformation-deep-dive
primary_format: string // video | podcast | image | article | post
primary_platform: string
content_author_handle: string?
publication_date: DateTime
claims_being_reviewed: Json?
linked_factcheck_item_ids: string[]
attached_sources: Json?
outcome_summary: string
linked_group_ids: string[]
factcheck_label_ids: string[]
project_visibility: string
```

---

# 📄 Articles (`platform_article_fields`)

```ts
article_type: research-paper | debunking | explainer | methodology-walkthrough
topic_focus: string
disputed_claim_id: string?
content_origin_url: string?
official_source_links: string[]
included_timestamps: Json?
proof_media: Json?
linked_factcheck_group_id: string?
is_peer_reviewed: boolean
media_analysis_included: boolean
```

---

# 🗣️ Posts (`platform_post_fields`)

```ts
post_type: mini-fact | alert | context-thread | quote | source-drop
media_format: string // video | image | post | podcast | article
platform: string
content_link: string
summary_of_claim: string
media_screenshot: string?
linked_factcheck_item_id: string?
flagged_as_urgent: boolean
related_group_ids: string[]
signal_tags: string[]
```

---

# 💬 Comments (`platform_comment_fields`)

```ts
comment_context_type: claim | source | digest | label | vote
factcheck_contribution_type: dispute | confirmation | metadata-analysis | source-reference | peer-review-note
```

---

# 🧩 New Tables (Content + Structure Modules)

---

## 📦 `factcheck_groups` (Main Grouping Table)

```prisma
model factcheck_groups {
  id               String   @id @default(uuid())
  creator_id       String

  name             String
  slug             String
  subtitle         String?
  description      String?
  group_focus_type String // origin | author | platform | topic | publisher | format | era
  primary_format   String // video | article | image | audio
  tags             String[]
  languages        String[]
  countries        String[]
  date_range       String?
  group_purpose    String // source-context | correction | analysis | archive | mixed

  metadata         Json?
  related_claim_ids String[]
  featured_users    String[]
  sorting_category_id String?

  users users @relation(fields: [creator_id], references: [id], onDelete: Cascade)

  @@map("factcheck_groups")
}
```

---

## 📁 `factcheck_items`

> Core claim-based or content-specific entries.

```prisma
model factcheck_items {
  id               String   @id @default(uuid())
  factcheck_group_id String
  content_type     String // video | image | post | podcast | article
  content_platform String
  content_url      String
  media_snapshot   String?
  claim_summary    String
  content_creator  String
  original_date    DateTime?
  topic_tags       String[]
  language         String
  dispute_score    Float?
  trust_score      Float?
  view_count       Int?
  linked_sources   String[]
  current_labels   String[]

  factcheck_groups factcheck_groups @relation(fields: [factcheck_group_id], references: [id])

  @@map("factcheck_items")
}
```

---

## 🔍 `factcheck_sources`

```prisma
model factcheck_sources {
  id               String   @id @default(uuid())
  item_id          String
  label            String
  url              String
  source_type      String // original | supporting | contradictory | official
  added_by_user_id String
  language         String
  credibility_rating Float?
  notes            String?

  factcheck_items factcheck_items @relation(fields: [item_id], references: [id])

  @@map("factcheck_sources")
}
```

---

## 🗳️ `factcheck_votes`

```prisma
model factcheck_votes {
  id               String   @id @default(uuid())
  item_id          String
  user_id          String
  label_applied    String // true | misleading | unverified | manipulated | context-needed
  confidence_score Int
  explanation      String?
  added_timestamp  DateTime @default(now())

  factcheck_items factcheck_items @relation(fields: [item_id], references: [id])
  users users @relation(fields: [user_id], references: [id], onDelete: Cascade)

  @@unique([item_id, user_id])
  @@map("factcheck_votes")
}
```

---

## 🧾 `factcheck_summaries`

```prisma
model factcheck_summaries {
  id               String   @id @default(uuid())
  item_id          String
  summary_text     String
  source_references String[]
  created_by_user  String
  summary_type     String // consensus | summary | peer-review | AI-generated

  factcheck_items factcheck_items @relation(fields: [item_id], references: [id])

  @@map("factcheck_summaries")
}
```

---

## 🏷️ `factcheck_labels`

```prisma
model factcheck_labels {
  id               String   @id @default(uuid())
  name             String
  slug             String
  label_type       String // true | partly-true | misleading | fabricated | missing-context
  icon_url         String?
  color_code       String?
  system_default   Boolean
  is_user_defined  Boolean

  @@map("factcheck_labels")
}
```

---

## 📰 `factcheck_digests`

> Aggregated or batched claim roundups.

```prisma
model factcheck_digests {
  id               String   @id @default(uuid())
  title            String
  creator_id       String
  topic_tags       String[]
  timeframe        String // Week of Mar 20, 2024
  region           String
  item_ids         Json?
  digest_notes     String?

  users users @relation(fields: [creator_id], references: [id], onDelete: Cascade)

  @@map("factcheck_digests")
}
```

---

## 🗂️ `factcheck_collections`

```prisma
model factcheck_collections {
  id               String   @id @default(uuid())
  user_id          String
  title            String
  collection_type  String // misleading-image | viral-claims | context-resolved
  summary          String?
  grouped_item_ids Json?
  display_tags     String[]

  users users @relation(fields: [user_id], references: [id], onDelete: Cascade)

  @@map("factcheck_collections")
}
```

---

## 🧠 `factcheck_testimonials`

```prisma
model factcheck_testimonials {
  id              String   @id @default(uuid())
  user_id         String
  quote           String
  attributed_name String?
  affiliation     String?
  verified:       Boolean @default(false)
  public_display  Boolean @default(true)
  linked_group_id String?

  users users @relation(fields: [user_id], references: [id], onDelete: Cascade)

  @@map("factcheck_testimonials")
}
```

---

## 🔃 `group_sorting_categories` (Universal Table)

> Used for organizing content within a group hub — available to `ai_groups`, `creator_groups`, etc.

```prisma
model group_sorting_categories {
  id               String   @id @default(uuid())
  group_type       String // ai_groups | creator_groups | factcheck_groups
  label            String
  slug             String
  description      String?
  sort_logic       String // most_viewed | recent | expert-flagged | disputed | corrected | popular
  icon_url         String?

  @@map("group_sorting_categories")
}
```

---

# 🧠 Contribution Classification Fields

```ts
comment_context_type: claim | post | article | image | video | platform
factcheck_contribution_type: source-drop | contradiction | verification | quote-reference | media-metadata | AI-gen-detection
```

---

# ✅ Summary of New Tables for Community Fact Checking Platform

| Table | Purpose |
|-------|---------|
| `factcheck_groups` | Main group by creator/topic/format/origin |
| `factcheck_items` | Content-based entries for review |
| `factcheck_sources` | Sources tied to each claim or item |
| `factcheck_votes` | User-applied labels with confidence scoring |
| `factcheck_summaries` | Aggregated or peer-reviewed summaries |
| `factcheck_labels` | Controlled set of verification tags |
| `factcheck_digests` | Weekly/monthly thematic roundups |
| `factcheck_collections` | User-curated batches |
| `factcheck_testimonials` | Community validation of reviewers |
| `group_sorting_categories` | Universal sorting system for grouped content across platforms |

---

## ✅ Ready for Implementation?

Would you like to:
- Scaffold this schema into Prisma?
- Generate the `/types/entities.ts` entries for each table?
- Draft display logic for a "Factcheck Group Hub" page?
- Seed demo content like “Election 2024 Claim Tracker” or “Viral Video Verifier”?

Let me know when you're ready for platform type #11 — we’re building a powerhouse ecosystem.