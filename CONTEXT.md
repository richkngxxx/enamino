# Enamino — Universal Agent Context

> Any agent working on this project reads this file first.
> Model-agnostic. Works with Claude, OpenCode, Codex, Harness, or any LLM.

---

## What Enamino Is

Enamino is a multilingual website for an eco-village in Gabon. It showcases the village, safari experiences, Gabon as a destination, and practical traveler info. Visitors can contact the team via a built-in form.

**One-liner:** "Enamino Eco-Village — nature tourism in Gabon, built for three languages."

Stack: React 18 + Vite 4 | React Router 6 | i18next (FR/EN/ES) | Leaflet maps | Vercel (serverless + static)

**Live URL:** https://www.enamino.fr

---

## Deployment (READ THIS FIRST)

### Two remotes — only one deploys

| Remote | Repo | Use? |
|--------|------|------|
| `rich` | `richkngxxx/enamino` | YES — connected to Vercel, auto-deploys |
| `origin` | `Gaston-Valentini/enamino` | NO — original fork, not connected to anything |

**Verify your remotes:**
```bash
git remote -v
# Should show:
# rich  https://github.com/richkngxxx/enamino.git (push)  ← USE THIS
# origin  git@github.com:Gaston-Valentini/enamino.git      ← IGNORE
```

### How to deploy

```bash
# 1. Test build locally first
npm run build

# 2. Stage and commit
git add <changed-files>
git commit -m "your commit message"

# 3. Push to the CORRECT remote
git push rich main          # ← CORRECT — triggers Vercel auto-deploy
# NOT: git push origin main # ← WRONG — does nothing
```

Vercel auto-deploys on every push to `richkngxxx/enamino` main branch. No manual deploy step needed.

### Vercel Configuration

| Setting | Value |
|---------|-------|
| **Project ID** | `prj_XXtr6xcMCJkUp7kzdQ8EHnnPJ6al` |
| **Org ID** | `team_dzz4qhSmabaIMNENSrhnSjBF` |
| **Connected repo** | `richkngxxx/enamino` |
| **Framework** | Vite |
| **Build command** | `vite build` |
| **Output directory** | `dist` |
| **Dashboard** | https://vercel.com/dashboard |

### SPA Routing (vercel.json)

The `vercel.json` file handles client-side routing so direct URL access works (e.g. `enamino.fr/contact`):

```json
{
  "rewrites": [
    {
      "source": "/((?!api|assets|icons|manifest\\.json|sw\\.js).*)",
      "destination": "/index.html"
    }
  ]
}
```

**Use `rewrites` (modern syntax). NEVER use `routes` (deprecated) — it causes build failures.**

### Never commit secrets
GitHub push protection will block pushes containing tokens or passwords. The `.env` file is gitignored — keep it that way. User authenticates with GitHub OAuth, not API tokens.

### Common deployment mistakes

| Mistake | Why it fails |
|---------|-------------|
| `git push origin main` | Wrong remote — not connected to Vercel |
| Using `routes` in vercel.json | Deprecated syntax, causes build failures |
| Committing Vercel tokens | GitHub push protection blocks the push |
| Skipping `npm run build` locally | Vercel build failures can be silent |

---

## Architecture Overview

```
Frontend (React 18 + Vite 4)
  src/views/          — page components (VillageView, SafarisView, GabonView, TravelersView, ContactView)
  src/sections/       — page sections (Header, Map, Safaris, Biodiversity, Form, etc.)
  src/components/     — reusable UI (Navbar, Footer, Carousel, LazyImage, ScrollToTop)
  src/locales/        — i18n translations (en/, es/, fr/)
  src/App.jsx         — router config, all routes defined here

Serverless API (Vercel Functions)
  api/send-email.js   — contact form handler (Gmail SMTP via nodemailer)

Static Assets
  public/             — icons, manifest.json, robots.txt, sitemap.xml, service worker
```

---

## Routes

| Path | View | Description |
|------|------|-------------|
| `/` | VillageView | Homepage — the eco-village |
| `/safaris` | SafarisView | Safari experiences |
| `/gabon` | GabonView | Gabon as a destination |
| `/travelers` | TravelersView | Practical travel guide |
| `/contact` | ContactView | Contact form (sends email via API) |

All client-side routes. `vercel.json` rewrites handle direct URL access.

---

## i18n (Internationalization)

- Three languages: **French** (default), **English**, **Spanish**
- Translation files in `src/locales/{fr,en,es}/`
- Uses `react-i18next` with browser language detection
- When adding new text, add the key to ALL three locale files

---

## Critical Rules (Non-Negotiable)

1. **Push to `rich` remote only.** `git push rich main` — never `origin`.
2. **Never commit `.env` or tokens.** GitHub will block the push.
3. **Use `rewrites` in vercel.json**, never deprecated `routes` syntax.
4. **Add translations to all 3 locales** when adding any user-facing text.
5. **Test build locally** (`npm run build`) before pushing — Vercel build failures are silent.

---

## Environment Variables

Set in Vercel dashboard AND in local `.env` (gitignored):

```
SMTP_USER=enamino@gmail.com
SMTP_PASS=<gmail-app-password>
RECIPIENT_EMAIL=enamino@gmail.com
```

Used only by `api/send-email.js` for the contact form.

---

## Commands

```bash
npm run dev              # Dev server: http://localhost:5173
npm run build            # Production build → dist/
npm run preview          # Preview production build locally
git push rich main       # Deploy to Vercel (auto)
```

---

## File Map

### Files you CAN freely modify
- `src/views/*/` — page view components
- `src/sections/*/` — page section components
- `src/components/*/` — reusable UI components
- `src/locales/*/` — translation JSON files
- `public/` — static assets (icons, manifest, sitemap)

### Files to edit CAREFULLY
- `src/App.jsx` — router config, adding routes
- `api/send-email.js` — serverless email handler
- `vercel.json` — deployment config (use `rewrites`, never `routes`)
- `vite.config.js` — build configuration

### Files to NEVER modify without asking
- `.env` — secrets
- `package.json` — dependency changes need approval

---

## Key Gotchas

- `vercel.json` must use `rewrites`, not `routes` — deprecated syntax causes build failures
- The `rich` remote URL contains a GitHub OAuth token — don't log or share it
- Contact form requires `SMTP_PASS` env var set in Vercel dashboard to work in production
- Leaflet CSS must be imported where maps are used or tiles won't render
- `ScrollToTop` component resets scroll position on route change — don't remove it

---

## Troubleshooting

| Problem | Cause | Fix |
|---------|-------|-----|
| Push blocked by GitHub | Secret in commit | Remove token, amend commit |
| 404 on direct URL access | Wrong vercel.json syntax | Use `rewrites`, push to `rich` |
| "Everything up-to-date" | Pushed to `origin` | Use `git push rich main` |
| Contact form fails in prod | Missing env vars | Set SMTP_PASS in Vercel dashboard |
| Build fails on Vercel | Test locally first | `npm run build` before pushing |

---

## Summary for Agents

| Task | Command |
|------|---------|
| Start dev | `npm run dev` |
| Build | `npm run build` |
| **Deploy** | `git push rich main` |
| Check live | https://www.enamino.fr |
