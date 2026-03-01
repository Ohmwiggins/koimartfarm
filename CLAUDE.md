# CLAUDE.md - Koimartfarm UI Project Guide

## Project Overview

**Koimartfarm UI** is a modern, responsive marketing website for a Thai koi fish farm. Built with Next.js 16 and Material-UI, it showcases koi varieties, farm events, blog content, and provides a contact system.

- **Repository**: https://github.com/koimartfarm/koimartfarm-ui
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **UI Libraries**: Material-UI (MUI) v7 + Tailwind CSS v3
- **Styling Engine**: Emotion CSS-in-JS
- **Deployment**: Firebase App Hosting

## Tech Stack

### Core Dependencies
- **Next.js** ^16.0.7 - React framework with App Router, standalone output
- **React** ^19.2.0 - UI library
- **TypeScript** ~5.9.3 - Strict mode, noUnusedLocals/Parameters
- **Material-UI** ^7.3.4 - Component library
- **Emotion** ^11.14.0 - CSS-in-JS for styling
- **Tailwind CSS** ^3.4.19 - Layout utilities (preflight: false)
- **Nodemailer** ^7.0.10 - Email sending for contact form
- **react-intersection-observer** ^10.0.0 - Scroll animations
- **react-social-media-embed** ^2.5.18 - Social media embeds
- **react-icons** ^5.5.0 - Social media icons
- **@fontsource/roboto** ^5.2.8 - Roboto font

## Project Structure

```
koimartfarm-ui/
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── (home)/                   # Home page route group
│   │   │   ├── page.tsx              # Main home page (assembles all sections)
│   │   │   ├── Banner/               # Auto-scrolling image carousel hero
│   │   │   ├── Event/                # Event cards with inner image carousel
│   │   │   ├── KoiHistory/           # CEO story + travel gallery + lightbox
│   │   │   ├── KoiHighlight/         # 2-row horizontal koi gallery + modal
│   │   │   ├── KoiVariety/           # 7 koi types with characteristics
│   │   │   ├── BlogHighlight/        # 7 featured blog cards grid
│   │   │   ├── EventHighlight/       # Related event component
│   │   │   └── FaceBookPostHighlight/# Social media embed section
│   │   ├── blog/                     # Static blog posts (7 posts)
│   │   │   ├── where-to-find-koi/
│   │   │   ├── how-to-choose-koi/
│   │   │   ├── koi-appreciation/
│   │   │   ├── shape-quality-pattern/
│   │   │   ├── importing-koi-from-japan/
│   │   │   ├── koi-hunting-tips-1/
│   │   │   └── koi-hunting-tips-2/
│   │   ├── api/contact/              # Contact form POST endpoint
│   │   │   └── route.ts
│   │   └── layout.tsx                # Root layout (NavBar + Footer only)
│   ├── components/                   # Reusable components
│   │   ├── Navbar/
│   │   │   ├── index.tsx             # Responsive navbar wrapper
│   │   │   ├── DesktopView/          # Logo + 6 horizontal menu buttons
│   │   │   └── MobileView/           # Hamburger + full-screen drawer
│   │   ├── Footer/                   # Navy footer: map + form + social links
│   │   ├── HeaderText/               # Section title + gold divider
│   │   ├── FilledButton/             # Gold pill button with loading state
│   │   ├── LinkedFilledButton/       # FilledButton with href
│   │   ├── LinkedOutlineButton/      # Outline pill button with href
│   │   ├── KoiHighlightBox/          # Individual koi image card (hover scale)
│   │   ├── EventHighlightBox/        # Event card component
│   │   ├── PageMargin/               # py-20 spacing wrapper
│   │   ├── PageHeader/               # Blog page title (Playfair font)
│   │   └── PageHeaderText/           # Blog header text variant
│   ├── theme/
│   │   └── theme.tsx                 # MUI theme: Navy/Gold/Cream palette + overrides
│   ├── data/
│   │   ├── events.json               # Event data (DD/MM/YYYY format)
│   │   └── highlight.json            # 13 koi highlight images
│   ├── models/
│   │   └── events.tsx                # KoiEvent TypeScript interface
│   ├── assets/fonts/                 # Local WOFF2 fonts (LINESeedEN, LINESeedTH)
│   ├── fonts.tsx                     # Font imports (Playfair, Prompt, Inter, LINESeed)
│   └── globals.css                   # Tailwind directives + body gradients + gold-divider
├── public/img/                       # Static images organized by category
│   ├── blogs/                        # Blog post images (per slug folder)
│   ├── events/                       # Event images
│   ├── koi-images/                   # Banner carousel images (Koi-image-01..07.png)
│   └── highlight/                    # Koi highlight images
├── Dockerfile                        # 3-stage Node 18-alpine build
├── apphosting.yaml                   # Firebase App Hosting config
├── next.config.mjs                   # output: standalone
├── tailwind.config.ts                # Custom colors + preflight: false
└── package.json
```

## Development Setup

### Commands
```bash
npm install              # Install dependencies
npm run dev             # Start dev server (Turbopack)
npm run build           # Production build
npm run start           # Start production server
npm run lint            # Run ESLint
```

### Environment Variables
Required for contact form functionality:
```env
NODEMAILER_GMAIL_USER=
NODEMAILER_APP_PASSWORD=
TARGET_EMAIL=
RESEND_API_KEY=
NODEMAILER_GOOGLE_CLIENT_ID=
NODEMAILER_GOOGLE_CLIENT_SECRET=
NODEMAILER_GOOGLE_REFRESH_TOKEN=
```

## Design System

### Color Palette
```typescript
// MUI Theme (src/theme/theme.tsx)
primary.main:        "#0F1B2D"  // Navy — headers, dark backgrounds
primary.light:       "#1A2A42"  // Light navy
primary.dark:        "#0A1220"  // Darkest navy (banner/footer bg)
secondary.main:      "#C5A55A"  // Gold — accents, dividers, highlights
secondary.light:     "#D4BA7A"  // Light gold
background.default:  "#FAF8F5"  // Cream — page background
background.paper:    "#ffffff"  // White — cards
text.primary:        "#1A1A1A"  // Near black
text.secondary:      "#5C4033"  // Earth brown

// Brand CI Red (used directly, not in MUI theme)
ci.red:              "#E91D26"  // CI Red — "KOIMART FARM" title, section headings
```

### Typography
```
--font-playfair     Playfair Display — headings (serif, 600–700 weight)
--font-prompt       Prompt — Thai body text (300 weight)
--font-inter        Inter — Latin body text (400–700 weight)
--font-lineseed-en  LINESeed EN — English fallback (local WOFF2)
--font-lineseed-th  LINESeed TH — Thai fallback (local WOFF2)
```

### MUI Component Overrides
- **AppBar**: Glassmorphic — `rgba(250,248,245,0.85)`, `blur(16px)`, gold bottom border
- **Button**: Pill-shaped (`9999px`), no elevation, 600 weight
- **Card**: 16px radius, gold border (`0.08 opacity`), hover lift (`-4px`)
- **OutlinedInput**: 12px radius, subtle background
- **Input** (unvariant): Dark style for footer form, gold focus ring

### Tailwind Configuration
Custom color scales: `navy`, `earth`, `gold`, `cream`
`preflight: false` — prevents MUI style conflicts

### Custom CSS Utility
- `.gold-divider` — 60px × 2px gradient bar (defined in `globals.css` @layer components)
- Body has fixed radial gradient overlays (subtle gold/navy)

## Coding Patterns & Conventions

### Component Structure
```tsx
"use client"; // Only if using hooks or browser APIs

interface ComponentNameProps {
  prop1: string;
  prop2?: number;
}

function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  return <div>{prop1}</div>;
}

export default ComponentName;
```

### File Organization
- Components in PascalCase folders with `index.tsx` as entry point
- Styles in separate `ComponentName.styles.ts` if using Emotion styled components
- TypeScript strict mode — no implicit any, no unused variables

### Styling Hierarchy (in priority order)
1. **Emotion Styled Components** — complex layouts with many CSS rules
2. **MUI `sx` prop** — responsive values and theme tokens
3. **Tailwind utilities** — layout helpers (`flex`, `grid`, spacing)
4. **Never**: CSS modules, hardcoded colors (except CI red `#E91D26`), inline style objects

### State Management
- No external state management (no Redux, Zustand, Jotai, etc.)
- Local `useState` for component state
- `useCallback` for memoized callbacks
- `useInView` for scroll-triggered animations

### Animation Pattern
```tsx
import { useInView } from "react-intersection-observer";
import { Grow } from "@mui/material";

const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

<div ref={ref}>
  <Grow in={inView} timeout={1000}>
    <Box>Animated content</Box>
  </Grow>
</div>
```

### Responsive Design
```tsx
// MUI breakpoints (px)
xs: 0     // Mobile
sm: 600   // Tablet
md: 960   // Desktop
lg: 1280  // Large
xl: 1920  // Extra large

// Grid usage
<Grid size={{ xs: 12, sm: 6, md: 4 }} />

// Display toggle
<Box sx={{ display: { xs: "none", sm: "flex" } }} />

// Responsive font size
<Typography sx={{ fontSize: { xs: 15, sm: 17, md: 19 } }} />
```

## Home Page Sections (in order)

### 1. Banner (`src/app/(home)/Banner/`)
- Auto-scrolling image carousel using `requestAnimationFrame`
- Drag to pause — handles both mouse and touch events
- Seamless infinite loop (duplicated images)
- Height: 50vh (mobile) → 70vh (desktop)
- Image source: `SLIDES` array hardcoded in `Banner/index.tsx` → `/public/img/koi-images/`
- "KOIMART FARM" title in CI red (`#E91D26`) + Thai subtitle below carousel
- **Backend editable**: carousel image list

### 2. Events (`src/app/(home)/Event/`)
- Horizontal scrolling container with scroll snap
- Up to 5 event cards visible
- Each card: date, detail text, and inner image carousel
  - Inner carousel: prev/next arrow buttons, pagination dots
- Outer navigation: left/right scroll arrows (disabled at boundaries)
- Data source: `/src/data/events.json`
- **Backend editable**: event entries (date, detail, images, description)

### 3. About Us / History (`src/app/(home)/KoiHistory/`)
- CEO portrait with decorative gold corner accents
- Founder story in Thai text (multi-paragraph)
- 17-image travel gallery grid (2–5 columns, responsive)
- Click image → lightbox modal
  - Keyboard navigation: ← → Arrow keys, Escape to close

### 4. Blog Highlight (`src/app/(home)/BlogHighlight/`)
- 7 featured blog cards
- Responsive grid: xs:12, sm:6, md:3 (4-up on desktop)
- Each card: image, category chip (label: "Heading"), title, "Read More" link → `/blog/[slug]`
- Blog list hardcoded in `BlogHighlight/index.tsx`
- Hover effect: lift (`-4px`), shadow, image scale (1.05)
- **Backend editable**: blog entries (title, slug, image)

### 5. Koi Varieties (`src/app/(home)/KoiVariety/`)
- 7 hardcoded varieties: Kohaku, Sanke, Showa, Ogon, Asagi, Shusui, Chagoi
- Alternating 2-column layout: image + info panel
- Info panel: type name (gold), characteristics, symbolic meaning

## Blog Pages

All blog pages are static, located in `/src/app/blog/[slug]/`. Each has `page.tsx` + `layout.tsx`.

| Slug | Topic |
|------|-------|
| `where-to-find-koi` | Where to buy koi in Japan |
| `how-to-choose-koi` | Buying customs in Japan |
| `koi-appreciation` | Selecting koi by shape |
| `shape-quality-pattern` | Shape > Quality > Pattern hierarchy |
| `importing-koi-from-japan` | Import costs and guides |
| `koi-hunting-tips-1` | Koi hunting tips (part 1) |
| `koi-hunting-tips-2` | Koi hunting tips (part 2) |

Blog images stored in `/public/img/blogs/[slug]/`.

## Components Reference

### Navbar
| Component | Description |
|-----------|-------------|
| `Navbar/index.tsx` | Shows `NavbarDesktop` on sm+, `NavbarMobile` on xs |
| `NavbarDesktop` | Logo (64×64) + 6 menu buttons (Home, Events, Blog, About Us, Links, Contact) |
| `NavbarMobile` | Logo (50×50 center) + hamburger (left) + home icon (right) |
| `MenuDrawerMobile` | Full-screen drawer (100vw × 100dvh), cream bg, auto-closes on nav/breakpoint |

### Footer (`src/components/Footer/`)
- Dark navy gradient (`#0A1220` → `#1A2A42`)
- Contact form fields: Name, Company, Subject, Message → `POST /api/contact`
- Google Map embed
- Social/external links: Facebook, Auction, Shop, App, TikTok, Line OpenChat, PONDSCAPE, MATALATHAILAND
  - Glassmorphic cards (blur(12px), hover lift + gold glow)
- Company logo + info at bottom

### Buttons
| Component | Style |
|-----------|-------|
| `FilledButton` | Gold bg (`#C5A55A`), navy text, pill (9999px), loading spinner state |
| `LinkedFilledButton` | Same + `href` prop via Next.js Link |
| `LinkedOutlineButton` | Gold border, navy text, pill, fills gold on hover |

### Utility Components
| Component | Description |
|-----------|-------------|
| `HeaderText` | Section title (h2) + `.gold-divider` below |
| `PageHeader` | Blog page title using Playfair font |
| `PageMargin` | `py-20` spacing wrapper, cream background |
| `KoiHighlightBox` | Koi image card (180×240px), hover scale + navy overlay |
| `EventHighlightBox` | Event card for highlight sections |

## API Routes

### POST /api/contact
- **Runtime**: nodejs
- **Request Body**: `{ name, company, topic, details }`
- **Validation**: All fields required → 400 if any missing
- **Transport**: Nodemailer via Gmail SMTP (`smtp.gmail.com:465`)
- **Sends to**: `process.env.TARGET_EMAIL`
- **Email subject**: `{name} - {company}`
- **Response**: `{ ok: true/false, messageId?, error? }`

> Note: Contact form fields are name/company/topic/details — NOT name/email/phone/message as in older docs.

## Data Files

### events.json schema
```typescript
interface KoiEvent {
  id: number;
  date: string;       // "DD/MM/YYYY" format
  detail: string;
  imgs?: string[];    // filenames relative to /public/img/events/
  description?: string;
}
```
Currently 2 events: Koimart Cup 2026 (7/02/2026), Koimart Cup ISA (21/03/2026).

### highlight.json schema
```typescript
interface HighlightImage {
  id: number;
  img: string;    // filename only, loaded from /public/img/highlight/
  detail: string;
}
```
Currently 13 koi images.

## Navigation (Hash Anchors)

| Hash | Section |
|------|---------|
| `/#home` | Banner |
| `/#history` | KoiHistory (About Us) |
| `/#blog` | Blog Highlight |
| `/#contact` | Footer contact form |

## Common Tasks

### Add a New Event
Edit `/src/data/events.json`:
```json
{
  "id": 3,
  "date": "15/05/2026",
  "detail": "Event Name",
  "imgs": ["event-image.jpg"],
  "description": "Optional Thai description"
}
```
Place event images in `/public/img/events/`.

### Add a Blog Post
1. Create `/src/app/blog/[new-slug]/page.tsx` — blog content
2. Create `/src/app/blog/[new-slug]/layout.tsx` — page layout
3. Add images to `/public/img/blogs/[new-slug]/`
4. Add card entry to `BlogHighlight/index.tsx` `blogs` array

### Add a New Component
1. Create `/src/components/ComponentName/index.tsx`
2. Add `.styles.ts` if using Emotion styled components
3. Type all props with a TypeScript interface

### Add a Banner Carousel Image
1. Place image file in `/public/img/koi-images/`
2. Add path to `SLIDES` array in `src/app/(home)/Banner/index.tsx`

### Add a Koi Highlight Image
1. Add entry to `/src/data/highlight.json`
2. Place image file in `/public/img/highlight/`

### Styling Guidelines
- Use theme tokens (`secondary.main` for gold, `primary.main` for navy)
- CI red `#E91D26` is used for section headings and the "KOIMART FARM" title — use it directly
- Always implement responsive breakpoints (xs, sm, md minimum)
- Follow existing animation patterns with `useInView` + MUI `Grow`
- Use Next.js `Image` component for all images (with width, height, alt)

## Deployment

### Docker
```bash
docker build -t koimartfarm-ui .
docker run -p 3000:3000 koimartfarm-ui
```
3-stage build (deps → builder → runner), Node 18-alpine, port 3000.

### Firebase App Hosting
- Config: `apphosting.yaml`
- Min instances: 0 (scales to zero)
- Secrets: all `NODEMAILER_*`, `TARGET_EMAIL`, `RESEND_API_KEY`

---

## Backend App Requirements (koimartfarm-backend)

A separate admin backend is planned to manage 3 content sections of the frontend without requiring code changes. This is the specification for building that backend.

### Purpose
Allow authorized admins to edit live content on the koimartfarm-ui website via a simple dashboard, without touching the codebase.

### 3 Editable Sections

---

#### Section 1 — Banner Carousel Images

**What it controls**: The `SLIDES` array in `src/app/(home)/Banner/index.tsx`
Currently hardcoded to 7 portrait koi images from `/public/img/koi-images/`.

**Backend must support**:
- Upload new koi portrait images (4:5 aspect ratio, JPG/PNG)
- Reorder images (drag-and-drop or up/down buttons)
- Delete images from the carousel
- Preview before publishing

**Suggested API**:
```
GET    /api/admin/carousel          → returns ordered list of image paths
POST   /api/admin/carousel          → upload new image, returns new image path
PUT    /api/admin/carousel/reorder  → body: { order: string[] } — update image order
DELETE /api/admin/carousel/:filename → remove image
```

**Frontend integration**:
The `Banner/index.tsx` `SLIDES` array should be replaced with a `fetch("/api/admin/carousel")` call (or read from a DB/JSON file managed by the backend).

**Image storage**:
- Store in `/public/img/koi-images/` (current location) or a CDN
- Max recommended: 20 images, portrait 4:5 ratio

---

#### Section 2 — Events

**What it controls**: `/src/data/events.json`
Currently contains 2 events. The Event section reads this file directly.

**Backend must support**:
- Create a new event (date, title/detail, description, images)
- Edit an existing event
- Delete an event
- Upload event images
- Reorder events

**Event data schema**:
```typescript
interface KoiEvent {
  id: number;
  date: string;        // "DD/MM/YYYY" format — display only
  detail: string;      // Event name/title (Thai)
  imgs?: string[];     // Array of image filenames in /public/img/events/
  description?: string; // Optional longer Thai description
}
```

**Suggested API**:
```
GET    /api/admin/events            → returns all events (array)
POST   /api/admin/events            → create new event
PUT    /api/admin/events/:id        → update event by id
DELETE /api/admin/events/:id        → delete event
POST   /api/admin/events/:id/images → upload image for event
```

**Frontend integration**:
Replace the static `import events from "@/data/events.json"` in `Event/index.tsx` with a server-side fetch from the backend API or a shared database.

---

#### Section 3 — Blog Posts (Highlight Cards)

**What it controls**: The `blogs` array in `src/app/(home)/BlogHighlight/index.tsx`
Currently 7 hardcoded entries. Each maps to a static blog page at `/blog/[slug]`.

**Backend must support**:
- Add a new blog card (title, slug, thumbnail image)
- Edit existing card (title or thumbnail)
- Remove a card from the highlight list
- Reorder cards
- Optionally: manage full blog post content (title, body HTML/markdown, images)

**Blog card schema**:
```typescript
interface BlogCard {
  blogId: string;   // slug — maps to /blog/[blogId]
  title: string;    // Thai title displayed on card
  img: string;      // path to thumbnail, e.g. /img/blogs/[slug]/banner.png
}
```

**Suggested API**:
```
GET    /api/admin/blogs             → returns ordered list of blog cards
POST   /api/admin/blogs             → create new blog card
PUT    /api/admin/blogs/:blogId     → update title or image
DELETE /api/admin/blogs/:blogId     → remove from highlight list
POST   /api/admin/blogs/:blogId/image → upload thumbnail image
```

**Frontend integration**:
Replace the hardcoded `blogs` array in `BlogHighlight/index.tsx` with a server-side fetch. Blog page content (the actual `/blog/[slug]/page.tsx` files) can remain static or also be moved to a CMS.

---

### Authentication

All `/api/admin/*` routes must be protected. Recommended approach:
- Simple JWT-based auth with a single admin user
- Login endpoint: `POST /api/admin/login` → `{ token }`
- All other admin routes require `Authorization: Bearer <token>` header
- Token expiry: 8 hours

### Recommended Backend Stack

Since the frontend is Next.js (Node.js), the backend can be:
- **Option A**: Next.js API routes within the same project (simplest, already has Node runtime)
- **Option B**: Separate Express.js / Fastify server (cleaner separation)
- **Option C**: Separate Next.js app dedicated to admin dashboard + API

### File / Image Storage

- **Development**: Write directly to `/public/img/` in the frontend repo
- **Production**: Use Firebase Storage or Cloudflare R2; return public CDN URLs to the frontend

### Database Options

Since the current data is JSON files:
- **Simplest**: Keep JSON files, backend reads/writes them via `fs`
- **Scalable**: SQLite (single-file, zero-config) or Firestore (matches Firebase deployment)

---

## Anti-Patterns to Avoid

1. **Don't** use CSS modules — use Emotion or MUI `sx`
2. **Don't** add Redux or external state management — use local `useState`
3. **Don't** hardcode colors other than CI red `#E91D26` — use theme tokens for everything else
4. **Don't** skip responsive design — test xs, sm, md breakpoints minimum
5. **Don't** forget `"use client"` directive on components with hooks or browser APIs
6. **Don't** create new global CSS rules — scope all styles to components
7. **Don't** skip TypeScript types — strict mode is enforced
8. **Don't** use icon libraries other than `@mui/icons-material` and `react-icons`
9. **Don't** set Tailwind `preflight: true` — it's intentionally disabled to avoid MUI conflicts
10. **Don't** use gray `#E7E7E7` or the old red for body/background — CI red `#E91D26` is only for headings and the main title

## Quality Checklist (Before Committing)

- [ ] `npm run lint` — no errors
- [ ] Test responsive at xs, sm, md breakpoints
- [ ] Verify scroll animations trigger correctly
- [ ] Check browser console for errors
- [ ] Test contact form if changed
- [ ] Confirm `"use client"` on all interactive components
- [ ] No unused imports (TypeScript strict enforces this)

## References

- [Next.js 16 Docs](https://nextjs.org/docs)
- [Material-UI v7 Docs](https://mui.com/material-ui/getting-started/)
- [Tailwind CSS v3 Docs](https://v3.tailwindcss.com/)
- [Emotion Docs](https://emotion.sh/docs/introduction)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Support & Contribution

- Repository: https://github.com/koimartfarm/koimartfarm-ui
- License: MIT
- Issues: Report via GitHub Issues

---

**Last Updated:** 2026-03-01
**Project Version:** 0.0.0
