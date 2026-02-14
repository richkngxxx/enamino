# Agent Instructions for Enamino Project

## Project Overview
- **Name**: Enamino Eco-Village Website
- **Framework**: React + Vite
- **Hosting**: Vercel (GitHub-connected)
- **URL**: https://www.enamino.fr
- **GitHub**: https://github.com/richkngxxx/enamino ⭐ **CORRECT REPO**

---

## Deployment Process (CRITICAL - READ THIS!)

### ⚠️ COMMON MISTAKES TO AVOID

| Mistake | Why It Fails |
|---------|-------------|
| `git push origin main` | Wrong remote! `origin` = Gaston-Valentini/enamino (not connected to Vercel) |
| Using `routes` in vercel.json | Deprecated syntax, use `rewrites` instead |
| Committing Vercel tokens | GitHub push protection blocks the push |
| Asking user for tokens | User uses GitHub OAuth, not API tokens |

### ✅ CORRECT DEPLOYMENT

**ALWAYS push to `rich` remote:**
```bash
git add <changed-files>
git commit -m "Your commit message"
git push rich main          # ✅ CORRECT - richkngxxx/enamino
# NOT: git push origin main # ❌ WRONG - Gaston-Valentini/enamino
```

**Verify your remote:**
```bash
git remote -v
# Should show:
# rich  https://github.com/richkngxxx/enamino.git (push)  ✅
# origin  git@github.com:Gaston-Valentini/enamino.git    ❌ Don't use this
```

### How Deployment Works
1. Push to `rich/main` (richkngxxx/enamino)
2. Vercel auto-deploys from that repo
3. Check status: https://vercel.com/dashboard

---

## Quick Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Deployment
```bash
# ✅ CORRECT - Always use 'rich' remote
git push rich main

# Check deployment
npx vercel           # Opens browser for GitHub login
# Or: open https://vercel.com/dashboard
```

---

## Project Configuration

### Git Remotes
```
origin  git@github.com:Gaston-Valentini/enamino.git  (DON'T USE)
rich    https://github.com/richkngxxx/enamino.git   (USE THIS)
```

### Vercel Setup
- **Project ID**: `prj_XXtr6xcMCJkUp7kzdQ8EHnnPJ6al`
- **Org ID**: `team_dzz4qhSmabaIMNENSrhnSjBF`
- **Connected to**: `richkngxxx/enamino`

### SPA Routing Configuration

**File**: `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/((?!api|assets|icons|manifest\\.json|sw\\.js).*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**⚠️ IMPORTANT**: Use `rewrites` (modern), NOT `routes` (deprecated). The `routes` syntax causes build failures.

---

## Environment Variables

**File**: `.env` (gitignored - DO NOT COMMIT)

```env
# Gmail SMTP for contact form
SMTP_USER=enamino@gmail.com
SMTP_PASS=your-app-password-here
RECIPIENT_EMAIL=enamino@gmail.com
```

**⚠️ NEVER add Vercel tokens here** - GitHub push protection will block the push.

---

## Troubleshooting

### "GH013: Repository rule violations" error
**Cause**: You committed a secret (token)  
**Fix**: Remove token from commit, use `git commit --amend` or `git reset`

### 404 errors on direct route access (/contact, etc.)
**Cause**: Wrong vercel.json syntax  
**Fix**: Use `rewrites` array, not deprecated `routes`  
**Deploy**: `git push rich main`

### "Everything up-to-date" but no deployment
**Cause**: Pushed to wrong remote (`origin` instead of `rich`)  
**Fix**: `git push rich main`

### Build failures on Vercel
```bash
# Test locally first
npm run build

# If it works locally but fails on Vercel, check:
# 1. vercel.json syntax (use rewrites, not routes)
# 2. All dependencies in package.json
```

---

## Project Structure
```
/
├── src/                    # React source
│   ├── App.jsx            # Main app with routes
│   ├── views/             # Page views
│   ├── sections/          # Page sections
│   └── components/        # Reusable components
├── api/                   # Serverless API functions
├── public/                # Static assets
├── index.html             # Entry HTML
├── vercel.json            # Vercel config ⭐ Use 'rewrites' syntax
├── vite.config.js         # Vite build config
└── .env                   # Environment variables (gitignored)
```

## Routes
- `/` - Home/Village
- `/safaris` - Safaris
- `/gabon` - Gabon
- `/travelers` - Travelers guide
- `/contact` - Contact form

All handled by React Router (client-side). The `vercel.json` rewrite rules ensure direct access works.

---

## Summary for Future Agents

| Task | Command |
|------|---------|
| Start dev | `npm run dev` |
| **Deploy** | `git push rich main` ⭐ |
| Check status | `npx vercel` or https://vercel.com/dashboard |

### ⭐ Golden Rules
1. **Always push to `rich` remote** (richkngxxx/enamino)
2. **Use `rewrites`** in vercel.json, never `routes`
3. **Never commit tokens** - GitHub will block the push
4. **User uses GitHub OAuth** - no API tokens needed
