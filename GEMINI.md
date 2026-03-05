# Exit Zero Labs — Website

Single-page marketing site. Dark-first design with terminal aesthetics, animated scroll sections, and a 3D globe.

## Tech Stack
- Next.js 16 (App Router, Turbopack, React Compiler)
- React 19, Tailwind CSS v4 (CSS-first `@theme inline` in globals.css — no tailwind.config.js)
- Framer Motion (scroll-triggered animations)
- Three.js + React Three Fiber + Drei (3D globe, lazy-loaded)
- TypeScript 5.x (strict mode)
- Biome 2.2 (not ESLint/Prettier)
- Package manager: npm

## Brand Tokens

### Colors
| Name | Hex | CSS Variable | Tailwind |
|------|-----|-------------|----------|
| Zero | `#0A0F1E` | `--color-zero` | `bg-zero`, `text-zero` |
| Dusk | `#1E293B` | `--color-dusk` | `bg-dusk`, `text-dusk` |
| Signal | `#00D97E` | `--color-signal` | `bg-signal`, `text-signal` |
| Ember | `#F97316` | `--color-ember` | `bg-ember`, `text-ember` |
| Canvas | `#FAFAF8` | `--color-canvas` | `bg-canvas`, `text-canvas` |
| Mist | `#94A3B8` | `--color-mist` | `bg-mist`, `text-mist` |

### Fonts
- `--font-display`: Source Serif 4 — headings (600/700 weight)
- `--font-body`: Source Sans 3 — body/UI (400/600 weight)
- `--font-mono`: JetBrains Mono — code/terminal (400 weight)

## Design Principles
- **Dark-first** with considered light accents. Canvas (#FAFAF8) is for the manifesto section only.
- **Terminal/code aesthetic** — we build tools for builders
- **Generous whitespace**, sharp typography, subtle motion
- **No stock photos, no generic gradients, no AI slop**
- Max-width 1200px for all content areas. No full-bleed text.

## Animation System
- All entry animations: scroll-triggered via Framer Motion `useInView` with `once: true`
- Standard reveal: 20px slide-up + fade, 400ms, spring easing
- Always respect `prefers-reduced-motion: reduce` — skip transforms, show content immediately
- No decorative motion. Every animation has a reason.

## Project Structure
```
src/
├── app/
│   ├── globals.css          # Tailwind v4 @theme + brand tokens
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Main page — composes all sections
│   └── not-found.tsx        # Custom 404 (exit 1 theme)
├── components/
│   ├── ui/                  # Reusable primitives (button, pill-badge, animated-text, section-wrapper)
│   ├── hero/                # Terminal typing effect, hero section
│   ├── kinnections/         # Product showcase (tilt card)
│   ├── geo-spot/            # Globe, email capture
│   ├── manifesto/           # Brand manifesto
│   └── footer/
└── lib/
    └── cn.ts                # clsx + tailwind-merge
```

## Accessibility
- WCAG AA contrast on all text
- Focus states: 2px Signal green outline, 2px offset
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- `aria-label` on each section
- Globe is decorative — `aria-hidden` on canvas

## Critical Rules
1. Read files before editing — understand existing patterns
2. Dark-first — this site is dark by default
3. Globe is lazy-loaded via `next/dynamic` with `ssr: false`
4. No carousels, sliders, modals, or auto-play video
5. No CMS — content is hardcoded at launch
6. Run `npm run lint` and `npm run build` to verify changes

## Reference Docs
@docs/brand-identity.md
@docs/design-brief.md
