# 🚀 Modern Developer Portfolio - Sanket Raikwar

An industry-level, recruiter-friendly developer portfolio website showcasing full-stack development, AI/ML expertise, and professional achievements. Built with cutting-edge web technologies for maximum performance and visual impact.

## ✨ Live Demo

**Portfolio**: [Coming Soon]

## 🎯 Key Features

### Design & UX
- 🎨 **Premium SaaS-Style UI** - Apple + Linear + Vercel inspired
- 🌈 **Glassmorphism Effects** - Modern frosted glass components
- ✨ **Smooth Animations** - Scroll reveals and page transitions
- 🌙 **Dark/Light Theme** - System preference aware
- 📱 **Mobile-First Design** - Perfectly responsive
- 🎯 **Interactive Cursor** - Custom cursor on desktop
- ⚛️ **Particle Background** - Subtle animated particles

### Performance
- ⚡ **Lightning Fast** - 159 KB first load JS
- 🏗️ **Static Generation** - All pages pre-rendered
- 🖼️ **Optimized Images** - Next.js Image optimization
- 🔤 **Font Optimization** - Local fonts with font-display: swap
- 📦 **Tree-Shaken** - Only ship what you need

### SEO & Sharing
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt
- 🌐 **Open Graph** - Beautiful social share previews
- 🐦 **Twitter Cards** - Optimized Twitter sharing
- 📋 **JSON-LD Schema** - Rich snippets support
- 🔗 **Canonical URLs** - Prevent duplicate content

## 🛠️ Tech Stack

```
Frontend:     Next.js 15 • React 19 • TypeScript
Styling:      Tailwind CSS
Animations:   Framer Motion
Components:   Shadcn/ui • Lucide React
Theme:        Next-themes
```

## 📦 Getting Started

### 1. Prerequisites

- **Node.js** 18+ 
- **npm** 8+

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Configure Portfolio

Edit `data/portfolio.ts` with your information:

```typescript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    resume: "/resume.pdf",
    githubUsername: "yourusername"
  }
  // ... more data
};
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deploy to Vercel

1. Push to GitHub
2. Connect to [vercel.com](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` environment variable
4. Deploy

## 📝 Available Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm start         # Start production server
npm run lint      # Run ESLint
npm run typecheck # TypeScript check
```

## 📁 Project Structure

```
.
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── site/              # Portfolio sections
│   ├── ui/                # Shadcn UI components
│   └── providers/         # Context providers
├── data/                   # Portfolio data
│   └── portfolio.ts       # Your data
├── lib/                    # Utilities
├── public/                 # Static files
│   ├── fonts/
│   ├── resume.pdf
│   └── favicon/
└── src/                    # Assets
    └── assets/fonts/
```

## 🎨 Customization

### Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 198 93% 60%;
  --accent: 222 84% 56%;
}
```

### Sections

Edit `data/portfolio.ts` to customize:
- About
- Skills
- Projects
- Certifications
- Education
- Contact

## ✨ Features Included

- ✅ Next.js 15 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Framer Motion animations
- ✅ Dark/Light theme
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ PWA support
- ✅ GitHub stats integration
- ✅ Social sharing cards
- ✅ Smooth page transitions
- ✅ Scroll reveal animations
- ✅ Interactive cursor
- ✅ Particle background
- ✅ Loading screen
- ✅ Production-ready

## 📊 Build Stats

- **Route Size**: 17.3 KB
- **First Load JS**: ~159 KB
- **Build Time**: ~20s
- **All pages**: Static pre-rendered

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Update `data/portfolio.ts`
3. ✅ Add your resume to `public/resume.pdf`
4. ✅ Test locally with `npm run dev`
5. ✅ Build with `npm run build`
6. ✅ Deploy to Vercel or your preferred platform

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 📝 License

Free to use and customize for your portfolio.

---

**Built with ❤️ using Next.js 15**
