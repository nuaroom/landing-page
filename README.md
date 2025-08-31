Heurica Landing — a modern, animated landing page for the Heurica UX Designer AI agent.

### Tech stack
- **Next.js 15** (App Router, TypeScript)
- **React 19**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Framer Motion** for tasteful animations
- **Turbopack** for fast dev/build

## Getting started

Prerequisites:
- **Node.js 18.18+ or 20+**
- npm (or your preferred package manager)

Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

Build for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

Lint the project:
```bash
npm run lint
```

## Project structure
```text
heurica-langindpage/
  app/
    globals.css        # Tailwind v4 + custom utilities and design tokens
    layout.tsx         # Root layout (App Router)
    page.tsx           # Landing page composition
  public/              # Static assets (logos, svgs, images)
  src/
    components/        # Reusable UI sections (Hero, Header, etc.)
  postcss.config.mjs   # Tailwind v4 via @tailwindcss/postcss
  next.config.ts       # Next.js config
  tsconfig.json        # TypeScript config
  eslint.config.mjs    # ESLint config
  package.json         # Scripts and dependencies
```

## Key files
- `app/globals.css`: Tailwind v4 setup using `@theme` tokens, utility classes, and animations.
- `src/components/Hero.tsx`: Example of Framer Motion animations and UI patterns.
- `app/page.tsx`: Page assembly using the components in `src/components`.

## Styling
- Tailwind v4 is enabled through PostCSS (`postcss.config.mjs`).
- Global tokens and utilities live in `app/globals.css` (e.g., `--background`, `--foreground`, `.container-page`, `.btn`, gradients, and keyframes).

## Deployment
The project is optimized for Vercel:
1) Push your repository to GitHub/GitLab/Bitbucket.
2) Import the repo in Vercel and select the Next.js framework preset.
3) Build/Output settings can remain defaults. No special env vars are required for a static landing.

Alternatively, build and self-host:
```bash
npm run build
npm start
```

## Troubleshooting
- Ensure you are on Node 18.18+ or 20+.
- If styles appear missing, verify PostCSS is loading `@tailwindcss/postcss` and that `app/globals.css` is imported by `app/layout.tsx`.
- Clear `.next/` if hot reload behaves oddly: `rm -rf .next && npm run dev`.

## Contributing
Issues and PRs welcome. For larger changes, open an issue to discuss the approach first.

## License
No license specified. Add a `LICENSE` file if you plan to open-source.
