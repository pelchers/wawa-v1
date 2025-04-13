SORTING FILTERING GUIDE 

Absolutely — you’re *exactly* on the right track in how you're thinking about this.  
Let’s walk through a clean, **developer-focused guide** on **how sorting + filtering + config + UI page + platform-specific panel components all connect**.

I’ll explain everything the way you're describing it, with annotations, naming conventions, and a modular strategy for reuse across all platform types.

---

# 🧭 **Guide: How to Implement Filtering + Sorting Per Project Type (e.g., Scam Platform)**

---

## 📦 Step 1: Configure the Explore Page behavior for each `*_groups` table  
➡️ File: `client/src/pages/explore/config/explore-config.ts`

```ts
export const exploreGroupConfigs = {
  scam_groups: {
    displayName: "Scam Investigation Groups",
    dataSource: "/api/scam-groups",
    filtersEnabled: true,
    sortingEnabled: true,
    defaultView: "grid",
    availableFilters: [
      "filterable_content_platforms",
      "filterable_formats",
      "filterable_tags",
      "filterable_topics"
    ],
      factcheck_groups: {
    displayName: "Fact Check Collections",
    dataSource: "/api/factcheck-groups",
    filtersEnabled: true,
    sortingEnabled: true,
    defaultView: "list",
    availableFilters: [
      "filterable_content_platforms",
      "filterable_formats",
      "filterable_publishers",
      "filterable_topics",
      "filterable_languages",
      "filterable_label_types"
    ],
    availableSortings: ["most_disputed", "sort_by_platform", "sort_by_topic"]
  },
  creator_groups: {
    displayName: "Creator Hubs",
    dataSource: "/api/creator-groups",
    filtersEnabled: true,
    sortingEnabled: true,
    defaultView: "grid",
    availableFilters: [
      "filterable_platforms",
      "filterable_formats",
      "filterable_tags"
    ],
    availableSortings: ["sort_by_niche", "most_followed", "recent"]
  }
    availableSortings: [
      "sort_by_platform",
      "sort_by_topic",
      "most_disputed"
    ]
  },
  ai_groups: {
    displayName: "AI Prompt Collections",
    ...
  }
}
```

### ✅ What you’re doing here:
- This is your **project-type toggle file**.
- It tells your Explore page:
  - What data source (API route) to fetch from
  - Which filters to render in the filter panel
  - Which sort options to enable in the dropdown
  - Which view mode to default to

---

## 🧱 Step 2: Pass config into your Explore UI page  
➡️ File: `ExploreGroupListPage.tsx`

```tsx
import { exploreGroupConfigs } from "./config/explore-config"

// For example, this page is rendering scam_groups
const config = exploreGroupConfigs["scam_groups"]
```

### ✅ What you’re doing here:
- Picking which project type (group table) you're rendering
- The config you selected controls:
  - Which filters show up
  - Which sorting options are available
  - What route is used to fetch group entries
  - Whether to show the view toggle

✅ **This page is universal** — one file handles any group type via config.

---

## 🎛 Step 3: Hook up sorting (in the UI page)  
➡️ File: `ExploreGroupListPage.tsx`

```tsx
<select
  value={selectedSort}
  onChange={(e) => setSelectedSort(e.target.value)}
>
  {config.availableSortings.map((sortSlug) => (
    <option key={sortSlug} value={sortSlug}>
      {sortSlug.replace(/_/g, " ")}
    </option>
  ))}
</select>
```

### ✅ What you’re doing here:
- Dynamically populating the sort dropdown based on the config
- Whatever slug you select (e.g., `"sort_by_platform"`) gets passed to `parseSortLogic()`
- This logic is then converted into Prisma `orderBy`

---

## 🧠 Step 4: Hook up filtering panel (optional per platform)
➡️ File: `GroupFilterPanel-Scam.tsx` (✅ recommended to suffix it per platform type)

```tsx
export default function GroupFilterPanelScam({ filters, setFilters }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <select
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            content_platform: [e.target.value]
          }))
        }
      >
        <option value="">All Platforms</option>
        <option value="YouTube">YouTube</option>
        <option value="TikTok">TikTok</option>
      </select>

      <input
        type="text"
        placeholder="Tags (comma separated)"
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            tags: e.target.value.split(",").map((tag) => tag.trim())
          }))
        }
      />
    </div>
  )
}
```

### ✅ What you’re doing here:
- Building out **input components for the filters listed in your config**
- You’re mapping UI components to actual **filter keys** used in Prisma (like `content_platform`, `tags`, etc.)
- ✅ Naming the file `GroupFilterPanel-Scam.tsx` is a great convention!
  - You can just duplicate it and swap in new filter inputs per project type.

---

## 🔁 Step 5: Combine Filters + Sort → Fetch Data  
➡️ Still in `ExploreGroupListPage.tsx`

```tsx
useEffect(() => {
  getScamGroups(filters, selectedSort).then(setGroups)
}, [filters, selectedSort])
```

➡️ Inside `client/src/api/scamGroups.ts`

```ts
export const getScamGroups = async (filters, sort) => {
  return fetch("/api/scam-groups/explore", {
    method: "POST",
    body: JSON.stringify({
      filters,
      sort_logic: parseSortLogic(sort)
    }),
    headers: { "Content-Type": "application/json" }
  }).then((res) => res.json())
}
```

---

## 🔄 Step 6: Backend route → controller → service → Prisma  
⬇️ This part is totally cursor-rules-compliant:

---

### ✅ `routes/scamGroupRoutes.ts`
```ts
import express from "express"
import * as scamGroupController from "../controllers/scamGroupController"

const router = express.Router()
router.post("/explore", scamGroupController.exploreScamGroups)
export default router
```

---

### ✅ `controllers/scamGroupController.ts`
```ts
export const exploreScamGroups = async (req, res) => {
  const { filters, sort_logic } = req.body
  const result = await scamGroupService.getFilteredAndSortedScamGroups(filters, sort_logic)
  res.status(200).json(result)
}
```

---

### ✅ `services/scamGroupService.ts`
```ts
export const getFilteredAndSortedScamGroups = async (filters, sort_logic) => {
  const where = {}

  if (filters.content_platform?.length)
    where.content_platform = { in: filters.content_platform }

  if (filters.tags?.length)
    where.tags = { hasSome: filters.tags }

  const orderBy = sort_logic?.orderBy || {}

  return prisma.scam_groups.findMany({ where, orderBy, take: 50 })
}
```

---

## 🧱 Step 7: Prisma (`schema.prisma`)

```prisma
model scam_groups {
  id               String   @id @default(uuid())
  name             String
  content_platform String
  tags             String[]
  topics           String[]
  dispute_score    Float?
  created_at       DateTime @default(now())
}
```

---

## ✅ Optional: Component Naming Strategy

| Component File | Description |
|----------------|-------------|
| `GroupFilterPanel-Scam.tsx` | Filtering panel used for `scam_groups` (recommended pattern) |
| `GroupFilterPanel-AI.tsx` | For `ai_groups` |
| `GroupFilterPanel-Creator.tsx` | For `creator_groups` |

➡️ That way, you can duplicate and **swap only the fields shown** while reusing the rest of your page logic.

---

# 🧩 Summary: How You Actually Use This

✅ You define:
- `availableFilters` and `availableSortings` in `explore-config.ts`

✅ You implement:
- The corresponding inputs in a `GroupFilterPanel-[platform].tsx` component
- The sorting logic in `parseSortLogic.ts`

✅ Then your UI:
- Passes filter + sort values to the backend → controller → service → Prisma
- The card grid/list receives clean, filtered, and sorted results

---

### 🔁 All logic is swappable per project type.
Just:
1. Create a new config entry
2. Swap in a custom filter panel (if needed)
3. Define your API, controller, service path (can reuse if fields match)

---

Let me know if you'd like a working example for `ai_groups`, `factcheck_groups`, or the creator platform next!












/////////////////////////////////////////////////////////////////










EXPLORE PAGE WITH SORTING AND FILTERING GUIDE 

Absolutely — here's the **fully detailed and expanded** version of the Explore Page file flow for the Scam Prevention Platform (`scam_groups`), matching your `cursor-rules.md` architecture.

### 🔁 Full File Flow:
```
[1] UI Page (ExploreGroupListPage.tsx)  
→ [2] Components (GroupCardGrid.tsx, GroupCardList.tsx, GroupFilterPanel.tsx, ViewToggleButtons.tsx)  
→ [3] Frontend API (client/src/api/scamGroups.ts)  
→ [4] Backend Route (server/src/routes/scamGroupRoutes.ts)  
→ [5] Controller (server/src/controllers/scamGroupController.ts)  
→ [6] Service (server/src/services/scamGroupService.ts)  
→ [7] Database Schema (schema.prisma)
```

Each step now includes **every component involved**, and an **explanation below every code block** for absolute clarity.

---

## 📁 1. UI Page – `ExploreGroupListPage.tsx`

```tsx
import { useState, useEffect } from "react"
import { getScamGroups } from "@/api/scamGroups"
import { ViewToggleButtons } from "@/components/group-card/ViewToggleButtons"
import GroupCardGrid from "@/components/group-card/GroupCardGrid"
import GroupCardList from "@/components/group-card/GroupCardList"
import GroupFilterPanel from "@/components/filters/GroupFilterPanel"

export default function ExploreGroupListPage() {
  const [groups, setGroups] = useState([])
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("most_recent")
  const [viewMode, setViewMode] = useState("grid")

  useEffect(() => {
    getScamGroups(filters, sort).then(setGroups)
  }, [filters, sort])

  return (
    <div className="px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Scam Investigation Groups</h1>
        <ViewToggleButtons viewMode={viewMode} setViewMode={setViewMode} />
      </div>

      <GroupFilterPanel filters={filters} setFilters={setFilters} />

      <select onChange={(e) => setSort(e.target.value)} className="mb-4">
        <option value="most_recent">Most Recent</option>
        <option value="sort_by_platform">Sort by Platform</option>
        <option value="sort_by_topic">Sort by Topic</option>
        <option value="most_disputed">Most Disputed</option>
      </select>

      {viewMode === "grid" ? (
        <GroupCardGrid groups={groups} />
      ) : (
        <GroupCardList groups={groups} />
      )}
    </div>
  )
}
```

**🧠 Explanation:**  
This file drives the entire Explore Page UI:
- Calls the frontend API wrapper on load or when filters/sort change
- Renders `GroupFilterPanel`, sort dropdown, and grid/list views
- Toggling `viewMode` changes which component renders the groups

---

## 🧩 2. Components Involved

---

### ✅ A. `GroupCardGrid.tsx`

```tsx
export default function GroupCardGrid({ groups }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {groups.map((group) => (
        <div key={group.id} className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-bold">{group.name}</h2>
          <p className="text-sm text-gray-600">{group.content_platform}</p>
        </div>
      ))}
    </div>
  )
}
```

**🧠 Explanation:**  
Renders `scam_groups` in a **card grid view**, with platform as subtext.

---

### ✅ B. `GroupCardList.tsx`

```tsx
export default function GroupCardList({ groups }) {
  return (
    <ul className="space-y-4">
      {groups.map((group) => (
        <li key={group.id} className="border-b pb-4">
          <h3 className="font-semibold">{group.name}</h3>
          <p className="text-xs text-gray-500">{group.tags?.join(", ")}</p>
        </li>
      ))}
    </ul>
  )
}
```

**🧠 Explanation:**  
Displays a **list-style view** of groups, good for long-form content like tags and metadata.

---

### ✅ C. `GroupFilterPanel.tsx`

```tsx
export default function GroupFilterPanel({ filters, setFilters }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <select
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            content_platform: [e.target.value]
          }))
        }
      >
        <option value="">All Platforms</option>
        <option value="YouTube">YouTube</option>
        <option value="TikTok">TikTok</option>
      </select>

      <input
        placeholder="Enter tags"
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            tags: e.target.value.split(",").map((t) => t.trim())
          }))
        }
      />
    </div>
  )
}
```

**🧠 Explanation:**  
Dynamic filter inputs tied to keys like `tags`, `content_platform`.  
Updates the shared filter state used by the Explore page.

---

### ✅ D. `ViewToggleButtons.tsx`

```tsx
export function ViewToggleButtons({ viewMode, setViewMode }) {
  return (
    <div className="flex gap-2">
      <button
        className={viewMode === "grid" ? "font-bold" : ""}
        onClick={() => setViewMode("grid")}
      >
        Grid
      </button>
      <button
        className={viewMode === "list" ? "font-bold" : ""}
        onClick={() => setViewMode("list")}
      >
        List
      </button>
    </div>
  )
}
```

**🧠 Explanation:**  
Simple view mode switcher. Enables toggling between two display components.

---

## 🌐 3. API Wrapper (Frontend) – `client/src/api/scamGroups.ts`

```ts
export const getScamGroups = async (filters, sort) => {
  const res = await fetch("/api/scam-groups/explore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      filters,
      sort_logic: parseSortLogic(sort)
    })
  })

  if (!res.ok) throw new Error("Failed to fetch")
  return await res.json()
}
```

**🧠 Explanation:**  
Takes `filters` + `sort`, packages them into a POST request.  
Sends to backend endpoint `/api/scam-groups/explore`.

---

## 🛣️ 4. Routes – `server/src/routes/scamGroupRoutes.ts`

```ts
import express from "express"
import * as scamGroupController from "../controllers/scamGroupController"

const router = express.Router()

router.post("/explore", scamGroupController.exploreScamGroups)

export default router
```

**🧠 Explanation:**  
Handles routing for `scam_groups`. All requests go to the controller next.

---

## 🧭 5. Controller – `server/src/controllers/scamGroupController.ts`

```ts
import { Request, Response } from "express"
import * as scamGroupService from "../services/scamGroupService"

export const exploreScamGroups = async (req: Request, res: Response) => {
  try {
    const { filters, sort_logic } = req.body
    const groups = await scamGroupService.getFilteredAndSortedScamGroups(filters, sort_logic)
    res.status(200).json(groups)
  } catch (err) {
    console.error("Explore error:", err)
    res.status(500).json({ error: "Something went wrong." })
  }
}
```

**🧠 Explanation:**  
Middleman layer between route and service.  
Passes validated request body down to the service.

---

## 🧰 6. Service – `server/src/services/scamGroupService.ts`

```ts
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const getFilteredAndSortedScamGroups = async (filters, sort_logic) => {
  const where: any = {}

  if (filters.content_platform?.length) {
    where.content_platform = { in: filters.content_platform }
  }
  if (filters.tags?.length) {
    where.tags = { hasSome: filters.tags }
  }
  if (filters.topics?.length) {
    where.topics = { hasSome: filters.topics }
  }

  const orderBy = sort_logic?.orderBy || {}

  return await prisma.scam_groups.findMany({
    where,
    orderBy,
    take: 50
  })
}
```

**🧠 Explanation:**  
Translates frontend filtering/sorting into Prisma-compatible syntax.  
Executes database query using dynamic `where` and `orderBy`.

---

## 🧱 7. Prisma Model – `schema.prisma`

```prisma
model scam_groups {
  id                   String   @id @default(uuid())
  name                 String
  content_platform     String
  tags                 String[]
  topics               String[]
  dispute_score        Float?
  created_at           DateTime @default(now())
}
```

**🧠 Explanation:**  
Defines the schema fields used in filtering (`content_platform`, `tags`, `topics`) and sorting (`dispute_score`, `created_at`).

---

# ✅ Fully Aligned With `cursor-rules.md`

| Layer | File | Purpose |
|-------|------|---------|
| UI Page | `ExploreGroupListPage.tsx` | Handles state and API call |
| Components | Grid, List, Filter Panel, Toggle | Modular visual layout |
| API Wrapper | `scamGroups.ts` | Abstracts fetch call |
| Route | `scamGroupRoutes.ts` | Handles `/explore` POST |
| Controller | `scamGroupController.ts` | Parses body, passes to service |
| Service | `scamGroupService.ts` | Runs Prisma query with logic |
| DB Model | `schema.prisma` | Defines queryable fields |

---

## ✅ Ready for More?

Would you like me to:
- Copy this full flow for `ai_groups`, `creator_groups`, or `factcheck_groups`?
- Add pagination, loading states, or empty state UX?
- Turn this into a scaffolding generator (so you just create a config and everything maps)?

This is now 100% composable, scalable, Cursor-aligned Explore logic ✅