---
kind: note
id: claude-project-augment-code-marketing-019b2419
updatedAt: 1765837202060
createdAt: 1765837202060
tags: 
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: project
project_uuid: 019b2419-628a-7219-8ea3-17ab1e68e466
created_at: 2025-12-15T22:20:02.060325+00:00
updated_at: 2025-12-15T22:20:02.060325+00:00
title: "Augment Code Marketing"
---

# Augment Code Marketing

## Metadata

- Claude project UUID: `019b2419-628a-7219-8ea3-17ab1e68e466`
- Created: `2025-12-15T22:20:02.060325+00:00`
- Updated: `2025-12-15T22:20:02.060325+00:00`
- Description: I am technical content lead for Augment Code
- Docs count: 1

## Doc 1: DESIGN-SPEC.md

- UUID: `4e70166a-0967-424f-ac9a-d582e2e171ad`
- Created: `2026-01-30T18:55:07.211688+00:00`
- Updated: ``

# Augment Code Design System Specification

> A comprehensive guide to implementing pages on augmentcode.com
> Role models: Vercel, Stripe, Zed.dev, Raycast, Linear

---

## 1. Design Philosophy

### Core Principles

1. **Technical Credibility** â€” Design for developers. Clean, precise, no unnecessary decoration.
2. **Information Density** â€” Show value quickly. No fluff, every element earns its place.
3. **Quiet Confidence** â€” Let the product speak. Restrained but distinctive aesthetic.
4. **Sharp by Default** â€” Primary UI uses zero border radius for an industrial, engineered feel. Rounded corners are used intentionally for specific elements (see Section 5.1).

### Visual DNA

- **Minimalist with intent**: Every visual element has purpose
- **Data-driven proof**: Benchmarks, stats, and comparisons build trust
- **Product-forward**: UI mockups are the hero, not stock imagery
- **Light/dark fluidity**: Both modes are first-class citizens

---

## 2. Color System

### Brand Colors

```css
/* Primary Accent - "Augment Green" */
--primary: oklch(0.5270 0.1540 150.0690);   /* Same in light & dark mode */
--secondary: oklch(0.5270 0.1540 150.0690); /* Alias for primary */

/* Background */
--background: 0 0% 100%;            /* #ffffff - Light */
--background: 240 10% 3.9%;         /* #0a0a0b - Dark */

/* Foreground (Text) */
--foreground: 240 10% 3.9%;         /* Near black - Light */
--foreground: 0 0% 98%;             /* Near white - Dark */

/* Muted (Secondary text, backgrounds) */
--muted: 240 4.8% 95.9%;            /* Light gray - Light */
--muted: 240 3.7% 15.9%;            /* Dark gray - Dark */
--muted-foreground: 240 3.8% 46.1%; /* Gray text */

/* Borders */
--border: 240 5.9% 90%;             /* Light mode */
--border: 240 3.7% 15.9%;           /* Dark mode */
```

### Semantic Color Usage

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Primary CTA buttons | `bg-secondary text-secondary-foreground` | Same |
| Secondary CTA buttons | `bg-foreground text-background` | Inverts naturally |
| Links | `text-secondary` | Same |
| Accent text (headlines) | `text-secondary` | Same |
| Muted text | `text-muted-foreground` | Same |
| Surfaces | `bg-background` | Same |
| Cards | `bg-muted/30` or `bg-muted/50` | Same |
| Borders | `border-border` | Same |

### Multi-color Tags (When Needed)

```tsx
// Blue
className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"

// Purple
className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"

// Green (Primary)
className="bg-secondary/10 text-secondary border-secondary/20"
```

---

## 3. Typography

### Font Stack

```css
--font-sans: "Inter", system-ui, sans-serif;
--font-serif: "Source Serif 4", Georgia, serif;
--font-mono: "Berkeley Mono", "SF Mono", monospace;
```

### Type Scale

| Role | Class | Usage |
|------|-------|-------|
| Hero headline | `text-4xl sm:text-5xl lg:text-6xl` | Page heroes, max 1 per page |
| Section headline | `text-3xl sm:text-4xl lg:text-5xl` | Major sections |
| Feature headline | `text-2xl sm:text-3xl` | Feature blocks |
| Card title | `text-xl font-medium` | Cards, list items |
| Body | `text-base` or `text-lg` | Paragraphs |
| Small | `text-sm` | Captions, metadata |
| Micro | `text-xs` | Labels, badges |

### Headline Treatment

```tsx
// Primary headlines use light weight
<h1 className="font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-foreground">
  Headline text here
</h1>

// With green accent word
<h1 className="font-light ...">
  Every AI uses the same models.{" "}
  <span className="text-secondary">Context is the difference.</span>
</h1>
```

### Eyebrow Pattern

Eyebrows are uppercase monospace labels that appear above headlines:

```tsx
<p className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">
  Section Label
</p>
```

Key properties:
- `font-mono` â€” Monospace font
- `text-xs` â€” Small size
- `uppercase` â€” All caps
- `tracking-widest` â€” Wide letter spacing
- `text-secondary` â€” Green color
- `mb-4` â€” Space before headline

---

## 4. Layout Patterns

### Page Structure

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Navigation (sticky)                      â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Hero Section (full width, centered)      â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Social Proof (logos bar)                 â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Feature Section 1 (light bg)             â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Feature Section 2 (dark bg)              â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ ... alternating sections ...             â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ CTA Section (dark bg)                    â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Footer                                   â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Content Width

```tsx
// Max content width
<div className="mx-auto max-w-7xl px-4 sm:px-8">

// Narrower for text-heavy content
<div className="mx-auto max-w-3xl px-4 sm:px-8">

// Full bleed (edge to edge)
<div className="w-full">
```

### Section Spacing

```tsx
// Standard section padding
<section className="py-16 sm:py-24 lg:py-32">

// Hero sections (more top padding for nav)
<section className="pt-32 sm:pt-40 pb-16 sm:pb-24">
```

### Grid Patterns

```tsx
// Two-column feature (text + visual)
<div className="grid gap-10 lg:grid-cols-2 items-center">

// Three-column cards
<div className="grid gap-6 md:grid-cols-3">

// Four-column pricing
<div className="grid gap-0 md:grid-cols-4">

// Feature grid (3 across)
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
```

---

## 5. Component Patterns

### Buttons

Always use the `Button` component from `@/components/ui/button` for CTAs:

```tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Primary CTA (green) - use on light backgrounds
<Button variant="secondary" size="lg" className="group" asChild>
  <Link href="/install">
    Install Now
    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
  </Link>
</Button>

// Outline CTA - use on light backgrounds
<Button variant="outline" size="lg" asChild>
  <Link href="/learn-more">Learn More</Link>
</Button>

// Outline CTA - use on dark/inverted backgrounds
<Button variant="outline-inverted" size="lg" asChild>
  <Link href="/contact">Contact Sales</Link>
</Button>
```

Button variants:
- `secondary` â€” Green filled button, primary CTAs
- `outline` â€” Border button for light backgrounds
- `outline-inverted` â€” Border button for dark/inverted backgrounds
- `ghost` â€” Minimal button for navigation
- `link` â€” Text link style

Button rules:
- Always use the Button component, not custom Link styling
- Subtle or no rounding (`rounded-sm` or none) â€” avoid `rounded-lg`/`rounded-full`
- Sans-serif font for CTAs (built into Button component)
- Arrow icon on primary actions with hover animation
- Use `asChild` with Link for navigation buttons

### 5.1 Border Radius Guidelines

**Subtle rounding is fine** â€” We're not dogmatic about zero radius. Subtle rounding (`rounded-sm`, `rounded`) makes UI elements feel polished and approachable.

**Avoid heavy rounding on structural elements** â€” Don't use `rounded-lg`, `rounded-xl`, or `rounded-full` on buttons, cards, or containers. We don't want a "bubble" aesthetic.

| Element | Acceptable | Avoid |
|---------|------------|-------|
| Cards | `rounded-sm`, `rounded` | `rounded-lg`, `rounded-xl` |
| Buttons | `rounded-sm` or none | `rounded-lg`, `rounded-full` |
| Form inputs | `rounded-sm`, `rounded` | `rounded-lg` |
| Containers/sections | `rounded-sm` or none | `rounded-lg`, `rounded-xl` |

**Full rounding for specific elements** â€” These use `rounded-full` intentionally:

| Element | Rationale |
|---------|-----------|
| Announcement pills/badges | Distinctive, draws attention |
| macOS window controls | Mimics native platform UI |
| Avatar/profile images | Standard convention |
| Progress indicators/dots | Visual convention |
| Floating nav (scrolled state) | Feels like an overlay |

**Illustrations are exempt** â€” Artistic elements like synthwave graphics, decorative shapes, or visualizations can use whatever shapes work aesthetically. The guidelines apply to functional UI, not illustration.

```tsx
// âœ… Good: Subtle rounding on cards
<div className="border border-border rounded-sm p-6">

// âœ… Good: Announcement pill with full rounding
<span className="rounded-full border border-border px-4 py-1.5 text-sm">
  Introducing Code Review
</span>

// âœ… Good: macOS window chrome
<div className="flex gap-1.5">
  <div className="size-3 rounded-full bg-red-500/80" />
  <div className="size-3 rounded-full bg-yellow-500/80" />
  <div className="size-3 rounded-full bg-green-500/80" />
</div>

// âŒ Avoid: Heavy rounding on buttons
<button className="rounded-lg bg-secondary px-6 py-3">  {/* Too bubbly */}
<button className="rounded-full bg-secondary px-6 py-3">  {/* Way too bubbly */}

// âŒ Avoid: Heavy rounding on cards
<div className="rounded-xl border p-6">  {/* Too soft */}
```

**Rule of thumb**: Subtle is fine (`rounded-sm`), bubble is not (`rounded-lg`+). When in doubt, less rounding is better.

### Cards

```tsx
// Feature card
<div className="border border-border bg-background p-6 sm:p-8">
  <h3 className="font-medium text-xl text-foreground mb-2">
    Card Title
  </h3>
  <p className="text-muted-foreground">
    Card description text here.
  </p>
</div>

// Elevated card (with subtle background)
<div className="border border-border bg-muted/30 p-6 sm:p-8">
  ...
</div>

// Dark section card
<div className="bg-background/5 border border-white/10 p-6 sm:p-8">
  ...
</div>
```

### Links

```tsx
// Inline text link
<a className="text-secondary hover:underline">
  Link text
</a>

// Arrow link (for CTAs)
<a className="inline-flex items-center gap-2 text-secondary hover:underline group">
  Explore Feature
  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
</a>
```

### Stats/Metrics Display

```tsx
<div className="flex gap-12 justify-center">
  <div className="text-center">
    <div className="font-mono text-3xl sm:text-4xl text-foreground">1M+</div>
    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-2">
      Files Indexed
    </div>
  </div>
  {/* More stats... */}
</div>
```

### Pricing Cards

```tsx
// Standard tier
<div className="border border-border p-6 relative">
  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
    Standard
  </div>
  <div className="mt-4">
    <span className="text-4xl font-light">$60</span>
    <span className="text-muted-foreground">/month</span>
  </div>
  <p className="text-sm text-muted-foreground mt-4">
    Description text
  </p>
  <button className="w-full mt-6 ...">Install now</button>
  <ul className="mt-6 space-y-3">
    <li className="flex items-center gap-2 text-sm">
      <Check className="size-4 text-secondary" />
      Feature item
    </li>
  </ul>
</div>

// Popular tier (highlighted)
<div className="border border-secondary bg-secondary/5 p-6 relative">
  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
    <span className="bg-secondary text-secondary-foreground px-3 py-1 text-xs font-mono uppercase">
      Popular
    </span>
  </div>
  ...
</div>
```

---

## 6. Visual Elements

### Illustration Style

Our illustrations follow a minimalist, geometric line-art aesthetic. Reference files are available in `/design-inspiration/`.

**Core characteristics:**

| Attribute | Value |
|-----------|-------|
| Background | Black (`#000000`) or transparent |
| Stroke color | White (`#ffffff`) |
| Stroke weight | 2px |
| Accent color | Green (`--secondary`) if needed, otherwise monochrome |
| Fill | Minimal â€” white filled circles for focal points |

**Visual vocabulary:**

- **Concentric circles** â€” Globe, radar, or data visualization feel
- **Intersecting ellipses** â€” 3D spheres, orbital paths, Venn diagrams
- **Dashed lines** â€” Connection paths, measurement lines, guides
- **Arcs and semi-circles** â€” Gauges, progress indicators, hemispheres
- **Axis lines** â€” Grid references, coordinates, technical precision
- **Filled circles** â€” Data points, nodes, focal anchors
- **Perspective ellipses** â€” Stacked for 3D tunnel/depth effect
- **Code symbols** â€” Brackets `{ }`, syntax elements as characters

**Style principles:**

1. **Mathematical precision** â€” Clean geometric shapes, not hand-drawn
2. **High contrast** â€” Black backgrounds with white strokes
3. **Line art only** â€” Strokes over fills (except focal points)
4. **Technical feel** â€” Blueprint, data visualization, engineering aesthetic
5. **Minimal color** â€” Monochrome preferred, green accent (`--secondary`) if needed
6. **Abstract over literal** â€” Suggest concepts through geometry, not realistic imagery

```svg
<!-- Example: Concentric arcs with dashed guide lines -->
<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect fill="black" width="400" height="300"/>
  <!-- Concentric arcs -->
  <path d="M200 250 A150 150 0 0 1 50 100" stroke="white" stroke-width="2"/>
  <path d="M200 250 A120 120 0 0 1 80 130" stroke="white" stroke-width="2"/>
  <path d="M200 250 A90 90 0 0 1 110 160" stroke="white" stroke-width="2"/>
  <!-- Dashed guide -->
  <line x1="200" y1="250" x2="50" y2="100" stroke="white" stroke-width="2" stroke-dasharray="4 4"/>
  <!-- Focal point -->
  <circle cx="50" cy="100" r="8" fill="white"/>
</svg>
```

**When to use illustrations:**

- Hero section backgrounds (subtle, not overwhelming)
- Feature section accents
- Empty states or loading screens
- Section dividers or visual breaks

**Reference files:** See `/design-inspiration/` for SVG examples:
- `illustration_inspiration_1.svg` â€” Concentric arcs with radar aesthetic
- `illustration_inspiration_3.svg` â€” Globe with intersecting ellipses
- `illustration_inspiration_8.svg` â€” Fibonacci-style circle progression
- `illustration_inspiration_10.svg` â€” Code brackets character with axis grid
- `illustration_inspiration_11.svg` â€” Stacked perspective ellipses (3D tunnel)

### Dot Grid Pattern

A subtle grid of dots used as background texture:

```tsx
// CSS for dot pattern
.dot-pattern {
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}

// Dark mode
.dark .dot-pattern {
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px
  );
}
```

Usage: Hero sections, full-width backgrounds

### Figure Labels

For UI mockups and diagrams:

```tsx
<div className="relative">
  <span className="absolute -top-6 right-0 font-mono text-xs text-muted-foreground">
    Fig. 1
  </span>
  <div className="border border-border bg-muted/30">
    {/* UI mockup content */}
  </div>
  <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
    Caption describing the figure
  </p>
</div>
```

### Product UI Mockups

UI mockups are primary visual elements, not decorative:

```tsx
// Window chrome
<div className="border border-border bg-background overflow-hidden">
  {/* Title bar */}
  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
    <div className="flex gap-1.5">
      <div className="size-3 rounded-full bg-muted-foreground/20" />
      <div className="size-3 rounded-full bg-muted-foreground/20" />
      <div className="size-3 rounded-full bg-muted-foreground/20" />
    </div>
    <span className="font-mono text-xs text-muted-foreground ml-2">
      VS Code - Augment Agent
    </span>
  </div>
  {/* Content */}
  <div className="p-4">
    ...
  </div>
</div>
```

### Code Blocks

```tsx
<div className="bg-[#1e1e1e] border border-border overflow-hidden font-mono text-sm">
  <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
    <span className="text-white/60">src/api/auth.ts</span>
    <span className="text-xs text-white/40">Modified</span>
  </div>
  <pre className="p-4 overflow-x-auto">
    <code className="text-white/90">
      {/* Syntax highlighted code */}
    </code>
  </pre>
</div>
```

### Diff Display

```tsx
// Added line
<div className="bg-green-500/10 text-green-400 px-4 py-0.5">
  + const refreshToken = generateRefreshToken();
</div>

// Removed line
<div className="bg-red-500/10 text-red-400 px-4 py-0.5">
  - const token = oldMethod();
</div>
```

---

## 7. Section Patterns

### Hero Section

```tsx
<section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24">
  {/* Optional dot pattern background */}
  <div className="absolute inset-0 dot-pattern opacity-50" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
    <div className="max-w-3xl mx-auto text-center">
      {/* Eyebrow */}
      <p className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">
        Product Name
      </p>

      {/* Headline */}
      <h1 className="font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-foreground mb-6">
        Main headline with{" "}
        <span className="text-secondary">accent word</span>
      </h1>

      {/* Subhead */}
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Supporting description that expands on the headline.
      </p>

      {/* CTAs */}
      <div className="flex gap-4 justify-center">
        <button className="... bg-secondary">Primary CTA</button>
        <button className="... border">Secondary CTA</button>
      </div>
    </div>
  </div>
</section>
```

### Social Proof / Logos Bar

```tsx
<section className="py-12 border-y border-border">
  <div className="mx-auto max-w-7xl px-4 sm:px-8">
    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground text-center mb-8">
      Trusted by Engineers at
    </p>
    <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap opacity-60 grayscale">
      {/* Logo images */}
    </div>
  </div>
</section>
```

### Feature Section (Text + Visual)

```tsx
<section className="py-16 sm:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-8">
    <div className="grid gap-10 lg:grid-cols-2 items-center">
      {/* Text column */}
      <div>
        <span className="font-mono text-xs text-muted-foreground">001</span>
        <h2 className="font-light text-3xl sm:text-4xl tracking-tight text-foreground mt-2 mb-4">
          Feature Headline
        </h2>
        <p className="text-muted-foreground mb-6">
          Feature description paragraph.
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <Check className="size-5 text-secondary mt-0.5" />
            <span>Benefit point</span>
          </li>
        </ul>
        <a className="inline-flex items-center gap-2 text-secondary mt-6">
          Learn more <ArrowRight className="size-4" />
        </a>
      </div>

      {/* Visual column */}
      <div className="relative">
        <span className="absolute -top-6 right-0 font-mono text-xs text-muted-foreground">
          Fig. 1
        </span>
        {/* UI mockup */}
      </div>
    </div>
  </div>
</section>
```

### Dark Section

```tsx
<section className="py-16 sm:py-24 bg-foreground text-background">
  <div className="mx-auto max-w-7xl px-4 sm:px-8">
    <p className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">
      Section Label
    </p>
    <h2 className="font-light text-3xl sm:text-4xl tracking-tight mb-6">
      Section Headline
    </h2>
    <p className="text-background/70 max-w-2xl">
      Description text with reduced opacity for hierarchy.
    </p>
  </div>
</section>
```

### CTA Section (Footer)

```tsx
<section className="py-16 sm:py-24 bg-foreground text-background">
  <div className="mx-auto max-w-7xl px-4 sm:px-8">
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">
        Get Started
      </p>
      <h2 className="font-light text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
        Give your codebase the agents it deserves
      </h2>
      <p className="text-background/70 mb-8">
        Supporting text about getting started.
      </p>
      <div className="flex gap-4">
        <button className="bg-secondary text-secondary-foreground ...">
          Install Augment
        </button>
        <button className="border border-background/20 text-background ...">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
</section>
```

---

## 8. Responsive Behavior

### Breakpoints

```
sm: 640px   - Tablet portrait
md: 768px   - Tablet landscape
lg: 1024px  - Desktop
xl: 1280px  - Large desktop
2xl: 1536px - Extra large
```

### Mobile-First Patterns

```tsx
// Typography scaling
className="text-3xl sm:text-4xl lg:text-5xl"

// Spacing scaling
className="py-12 sm:py-16 lg:py-24"

// Grid collapse
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Padding scaling
className="px-4 sm:px-8"
```

### Hide/Show Elements

```tsx
// Hide on mobile
className="hidden lg:block"

// Show only on mobile
className="lg:hidden"
```

---

## 9. Animation & Interaction

### Transitions

```tsx
// Standard transition
className="transition-colors duration-200"

// Transform transition (for arrows, icons)
className="transition-transform duration-200 group-hover:translate-x-1"

// Opacity transition
className="transition-opacity duration-200 hover:opacity-80"
```

### Hover States

```tsx
// Button hover
className="hover:bg-secondary/90"

// Link hover
className="hover:underline"

// Card hover (subtle)
className="hover:border-secondary/50"

// Icon shift on link hover
<a className="group">
  Text <ArrowRight className="group-hover:translate-x-1 transition-transform" />
</a>
```

### Loading States

```tsx
// Spinner
<div className="size-4 border-2 border-secondary border-t-transparent rounded-full animate-spin" />

// Skeleton
<div className="h-4 bg-muted animate-pulse" />
```

---

## 10. Do's and Don'ts

### DO

- Use subtle rounding (`rounded-sm`) on cards, inputs, and containers â€” it's polished
- Use `rounded-full` for pills, badges, avatars, and window chrome
- Use monospace for labels, eyebrows, and UI elements
- Use light font weight for headlines
- Show real product UI, not abstract graphics
- Include benchmarks and data when making claims
- Alternate light/dark sections for visual rhythm
- Use green (`text-secondary`) sparingly for emphasis
- Keep copy concise and technical

### DON'T

- Use heavy rounding (`rounded-lg`, `rounded-xl`, `rounded-full`) on buttons, cards, or containers
- Use stock photography
- Use gradients (except very subtle ones)
- Use literal/realistic illustrations â€” prefer geometric line art (see Section 6)
- Use exclamation marks or hyperbolic language
- Center long paragraphs of text
- Use shadows (prefer borders)
- Add unnecessary animations

---

## 11. Component Checklist

When building a new page, ensure you have:

- [ ] Navigation (sticky, with CTA)
- [ ] Hero with eyebrow + headline + subhead + CTAs
- [ ] Social proof / logos bar
- [ ] 2-4 feature sections (alternating layouts)
- [ ] At least one dark section for contrast
- [ ] Product UI mockups (not stock images)
- [ ] Footer CTA section
- [ ] Proper light/dark mode support
- [ ] Mobile responsive layouts
- [ ] Semantic HTML structure

---

## 12. File References

Key files in the codebase:

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Theme colors, fonts, spacing |
| `app/globals.css` | CSS custom properties, base styles |
| `components/design-system/` | Reusable components |
| `components/ui/button.tsx` | Button variants |
| `components/sections/` | Page section components |

---

# Part II: Developer Marketing Website Best Practices

> Guidelines for building a top-tier developer marketing website using Tailwind CSS + shadcn/ui + Next.js

---

## 13. Visual Hierarchy

### Emphasize Key Elements

Establish a clear typographic hierarchy so that important elements (like headlines and CTAs) immediately stand out. Headlines should be significantly larger than body text (e.g. a hero headline might be 3Ã— or more the size of paragraph text) to grab attention. Use weight and color strategically: a bold, high-contrast headline or focal image should draw the eye first, followed by a distinct call-to-action button. Secondary text (subheadings or captions) can be medium-sized to guide readers through sections without overpowering the main headline.

### CTA Placement

Position primary calls-to-action prominently, ideally above the fold and again at logical breakpoints down the page. Users should never have to search for how to get started.

- **Hero CTA**: Include a headline, supporting text, and a highly visible CTA (e.g. "Sign Up Free") as the first thing users see
- **Repeated CTAs**: Place CTAs at the end of major sections or as a persistent element (like a sticky header button) so conversion is always within reach
- **Visual dominance**: Each CTA should visually dominate its area â€“ use an accent color or solid fill that contrasts with the background

### Logical Grouping

Organize content into digestible sections that follow a logical narrative:

- Group related content together and separate sections using clear headings, background color changes, or ample whitespace
- Cluster a feature description with its accompanying image and a contextual CTA, distinct from the next section
- Guide the user's eye in a deliberate path â€“ often a Z-pattern or F-pattern flow â€“ so they naturally move from introduction, to value prop, to CTA
- Give the eye a defined path with focal points: one prominent element per section (e.g. an illustration or headline) to anchor attention, then supporting details in order of importance

---

## 14. Content Flow

### Hero to Value Prop

Start with a strong hero section that concisely answers "What is this product and how will it help me?" within seconds:

- **Benefit-oriented headline**: Instead of "AI Code Editor," say "Code 10Ã— Faster with AI Assistance"
- **Brief subheading**: One or two lines elaborating the value proposition
- **Clear CTA**: What to do next
- **Visual element**: Product screenshot, short looping video, or graphic showing product context

### Establish Trust Early

Directly after the hero, provide social proof or trust signals:

- Row of customer logos
- Brief testimonial from a known tech leader
- User statistics ("Trusted by 100,000 developers")
- "As seen in" media mentions

Specific numbers or metrics work better than generic statements. Place this immediately after the intro so users see evidence before diving into features.

### Narrative Sequencing

Design the sequence of sections as a coherent story. A proven flow:

```
Hero â†’ Social Proof â†’ Problem/Pain â†’ Solution/Features â†’ Benefits â†’ Testimonials â†’ Final CTA
```

Each feature or product benefit section should clearly tie a capability to a developer outcome. For instance: "Blazing Fast Builds" with "Our cloud infrastructure compiles your code in seconds, so you spend less time waiting."

### Example Content Sequence

1. **Hero**: "Ship Apps Faster with XYZ" â€“ 1-liner benefit statement, subtext, CTA "Try XYZ Free," background showing terminal/code
2. **Trust Bar**: Logos of well-known tech companies, caption like "Trusted by 5,000+ engineering teams"
3. **Problem/Pain Point**: Brief paragraph or illustration highlighting common developer pain
4. **Solution/Feature Highlights**: Series of sections, each showcasing a core feature with icon/screenshot, short heading, and 2-3 sentence description
5. **Integration/Code Example**: Show how easily it integrates â€“ `npm install xyz-cli` or config snippet
6. **Testimonials**: One or two from developers/CTOs with specific results: "XYZ cut our deploy time by 80%"
7. **Callout/Offer**: Mid-page CTA section â€“ "Ready to accelerate your workflow?"
8. **Pricing or Plans**: Outline tiers, highlight free tier if available
9. **FAQ**: Short FAQ addressing technical and logistical questions
10. **Footer**: Navigation to docs, community, company info, final CTA

---

## 15. Contrast and Readability

### Sufficient Color Contrast

Ensure text is easily distinguishable from backgrounds:

- All text should meet accessibility contrast standards (at least 4.5:1 for body text)
- Avoid light-gray text on slightly-darker gray backgrounds
- High contrast improves comprehension for all readers
- Test with accessibility checkers and color blindness simulators

### Readable Typography

- **Minimum font size**: 16px (1rem) for body copy on desktop, never shrink below 16px on mobile
- **Headings**: Scale appropriately (H1 ~48â€“64px for hero, H2 ~32px for sections)
- **Line height**: Around 1.5 for body text (`leading-relaxed` or `leading-7`)
- **Font choice**: Clean sans-serif for body, monospace only for code and small UI elements

### Line Length

Keep line lengths readable on large screens:

- Target ~50â€“75 characters per line, with ~66 often ideal
- Use `max-w-prose` or `max-w-[65ch]` to restrict text width
- Center content with `mx-auto` on containers with max-width

```tsx
// Good: Controlled line length
<div className="mx-auto max-w-3xl px-4">
  <p className="text-lg leading-relaxed">Content here...</p>
</div>
```

---

## 16. Component Spacing and Padding

### Consistent Spacing System

Apply a uniform spacing scale across the site:

- Use Tailwind's spacing utilities (4px increments: `p-4`, `p-6`, `mt-8`, `gap-4`)
- Stick to consistent increments â€“ don't use arbitrary values
- A predictable rhythm looks professional and builds trust
- Example: 16px (4 units) padding inside cards, 32px (8 units) margin between sections

### Vertical Rhythm

Establish clear vertical spacing patterns:

- Larger spacing between major sections (`py-16` or `py-24`)
- Tighter spacing within sections for related items (`mb-2` between heading and text)
- Use `space-y-8` to evenly space items in a column

### Horizontal Padding

Ensure content isn't smushed against screen edges:

- Use container padding (`px-4` on mobile, `px-8` on desktop)
- Maintain adequate gutter space in multi-column layouts (`gap-x-8`)

### Responsive Spacing

Adjust spacing at breakpoints:

```tsx
// Responsive padding
className="px-4 sm:px-6 lg:px-8"

// Responsive section spacing
className="py-12 sm:py-16 lg:py-24"
```

---

## 17. Component Respect and Density

### Breathing Room

Each UI component should be given appropriate room to breathe:

- Not only padding inside, but mindful space around it
- Use uniform margins and grid gaps between items
- Follow the mantra: "less is more" for marketing pages
- Show only the most important components and give them spotlight

### Density vs. Clarity

Balance information density with visual clarity:

- Alternate dense and light sections
- Use visual separators (contrasting background or divider lines)
- For dense components (like comparison tables), use zebra striping or clear headings
- In marketing context, convey enough to intrigue, with links to docs for details

### Visual Rest

Use negative space as a design element:

- Blank areas help emphasize callouts and headlines
- White space around components acts as "punctuation" signaling stops and starts
- Err on the side of more whitespace versus less

### Avoid Information Overload

Prioritize what content truly needs to be on the page:

- Consider tabs or accordions for secondary info
- Highlight 3-5 key features, link to "See all features" page
- Keep the default state focused and streamlined

---

## 18. Conversion Optimization

### Prominent and Repeated CTAs

- Include CTA in hero and again in footer at minimum
- Sprinkle secondary CTAs after major content sections
- Use action-oriented language: "Sign Up and Start Building" not "Submit"
- Visually distinguish CTAs with vibrant accent colors

### Sticky Headers & Persistent CTAs

Implement a sticky navigation bar with a condensed sign-up button:

```tsx
// Sticky header with CTA
<header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
  <nav className="mx-auto max-w-7xl px-4 sm:px-8 h-16 flex items-center justify-between">
    <Logo />
    <div className="flex items-center gap-6">
      <NavLinks />
      <Button variant="primary">Sign Up</Button>
    </div>
  </nav>
</header>
```

### Forms and Demos

Optimize forms for ease:

- Keep forms as short as possible (just email for newsletter)
- Form inputs should be at least 44px height for easy tapping
- Include privacy reassurance ("No spam, unsubscribe anytime")
- Offer alternatives ("Watch a 2-min demo video")

### Trust and Assurance

Weave trust signals near CTAs:

- "No credit card required"
- "Free forever for open-source projects"
- Security badges (SOC2, GDPR compliant)
- Testimonials right above final CTA

---

## 19. Developer-Focused UI Language

### Conversational, Technical Tone

Write copy that speaks to developers in a relatable way:

- Avoid overly marketing-speak or grandiose promises
- Use straightforward, conversational tone â€“ even witty if it fits
- Focus on use cases and outcomes: "Save hours debugging" or "Deploy with one command"
- Don't shy away from technical terms if your audience knows them
- Keep sentences shorter and punchy

**Example transformation:**
- âŒ "Our solution provides automated performance optimizations which result in faster load times for your application"
- âœ… "Automated perf tweaks â€“ for sub-second load times"

### Microcopy and Humor

Pay attention to small bits of text:

- Instead of "Enter email," try "you@example.com (we hate spam too)"
- Error messages: "Oops, something went wrong â€“ even the best of us ship bugs ðŸ›"
- Keep any humor inclusive and not too obscure
- Show empathy for frustrations and joys of coding

### Code-Like Typography

Incorporate code style elements:

- Use monospaced font for technical terms or file names inline
- Show actual code examples front and center
- Use syntax highlighting that matches your site theme
- Include icons familiar to developers: command line prompts, angle brackets, folder/file icons

### Keyboard and CLI Affordances

Include keyboard shortcut hints or CLI commands:

```tsx
// Download button with keyboard hint
<button className="...">
  Download now
  <kbd className="ml-2 text-xs bg-muted px-1.5 py-0.5 font-mono">D</kbd>
</button>

// Copyable CLI command
<div className="flex items-center gap-2 bg-muted p-3 font-mono text-sm">
  <code>curl -fsSL https://augmentcode.com/install.sh | bash</code>
  <button className="text-muted-foreground hover:text-foreground">
    <Copy className="size-4" />
  </button>
</div>
```

---

## 20. Responsiveness

### Mobile-First Design

Build layouts mobile-first and enhance for larger screens:

- Start with single-column layout by default
- Use breakpoints to introduce side-by-side elements for `md` and `lg`
- Test early by toggling browser's mobile view or using actual devices

### Adaptive Layouts

Components that need to shift format:

```tsx
// Hero: side-by-side on desktop, stacked on mobile
<div className="flex flex-col md:flex-row md:items-center gap-8">
  <div className="md:w-1/2">{/* Text content */}</div>
  <div className="md:w-1/2">{/* Image */}</div>
</div>

// Grid: 1 col mobile, 2 tablet, 3 desktop
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Readable on All Devices

- 16px minimum font on mobile, consider slightly larger (18px)
- Headings may need to scale down to avoid overflow
- Maintain sufficient tap targets: 44px height minimum for buttons
- Adequate spacing between tappable elements

### Testing

- Use responsive design testing tools
- Test on real mobile devices
- Check phones, tablets, and very large monitors
- Ensure no content gets cut off on narrow screens

---

## 21. Performance UX

### Fast Load Times

Developer audiences appreciate fast, snappy experiences:

- Use Next.js Static Generation for landing pages
- Tailwind CSS JIT purges unused CSS, keeping payload small
- Split code logically â€“ dynamic import heavy components
- Aim for < 100KB gzipped bundle for main page

### Optimize Images and Media

- Use Next.js `<Image>` for automatic optimization
- Always specify width/height for images
- Compress hero backgrounds or use SVG illustrations
- Consider CSS effects instead of images where possible

### Smooth Scrolling and Animations

- Use CSS transform and opacity (GPU-accelerated), not layout properties
- Respect `prefers-reduced-motion` media query
- Animations should have purpose, not just decoration

### Instant Interaction Feedback

- Use smooth scroll for anchor navigation
- Immediate visual feedback for button clicks
- Loading states for operations > 300ms
- Show spinner or "Signing upâ€¦" text

### Next.js Performance Techniques

```tsx
// Lazy load heavy components
const HeavyChart = dynamic(() => import('./Chart'), {
  loading: () => <Skeleton className="h-64" />,
  ssr: false,
})

// Defer third-party scripts
<Script
  src="https://analytics.example.com/script.js"
  strategy="lazyOnload"
/>
```

### Perceived Performance

- Use Next.js prefetching for linked pages
- Show skeleton UI instead of blank areas
- Lazy load below-the-fold images with `loading="lazy"`
- Host on CDN (Vercel, Netlify) for global distribution

### Performance Targets

- **LCP (Largest Contentful Paint)**: < 1.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

Monitor continuously with Lighthouse CI or WebPageTest. Performance can regress as features pile on â€“ guard it closely.

---

*Last updated: January 2025*

