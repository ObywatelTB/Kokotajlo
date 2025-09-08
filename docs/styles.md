# Design System & Styles

Tailwind: Extend theme with primary: blue-600, accent: green-500. Fonts: Google Fonts Inter (FR-friendly). Colors: Neutral grays, accents for AI/tech (no reds).

## Overview

Our design system is crafted for French enterprise audiences, emphasizing trust, professionalism, and technological sophistication. The color palette and typography choices reflect French corporate culture while maintaining accessibility and modern aesthetics.

## Color Palette

### Primary Colors
- **Primary Blue**: `#1E3A8A` (Trust, stability, French corporate blue)
  - Usage: Primary buttons, links, headers
  - Tailwind: `primary-blue` (extend theme)

- **Accent Green**: `#10B981` (Growth, success, eco-friendly)
  - Usage: Success states, secondary actions, growth indicators
  - Tailwind: `accent-green` (extend theme)

### Neutral Colors
- **Dark Gray**: `#111827` - Primary text
- **Medium Gray**: `#6B7280` - Secondary text
- **Light Gray**: `#F3F4F6` - Backgrounds, borders
- **White**: `#FFFFFF` - Clean backgrounds

### Semantic Colors
- **Success**: `#10B981` (accent-green)
- **Warning**: `#F59E0B` (amber-500)
- **Error**: `#6B7280` (medium gray - avoiding red for French cultural preferences)
- **Info**: `#3B82F6` (blue-500)

## Typography

### Font Family
- **Primary Font**: Inter (Google Fonts)
  - Why Inter? Clean, modern, excellent French character support
  - Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Font Sizes
- **Hero Title**: `text-4xl md:text-6xl` (64px desktop)
- **Section Headers**: `text-2xl md:text-4xl` (36px desktop)
- **Body Large**: `text-lg` (18px)
- **Body Regular**: `text-base` (16px)
- **Body Small**: `text-sm` (14px)
- **Caption**: `text-xs` (12px)

### Line Heights
- **Headings**: `leading-tight` (1.25)
- **Body**: `leading-relaxed` (1.625)
- **Captions**: `leading-normal` (1.5)

## Component Guidelines

### Buttons

#### Primary Button
```tsx
<button className="bg-primary-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Action Primaire
</button>
```

#### Secondary Button
```tsx
<button className="bg-accent-green hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Action Secondaire
</button>
```

#### Outline Button
```tsx
<button className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Action Outline
</button>
```

### Cards

#### Service Card
```tsx
<div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
  <div className="w-12 h-12 bg-primary-blue rounded-lg mb-4"></div>
  <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Title</h3>
  <p className="text-gray-600">Service description in French for enterprise clients.</p>
</div>
```

### Navigation

#### Header
```tsx
<header className="bg-white shadow-sm border-b border-gray-200">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-primary-blue">Kokotajlo</h1>
      </div>
      <div className="flex items-center space-x-8">
        <a href="#services" className="text-gray-700 hover:text-primary-blue transition-colors">Services</a>
        <a href="#about" className="text-gray-700 hover:text-primary-blue transition-colors">À Propos</a>
        <a href="#contact" className="text-gray-700 hover:text-primary-blue transition-colors">Contact</a>
        <button className="bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Démarrer
        </button>
      </div>
    </div>
  </nav>
</header>
```

## Layout Patterns

### Section Spacing
- **Hero Section**: `py-20 md:py-32`
- **Regular Sections**: `py-16 md:py-24`
- **Small Sections**: `py-12 md:py-16`

### Container Widths
- **Full Width**: No container (banners, hero)
- **Content Width**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Narrow Content**: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`

## Accessibility

### Color Contrast
- Primary text on white: 4.5:1 minimum (WCAG AA)
- White text on primary blue: 8.6:1 (WCAG AAA)
- Focus states: 3px solid border in accent color

### Focus Management
```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded-md">
  Accessible Button
</button>
```

## Implementation

### Tailwind Configuration
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E3A8A',
        'accent-green': '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

### Global Styles
```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@layer base {
  html {
    font-family: Inter, system-ui, sans-serif;
  }
}

@layer components {
  .btn-primary {
    @apply bg-primary-blue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200;
  }

  .btn-secondary {
    @apply bg-accent-green hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200;
  }
}
```

## French Language Considerations

- **Character Support**: Inter font includes all French characters including accents
- **Text Length**: French text is typically 15-20% longer than English
- **Cultural Colors**: Blue for trust, green for growth (avoiding red for negative connotations)
- **Spacing**: Generous whitespace for French reading preferences

This design system ensures Kokotajlo maintains a professional, trustworthy appearance that resonates with French enterprise decision-makers while supporting our AI and automation messaging.
