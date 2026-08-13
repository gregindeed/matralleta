# Matralleta Deployment Guide

## Project Overview
- **Name**: Matralleta Landing Page
- **Type**: Next.js static site (optimized for Cloudflare Pages)
- **GitHub Repository**: https://github.com/gregindeed/matralleta
- **Deployment Target**: Cloudflare Pages
- **Production URL**: matralleta.pages.dev (or matralleta.com with DNS setup)

## Current Status
✅ **Code built and pushed to GitHub**
- Repository: https://github.com/gregindeed/matralleta (main branch)
- Build verified: Next.js compiles successfully
- Design validated: ChatGPT review ~88/100 (ship-ready MVP)

## Deployment Steps

### Step 1: Connect GitHub to Cloudflare Pages (One-time, Browser Required)
1. Open: https://dash.cloudflare.com/c60d73bd6bdd2bfa6aba42a117a4b69e/workers-and-pages
2. Click **Create Application → Pages → Connect to Git**
3. Authorize the Cloudflare GitHub App (if prompted - first time only)
4. Search for and select: **gregindeed/matralleta**
5. Fill in:
   - **Project name**: `matralleta`
   - **Production branch**: `main`
   - **Framework preset**: **Next.js** (critical)
   - **Build command**: `npm run build`
   - **Output directory**: `.next`
   - **Node.js version** (optional): `20` (if needed)
6. Click **Deploy**

### Step 2: Auto-Deployment (Happens Automatically After Step 1)
- Every `git push` to `main` automatically triggers a Cloudflare Pages build
- Build time: ~2-3 minutes
- No further action needed

### Step 3 (Optional): Connect Domain
To use matralleta.com instead of matralleta.pages.dev:
1. Go to Cloudflare Pages project settings
2. Click **Custom domains**
3. Add `matralleta.com`
4. Follow the DNS setup instructions

## Build Locally (for testing)
```bash
cd ~/Projects/core/matralleta
npm install
npm run build
npm run dev  # local preview
```

## Project Structure
```
matralleta/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Tailwind imports
│   └── components/
│       ├── Hero.tsx          # Hero section
│       ├── TruckJourney.tsx   # Timeline/journey
│       ├── MerchPreview.tsx   # Product grid
│       ├── EmailSignup.tsx    # Email form
│       └── Footer.tsx         # Footer
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── wrangler.toml
```

## Design Notes
- **Color Palette**: Dark (zinc-950/900) + warm amber (#d97706)
- **Typography**: Inter font, mobile-first responsive
- **Responsive Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Dark Mode**: Default enabled, toggle in hero section top-right

## Future Enhancements
- [ ] Replace placeholder truck image with real photography
- [ ] Add real social media links (Instagram, TikTok, Twitter)
- [ ] Connect email signup to backend service (Resend, Mailchimp, etc.)
- [ ] Add favicon and OG image
- [ ] Set up analytics tracking
- [ ] Add real merch product links

## Design Validation
- **ChatGPT Review Score**: ~88/100
- **Status**: Ship-ready MVP
- **Key Strengths**: Strong storytelling, cohesive brand aesthetic, mobile responsiveness
- **Minor Improvements**: Add hover animations, loading states, real imagery

## Quick Commands
```bash
# Push changes to GitHub (auto-deploys to Pages)
git add .
git commit -m "Update message"
git push origin main

# Build locally
npm run build

# Preview production build
npm run dev
```

## Support
- GitHub Issues: https://github.com/gregindeed/matralleta/issues
- Cloudflare Pages Dashboard: https://dash.cloudflare.com/c60d73bd6bdd2bfa6aba42a117a4b69e/workers-and-pages
