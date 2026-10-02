# Rawshan Kumar - AI Product Designer Portfolio

A premium, cinematic portfolio platform showcasing AI-native product design, agentic UX, and enterprise SaaS expertise.

## Project Status

The project is currently in build configuration phase. Here's what has been created:

### ✅ Completed
- Next.js 14 project structure with TypeScript
- Core design system components:
  - Navbar (with mobile menu)
  - Footer (with social links)
  - Hero section (animated workflow diagram)
  - Project Grid & Cards
  - Category Filtering
  - Case Study Layout
  - Button components
  
- **Pages**:
  - Home (/) - Hero + Featured Projects
  - Work (/work) - All projects with filtering
  - Project Details (/work/[id]) - Full case studies
  - AI Lab (/ai-lab) - Topics exploration
  - About (/about) - Professional background
  - Resume (/resume) - CV & skills
  - Contact (/contact) - Contact form
  
- **Project Data**:
  - 6 portfolio projects with metadata
  - Comprehensive case study content for each project
  - Category filtering system

- **Styling**:
  - Tailwind CSS 4.x configuration
  - Custom color palette (electric blue, violet accents)
  - Animation system with Framer Motion
  - Responsive design framework

### ⚠️ Current Issue
Tailwind CSS 4.x requires custom configuration for shadow utilities and theme extensions. The build process needs the Tailwind config to properly define custom utilities like `shadow-glow-blue`.

### 🚀 Next Steps

1. **Simplify Tailwind Config** - Use @theme CSS variables for custom colors and adjust shadow classes to use standard Tailwind utilities

2. **Test Build** - Run `npm run dev` to start the development server

3. **Add Content** - 
   - Replace placeholder images
   - Add real case study content
   - Add professional photos/screenshots
   - Update meta descriptions
   
4. **Enhance Interactions** -
   - Implement Search functionality
   - Add Command Palette
   - Build Ask AI chatbot integration
   - Add ambient audio player

5. **Deploy** - Vercel integration ready

## Installation & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the site.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── work/              # Work pages
│   ├── ai-lab/            # AI Lab exploration
│   ├── about/             # About page
│   ├── resume/            # Resume page
│   └── contact/           # Contact page
├── components/            # Reusable React components
├── lib/                   # Utilities, data, and types
│   ├── projects.ts        # Project metadata
│   └── caseStudies.tsx    # Case study content
├── public/                # Static assets
├── styles/                # Global CSS
└── tailwind.config.ts     # Tailwind configuration
```

## Design System

### Colors
- **Dark Background**: #0F0F1F
- **Surface**: #1A1A2E
- **Electric Blue**: #0066FF
- **Electric Cyan**: #00D9FF
- **Violet Accent**: #A855F7

### Typography
- **Sans**: Inter
- **Mono**: Fira Code

### Key Features
- Glassmorphism panels with backdrop blur
- Animated workflow diagrams
- Smooth page transitions
- Responsive design (mobile-first)
- Accessibility-first approach
- Prefers-reduced-motion support

## Technologies

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **State**: React Hooks

## Notes for Development

- All custom Tailwind utilities need proper @theme definitions
- Component styling uses clsx for conditional classes
- Case studies are fully typed for better DX
- Responsive breakpoints: mobile (390px), tablet (768px), desktop (1440px)

---

**Ready to explore AI product design with beautiful, functional interfaces.**
