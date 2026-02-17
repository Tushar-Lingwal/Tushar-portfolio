# Tushar Lingwal — Portfolio

Production-ready AI/ML researcher portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Folder Structure

```
tushar-lingwal-portfolio/
├── app/
│   ├── globals.css          # Global styles, CSS variables, font imports
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── Navbar.tsx           # Sticky nav, active highlight, mobile menu
│   ├── Hero.tsx             # Full-viewport hero with animated background
│   ├── About.tsx            # Professional summary + skills grid
│   ├── Research.tsx         # Accordion research showcase
│   ├── Projects.tsx         # Project cards grid
│   ├── Experience.tsx       # Vertical timeline
│   ├── Achievements.tsx     # Achievement cards
│   ├── Contact.tsx          # Accessible contact form with validation
│   └── Footer.tsx           # Minimal footer
├── data/
│   ├── projects.ts          # All project data (single source of truth)
│   ├── research.ts          # Research items with tags and detail bullets
│   ├── experience.ts        # Work experience entries
│   └── achievements.ts      # Achievement cards data
├── lib/
│   └── utils.ts             # cn() utility (clsx + tailwind-merge)
├── public/
│   └── resume.pdf           # ← Add your resume here
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Installation & Local Development

```bash
# 1. Clone or extract the project
cd tushar-lingwal-portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

---

## Production Build

```bash
npm run build
npm start
```

---

## Vercel Deployment

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo at:
# https://vercel.com/new
```

> Set no environment variables — this is a static frontend portfolio.

---

## Customization

### Update personal info
- **Contact email**: search for `tushar@nit.ac.in` and replace throughout
- **Social links**: `components/Navbar.tsx`, `components/Hero.tsx`, `components/Footer.tsx`
- **Resume**: Drop `resume.pdf` into `/public/`

### Add/edit projects
Edit `data/projects.ts` — each project is a typed object:
```ts
{
  id: "unique-id",
  title: "Project Name",
  description: "Short description for card",
  longDescription: "Detailed description",
  stack: ["Python", "FastAPI", "Docker"],
  github: "https://github.com/...",
  demo: "https://...",          // optional
  category: "research" | "systems" | "applied",
  featured: true,               // optional
}
```

### Add research items
Edit `data/research.ts` to add/modify research accordion entries.

### Add experience
Edit `data/experience.ts` for timeline entries.

---

## Fonts Used

- **DM Serif Display** — section headings, display text
- **JetBrains Mono** — section labels, tags, code, metadata
- **Outfit** — body text, descriptions, UI labels

---

## Accessibility Features

- ✅ Skip-to-content link
- ✅ ARIA labels on all interactive elements
- ✅ `aria-expanded` on accordion and mobile menu
- ✅ `aria-required` + `aria-invalid` on form fields
- ✅ `aria-live` region for form success state
- ✅ Visible focus rings on all focusable elements
- ✅ Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ✅ `role="alert"` on form validation errors
- ✅ Keyboard-navigable mobile menu with Escape key close
- ✅ WCAG AA contrast ratios throughout

---

## Performance Notes

- Animations use `useInView` with `once: true` — fire only once, no re-renders
- Framer Motion loaded client-side only (`"use client"`)
- Next.js App Router with automatic code splitting
- Images use `next/image` with AVIF/WebP formats
- Google Fonts preloaded via `<link rel="preconnect">`
