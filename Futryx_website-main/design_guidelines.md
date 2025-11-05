# Futryx Website Design Guidelines

## Design Approach
**Selected Framework**: Hybrid approach combining Material Design's visual feedback with Linear's typography precision and Stripe's restraint. This aligns with Futryx's "clean, minimal, futuristic" brand positioning while maintaining credibility for IT services.

## Color System (User-Specified Brand Colors)
- **Primary Gradient**: Purple to Pink (#A020F0 → #FF007F) - hero elements, CTAs, accents
- **Background**: Deep Charcoal (#0F172A) for headers/footers, Off White (#F8FAFC) for main content
- **Accent**: Cyan Blue (#00CFFD) for highlights, hover states, icons
- **Neutrals**: Light Gray (#E2E8F0) for borders, dividers, subtle backgrounds

## Typography Hierarchy

**Font Stack**: 
- **Primary**: Inter (Google Fonts) - headings, navigation, buttons
- **Secondary**: Space Grotesk (Google Fonts) - accent text, statistics
- **Body**: Inter - paragraphs, form labels

**Scale**:
- **Hero H1**: 4xl-6xl (desktop), 3xl (mobile), font-weight: 700
- **Page H1**: 3xl-5xl, font-weight: 700
- **H2 (Sections)**: 2xl-4xl, font-weight: 600
- **H3 (Cards)**: xl-2xl, font-weight: 600
- **Body**: base-lg, font-weight: 400, line-height: relaxed
- **Small**: sm, font-weight: 400
- **Button Text**: base-lg, font-weight: 600, uppercase tracking

## Layout System

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16, 24** for consistency
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 (mobile)
- Element gaps: gap-4 to gap-8
- Container max-width: max-w-7xl with px-6

**Grid Strategy**:
- **Services**: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- **Features/Stats**: 2-4 column layouts with consistent gap-8
- **Forms**: Single column, max-w-2xl centered

## Navigation

**Desktop Header**:
- Fixed top position with backdrop blur (backdrop-blur-md)
- Logo left, nav items center-right, dual CTAs right
- Height: h-20, px-8
- Background: Deep Charcoal with subtle border-b

**Mobile Navigation**:
- Hamburger menu icon (from Heroicons)
- Slide-in drawer overlay from right
- Full-height menu with large touch targets (py-4)

## Core Components

### Hero Section (Home Page)
- **Layout**: Full viewport height (min-h-screen), centered content
- **Background**: Gradient overlay on dark base with subtle grid pattern or abstract tech imagery
- **Content Structure**: 
  - Main tagline: "Building Ideas. Empowering Talent."
  - Subtitle: 2-3 sentence company description, max-w-3xl
  - Dual CTA buttons horizontally aligned with gap-4
  - Scroll indicator at bottom
- **Buttons**: Blurred background (bg-white/10, backdrop-blur-md) for CTAs on gradient background

### Service Cards
- **Structure**: White background, rounded-2xl, p-8, shadow-lg hover:shadow-xl transition
- **Icon**: Top, 48x48 size, Cyan Blue accent
- **Title**: H3 size, mb-4
- **Description**: Body text, text-gray-600, mb-6
- **CTA**: "Request Quote" button, outline style with gradient border on hover

### Forms (Join Futryx & Contact)
- **Container**: max-w-2xl, bg-white, rounded-2xl, p-8 to p-12, shadow-xl
- **Input Fields**: 
  - Label above, text-sm font-semibold, mb-2
  - Input: rounded-lg, border-2 border-gray-300, px-4, py-3, focus:border-cyan-400
  - Gap between fields: space-y-6
- **File Upload**: Dashed border, text-center, hover state with bg-gray-50
- **Submit Button**: Full width, gradient background, py-4, rounded-lg, font-semibold

### About Section
- **Layout**: Two-column split (lg:grid-cols-2) with text left, visual right
- **Content**: Mission statement, company values in card format
- **Visual**: Abstract illustration or team collaboration image placeholder

### Footer
- **Structure**: 4-column grid (lg:grid-cols-4) on Deep Charcoal background
- **Columns**: Services, Company, Resources, Contact Info
- **Bottom Bar**: Copyright, social icons (Heroicons), links
- **Spacing**: py-16, border-t

## Vertical Rhythm
- **Section Padding**: py-20 to py-24 (desktop), py-12 to py-16 (mobile)
- **Content Blocks**: mb-12 to mb-16 between major sections
- **Card Grids**: gap-8 for breathing room

## Images

**Hero Image**: Yes - Abstract tech/futuristic gradient background with code/circuit patterns overlay. This establishes the modern, tech-forward brand identity immediately.

**Additional Images**:
- **About Page**: Team collaboration workspace (modern office, developers working together) - reinforces the professional-intern mentorship model
- **Services Page**: Abstract tech icons/illustrations for each service (not photographs)
- **Join Futryx Page**: Workspace environment showing mentorship/collaboration scene

**Image Treatment**: All images use rounded-xl borders, subtle shadows, and maintain 16:9 or 4:3 aspect ratios for consistency.

## Animations
- **Minimal Use**: Fade-in on scroll for cards (opacity + translateY), smooth transitions on hover
- **CTAs**: Scale on hover (scale-105), gradient shift
- **Navigation**: Smooth color transitions
- **Forms**: Focus states with border-color transitions

## Multi-Page Consistency
- Identical header/footer across all pages
- Consistent hero treatment per page (smaller than home, py-24)
- Service cards maintain same structure whether on Home or Services page
- Form styling identical between Contact and Join Futryx pages