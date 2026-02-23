# CLAUDE.md - Koimartfarm UI Project Guide

## Project Overview

**Koimartfarm UI** is a modern, responsive marketing website for a Thai koi fish farm. Built with Next.js 16 and Material-UI, it showcases koi varieties, farm events, blog content, and provides a contact system.

- **Repository**: https://github.com/koimartfarm/koimartfarm-ui
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **UI Library**: Material-UI (MUI) v7
- **Deployment**: Firebase App Hosting

## Tech Stack

### Core Dependencies
- **Next.js** ^16.0.7 - React framework with App Router
- **React** ^19.2.0 - UI library
- **TypeScript** ~5.9.3 - Type safety
- **Material-UI** ^7.3.4 - Component library
- **Emotion** ^11.14.0 - CSS-in-JS for styling
- **Nodemailer** ^7.0.10 - Email sending for contact form
- **react-intersection-observer** ^10.0.0 - Scroll animations
- **react-social-media-embed** ^2.5.18 - Social media embeds

## Project Structure

```
koimartfarm-ui/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── (home)/             # Home page route group
│   │   │   ├── page.tsx        # Main home page
│   │   │   ├── Banner/         # Hero section
│   │   │   ├── Event/          # Events listing
│   │   │   ├── KoiHighlight/   # Image gallery modal
│   │   │   ├── KoiVariety/     # Koi types showcase
│   │   │   └── ...             # Other sections
│   │   ├── blog/[blog-slug]/   # Dynamic blog routes
│   │   ├── api/contact/        # Contact form API endpoint
│   │   └── layout.tsx          # Root layout (navbar + footer)
│   ├── components/             # Reusable components
│   │   ├── Navbar/
│   │   │   ├── DesktopView/   # Desktop navigation
│   │   │   └── MobileView/    # Mobile navigation
│   │   ├── Footer/            # Footer with contact form
│   │   ├── BlogCard/          # Blog preview cards
│   │   ├── FilledButton/      # Custom buttons
│   │   └── ...
│   ├── theme/                  # MUI theme configuration
│   ├── data/                   # Static JSON data
│   │   ├── events.json        # Event listings
│   │   └── highlight.json     # Gallery images
│   ├── models/                 # TypeScript interfaces
│   ├── assets/fonts/          # Custom WOFF2 fonts
│   └── globals.css            # Global styles
├── public/img/                 # Static images
├── Dockerfile                  # Docker deployment
├── apphosting.yaml            # Firebase App Hosting config
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
```

## Coding Patterns & Conventions

### Component Structure
All components follow this pattern:
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
- Components in PascalCase folders: `BlogCard/BlogCard.tsx`
- Export via index.tsx: `BlogCard/index.tsx`
- Styles in separate file: `BlogCard/BlogCard.styles.ts`
- TypeScript strict mode enabled

### State Management
- **No external state management** (no Redux/Zustand)
- Local component state with `useState`
- `useCallback` for memoized callbacks
- `useInView` for scroll-triggered animations

### Styling Approach

#### 1. Emotion Styled Components (Preferred for complex components)
```tsx
import { styled } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/material";

export const StyledBox = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
}));
```

#### 2. MUI sx Prop (Preferred for inline/simple styling)
```tsx
<Box sx={{
  display: "flex",
  color: "primary.light",
  padding: { xs: 2, sm: 4 } // Responsive values
}} />
```

#### 3. Theme Colors
```typescript
primary.main: "#E91D26"      // Red (header)
primary.light: "#FA391F"     // Light red
primary.dark: "#231F20"      // Black (footer)
secondary.main: "#D3AF37"    // Gold
background.default: "#E7E7E7" // Gray
background.banner: "#030916"  // Dark blue
```

### Responsive Design
MUI breakpoints:
```tsx
<Grid size={{ xs: 12, sm: 6, md: 4 }} />  // Grid columns
<Box sx={{ display: { xs: "none", sm: "flex" } }} />  // Display toggles

// Breakpoint values:
xs: 0px     // Mobile
sm: 600px   // Tablet
md: 960px   // Desktop
lg: 1280px  // Large desktop
xl: 1920px  // Extra large
```

### Animation Pattern
Use `react-intersection-observer` for scroll animations:
```tsx
import { useInView } from "react-intersection-observer";
import { Grow } from "@mui/material";

const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.2,
});

<div ref={ref}>
  <Grow in={inView} timeout={1000}>
    <Box>Animated content</Box>
  </Grow>
</div>
```

## Key Features

### Home Page Sections (in order)
1. **Banner** - Hero section with background image
2. **Events** - Upcoming events from JSON data
3. **Koi Appreciation** - Featured content
4. **History** - Farm background
5. **Blog Highlight** - 8 featured blog posts in grid
6. **YouTube Video** - Embedded 9:16 video
7. **Koi Varieties** - 7 koi types with descriptions
8. **Contact Form** - Email submission (in footer)

### Blog Routes
All blog pages follow pattern: `/blog/[slug]`

Existing posts:
- `/blog/where-to-find-koi`
- `/blog/how-to-choose-koi`
- `/blog/koi-appreciation`
- `/blog/shape-quality-pattern`
- `/blog/importing-koi-from-japan`
- `/blog/koi-hunting-tips-1`
- `/blog/koi-hunting-tips-2`

### Interactive Components

#### KoiHighlight Gallery
- Horizontal scrolling galleries (2 rows)
- Click to open full-screen modal
- Keyboard navigation (Arrow keys, Escape)
- Previous/Next buttons
- Auto-center scroll on load

#### Contact Form
- Name, email, phone, and message validation
- API endpoint: `POST /api/contact`
- Uses Nodemailer with Gmail SMTP
- Error handling and loading states

## Common Tasks

### Adding a New Component
1. Create folder in `/src/components/ComponentName/`
2. Add `ComponentName.tsx` with typed props
3. Add `ComponentName.styles.ts` if using styled components
4. Export via `index.tsx`

### Adding a Blog Post
1. Create folder in `/src/app/blog/[new-slug]/`
2. Add `page.tsx` with blog content
3. Add `layout.tsx` for blog-specific layout
4. Update home page blog highlight if needed

### Adding an Event
Edit `/src/data/events.json`:
```json
{
  "id": "unique-id",
  "title": "Event Title",
  "date": "2026-03-15",
  "location": "Location Name",
  "description": "Event description"
}
```

### Styling Guidelines
- Use theme colors (`primary.main`, `secondary.main`, etc.)
- Never hardcode colors outside theme
- Implement responsive design for all components
- Test at xs, sm, and md breakpoints minimum
- Use MUI Grid for layouts
- Follow existing animation patterns

### Images
- Place in `/public/img/` directory
- Use Next.js `Image` component for optimization
- Always specify width and height
- Use descriptive alt text

## Navigation

### Internal Hash Navigation
The navbar uses hash anchors for same-page navigation:
- `/#home` - Banner section
- `/#history` - History section
- `/#blog` - Blog highlight section
- `/#contact` - Contact form (footer)

### Navbar Structure
- **Desktop**: Always visible, horizontal layout
- **Mobile**: Hamburger menu with drawer
- Current page detection via `usePathname()`

## API Routes

### POST /api/contact
Contact form submission endpoint.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "message": "Email sent successfully"
}
```

Uses Nodemailer with Gmail SMTP configuration.

## Deployment

### Docker
Multi-stage build using Node 18-alpine:
```bash
docker build -t koimartfarm-ui .
docker run -p 3000:3000 koimartfarm-ui
```

### Firebase App Hosting
- Config: `apphosting.yaml`
- Requires secrets: `NODEMAILER_GMAIL_USER`, `NODEMAILER_APP_PASSWORD`, `TARGET_EMAIL`
- Auto-scaling with min instances: 0

### Build Configuration
- Output: `standalone` mode (in next.config.mjs)
- Server: `server.js` from standalone build
- Port: 3000

## Important Notes

### Content & Data
- Events stored in `/src/data/events.json`
- Koi varieties hardcoded in component arrays
- Blog content is static (no CMS)
- Images are not optimized before commit (manual task)

### Browser Support
- Modern browsers only (ES2020 target)
- Chrome, Firefox, Safari
- Mobile responsive (iOS/Android)

### Performance
- Image lazy loading on blog pages
- Intersection observer for animations
- Next.js automatic image optimization
- Turbopack for faster dev builds

### Internationalization
- Primarily Thai language content
- Some English UI elements
- Multi-language font support (Thai, Latin)
- No i18n library - content is hardcoded

## Anti-Patterns to Avoid

1. **Don't** use CSS modules - Use Emotion or MUI sx
2. **Don't** add Redux or other state management - Use local state
3. **Don't** hardcode colors - Use theme values
4. **Don't** skip responsive design - Always test mobile
5. **Don't** forget "use client" directive for interactive components
6. **Don't** create new global styles - Scope styles to components
7. **Don't** skip TypeScript types - Maintain strict typing
8. **Don't** use external icons - Use MUI icons

## Testing & Quality

### Current Status
- No automated tests configured
- Manual testing required for changes
- ESLint configured with TypeScript support

### Before Committing
- Run `npm run lint` to check for errors
- Test responsive design at multiple breakpoints
- Verify animations work correctly
- Check console for errors
- Test contact form functionality

## References

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [Material-UI Documentation](https://mui.com/material-ui/getting-started/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Emotion Documentation](https://emotion.sh/docs/introduction)

## Support & Contribution

- Repository: https://github.com/koimartfarm/koimartfarm-ui
- License: MIT
- Issues: Report via GitHub Issues

---

**Last Updated:** 2026-02-08
**Project Version:** 0.0.0
