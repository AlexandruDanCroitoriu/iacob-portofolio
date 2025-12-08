# GitHub Copilot Instructions

## Project Overview
This is a fitness coach portfolio website built with Vue 3, Vite, and Tailwind CSS. It's a single-page application (SPA) showcasing Alexandru Iacob's personal training services with a dark, modern, and minimalistic design aesthetic.

## Technology Stack
- **Frontend Framework**: Vue 3 with Composition API
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS v4.1.11
- **Routing**: Vue Router v4.5.1
- **Package Manager**: npm
- **Widgets**: dayschedule-widget for appointment scheduling

## Project Structure
```
src/
├── App.vue              # Main app component with all sections
├── main.js              # App entry point
├── style.css            # Global styles
├── components/          # Reusable Vue components
│   ├── HeaderSection.vue
│   ├── CardsSection.vue
│   ├── ServicesSection.vue
│   ├── WhyMeSection.vue
│   ├── WhoIAmSection.vue
│   ├── ContactSection.vue
│   ├── FooterSection.vue
│   └── ScheduleButton.vue
├── data/
│   └── iacobData.js     # Centralized data store
└── assets/
    └── dumbbell.svg     # Fitness-related icons
```

## Design Guidelines
- **Theme**: Dark, sexy, modern, and minimalistic
- **Color Palette**: Black, deep grays with strategic accent colors
- **Typography**: Clean, modern fonts that convey strength and professionalism
- **Layout**: Single-page with smooth scrolling sections
- **Spacing**: Generous whitespace, minimal clutter
- **Imagery**: High-quality fitness and lifestyle photos

## Coding Standards
1. **Vue 3 Composition API**: Use `<script setup>` syntax for all components
2. **Component Structure**: Follow the pattern of script, template, style blocks
3. **Props & Emits**: Use proper TypeScript-style prop definitions when possible
4. **Tailwind Classes**: Prefer utility classes over custom CSS
5. **Responsive Design**: Mobile-first approach with responsive utilities
6. **Data Management**: Centralize data in `src/data/iacobData.js`

## Component Guidelines
- Each section component should be self-contained and reusable
- Use props for dynamic content when appropriate
- Emit events for parent-child communication
- Keep components focused on a single responsibility
- Follow consistent naming conventions (PascalCase for components)

## Data Structure
All content data is stored in `src/data/iacobData.js` with the following structure:
- `personal`: Basic information, contact details, images
- `credentials`: Professional certifications and qualifications
- `services`: Detailed service offerings with descriptions and pricing
- `whyChooseMe`: Unique selling propositions
- `testimonials`: Client feedback and reviews
- `socialMedia`: Links to social platforms
- `contact`: Contact form configuration and details

## Styling Conventions
- Use Tailwind utility classes for styling
- Custom CSS should be minimal and placed in component `<style>` blocks
- Dark theme color classes: `bg-gray-900`, `bg-black`, `text-white`, etc.
- Consistent spacing using Tailwind's spacing scale
- Use `container` class with proper centering for main content areas

## Development Practices
- Keep components small and focused
- Use semantic HTML elements
- Ensure accessibility with proper ARIA labels
- Optimize images and use appropriate formats
- Test responsiveness across different screen sizes
- Use Vue 3 reactivity features appropriately (ref, reactive, computed)

## Performance Considerations
- Lazy load components when appropriate
- Optimize images with proper sizing and formats
- Use Vite's built-in optimizations
- Minimize bundle size by avoiding unnecessary dependencies
- Implement proper caching strategies

## Content Guidelines
- Maintain professional tone throughout
- Focus on fitness expertise and results
- Use action-oriented language for CTAs
- Keep text concise but informative
- Highlight unique selling propositions
- Include social proof and testimonials

## Integration Points
- Schedule widget integration via `dayschedule-widget`
- Social media links and sharing capabilities
- Contact form functionality
- Mobile-responsive navigation
- Smooth scrolling between sections

## Testing Approach
- Test component functionality in isolation
- Verify responsive design on multiple devices
- Check cross-browser compatibility
- Validate form submissions and widget integrations
- Ensure smooth animations and transitions

## Deployment
- Build with `npm run build`
- Static site deployment ready
- Optimized for CDN delivery
- Environment-specific configurations in Vite config

## Future Enhancements
When suggesting improvements or new features, consider:
- Progressive Web App (PWA) capabilities
- Advanced animations and micro-interactions
- Integration with fitness tracking APIs
- Blog section for fitness tips and content
- Client portal functionality
- Payment integration for services
- SEO optimizations and meta tags
- Analytics integration

## Code Examples
When generating code, follow these patterns:

### Component Template
```vue
<script setup>
import { ref, computed, onMounted } from 'vue'
import { iacobData } from '@/data/iacobData.js'

// Component logic here
</script>

<template>
  <section class="bg-gray-900 text-white py-16">
    <!-- Component content -->
  </section>
</template>

<style scoped>
/* Minimal custom styles if needed */
</style>
```

### Responsive Design
```vue
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Use responsive grid patterns -->
</div>
```

### Dark Theme Colors
```vue
<div class="bg-black text-white border-gray-800 hover:bg-gray-900">
  <!-- Consistent dark theme usage -->
</div>
```
