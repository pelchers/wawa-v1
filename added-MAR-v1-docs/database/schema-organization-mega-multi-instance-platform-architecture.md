// ==============================================
// ✅ 1. MAIN MEGA SITE TABLE
// ==============================================
model mega_sites {
  id                  String   @id @default(uuid())
  platform_type_id    String

  name                String
  slug                String   @unique
  description         String?
  cover_image_url     String?
  visibility          String   @default("public")
  featured            Boolean  @default(false)
  created_at          DateTime @default(now())
  updated_at          DateTime @updatedAt

  // Relationships
  platform_type       platform_types @relation(fields: [platform_type_id], references: [id], onDelete: Cascade)
  pages               mega_site_pages[]
  subsites            mega_subsites[]
}

// ==============================================
// ✅ 2. SUBSITE TABLE (Each artist, product, scam group, etc.)
// ==============================================
model mega_subsites {
  id                  String   @id @default(uuid())
  mega_site_id        String
  project_type_id     String? // optional conditional structure

  name                String
  slug                String   @unique
  bio                 String?
  about_text          String?
  location            String?
  start_date          DateTime?
  featured            Boolean  @default(false)
  banner_image_url    String?
  profile_image_url   String?
  tags                String[]

  mega_site           mega_sites @relation(fields: [mega_site_id], references: [id], onDelete: Cascade)
  project_type        platform_project_types? @relation(fields: [project_type_id], references: [id])

  sections            mega_site_sections[]
  timeline_entries    mega_site_timeline_entries[]
  awards              mega_site_awards[]
  social_links        mega_site_social_links[]
  media_assets        mega_site_media[]
  articles            mega_site_articles[]
  posts               mega_site_posts[]
  comments            mega_site_comments[]
}

// ==============================================
// ✅ 3. CONFIGURABLE SUBTABLES PER SUBSITE
// ==============================================
model mega_site_sections {
  id                  String   @id @default(uuid())
  subsite_id          String
  title               String
  content_blocks      Json?
  layout_type         String? // grid | list | carousel | tabbed
  slug                String?

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_timeline_entries {
  id                  String   @id @default(uuid())
  subsite_id          String
  title               String
  date                DateTime
  description         String?
  media_url           String?

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_awards {
  id                  String   @id @default(uuid())
  subsite_id          String
  name                String
  year                String?
  awarding_body       String?
  notes               String?

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_social_links {
  id                  String   @id @default(uuid())
  subsite_id          String
  platform            String
  url                 String

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_media {
  id                  String   @id @default(uuid())
  subsite_id          String
  media_type          String // image | video | audio | pdf
  title               String?
  url                 String
  thumbnail_url       String?

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_articles {
  id                  String   @id @default(uuid())
  subsite_id          String
  title               String
  content             String
  tags                String[]
  featured            Boolean  @default(false)
  created_at          DateTime @default(now())

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_posts {
  id                  String   @id @default(uuid())
  subsite_id          String
  title               String?
  body                String
  created_at          DateTime @default(now())

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_comments {
  id                  String   @id @default(uuid())
  subsite_id          String
  post_id             String?
  article_id          String?
  body                String
  created_at          DateTime @default(now())

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
} // Articles and Posts should map relation to use commentable_id pattern if polymorphic

////////////////////////////////////////////////////////////////////

// ============================================
// ✅ EXPANDED SUBTABLES FOR MEGA SUBSITES
// ============================================

model mega_site_forum_posts {
  id            String   @id @default(uuid())
  subsite_id    String
  user_id       String
  title         String
  body          String
  pinned        Boolean  @default(false)
  locked        Boolean  @default(false)
  created_at    DateTime @default(now())

  mega_subsites mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
  users         users         @relation(fields: [user_id], references: [id], onDelete: Cascade)
}

model mega_site_events {
  id            String   @id @default(uuid())
  subsite_id    String
  title         String
  description   String?
  event_date    DateTime
  location      String?
  event_type    String? // concert | livestream | meetup | launch
  media_url     String?
  link_url      String?

  mega_subsites mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_merch {
  id            String   @id @default(uuid())
  subsite_id    String
  name          String
  description   String?
  price         Float?
  currency      String? @default("USD")
  image_url     String?
  product_url   String
  in_stock      Boolean @default(true)

  mega_subsites mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

// ============================================
// ✅ USER ROLE + CONNECTIONS + MEMBERSHIP TABLES
// ============================================

model mega_site_roles {
  id                  String   @id @default(uuid())
  subsite_id          String
  user_id             String
  role                String   // artist | moderator | creator | researcher | fan
  platform_user_type_id String?

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
  users               users         @relation(fields: [user_id], references: [id], onDelete: Cascade)
  platform_user_type  platform_user_types? @relation(fields: [platform_user_type_id], references: [id])

  @@unique([subsite_id, user_id])
}

model mega_site_connections {
  id                  String   @id @default(uuid())
  subsite_id          String
  label               String
  description         String?
  type                String // contact | collab | network | fan | press | sponsorship | brand_deal | affiliate | media | service_provider | agency | platform
  target_user_id      String?
  target_url          String?
  featured            Boolean @default(false)

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
  users               users? @relation(fields: [target_user_id], references: [id])
}

model mega_site_contributions {
  id                  String   @id @default(uuid())
  subsite_id          String
  user_id             String
  contribution_type   String  // article | post | award | music | art | code
  title               String
  description         String?
  media_url           String?
  submitted_at        DateTime @default(now())
  featured            Boolean  @default(false)

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
  users               users         @relation(fields: [user_id], references: [id], onDelete: Cascade)
}

// ============================================
// ✅ DISPLAYABLE CONTENT GRIDS (Explore-Style Pages)
// ============================================

model mega_site_album_entries {
  id                  String   @id @default(uuid())
  subsite_id          String
  title               String
  release_date        DateTime?
  cover_image_url     String?
  description         String?
  genre_tags          String[]
  link_url            String?
  tracklist           Json?

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_books {
  id                  String   @id @default(uuid())
  subsite_id          String
  title               String
  author              String?
  published_date      DateTime?
  description         String?
  genre_tags          String[]
  cover_image_url     String?
  link_url            String?

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_featured_awards {
  id                  String   @id @default(uuid())
  subsite_id          String
  name                String
  awarded_by          String
  year                String?
  description         String?
  image_url           String?

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_bounties {
  id                  String   @id @default(uuid())
  subsite_id          String
  title               String
  description         String
  reward              Float?
  currency            String? @default("USD")
  deadline            DateTime?
  status              String? // open | claimed | expired
  claim_link_url      String?

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_video_features {
  id                  String   @id @default(uuid())
  subsite_id          String
  title               String
  video_url           String
  thumbnail_url       String?
  description         String?
  tags                String[]
  published_date      DateTime?

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

model mega_site_gallery_items {
  id                  String   @id @default(uuid())
  subsite_id          String
  media_type          String // image | art | document
  url                 String
  title               String?
  caption             String?
  tags                String[]

  mega_subsites       mega_subsites @relation(fields: [subsite_id], references: [id], onDelete: Cascade)
}

////////////////////////////////////////////////////////////////////

✅ The `mega_sites` schema has been fully scaffolded and documented in a new text file called **`mega-site-schema`**. Here's a quick developer-friendly breakdown of how this works:

---

## 🧠 Schema Concept Summary

### Mega Sites = Multi-instance hubs with shared layout types.

| Use Case Example | What You'd Store |
|------------------|------------------|
| `artists_mega_site` | Subsites for each artist: about, awards, albums, tour, timeline |
| `scams_mega_site` | Subsites for each scam ring/network: videos, origins, timeline |
| `products_mega_site` | Subsites for each product/team: launches, specs, roadmaps |

These are all configured with:
- a shared `mega_sites` parent (the "network homepage")
- multiple `mega_subsites` (the individual artist/product/etc.)
- a rich set of **subtables** to display per-subsite content modularly

---

## ✅ Full Set of Included Tables

| Table | Description |
|-------|-------------|
| `mega_sites` | Parent group hub (e.g., “Best of 2020 Artists”) |
| `mega_subsites` | Individual artist/product/etc. entries |
| `mega_site_pages` *(optional)* | (Can support landing pages later if needed) |
| `mega_site_sections` | Custom layout block per subsite |
| `mega_site_timeline_entries` | Chronological achievements, milestones, releases |
| `mega_site_awards` | Achievements/accolades per subsite |
| `mega_site_social_links` | TikTok, YouTube, Website, etc. |
| `mega_site_media` | Video, Image, Audio, PDF |
| `mega_site_articles` | Long-form content/news |
| `mega_site_posts` | Short updates |
| `mega_site_comments` | Feedback on posts or articles |

✅ Every table is scoped to a specific `subsite_id`  
✅ And each subsite belongs to a `mega_site_id`

---

## 🧭 Configurability via Platform Type

By including:
```prisma
platform_type_id String
```
in `mega_sites`, each site can:
- dynamically define which content types to show
- conditionally show/hide timeline, awards, posts, etc.
- align with all your existing `platform_user_types`, `platform_project_types`, etc.

---

## 🔧 Developer Implementation Notes

### ✅ Create a new “platform” type:
```ts
platform_types: {
  name: "artists_mega_site",
  label: "Artist Mega Site",
}
```

### ✅ Then all lookup logic, user types, project types, etc., flow from there.

---

## ➕ Optional Expansion

- Add `mega_site_forum_posts`, `mega_site_events`, `mega_site_merch`, etc. as needed
- Embed this into your group-based Explore page structure
- Tie `platform_user_type` for subsite editors/mods/roles

---

Let me know if you’d like:
- The admin dashboard for managing `mega_sites` and `mega_subsites`
- The filtering + sorting logic scaffolded for `mega_sites`
- UI layout planning for mega site subpages (grid/timeline/blocks)

You’re now set up to power an entire **modular mega-site CMS** structure — and reuse it across verticals with zero rewrites. 💥

////////////////////////////////////////////////////////////////////

✅ The `mega-site-expansion` schema file has been updated with:

---

## 🔁 Expanded Connection Types in `mega_site_connections`

```ts
type String // contact | collab | network | fan | press | sponsorship | brand_deal | affiliate | media | service_provider | agency | platform
```

This makes it compatible with creators, brands, agencies, sponsors, networks, etc.

---

## 🧱 Additional Displayable Grid Tables (Explore-Style)

### ✅ `mega_site_video_features`
- Highlight YouTube/TikTok/Vimeo content
- Showcase visual explainers, music videos, announcements

### ✅ `mega_site_gallery_items`
- General media gallery (e.g. art, image sets, press clippings, promo PDFs)

---

These are structured just like `albums`, `books`, and `awards` — ready for:
- Explore pages
- Grid view
- Timeline view
- Tag filters

---

Would you like me to:
- Add `filterable_fields` to each of these tables for search/sort UI?
- Scaffold frontend `Explore` logic for a specific one (e.g. `bounties`, `albums`, `video_features`)?

You’re now working with a **modular mega-site schema system** capable of handling full-scale content and community ecosystems per entity 💥

////////////////////////////////////////////////////////////////////

Absolutely — here's your full, step-by-step guide to understanding and working with your:

---

# ✅ Multi-Instance Platform Architecture  
*as implemented in your mega-site schema with platform type-driven configuration*

---

## 🧠 Concept Summary

### What You’ve Built:
A flexible, modular architecture that allows you to launch entire **networks of micro-sites** (we call them **mega sites**) that:

- Share a **global schema** (one set of tables per feature: media, timeline, articles, etc.)
- Are grouped by `platform_type` (e.g., `artists_mega_site`, `scams_mega_site`, `products_mega_site`)
- Contain many **subsites** (e.g., one per artist, scam group, product, etc.)
- Are each configurable in terms of:
  - What features are visible
  - What content types are supported
  - What UI layouts and sort/filter settings are enabled
  - What user roles exist for that type of platform

---

## 🔨 Architectural Components

### 🔹1. Top-Level Platform Definition

```prisma
model platform_types {
  id          String   @id @default(uuid())
  name        String   @unique // e.g., "artists_mega_site"
  label       String
  ...
}
```

This is the platform's *blueprint*. Everything flows from this.

---

### 🔹2. Mega Site Entity

```prisma
model mega_sites {
  id                  String   @id @default(uuid())
  platform_type_id    String
  name                String
  slug                String
  description         String?
  ...
}
```

**Think of this as the network homepage** — e.g.:
- “Top 100 Independent Artists”
- “Verified Scam Network Archive”
- “Crowdsourced Tech Product Roadmaps”

Each `mega_site` hosts many `mega_subsites`.

---

### 🔹3. Mega Subsite (The core multi-instance engine)

```prisma
model mega_subsites {
  id                  String   @id @default(uuid())
  mega_site_id        String
  name                String
  slug                String
  project_type_id     String?
  ...
}
```

Each subsite has:
- A unique slug (`/artists/john-doe`)
- Configured feature visibility
- Tags, media, and social content
- Its own **Explore-style content pages**

---

### 🔹4. Content Modules (subtables)

Each subsite can display:

| Feature | Table |
|--------|-------|
| 🗂 Sections/Layouts | `mega_site_sections` |
| 🕒 Timeline | `mega_site_timeline_entries` |
| 🏆 Awards | `mega_site_awards` |
| 🎥 Videos | `mega_site_video_features` |
| 🖼 Gallery | `mega_site_gallery_items` |
| 📚 Books | `mega_site_books` |
| 💽 Albums | `mega_site_album_entries` |
| 📅 Events | `mega_site_events` |
| 🛍 Merch | `mega_site_merch` |
| 📰 Articles | `mega_site_articles` |
| 💬 Posts + Comments | `mega_site_posts`, `mega_site_comments` |
| 🎯 Bounties | `mega_site_bounties` |
| 💬 Forums | `mega_site_forum_posts` |
| 🙋 Connections | `mega_site_connections` |
| 🎁 Contributions | `mega_site_contributions` |

These are **universal tables** — but **conditionally filtered/rendered** based on the platform type and subsite’s project type.

---

### 🔹5. Role + Type Binding

Each subsite can assign roles like:

```prisma
model mega_site_roles {
  subsite_id
  user_id
  role: "artist" | "moderator" | "sponsor"
  platform_user_type_id → platform_user_types
}
```

➡️ This lets you configure custom user types and relationships per platform.

---

## 🛠 How to Configure It — As a Developer

Let’s say you want to configure `artists_mega_site`.

---

### ✅ Step 1: Add a `platform_type`

```prisma
{
  name: "artists_mega_site",
  label: "Artist Mega Site",
  description: "Modular platform for artists to showcase their work and connect with fans"
}
```

---

### ✅ Step 2: Define Available Types

Create entries for:
- `platform_user_types`: artist, manager, fan, sponsor
- `platform_project_types`: music release, tour, campaign
- `platform_post_types`: update, announcement
- `platform_article_types`: behind the scenes, press release
- `platform_comment_context_types`: timeline | gallery | forum | event
- `platform_contribution_types`: album | image | merch | lyric | announcement

---

### ✅ Step 3: Create a Mega Site Entry

```prisma
{
  name: "Top Indie Artists 2024",
  slug: "top-indie-artists",
  platform_type_id: "artists_mega_site"
}
```

---

### ✅ Step 4: Add Subsites (Individual artists)

```prisma
{
  name: "John Doe",
  slug: "john-doe",
  mega_site_id: "top-indie-artists",
  project_type_id: "artist"
}
```

---

### ✅ Step 5: Add Content to Subsite

| Page | Table |
|------|-------|
| `/john-doe/timeline` | `mega_site_timeline_entries` |
| `/john-doe/gallery` | `mega_site_gallery_items` |
| `/john-doe/awards` | `mega_site_awards` |
| `/john-doe/albums` | `mega_site_album_entries` |
| `/john-doe/forum` | `mega_site_forum_posts` |

Each of these routes is scoped by `subsite_id`.

---

## 🧠 Dynamic Rendering on Frontend

### You can use:
- `platform_type_id` to:
  - Load which tabs to show (albums, videos, merch, etc.)
  - Load dynamic form inputs for posts/articles
- `project_type_id` to:
  - Load layout themes, filters, form validators
- `explore-config.ts` per platform type to:
  - Control grid/list view toggle
  - Define filters/sorting for content like albums, events, awards

---

## 🔗 Linking Patterns

| Entity | Route |
|--------|-------|
| Mega site index | `/mega/artists_mega_site` |
| Mega site view | `/mega/artists_mega_site/top-indie-artists` |
| Subsite homepage | `/artists/john-doe` |
| Subsite tab pages | `/artists/john-doe/gallery`, `/artists/john-doe/events` |
| Subsite content details | `/artists/john-doe/albums/debut-mixtape` |

✅ Routes remain platform-type aware  
✅ Everything is scoped dynamically

---

## ✅ Optional Features

- Add `is_featured`, `priority_score`, `custom_sorting_config` to sort subsites or their content
- Add `group_sorting_categories` to each mega_site for controlling how subsite-level content is sorted/displayed
- Add `mega_site_collections` to group multiple mega sites (e.g., “Award Winners”, “Best of 2024”)

---

## ✅ Dev Summary: How You Scale This

| Feature | How |
|--------|-----|
| Launch a new multi-site format | Add 1 `platform_type` and reuse the schema |
| Customize tabs and roles per platform | Use `platform_*_types` tables |
| Populate content dynamically | Use `subsite_id` scoped tables |
| Build frontend dynamically | Read `platform_type_id`, project type, and UI config tables |
| Add a new subsite | Insert to `mega_subsites` and start using content modules |
| Reuse this for AI mega sites, scam mega sites, brand showcases, etc. | ✅ No schema changes needed — just different `platform_type_id`

---

Let me know if you'd like:
- A boilerplate explore page for any mega site table
- A dynamic subsite layout engine with auto-tabbing
- Backend API + admin form generators for adding/editing mega sites

You're building a **modular mega-CMS engine** — reusable for every platform vision imaginable. 💥