# Shafan Infotech - Modern Business Website

A fully responsive, modern React website for **Shafan Infotech**, a second-hand/refurbished laptop selling business based in Jabalpur, Madhya Pradesh.

![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/FramerMotion-11.0-black)

## 🌟 Features

- ✅ **Fully Responsive Design** - Mobile-first approach with perfect breakpoints
- ✅ **Modern Animations** - Smooth transitions using Framer Motion
- ✅ **7 Key Sections** - Hero, About, Products, Instagram, Reviews, Footer
- ✅ **Business Optimization** - WhatsApp, Call, Location, Instagram integration
- ✅ **Auto-Scrolling Carousel** - Customer testimonials with ratings
- ✅ **Mobile Navigation** - Responsive hamburger menu
- ✅ **Production-Ready** - Clean, optimized, deployment-ready code

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project
cd "d:\shafan\site manage file\Basic"

# Install dependencies (including legacy peer deps for lucide-react)
npm install --legacy-peer-deps

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Sections

### 1. Navigation Bar
- Sticky positioning
- Logo and brand name
- Navigation links with smooth scrolling
- WhatsApp CTA button
- Responsive mobile menu with hamburger toggle

### 2. Hero Section
- Large hero image area with gradient
- Shop logo
- Tagline: "Best Deals on Refurbished Laptops"
- Four CTA buttons:
  - 📱 **Inquire on WhatsApp** - Opens WhatsApp with prefilled message
  - ☎️ **Call Now** - Direct phone call link
  - 📍 **View Location** - Google Maps integration
  - 📸 **Visit Instagram** - Instagram profile link
- Scroll indicator animation

### 3. About Shop
- Company description
- Key highlights:
  - ✓ Trusted quality
  - ✓ Latest models
  - ✓ Comprehensive warranty
  - ✓ Accessories available
- Feature card grid with icons
- Staggered animations

### 4. Products
- 3-column responsive grid
- Product categories:
  - 💻 Refurbished Laptops
  - 🖥️ CPUs & Desktops
  - 🔌 Laptop Accessories
- Each card includes:
  - Category icon/emoji
  - Title and description
  - "Inquire Now" button
- Hover animations

### 5. Instagram Section
- 6-item reel/posts grid
- Simulated Instagram content
- Play button overlay on hover
- Duration badges
- Link to full Instagram profile
- "View More on Instagram" button

### 6. Customer Reviews
- Auto-scrolling testimonial carousel
- Features:
  - 5-star ratings
  - Customer names and cities
  - Review text
  - Customer avatars
- Manual navigation with prev/next buttons
- Pagination dots
- Auto-play with pause on hover
- Statistics cards showing:
  - Total happy customers
  - Average rating
  - Returning customer rate

### 7. Footer
- Dark professional design
- Contact information:
  - Phone number (clickable)
  - WhatsApp link
  - Instagram profile
- Physical location with address
- Business hours
- Social media icons
- CTA section with contact buttons
- Copyright information

## 🛠 Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 19.2.4 |
| **Vite** | Build tool | 8.0.1 |
| **Tailwind CSS** | Styling | 3.4+ |
| **Framer Motion** | Animations | 11.0.0 |
| **Lucide React** | Icons | 0.344.0 |
| **PostCSS** | CSS Processing | 8.4+ |

## 📁 Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive navigation
│   │   ├── Hero.jsx             # Hero with CTAs
│   │   ├── About.jsx            # Company info
│   │   ├── Products.jsx         # Product grid
│   │   ├── Instagram.jsx        # Instagram section
│   │   ├── Reviews.jsx          # Testimonials carousel
│   │   └── Footer.jsx           # Footer with contacts
│   ├── App.jsx                  # Main component
│   ├── App.css                  # App styles
│   ├── index.css                # Global + Tailwind
│   └── main.jsx                 # Entry point
├── public/
│   └── vite.svg
├── .github/
│   └── copilot-instructions.md  # Development guide
├── package.json
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
├── vite.config.js               # Vite config
└── README.md                    # This file
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#0066CC",      // Blue
  secondary: "#00D4FF",    // Cyan
  dark: "#1a1a1a",
  light: "#f8f9fa",
}
```

### Brand Information
Update across components:
- **Company**: "Shafan Infotech"
- **Phone**: 9399127741
- **WhatsApp**: +91-9399127741
- **Instagram**: @sf.infotech_jabalpur
- **Location**: 1st Floor, Old Bus Stand, Teen Patti Chowk, Wright Town, Jabalpur, MP 482001

### Content Updates
1. **Hero**: Edit text in `src/components/Hero.jsx`
2. **Products**: Update product cards in `src/components/Products.jsx`
3. **Reviews**: Add/edit testimonials in `src/components/Reviews.jsx`
4. **About**: Modify company info in `src/components/About.jsx`

## 📱 Responsive Breakpoints

```
Mobile: 0 - 639px
Tablet: 640px - 1023px
Desktop: 1024px+
```

All components are optimized for touch and mouse interactions.

## ⚡ Performance

- **Code Splitting**: Vite automatically code-splits components
- **CSS Optimization**: Tailwind purges unused styles
- **Image Optimization**: Recommended to optimize images before production
- **Lazy Loading**: Consider lazy-loading components for production
- **Bundle Size**: ~150KB gzipped (production build)

## 🔗 External Integration

### WhatsApp
- Format: `https://wa.me/919399127741?text=Hello%20I%20want%20to%20inquire%20about%20your%20laptops`
- Opens WhatsApp with prefilled message

### Google Maps
- Placeholder: `https://goo.gl/maps/shafan`
- Opens map in new tab

### Instagram
- Profile: `https://www.instagram.com/sf.infotech_jabalpur/`
- Opens profile in new tab

### Phone
- Format: `tel:9399127741`
- Initiates phone call on compatible devices

## 🚀 Deployment

Perfect for deployment on:
- **Vercel** - Recommended for Vite projects
- **Netlify** - Drag and drop or Git integration
- **GitHub Pages** - Static hosting
- **Traditional Hosting** - Configure build output

### Build Command
```bash
npm run build
```

Output: `dist/` folder containing production files

### Server Configuration
For SPA routing, configure your server to serve `index.html` for all routes.

## 📊 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Latest 2 versions |
| Firefox | ✅ Latest 2 versions |
| Safari | ✅ Latest 2 versions |
| Edge | ✅ Latest 2 versions |
| Mobile | ✅ All modern browsers |

## ⚙️ Installation Notes

### Legacy Peer Deps
Lucide-react is installed with `--legacy-peer-deps` due to React 19 compatibility. This is safe and doesn't affect functionality.

```bash
npm install --legacy-peer-deps
```

## 📝 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 🤝 Component Features

### Navbar
- Sticky positioning
- Mobile hamburger menu
- Smooth scroll navigation
- CTA button

### Hero
- Gradient background
- Multiple CTA buttons
- Scroll indicator
- Staggered animations

### Products
- Icon cards
- Hover animations
- Responsive grid
- WhatsApp integration

### Reviews
- Auto-scrolling carousel
- Manual navigation
- 5-star ratings
- Statistics

### Footer
- Dark theme
- All contact methods
- Business hours
- Social links

## 🎯 SEO Optimization

- Semantic HTML structure
- Proper heading hierarchy
- Meta tags ready (add to index.html)
- Mobile-responsive
- Fast loading times

## 📞 Business Information

| Detail | Information |
|--------|-------------|
| **Name** | Shafan Infotech |
| **Type** | Refurbished Laptop Seller |
| **Location** | Jabalpur, Madhya Pradesh |
| **Phone** | 9399127741 |
| **Instagram** | @sf.infotech_jabalpur |
| **Address** | 1st Floor, Old Bus Stand, Teen Patti Chowk, Wright Town, Jabalpur, MP 482001 |
| **Hours** | Mon-Sat: 10 AM - 7 PM, Sun: Closed |

## 🔒 Privacy & Security

- No user data collection
- All external links open in new tabs
- HTTPS recommended for production
- No sensitive information in code

## 📦 Package Details

```json
{
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.33",
    "autoprefixer": "^10.4.17",
    "vite": "^8.0.1"
  }
}
```

## 🐛 Troubleshooting

### Dependencies Issue
```bash
npm install --legacy-peer-deps
```

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Clear Build Cache
```bash
rm -rf node_modules dist
npm install --legacy-peer-deps
npm run build
```

## 📄 License

This project is for Shafan Infotech business use.

## 🙋 Support

For questions or modifications, refer to `.github/copilot-instructions.md` for detailed development guide.

---

**Made with ❤️ for Shafan Infotech**

Happy coding! 🚀

