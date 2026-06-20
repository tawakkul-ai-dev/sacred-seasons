# Sacred Seasons

**The Islamic Year, Alive.**

Sacred Seasons is a spiritual almanac for the modern Muslim — not a date converter, but a companion that helps you understand where you are in the Hijri year and what matters right now.

## What it does

- **Today** — Shows the current Hijri date, month, and a live countdown to the next major event
- **What Matters Now** — Month-specific guidance, recommended actions, and reflections that change with the Islamic calendar
- **Year Journey** — An interactive timeline of all twelve Hijri months with year progress
- **Upcoming Events** — Dynamically computed dates for Ashura, Ramadan, Laylat al-Qadr, Eid, Arafah, and more
- **Event Details** — Rich pages with significance, historical context, recommended actions, and references
- **Learn** — Introduction to the Hijri calendar, sacred months, and how to use the app

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [hijri-converter](https://github.com/dalwadani/hijri-converter) — Umm al-Qura calendar for live date computation

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home — composes all sections with live data
│   └── events/[slug]/      # Static event detail pages (SSG + ISR)
├── components/
│   ├── shared/             # Feature components (hero, timeline, events, etc.)
│   └── ui/                 # shadcn/ui primitives
├── lib/
│   ├── hijri.ts            # Hijri/Gregorian conversion and date utilities
│   ├── season.ts           # Dynamic season, events, and year progress
│   └── content/            # Static content (months, events, guidance)
└── types/                  # TypeScript interfaces
```

## How dates work

All Hijri dates are computed at request time (with hourly ISR revalidation) using the **Umm al-Qura** calendar — the official calendar of Saudi Arabia and widely used for Islamic date conversion.

- Today's Hijri date is derived from the current Gregorian date
- Event dates roll forward to the next occurrence if they've already passed this year
- "Days until" counts update automatically
- Month guidance rotates based on the current Hijri month

## Deploy

The easiest path is [Vercel](https://vercel.com/new):

```bash
npm run build
```

Or connect the repo to Vercel for automatic deployments on push.

---

Built with intention.
