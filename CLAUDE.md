# CLAUDE.md — Koimartfarm UI

## Overview
Thai koi fish farm marketing website. Next.js 16 App Router + TypeScript strict + MUI v7 + Tailwind v3 (preflight: false) + Emotion. Deployed on Firebase App Hosting. Data (banner, events, blog) from Supabase.

- **Repo**: https://github.com/koimartfarm/koimartfarm-ui
- **Last Updated**: 2026-03-22

## Commands
```bash
npm run dev       # Turbopack dev server
npm run build     # Production build
npm run lint      # ESLint
```

## Key Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| next | ^16.0.7 | App Router, standalone output |
| react | ^19.2.0 | UI |
| typescript | ~5.9.3 | Strict, noUnusedLocals/Parameters |
| @mui/material | ^7.3.4 | Component library |
| @emotion/react/styled | ^11 | CSS-in-JS |
| tailwindcss | ^3.4.19 | Layout utilities |
| @supabase/supabase-js | ^2.98.0 | DB + Storage |
| nodemailer | ^7.0.10 | Contact form email |
| react-intersection-observer | ^10 | Scroll animations |

## Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=https://cnpaysvylgpmkitatsqf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=      # public read-only
SUPABASE_SERVICE_ROLE_KEY=          # server-side writes
NODEMAILER_GOOGLE_CLIENT_ID=
NODEMAILER_GOOGLE_CLIENT_SECRET=
NODEMAILER_GOOGLE_REFRESH_TOKEN=
TARGET_EMAIL=
```

## Project Structure
```
src/
├── app/
│   ├── (home)/
│   │   ├── page.tsx              # Home page — assembles all sections
│   │   ├── Banner/               # Auto-scroll carousel (Supabase: carousel_images)
│   │   ├── Event/                # Horizontal scroll event cards (Supabase: events)
│   │   ├── KoiHistory/           # CEO story + 17-image travel gallery + lightbox
│   │   ├── KoiHighlight/         # 2-row horizontal koi gallery + modal
│   │   ├── KoiVariety/           # 7 hardcoded koi types
│   │   ├── BlogHighlight/        # Blog cards grid (Supabase: blog_highlights)
│   │   ├── EventHighlight/       # Event highlight cards
│   │   └── FaceBookPostHighlight/# Social media embeds
│   ├── blog/
│   │   └── [slug]/               # Dynamic blog — fetches title+img from blog_highlights by blog_id
│   ├── api/contact/route.ts      # POST — Nodemailer contact form
│   └── layout.tsx                # Root layout (Navbar + Footer)
├── components/
│   ├── AdminPanel/               # Frontend admin UI (password-protected, 3 tabs: carousel/events/blog)
│   ├── Navbar/                   # Desktop (sm+) + Mobile (xs) with full-screen drawer
│   ├── Footer/                   # Navy gradient, contact form, Google Map, social links
│   ├── FilledButton/             # Gold pill button + loading state
│   ├── LinkedFilledButton/       # FilledButton + href
│   ├── LinkedOutlineButton/      # Outline pill + href
│   ├── HeaderText/               # Section h2 + .gold-divider
│   ├── KoiHighlightBox/          # Koi image card (180×240px, hover scale + navy overlay)
│   ├── EventHighlightBox/        # Event card
│   ├── PageHeader/               # Blog page title (Playfair font)
│   ├── PageHeaderText/           # Blog header text variant
│   └── PageMargin/               # py-20 spacing wrapper
├── lib/supabase.ts               # Shared Supabase client (anon key)
├── theme/theme.tsx               # MUI theme: Navy/Gold/Cream + component overrides
├── data/
│   ├── events.json               # Legacy event data (now superseded by Supabase)
│   └── highlight.json            # 13 koi highlight images
├── models/events.tsx             # KoiEvent TypeScript interface
├── assets/fonts/                 # LINESeed EN/TH WOFF2 fonts
├── fonts.tsx                     # Playfair, Prompt, Inter, LINESeed imports
└── globals.css                   # Tailwind directives, body gradients, .gold-divider
public/img/
├── blogs/                        # Blog images (per slug folder)
├── events/                       # Event images
├── koi-images/                   # Banner fallback images
└── highlight/                    # Koi highlight images
```

## Design System

### Colors
```
Navy dark:   #0A1220  (banner/footer bg)
Navy main:   #0F1B2D  (headers, dark backgrounds)
Navy light:  #1A2A42
Gold main:   #C5A55A  (accents, dividers, buttons)
Gold light:  #D4BA7A
Cream:       #FAF8F5  (page background)
CI Red:      #E91D26  (KOIMART FARM title, section headings — use directly, not via theme)
```

### Typography
```
Playfair Display  — headings (serif, 600–700)
Prompt            — Thai body (300)
Inter             — Latin body (400–700)
LINESeed EN/TH    — local WOFF2 fallback fonts
```

### MUI Theme Overrides
- **AppBar**: glassmorphic `rgba(250,248,245,0.85)` + `blur(16px)` + gold bottom border
- **Button**: pill `9999px`, no elevation, 600 weight
- **Card**: 16px radius, gold border (0.08 opacity), hover lift `-4px`
- **Input (unvariant)**: dark style for footer, gold focus ring

### Styling Priority
1. **Emotion styled** — complex layouts
2. **MUI `sx` prop** — responsive values, theme tokens
3. **Tailwind utilities** — layout helpers
4. **Never**: CSS modules, hardcoded colors (except CI red), inline style objects

## Coding Conventions

### Component template
```tsx
"use client"; // Only if using hooks or browser APIs

interface MyProps { prop: string }

function MyComponent({ prop }: MyProps) {
  return <div>{prop}</div>;
}
export default MyComponent;
```

- PascalCase folders with `index.tsx` entry + optional `.styles.ts` (Emotion)
- No external state — `useState` / `useCallback` only
- Scroll animations: `useInView({ triggerOnce: true, threshold: 0.2 })` + MUI `<Grow>`
- Responsive minimum: xs / sm / md breakpoints
- All images: Next.js `<Image>` with width, height, alt

## Home Page Sections (rendered in page.tsx)
| Order | Section | Hash | Data |
|-------|---------|------|------|
| 1 | Banner | `#home` | Supabase `carousel_images` |
| 2 | Events | `#events` | Supabase `events` (fetched in page.tsx) |
| 3 | Blog | `#blog` | Supabase `blog_highlights` |
| 4 | About Us / History | `#about` | Hardcoded |
| 5 | Koi Varieties | — | Hardcoded (7 types) |

> Note: `KoiHighlight`, `EventHighlight`, `FaceBookPostHighlight` components exist but are not currently rendered in `page.tsx`.

## Supabase Tables

### `carousel_images`
```typescript
{ id: number; url: string; sort_order: number; created_at: string }
// Storage bucket: koi-images
```

### `events`
```typescript
{ id: number; date: string; detail: string; imgs: string[]; description: string; sort_order: number }
// Storage bucket: events — imgs = full public URLs
```

### `blog_highlights`
```typescript
{ id: number; blog_id: string; title: string; img: string; sort_order: number; created_at: string }
// Storage bucket: blog-highlights — path: <slug>/<filename>
// blog_id = slug → /blog/[blog_id]
```

**Critical rule**: Storage upload + DB insert must happen atomically. If DB insert fails, remove the uploaded file. A DB record without a storage file = broken image; a storage file without a DB record = orphaned/invisible.

## API Routes

### POST /api/contact
- Body: `{ name, company, topic, details }` — all required (400 if missing)
- Transport: Nodemailer Gmail SMTP (`smtp.gmail.com:465`)
- Sends to `TARGET_EMAIL`; subject: `{name} - {company}`
- Response: `{ ok: boolean, messageId?, error? }`

## AdminPanel Component
`src/components/AdminPanel/index.tsx` — frontend admin panel (client component).
- Password: `koimart2026` (hardcoded placeholder — replace with env var for production)
- 3 tabs: Carousel Images / Events / Blog Highlights
- Calls Supabase directly using service role for writes

## Common Tasks

### Add banner carousel image
1. Upload to Supabase Storage `koi-images`
2. `INSERT INTO carousel_images (url, sort_order) VALUES ('<full_url>', <n>)`

### Add event
1. Upload images to Supabase Storage `events`
2. `INSERT INTO events (date, detail, imgs, description, sort_order) VALUES ('DD/MM/YYYY', '...', ARRAY['<url1>'], '...', <n>)`

### Add blog highlight card
1. Upload to `blog-highlights/<slug>/<filename>`
2. `INSERT INTO blog_highlights (blog_id, title, img, sort_order) VALUES ('<slug>', '...', '<url>', <n>)`

### Add new blog post
1. Create `src/app/blog/<slug>/page.tsx` + `layout.tsx`
2. Add highlight card (above)

### Add koi highlight image (KoiHighlight section)
1. Add entry to `src/data/highlight.json`
2. Place image in `public/img/highlight/`

## Deployment

### Docker
```bash
docker build -t koimartfarm-ui .
docker run -p 3000:3000 koimartfarm-ui
```
3-stage build: deps → builder → runner (Node 18-alpine)

### Firebase App Hosting
Config: `apphosting.yaml` — min instances 0. Secrets: `NODEMAILER_*`, `TARGET_EMAIL`, `RESEND_API_KEY`

## Anti-Patterns
1. No CSS modules — use Emotion or MUI `sx`
2. No Redux/Zustand — use local `useState`
3. No hardcoded colors except CI red `#E91D26`
4. No skipping responsive breakpoints
5. No missing `"use client"` on hook/browser components
6. No new global CSS rules — scope to components
7. No implicit `any` — TypeScript strict
8. No icon libs except `@mui/icons-material` and `react-icons`
9. No `preflight: true` in Tailwind
10. No gray `#E7E7E7` or old red for backgrounds

## After Every Implementation
After implementing any feature or fix, act like an experienced QA tester and test the implemented feature. This means:
- Verify the happy path works as expected
- Test edge cases and boundary conditions
- Check all breakpoints (xs, sm, md) if UI was changed
- Look for console errors or warnings
- Confirm nothing adjacent was broken

## Pre-commit Checklist
- [ ] `npm run lint` passes
- [ ] Tested xs / sm / md breakpoints
- [ ] Scroll animations trigger correctly
- [ ] No browser console errors
- [ ] `"use client"` on all interactive components
- [ ] No unused imports
