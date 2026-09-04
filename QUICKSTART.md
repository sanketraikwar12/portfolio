# Quick Start Configuration Guide

## Step-by-Step Setup

### 1. Initial Setup (2 minutes)

```bash
# Navigate to project
cd developerFolio-master

# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev
```

Visit `http://localhost:3000` to see the default portfolio.

### 2. Personalize Your Portfolio (10 minutes)

Edit `data/portfolio.ts` and update these key sections:

#### Basic Info
```typescript
name: "Your Full Name",
title: "Your Professional Title",
headline: "Your tagline/headline",
description: "A short professional bio for SEO",
location: "Your Location",
```

#### About Section
Update the `about` array with your story:
```typescript
about: [
  "First paragraph about yourself",
  "Your key expertise",
  "Your professional philosophy"
],
```

#### Skills
Add your skill categories:
```typescript
skills: [
  {
    title: "Frontend",
    summary: "Your frontend expertise...",
    items: ["React.js", "Next.js", "TypeScript", /* ... */]
  },
  // ... more categories
],
```

#### Projects
Add 3-4 of your best projects:
```typescript
projects: [
  {
    name: "Project Name",
    summary: "What does this project do",
    tech: ["React", "Node.js", "MongoDB"],
    features: ["Feature 1", "Feature 2"],
    accent: "from-cyan-500/30 via-sky-500/10 to-transparent"
  }
],
```

#### Certifications
List your certifications:
```typescript
certifications: [
  "AWS Cloud Practitioner",
  "Your Other Certification",
  // ...
],
```

#### Contact Information
Add your links:
```typescript
contact: {
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resume: "/resume.pdf",
  githubUsername: "yourusername",  // For GitHub stats
  location: "Your City, Country"
},
```

### 3. Add Your Resume (5 minutes)

1. Create a PDF of your resume
2. Place it in `public/resume.pdf`
3. The "Download Resume" button will now work

### 4. Test Locally

```bash
# The dev server should auto-reload
# Test on different devices:

# Desktop browser
# Open http://localhost:3000

# Mobile device (same network)
# Find your machine's IP: ipconfig getifaddr en0 (Mac) or ipconfig (Windows)
# Visit http://YOUR_IP:3000 on phone
```

### 5. Build for Production

```bash
# Type check for errors
npm run typecheck

# Build for production
npm run build

# Test production build locally
npm start
```

### 6. Deploy

#### Option A: Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Add environment variable: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
5. Click "Deploy"

#### Option B: Netlify

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `npm run build --legacy-peer-deps`
6. Publish directory: `.next`
7. Deploy

#### Option C: Your Own Server

```bash
# On your server:
git clone your-repo
cd your-repo
npm install --legacy-peer-deps
npm run build
npm start
# Server runs on port 3000
```

## Customization Tips

### Change Color Scheme

Edit `app/globals.css`:

```css
:root {
  --primary: 198 93% 60%;      /* Cyan */
  --accent: 222 84% 56%;       /* Indigo */
}

.dark {
  --primary: 191 91% 54%;
  --accent: 222 84% 62%;
}
```

### Modify Section Titles

Edit `components/site/home-page.tsx`:

```typescript
<SectionHeading
  eyebrow="Skills"
  title="Your custom title"
  description="Your custom description"
/>
```

### Add More Projects

Simply add to the `projects` array in `data/portfolio.ts`. The page will automatically display them.

### Change Fonts

Add custom fonts to `src/assets/fonts/` and update `app/layout.tsx`:

```typescript
const customFont = localFont({
  src: "../src/assets/fonts/YourFont.ttf",
  variable: "--font-custom"
});
```

## Testing Checklist

- [ ] All text is personalized
- [ ] Resume link works
- [ ] Social links (GitHub, LinkedIn) work
- [ ] Mobile design looks good (test on phone)
- [ ] Dark mode toggle works
- [ ] All animations are smooth
- [ ] No console errors (F12)
- [ ] Loading screen displays
- [ ] Build completes without errors

## SEO & Social Sharing

After deploying, test social sharing:

1. **LinkedIn** - Share your portfolio URL
2. **Twitter** - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
3. **Facebook** - Use [Sharing Debugger](https://developers.facebook.com/tools/debug)

Your custom Open Graph image will be generated automatically!

## Environment Variables

The `.env.local` file already has:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Update `NEXT_PUBLIC_SITE_URL` to your production domain before deploying.

## Troubleshooting

### Dependencies won't install
```bash
npm install --legacy-peer-deps
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

### Build fails
```bash
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### Dark mode not saving
Make sure browser allows localStorage.

### GitHub stats not showing
Check that `githubUsername` in `data/portfolio.ts` is set correctly (no spaces, exact username).

## Next: Analytics & Growth

After deployment, consider adding:

1. **Google Analytics** - Track visitors
2. **Google Search Console** - Monitor SEO
3. **GitHub Actions** - Automate deployments
4. **Blog Section** - Share your knowledge

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Deployment Guides](./DEPLOYMENT.md)

---

**You're all set! Your portfolio is ready to share with the world. 🚀**
