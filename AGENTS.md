# Agent Instructions for Enamino Project

## Project Overview
- **Name**: Enamino Eco-Village Website
- **Framework**: React + Vite
- **Hosting**: Vercel (GitHub-connected)
- **URL**: https://www.enamino.fr
- **GitHub**: https://github.com/Gaston-Valentini/enamino

---

## Deployment Process (IMPORTANT!)

### How Deployment Works
This project uses **GitHub → Vercel auto-deployment**:
1. User logs into Vercel via GitHub OAuth (no API token)
2. When you push to `main` branch, Vercel auto-deploys
3. No CLI token needed!

### To Deploy

**Simply push to GitHub:**
```bash
git add <changed-files>
git commit -m "Your commit message"
git push origin main
```

**Then check deployment status:**
- Vercel Dashboard: https://vercel.com/dashboard
- Or run: `npx vercel` (will open browser to log in via GitHub)

### ⚠️ DO NOT Ask User For Tokens
- User uses **GitHub OAuth**, not API tokens
- There's no `VERCEL_TOKEN` to provide
- Previous attempts to use tokens failed because user doesn't use them

---

## Quick Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Check Deployment Status
```bash
# Opens browser, user logs in with GitHub
npx vercel

# Or check dashboard directly
open https://vercel.com/dashboard
```

---

## Project Configuration

### Vercel Setup (Already Configured)
- **Project ID**: `prj_XXtr6xcMCJkUp7kzdQ8EHnnPJ6al`
- **Org ID**: `team_dzz4qhSmabaIMNENSrhnSjBF`
- **Linked**: Yes (`.vercel/project.json` exists)

### SPA Routing (Already Fixed)
`vercel.json` contains rewrite rules so client-side routes work:
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

This allows direct access to `/contact`, `/safaris`, etc. Uses modern `rewrites` syntax (not deprecated `routes`).

---

## Environment Variables

Located in `.env` (gitignored):

```env
# Gmail SMTP for contact form
SMTP_USER=enamino@gmail.com
SMTP_PASS=your-app-password-here
RECIPIENT_EMAIL=enamino@gmail.com

# Note: No Vercel token - uses GitHub OAuth
```

---

## Troubleshooting

### 404 errors on direct route access
**Cause**: Missing SPA routing config  
**Fix**: Ensure `vercel.json` has the routes config (see above)  
**Deploy**: Push to GitHub

### "Not authorized" errors
User needs to log in via browser:
```bash
npx vercel
# Opens browser → Click "Continue with GitHub"
```

### Build failures
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
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
├── vercel.json            # Vercel config (SPA routing)
├── vite.config.js         # Vite build config
└── .env                   # Environment variables
```

## Routes
- `/` - Home/Village
- `/safaris` - Safaris
- `/gabon` - Gabon
- `/travelers` - Travelers guide
- `/contact` - Contact form

All handled by React Router (client-side).

---

## Summary for Future Agents

| Task | Command |
|------|---------|
| Start dev | `npm run dev` |
| **Deploy** | `git push origin main` |
| Check status | `npx vercel` or dashboard |

**Remember**: Push to GitHub = Deploy to Vercel. No tokens needed!
