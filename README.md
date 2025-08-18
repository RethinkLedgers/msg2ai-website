# AI Ambassador Website

A modern Next.js website showcasing AI Ambassador, smart AI solutions for hotels, vacation rentals, and events that automate guest messaging and boost satisfaction with 24/7 support.

## Features

- **Modern Design**: Purple/pink gradient theme with glass-morphism effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Animated hero section with chat preview
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Fast Performance**: Optimized with Next.js 14 and Tailwind CSS

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Installation

1. **Prerequisites:**
   - Node.js v18 or later (recommended: v18, v20)
   - npm v9 or later (comes with Node.js)

2. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/msg2ai-website.git
   cd msg2ai-website
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.js         # Root layout component
│   ├── page.js           # Homepage
│   └── about/
│       └── page.js       # About page
├── components/
│   ├── BlogPreview.js    # Latest blog posts section
│   ├── Features.js       # AI Ambassador features
│   ├── Footer.js         # Site footer with links
│   ├── Founders.js       # Company founders section
│   ├── Hero.js           # Animated hero section
│   ├── Logo.js           # msg2ai logo component
│   ├── Navbar.js         # Site navigation
│   └── Pricing.js        # Pricing plans
└── data/
    └── blogPosts.js      # Blog post data
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version with modern features
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Deployment

The website is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## Customization

### Colors
The website uses a consistent purple/pink gradient theme:
- Primary: `purple-600` to `pink-600`
- Accents: `purple-400`, `purple-900/20`

### Content
- Update vertical solutions in `/src/components/Verticals.js`
- Modify pricing plans in `/src/components/Pricing.js`
- Customize features in `/src/components/Features.js`

## Performance

- ✅ Fast loading with Next.js optimization
- ✅ SEO-friendly with proper metadata
- ✅ Responsive design for all devices
- ✅ Accessible with semantic HTML

## License

© 2025 AI Ambassador. All rights reserved.