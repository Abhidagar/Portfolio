
# Abhishek Dagar — Portfolio

A modern, animated single-page portfolio website built with React + Vite, showcasing professional experience, technical skills, projects, and contact information.

## 🎯 Project Understanding

This is a **personal portfolio website** that serves as a digital resume and project showcase for Abhishek Dagar (Associate Software Engineer at Nagarro). The site features:

- **Hero Landing** — Animated introduction with rotating job titles, profile photo, social links, and resume download
- **About Section** — Professional background and bio
- **Skills Visualization** — Interactive display of technical competencies (Snowflake, Airflow, Kubernetes, AWS, Python, React, etc.)
- **Experience Timeline** — Work history and achievements
- **Projects Gallery** — Portfolio of notable projects with descriptions
- **Contact Form** — Direct communication via email integration (EmailJS)
- **Responsive Design** — Mobile-first, works across all devices

### Architecture & Flow

```text
User visits site → LoadingScreen animation → Hero section
                                           ↓
                  Navigation bar (sticky) allows jumping to sections
                                           ↓
              ParticleBackground + ScrollProgress run throughout
                                           ↓
          Main sections render: About → Skills → Experience → Projects → Contact
                                           ↓
                                      Footer
```

**Key Technical Concepts:**

- **Component-based architecture** — Each section is a standalone React component
- **Framer Motion** — Powers animations (fade-ins, transitions, floating elements)
- **Radix UI + shadcn/ui** — Provides accessible, customizable UI primitives (buttons, cards, forms)
- **TailwindCSS** — Utility-first styling for rapid UI development
- **Single-page app (SPA)** — No page reloads; smooth scrolling between sections
- **Static deployment ready** — Vite builds optimized HTML/CSS/JS bundle for any static host

### Data Flow

- **Static content** — All portfolio data (projects, experience, skills) is hard-coded in component files
- **Contact form** — Uses EmailJS service to send messages without a backend server
- **Assets** — Profile photo and resume PDF served from `/public` folder

### Component Map (What Each File Does)

| Component | Purpose |
|-----------|---------|
| `App.jsx` | Main container; orchestrates all sections, loading state, particle background |
| `LoadingScreen.jsx` | Initial animated splash screen shown while app loads |
| `Navigation.jsx` | Sticky header with links to sections (smooth scroll) |
| `Hero.jsx` | Landing section with profile image, animated role titles, CTA buttons, social links |
| `About.jsx` | Professional bio and background information |
| `SkillsVisualization.jsx` | Interactive chart/display of technical skills |
| `Experience.jsx` | Timeline of work experience and achievements |
| `Projects.jsx` | Gallery of portfolio projects with descriptions/links |
| `Contact.jsx` | Contact form integrated with EmailJS for direct messaging |
| `Footer.jsx` | Bottom section with copyright and additional links |
| `ParticleBackground.jsx` | Animated particle effect that runs across the entire page |
| `ScrollProgress.jsx` | Progress bar showing scroll position |
| `ui/` folder | Reusable UI components (buttons, cards, forms) built with Radix UI |

## Tech stack

**Core Technologies:**

- **React 19** — JavaScript library for building the user interface with reusable components
- **Vite** — Fast build tool and development server (replaces older tools like webpack)
- **TailwindCSS** — Utility-first CSS framework for styling (no custom CSS files needed)

**Animation & Interactivity:**

- **Framer Motion** — Smooth animations for page transitions, fade-ins, and interactive elements
- **Radix UI** — Accessible component primitives (dialogs, dropdowns, tooltips)
- **Lucide React** — Icon library for clean, consistent icons

**Forms & Communication:**

- **EmailJS** — Send contact form messages directly to email without a backend server
- **React Hook Form** — Form state management and validation

**Other Tools:**

- **React Router DOM** — Client-side routing (if multi-page navigation is added later)
- **Recharts** — Data visualization library for skills charts
- **date-fns** — Date formatting utilities

**Why these choices?**

- React = Industry standard for building dynamic UIs
- Vite = 10x faster than traditional bundlers; instant hot reload during development
- TailwindCSS = Rapid prototyping; no context-switching between CSS files
- Framer Motion = Professional-grade animations with minimal code
- Static deployment = No server needed; deploy anywhere (Vercel, Netlify, GitHub Pages)

## Quick start

Prerequisite: Node.js + a package manager. This project uses pnpm in development but npm or yarn will also work.

1. Install dependencies

   ```bash
   pnpm install
   # or
   npm install
   ```

1. Run dev server

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

1. Build for production

   ```bash
   pnpm build
   # or
   npm run build
   ```

1. Preview the production build locally

   ```bash
   pnpm preview
   # or
   npm run preview
   ```

## Project structure (important files)

- `index.html` — app shell and meta tags
- `src/main.jsx` — React entry point
- `src/App.jsx` — main layout and sections
- `src/components/` — page components (Hero, Navigation, About, Experience, Projects, Contact, Footer, etc.)
- `public/` — static assets (resume PDF, profile photo, favicon)
- `package.json` — scripts and dependencies

## Features

- Responsive single-page layout with smooth scrolling
- Animated hero section with profile image and role rotation
- Sections for About, Skills visualization, Experience, Projects and Contact
- Resume download (PDF) available in `public/`
- Simple contact link / mailto and social links

## Deployment

This site is ready for static deployment. Recommended options:

- Vercel: connect the repo and deploy (Vite projects work out-of-the-box)
- Netlify / static host: build with `pnpm build` and publish the `dist/` folder

There is a `vercel.json` present which can be used if you deploy on Vercel.
