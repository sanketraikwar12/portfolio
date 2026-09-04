# Sanket Raikwar - Developer Portfolio

A modern, industry-level developer portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone or navigate to project directory
cd developerFolio-master

# Install dependencies (with legacy peer deps due to framer-motion v12 compatibility)
npm install --legacy-peer-deps

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

## 📋 Configuration

### 1. Update Portfolio Data

Edit `data/portfolio.ts` with your information:

```typescript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  headline: "Your headline",
  // ... rest of data
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    resume: "/resume.pdf",  // Place in public/
    githubUsername: "yourusername",
    location: "Your Location"
  }
};
```

### 2. Add Resume

Place your resume PDF in `public/resume.pdf`

### 3. Environment Variables

Create `.env.local`:

```env
# Site URL for production (update before deployment)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start         # Run production build
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript type check
```

## 📁 Project Structure

```
.
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── loading.tsx              # Loading screen
│   ├── template.tsx             # Page transition animations
│   ├── globals.css              # Global styles
│   ├── manifest.ts              # PWA manifest
│   ├── robots.ts                # SEO robots.txt
│   ├── sitemap.ts               # SEO sitemap
│   ├── opengraph-image.tsx      # OG image generation
│   └── twitter-image.tsx        # Twitter card image
├── components/
│   ├── site/                    # Portfolio site components
│   │   ├── home-page.tsx        # Main page component
│   │   ├── header.tsx           # Navigation header
│   │   ├── footer.tsx           # Footer
│   │   ├── hero-visual.tsx      # Hero section animation
│   │   ├── section-heading.tsx  # Reusable section headers
│   │   ├── reveal.tsx           # Scroll reveal animation
│   │   ├── theme-toggle.tsx     # Dark/light theme toggle
│   │   ├── particle-background.tsx # Animated background
│   │   ├── interactive-cursor.tsx # Custom cursor
│   │   └── github-showcase.tsx  # GitHub stats widgets
│   ├── ui/                      # Shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── providers/               # Context providers
│       └── theme-provider.tsx   # Next-themes provider
├── data/
│   └── portfolio.ts             # Portfolio data
├── lib/
│   ├── utils.ts                # Utility functions
│   └── site.ts                 # Site utilities
├── public/                      # Static assets
│   ├── fonts/
│   ├── resume.pdf              # Your resume
│   └── favicons/
├── .env.local                   # Environment variables
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Customization

### Colors & Theme

Edit `app/globals.css` to change color scheme:

```css
:root {
  --primary: 198 93% 60%;        /* Cyan */
  --accent: 222 84% 56%;         /* Indigo */
  /* ... other colors */
}

.dark {
  --primary: 191 91% 54%;
  --accent: 222 84% 62%;
}
```

### Fonts

Custom fonts are loaded from `src/assets/fonts/`:
- Montserrat (body text)
- Agustina (brand accent)

### Animations

Framer Motion animations are configured throughout components. Adjust duration/delay in component files.

## ✨ Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Dark/Light theme toggle
- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ SEO optimized (Open Graph, Twitter Cards, Sitemap)
- ✅ PWA support (manifest.json)
- ✅ Smooth page transitions
- ✅ Scroll reveal animations
- ✅ Particle background
- ✅ Interactive cursor
- ✅ GitHub stats integration
- ✅ Performance optimized
- ✅ Accessibility compliant
- ✅ Production-ready

## 📊 Sections

1. **Hero** - Professional introduction with CTA buttons
2. **About** - Professional background and focus areas
3. **Skills** - Interactive skill cards by category
4. **Projects** - Featured project showcase
5. **Certifications** - Credentials and learning
6. **GitHub** - Live GitHub contribution stats
7. **Achievements** - Key highlights and metrics
8. **Education** - Academic background
9. **Contact** - Contact information and links
10. **Footer** - Social links and copyright

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repo to Vercel
3. Set environment variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```
4. Deploy

### Netlify

1. Push code to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build --legacy-peer-deps`
4. Publish directory: `.next`
5. Deploy

### Self-Hosted

```bash
npm install --legacy-peer-deps
npm run build
npm start
```

Server will run on `http://localhost:3000`

## 🔧 Build & Performance

- **Build size**: ~17.3 KB (page) + ~102 KB (shared JS)
- **First Load JS**: ~159 KB
- **Route prerendering**: All routes are static
- **Image optimization**: Next.js Image component
- **Font optimization**: Local font loading with font-display: swap

## 🧪 Testing

### Type Checking

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

### Production Build

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large**: > 1280px

## ♿ Accessibility

- ARIA labels on interactive elements
- Semantic HTML structure
- Reduced motion support
- Color contrast compliance
- Keyboard navigation support

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 SEO

- Meta tags with Open Graph support
- Twitter Card integration
- Dynamic sitemap generation
- robots.txt for SEO crawlers
- JSON-LD schema markup
- Canonical URLs

## 🐛 Troubleshooting

### ESLint Warning on Build
This is a known issue with the current eslint configuration and doesn't affect functionality.

### Dark Mode Not Working
Ensure `next-themes` is properly installed:
```bash
npm install next-themes --legacy-peer-deps
```

### Fonts Not Loading
Check that fonts are in `src/assets/fonts/` and paths are correct in `app/layout.tsx`

## 📦 Dependencies

Key dependencies:
- **next**: 15.0.0 - React framework
- **react**: 19.0.0 - UI library
- **typescript**: 5.7.2 - Type safety
- **tailwindcss**: 3.4.16 - CSS framework
- **framer-motion**: 12.0.0 - Animations
- **next-themes**: 0.4.4 - Theme management
- **lucide-react**: 0.468.0 - Icons
- **class-variance-authority**: 0.7.1 - Component variants

## 📄 License

This portfolio template is free to use and customize.

## 🤝 Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Last Updated**: June 2026  
**Built with ❤️ using Next.js 15**
