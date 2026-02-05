# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website for an Associate Product Manager, built as a single-page React application with smooth scroll-based navigation.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build (outputs to `dist/`)
- `npm run lint` — Run ESLint
- `npm run preview` — Preview the production build locally

## Tech Stack

- **React 19** with JSX (no TypeScript)
- **Vite 7** as build tool with `@vitejs/plugin-react` (Babel/Fast Refresh)
- **Tailwind CSS 4** via `@tailwindcss/vite` plugin
- **Framer Motion** for all animations
- **React Scroll** for smooth anchor navigation
- **React Icons** for iconography

## Architecture

The app follows a layered structure with clear separation between content, presentation, and animation:

### Data Layer (`src/data/`)
All portfolio content (personal info, skills, experience, education, tools) lives in plain JS files exporting arrays/objects. Components import and render this data — updating content never requires touching components.

### Page Sections (`src/components/`)
Each full-page section (Hero, About, CoreSkills, Experience, Education, ToolsSkills, Contact, Footer) is a standalone component. They are composed linearly in `App.jsx` and linked via section IDs for scroll navigation.

### Reusable UI (`src/ui/`)
Shared primitives: `GlassCard`, `GradientButton`, `ScrollReveal` (viewport-triggered animations), `SectionHeading`, `SectionWrapper`, and `AnimatedBlob` (decorative background element).

### Animation (`src/animations/variants.js`)
Pre-defined Framer Motion variants (fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn, bounceIn) with container stagger effects. Components use `ScrollReveal` or these variants directly for entrance animations.

### Hooks (`src/hooks/useScrollSpy.js`)
Custom hook using IntersectionObserver to detect the active section for navbar highlighting.

## Styling Conventions

- All styling uses Tailwind utility classes — no CSS modules or separate stylesheets
- Custom theme tokens defined in `src/index.css` via `@theme`: primary (#2563eb), secondary (#0f766e), accent (#d97706), dark backgrounds, and font families (Poppins for headings, Inter for body)
- Custom utility classes in `index.css`: `.glass`, `.glass-strong` (glassmorphism), `.gradient-text`, `.gradient-text-warm`, `.animated-gradient`
- Dark theme throughout — background colors use `--color-dark` (#0b1121)
- Responsive breakpoints follow Tailwind defaults (`sm`, `md`, `lg`)

## Key Patterns

- Functional components only, no class components
- No global state management — simple `useState` for local UI state (form inputs, mobile menu toggle)
- Icon mapping: skill/tool icons are stored as string names in data files and mapped to React Icons components in the rendering components
- ESLint flat config ignores unused vars prefixed with uppercase or underscore
