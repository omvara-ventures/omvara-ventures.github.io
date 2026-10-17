# Omvara Holdings & Ventures — starter website

React + TypeScript + Vite starter for a parent company website with two distinct divisions:

- **Omvara Automotive** — vehicle sourcing and export enquiries.
- **Port Machinery** — manufacturer-listed forklift and container-handling equipment for sourcing enquiries.
- **Glen Vyra** — premium whisky brand and trade enquiries.

## Why Vite rather than Next.js?

Next.js and Vite are normally alternatives, not layers to run together for one frontend. This starter uses **React + TypeScript + Vite**, because you specifically asked for a Vite development server. It is a client-rendered skeleton with React Router. If you later require Next.js server rendering, server actions or its app router, migrate the project to Next.js rather than adding Next.js on top of Vite.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (normally http://localhost:5173).

Type-check and production build:

```bash
npm run typecheck
npm run build
npm run preview
```

## Routes

- `/` — parent homepage
- `/automotive` — automotive export division
- `/vehicles` — sample vehicle catalogue
- `/port-machinery` — KP forklifts, container reach stackers and empty container handlers
- `/glen-vyra` — whisky brand and proposed releases
- `/about` — parent company
- `/contact` — contact and enquiry routing

## Before going live

1. Replace sample copy and image URLs with approved, accurate assets.
2. Confirm company details, contact details and trading capabilities.
3. Configure verified contact details and connect an enquiry form to a backend/API or trusted form service. The current contact page does not collect or send information.
4. Verify all vehicle inventory, prices, availability, export eligibility and brand affiliations.
5. Confirm whisky provenance, age, cask details, bottle counts and legal compliance before describing any release as available.
6. Add privacy policy, cookie/analytics controls as needed, terms, age gating and responsible alcohol marketing compliance where applicable.
7. Add tests, error handling, server-side validation, spam protection and monitoring before launch.

## Suggested next prompts for your coding assistant

1. "Review this codebase and improve the shared responsive navigation, footer, accessibility and mobile menu without changing the brand structure."
2. "Implement a production-ready automotive quote form with server-side validation, spam protection, consent text and email delivery. Ask me which backend/provider to use before adding credentials."
3. "Build an editable vehicle catalogue with TypeScript types, filters for make/category/condition, vehicle detail routes and an admin-ready data layer. Keep demo inventory clearly marked."
4. "Improve the Glen Vyra pages using only verified facts. Treat all release information as proposed until I provide confirmed specifications. Add an age-appropriate entry experience and trade enquiry form."
5. "Prepare SEO metadata, Open Graph tags, sitemap, robots.txt, accessible image handling and a launch checklist. Do not invent company claims or contact details."

## Structure

```text
src/
  components/
    Footer.tsx
    Header.tsx
    Layout.tsx
    SectionHeading.tsx
  data/
    vehicles.ts
    whiskyReleases.ts
  pages/
    AboutPage.tsx
    AutomotivePage.tsx
    ContactPage.tsx
    GlenVyraPage.tsx
    HomePage.tsx
    VehiclesPage.tsx
  App.tsx
  main.tsx
  styles.css
```
