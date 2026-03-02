# Zak Ream | Developer Portfolio

A modern, single-page portfolio and resume site built with React, TypeScript, Vite, and Tailwind CSS.

This project presents professional experience, technical skills, and education in a clean, motion-enhanced interface designed for recruiters, hiring managers, and engineering teams.

## What This Site Includes

- Hero section with summary, social links, and clickable contact details
- Copy-on-click contact actions (address, phone, email) with toast feedback
- Skills section grouped by domain (frontend, state, architecture, testing, etc.)
- Professional experience timeline with role highlights and achievements
- Education section and footer with profile links
- Responsive layout for desktop and mobile

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (`motion/react`) for animation
- Lucide React icons

## Local Development

Prerequisites:

- Node.js 18+
- npm

Install and run:

```bash
npm install
npm run dev
```

Default dev URL: `http://localhost:3000`

## Build and Preview

```bash
npm run build
npm run preview
```

## Type Checking

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    Hero.tsx
    Skills.tsx
    Experience.tsx
    Education.tsx
    Footer.tsx
  data/
    resume.ts
  App.tsx
  main.tsx
```

## Customizing Content

Update resume content in:

- `src/data/resume.ts`

This includes personal info, summary, links, skills, experience entries, and education details.
