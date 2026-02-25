# Koimartfarm UI — Feature Sheet

> Generated: 2026-02-25
> Version: 0.0.0
> Framework: Next.js 16 + Material-UI v7 + Tailwind CSS v3

---

## Table of Contents

1. [Site-Wide Features](#1-site-wide-features)
2. [Home Page Sections](#2-home-page-sections)
3. [Blog System](#3-blog-system)
4. [Navigation](#4-navigation)
5. [Contact & API](#5-contact--api)
6. [Interactive Components](#6-interactive-components)
7. [Design System](#7-design-system)
8. [Performance & Accessibility](#8-performance--accessibility)
9. [Deployment & Infrastructure](#9-deployment--infrastructure)

---

## 1. Site-Wide Features

| Feature | Details |
|---------|---------|
| Responsive layout | Mobile-first; MUI breakpoints xs / sm / md / lg / xl |
| Multi-language fonts | Thai (Prompt, LINESeedTH) + English (Playfair Display, Inter, LINESeedEN) |
| Scroll animations | `react-intersection-observer` + MUI `Grow` — trigger once on viewport entry |
| Theme | Navy (`#0F1B2D`) + Gold (`#C5A55A`) + Cream (`#FAF8F5`) |
| App Router | Next.js 16 App Router with route groups and layouts |
| TypeScript | Strict mode — noUnusedLocals, noUnusedParameters, no implicit any |
| No external state | Pure `useState` / `useCallback` — no Redux, Zustand, or Context |
| Image optimization | Next.js `<Image>` component for all images |
| Glassmorphic navbar | `rgba(250,248,245,0.85)` background + `blur(16px)` + gold bottom border |

---

## 2. Home Page Sections

### 2.1 Banner (Hero)

**Location**: `src/app/(home)/Banner/`

| Feature | Details |
|---------|---------|
| Auto-scroll carousel | `requestAnimationFrame` loop, continuous speed-based scrolling |
| Infinite loop | Image list duplicated; resets position seamlessly |
| Drag to pause | Mouse (`mousedown/up/move`) + Touch (`touchstart/end`) events |
| Resume on release | Auto-scroll resumes after drag ends |
| Responsive height | `50vh` on mobile, `70vh` on desktop |
| Below-banner title | "KOIMART FARM" heading + Thai subtitle |

---

### 2.2 Events

**Location**: `src/app/(home)/Event/`

| Feature | Details |
|---------|---------|
| Outer carousel | Horizontal scroll container with CSS `scroll-snap` |
| Outer navigation | Left / Right arrow buttons; disabled at scroll boundaries |
| Event card | Date, detail text, inner image carousel |
| Inner image carousel | Prev / Next arrow buttons + pagination dot indicators |
| Data source | `/src/data/events.json` (max 5 events displayed) |
| Event schema | `{ id, date (DD/MM/YYYY), detail, imgs[], description? }` |

**Current Events:**
- Koimart Cup 2026 — 7/02/2026
- Koimart Cup ISA — 21/03/2026

---

### 2.3 About Us / History (KoiHistory)

**Location**: `src/app/(home)/KoiHistory/`

| Feature | Details |
|---------|---------|
| CEO portrait | Photo with decorative gold corner accent overlays |
| Founder story | Multi-paragraph Thai text narrative |
| Stats row | 3 stats: 30+ years experience, 7+ koi varieties, 100% Japan imports |
| Travel gallery | 17-image grid; 2-column mobile → 5-column desktop |
| Lightbox modal | Full-screen image viewer on gallery click |
| Keyboard navigation | ← → Arrow keys (previous/next), Escape (close) |
| Scroll animation | `useInView` + `Grow` on section entry |

---

### 2.4 Blog Highlight (BlogHighlight)

**Location**: `src/app/(home)/BlogHighlight/`

| Feature | Details |
|---------|---------|
| Card count | 7 featured blog cards |
| Layout | Responsive grid: 1 col (xs) → 2 col (sm) → 4 col (md) |
| Card contents | Cover image, category chip, blog title, "Read More" button |
| Hover effect | Card lifts `-4px`, shadow deepens, image scales to 1.05 |
| Navigation | Next.js `Link` → `/blog/[slug]` |
| Animation | `useInView` + staggered `Grow` on scroll into view |

---

### 2.5 Koi Varieties (KoiVariety)

**Location**: `src/app/(home)/KoiVariety/`

| Feature | Details |
|---------|---------|
| Variety count | 7 hardcoded koi types |
| Layout | Alternating 2-column (image + info panel) |
| Info per variety | Type name (gold text), physical characteristics, symbolic meaning |
| Varieties | Kohaku, Sanke, Showa, Ogon, Asagi, Shusui, Chagoi |
| Animation | `useInView` + `Grow` per variety card |

---

## 3. Blog System

**Location**: `src/app/blog/[slug]/`

| Feature | Details |
|---------|---------|
| Route type | Static pages (no CMS) |
| URL pattern | `/blog/[slug]` |
| Structure | Each post: `page.tsx` (content) + `layout.tsx` (page layout) |
| Image storage | `/public/img/blogs/[slug]/` |
| Components used | `PageHeader`, `PageMargin`, MUI `Container` + `Typography` |

**Published Blog Posts:**

| Slug | Topic |
|------|-------|
| `where-to-find-koi` | Where to buy koi fish in Japan |
| `how-to-choose-koi` | Japanese buying customs and etiquette |
| `koi-appreciation` | How to evaluate koi by body shape |
| `shape-quality-pattern` | Prioritization: Shape > Quality > Pattern |
| `importing-koi-from-japan` | Import process, partners, and costs |
| `koi-hunting-tips-1` | Field tips for koi hunting (part 1) |
| `koi-hunting-tips-2` | Field tips for koi hunting (part 2) |

---

## 4. Navigation

**Location**: `src/components/Navbar/`

### Desktop Navbar

| Feature | Details |
|---------|---------|
| Visibility | `sm` breakpoint and above |
| Style | Glassmorphic AppBar (cream tint + blur) with gold bottom border |
| Logo | 64×64px image |
| Menu items | Home, Events, Blog, About Us, Links, Contact (6 buttons) |
| Active state | Detected via `usePathname()` |
| Gold hover | Menu buttons highlight gold on hover / active |

### Mobile Navbar

| Feature | Details |
|---------|---------|
| Visibility | `xs` breakpoint only |
| Layout | Logo (center) + Hamburger icon (left) + Home icon (right) |
| Drawer | Full-screen overlay (100vw × 100dvh), cream background |
| Menu items | Same 6 items as desktop, displayed as stacked buttons |
| Auto-close | Closes on navigation OR on breakpoint change to sm+ |

### Hash Navigation

| Hash | Target Section |
|------|----------------|
| `/#home` | Banner |
| `/#history` | About Us / KoiHistory |
| `/#blog` | Blog Highlight |
| `/#contact` | Footer contact form |

---

## 5. Contact & API

### Contact Form

**Location**: `src/components/Footer/` (inside footer)

| Feature | Details |
|---------|---------|
| Fields | Name, Company, Subject, Message |
| Validation | All fields required (client-side check before submit) |
| Loading state | FilledButton shows spinner while sending |
| Error handling | Form shows error state on API failure |
| Submit | `POST /api/contact` |

### API Endpoint: POST /api/contact

**Location**: `src/app/api/contact/route.ts`

| Feature | Details |
|---------|---------|
| Runtime | `nodejs` |
| Request body | `{ name, company, topic, details }` |
| Validation | 400 response if any field missing |
| Email transport | Nodemailer via Gmail SMTP (`smtp.gmail.com`, port 465) |
| Recipient | `process.env.TARGET_EMAIL` |
| Subject format | `{name} - {company}` |
| Response | `{ ok: boolean, messageId?: string, error?: string }` |

---

## 6. Interactive Components

### KoiHighlight Gallery

**Location**: `src/app/(home)/KoiHighlight/` + `src/components/KoiHighlightBox/`

| Feature | Details |
|---------|---------|
| Layout | 2 horizontal scrolling rows |
| Image count | 13 images (from `highlight.json`) |
| Interaction | Click image → full-screen modal |
| Modal navigation | Prev / Next buttons + Arrow key support + Escape to close |
| Image card | 180×240px, rounded corners, hover scale (1.05) + navy overlay |

### FilledButton

| Feature | Details |
|---------|---------|
| Style | Gold background, navy text, pill shape (9999px border-radius) |
| Loading state | MUI `loading` prop — shows spinner, disables button |
| Hover | Slightly darker gold + shadow + `-2px` lift |
| Variants | `FilledButton` (action), `LinkedFilledButton` (href navigation) |

### LinkedOutlineButton

| Feature | Details |
|---------|---------|
| Style | Gold border, navy text, pill shape, transparent background |
| Hover | Fills with gold background |
| Use case | Secondary actions, "Read More" links |

### Footer Social Links Grid

| Feature | Details |
|---------|---------|
| Count | 8 external links |
| Layout | 4-column × 2-row grid |
| Cards | Glassmorphic (blur(12px), semi-transparent) |
| Hover | Lift + gold glow shadow |
| Links | Facebook Page, Auction, Shop, App, TikTok, Line OpenChat, PONDSCAPE, MATALATHAILAND |

---

## 7. Design System

### Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `primary.main` | `#0F1B2D` | Navy — buttons, headers |
| `primary.light` | `#1A2A42` | Light navy |
| `primary.dark` | `#0A1220` | Footer / banner background |
| `secondary.main` | `#C5A55A` | Gold — accents, dividers |
| `secondary.light` | `#D4BA7A` | Light gold hover |
| `background.default` | `#FAF8F5` | Cream — page background |
| `background.paper` | `#ffffff` | Card backgrounds |
| `text.primary` | `#1A1A1A` | Main text |
| `text.secondary` | `#5C4033` | Earth brown — secondary text |

### Fonts

| Variable | Font | Usage |
|----------|------|-------|
| `--font-playfair` | Playfair Display | Section headings, blog titles |
| `--font-prompt` | Prompt | Thai body text |
| `--font-inter` | Inter | English body text |
| `--font-lineseed-en` | LINESeed EN | English fallback (local) |
| `--font-lineseed-th` | LINESeed TH | Thai fallback (local) |

### Styling Stack

| Layer | Tool | Purpose |
|-------|------|---------|
| Theme tokens | MUI Theme | Colors, typography, component defaults |
| Component styles | Emotion `styled()` | Complex multi-property components |
| Inline responsive | MUI `sx` prop | Responsive values, theme color refs |
| Layout utilities | Tailwind CSS v3 | Flex, grid, spacing helpers |
| Global overrides | `globals.css` | Tailwind directives, body gradients |
| Custom utilities | `globals.css` @layer | `.gold-divider` component |

### Animation System

| Trigger | Tool | Behavior |
|---------|------|---------|
| Scroll into view | `useInView` (react-intersection-observer) | Fires once when 20% visible |
| Appear animation | MUI `<Grow>` | Fade + scale in, timeout 1000–2500ms |
| Hover micro | CSS transitions | Scale, translate, shadow |
| Carousel scroll | JS + `requestAnimationFrame` | Smooth continuous motion |

---

## 8. Performance & Accessibility

| Area | Implementation |
|------|----------------|
| Image optimization | Next.js `<Image>` — automatic WebP conversion, lazy loading |
| Code splitting | Next.js App Router automatic per-route splitting |
| Turbopack | Used in dev (`npm run dev`) for fast HMR |
| Standalone output | `next.config.mjs` — `output: 'standalone'` for Docker |
| Font loading | `next/font` Google + local WOFF2 — zero layout shift |
| Scroll animations | Intersection Observer — no layout thrash |
| Keyboard support | Modal/lightbox navigation (arrow keys, Escape) |
| Alt text | Required on all Next.js `<Image>` usages |
| Responsive | All components tested at xs, sm, md breakpoints |

---

## 9. Deployment & Infrastructure

### Build

| Step | Command / Tool |
|------|----------------|
| Dev server | `npm run dev` (Turbopack) |
| Type check | `tsc` (via `npm run build`) |
| Lint | `npm run lint` (ESLint + TypeScript rules) |
| Production build | `npm run build` → `.next/standalone/` |

### Docker

| Stage | Base | Purpose |
|-------|------|---------|
| deps | `node:18-alpine` | Install production dependencies |
| builder | `node:18-alpine` | Build Next.js app |
| runner | `node:18-alpine` | Minimal runtime image |
| Port | 3000 | Exposed on container |

### Firebase App Hosting

| Config | Value |
|--------|-------|
| Config file | `apphosting.yaml` |
| Min instances | 0 (scales to zero when idle) |
| Auto-scaling | Enabled |
| Secrets | `NODEMAILER_GMAIL_USER`, `NODEMAILER_APP_PASSWORD`, `TARGET_EMAIL`, `RESEND_API_KEY` |

### Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NODEMAILER_GMAIL_USER` | Yes | Gmail sender address |
| `NODEMAILER_APP_PASSWORD` | Yes | Gmail app password |
| `TARGET_EMAIL` | Yes | Contact form recipient |
| `RESEND_API_KEY` | Yes | Alternative email provider key |
| `NODEMAILER_GOOGLE_CLIENT_ID` | Optional | OAuth (if using OAuth flow) |
| `NODEMAILER_GOOGLE_CLIENT_SECRET` | Optional | OAuth client secret |
| `NODEMAILER_GOOGLE_REFRESH_TOKEN` | Optional | OAuth refresh token |

---

## Appendix — File Reference

### Key Files

| File | Purpose |
|------|---------|
| `src/app/(home)/page.tsx` | Home page — assembles all sections |
| `src/app/layout.tsx` | Root layout — Navbar + Footer wrapping all pages |
| `src/theme/theme.tsx` | MUI theme: colors, typography, component overrides |
| `src/fonts.tsx` | Font definitions with CSS variable names |
| `src/globals.css` | Tailwind directives + body gradients + `.gold-divider` |
| `src/data/events.json` | Event data array |
| `src/data/highlight.json` | Koi highlight image array |
| `src/models/events.tsx` | `KoiEvent` TypeScript interface |
| `tailwind.config.ts` | Tailwind custom palette + preflight disabled |
| `next.config.mjs` | `output: 'standalone'` |
| `apphosting.yaml` | Firebase App Hosting configuration |
| `Dockerfile` | 3-stage production Docker build |

### Component Index

| Component | Path | Type |
|-----------|------|------|
| Navbar | `src/components/Navbar/index.tsx` | Layout |
| NavbarDesktop | `src/components/Navbar/DesktopView/index.tsx` | Layout |
| NavbarMobile | `src/components/Navbar/MobileView/index.tsx` | Layout |
| MenuDrawerMobile | `src/components/Navbar/MobileView/MenuDrawerMobile.tsx` | Layout |
| Footer | `src/components/Footer/index.tsx` | Layout |
| HeaderText | `src/components/HeaderText/index.tsx` | Display |
| FilledButton | `src/components/FilledButton/index.tsx` | Interactive |
| LinkedFilledButton | `src/components/LinkedFilledButton/index.tsx` | Interactive |
| LinkedOutlineButton | `src/components/LinkedOutlineButton/index.tsx` | Interactive |
| KoiHighlightBox | `src/components/KoiHighlightBox/index.tsx` | Display |
| EventHighlightBox | `src/components/EventHighlightBox/index.tsx` | Display |
| PageMargin | `src/components/PageMargin/index.tsx` | Layout |
| PageHeader | `src/components/PageHeader/index.tsx` | Display |
| PageHeaderText | `src/components/PageHeaderText/index.tsx` | Display |

---

*This document is auto-generated from codebase analysis. Update when adding new features.*
