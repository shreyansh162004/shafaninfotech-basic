# Shafan Infotech Website - Development Guide

This is a modern, responsive React website for Shafan Infotech, a second-hand laptop selling business.

## Project Overview

- **Tech Stack**: React 19, Vite, Tailwind CSS, Framer Motion
- **Type**: Business/E-commerce Landing Page
- **Status**: Production-ready

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation bar
│   ├── Hero.jsx            # Hero section with CTA buttons
│   ├── About.jsx           # About shop section
│   ├── Products.jsx        # Product cards grid
│   ├── Instagram.jsx       # Instagram reels section
│   ├── Reviews.jsx         # Customer testimonials carousel
│   └── Footer.jsx          # Footer with contact info
├── App.jsx                 # Main app component
├── App.css                 # Global styles
├── index.css               # Tailwind imports and utilities
└── main.jsx                # React entry point

public/
└── vite.svg

tailwind.config.js          # Tailwind CSS configuration
postcss.config.js           # PostCSS configuration
vite.config.js              # Vite configuration
```

## Features

### ✓ Hero Section
- Shop logo and branding
- Tagline with call-to-action buttons
- WhatsApp inquiry button
- Call button (tel: link)
- Location view button
- Instagram profile link
- Smooth animations

### ✓ About Section
- Shop description
- Key features grid (Quality, Models, Warranty, Accessories)
- Icon-based feature cards

### ✓ Products Section
- Product category cards
- Icons representing product types
- Inquire buttons linked to WhatsApp
- Responsive grid layout

### ✓ Instagram Section
- Simulated reels/posts grid
- Hover effects with play button
- Duration badges
- Link to full Instagram profile

### ✓ Reviews Section
- Auto-scrolling testimonial carousel
- 5-star rating display
- Customer avatars and details
- Previous/Next navigation
- Pause on hover
- Statistics cards

### ✓ Navigation & Footer
- Sticky navbar with mobile menu
- Responsive hamburger menu
- Footer with all contact information
- Business hours display
- Social media links
- CTA section before footer

### ✓ Responsive Design
- Mobile-first approach
- Fully responsive breakpoints
- Touch-friendly buttons
- Optimized for all screen sizes

### ✓ Animations
- Smooth page transitions
- Card hover effects
- Scroll animations
- Auto-scrolling carousel
- Framer Motion integration

## Component Details

### Navbar
- Sticky positioning
- Mobile hamburger menu
- WhatsApp CTA button
- Smooth animations

### Hero
- Full-height section
- Gradient background
- Multiple CTA buttons
- Scroll indicator animation

### About
- Two-column layout
- Feature highlights
- Icon cards with hover effects
- Staggered animations

### Products
- 3-column responsive grid
- Product category cards
- WhatsApp inquiry integration
- Hover animations

### Instagram
- 6-item responsive grid
- Play button overlay
- Duration badges
- Link to Instagram profile

### Reviews
- Manual and auto-scrolling carousel
- 5-star ratings
- Pagination dots
- Customer statistics

### Footer
- Dark theme
- All contact methods
- Location with map link
- Business hours
- CTA section
- Social media icons

## Customization

### Brand Colors
Edit `tailwind.config.js` to customize colors:
```javascript
primary: "#0066CC",     // Blue
secondary: "#00D4FF",   // Cyan
dark: "#1a1a1a",
light: "#f8f9fa",
```

### Business Information
Update in respective components:
- **Phone**: 9399127741 (Navbar, Hero, Footer)
- **WhatsApp**: https://wa.me/919399127741
- **Instagram**: https://www.instagram.com/sf.infotech_jabalpur/
- **Location**: 1st Floor, Old Bus Stand, Teen Patti Chowk, Wright Town, Jabalpur, MP 482001

### Content Updates
- Hero tagline: `Hero.jsx` line ~50
- Product cards: `Products.jsx` line ~13-30
- Customer reviews: `Reviews.jsx` line ~20-60
- About content: `About.jsx` line ~40-80

## Dependencies

- **react** (19.2.4): UI framework
- **react-dom** (19.2.4): React DOM
- **framer-motion** (11.0.0): Animations
- **lucide-react** (0.344.0): Icons (Note: Uses legacy peer deps due to React 19)
- **tailwindcss** (3.4+): Styling
- **vite** (8.0.1): Build tool

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance Notes

- Lazy loading recommended for Instagram section
- Consider image optimization for production
- CSS is minified in production build
- JavaScript is tree-shaken in build

## Deployment

This is a static React app perfect for deployment on:
- Vercel
- Netlify
- GitHub Pages
- Traditional hosting (need to configure for SPA routing)

### Build output
```bash
npm run build
```
Output goes to `dist/` folder

## Notes

- The lucide-react package is installed with `--legacy-peer-deps` due to React 19 compatibility
- Review carousel auto-plays every 5 seconds
- All external links open in new tabs
- Mobile menu closes when a link is clicked
- WhatsApp links use the official web.whatsapp.com API

## Support

For issues or feature requests, update the components in `src/components/` and restart the dev server.
