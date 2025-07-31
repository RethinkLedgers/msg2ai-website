# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for msg2ai, an AI Ambassador platform that helps businesses deploy intelligent AI chatbots for customer communication. The website showcases the platform's features, pricing, and company information.

## Architecture & Code Structure

### Component-Based Architecture
The project uses a component-based structure with React components defined as JavaScript template literals within a single PRD.md file. This unique approach stores all component code as exportable strings:

- **Hero Component**: Main landing section with animated chat preview and statistics
- **Features Component**: Six key AI Ambassador features with gradient cards
- **Pricing Component**: Three-tier pricing structure with popular plan highlighting
- **Footer Component**: Complete footer with social links and contact information
- **Founders Component**: Company leadership profiles with social media links
- **Blog Preview Component**: Latest blog posts section

### Key Design Patterns
- **Purple/Pink Gradient Theme**: Consistent gradient styling from purple-600 to pink-600
- **Backdrop Blur Effects**: Modern glass-morphism with `backdrop-blur-sm` throughout
- **Responsive Grid Layouts**: Mobile-first approach with responsive breakpoints
- **Interactive Hover States**: Smooth transitions and hover effects on all interactive elements

### Dependencies & Framework
Based on the component code structure:
- **Next.js**: React framework with App Router
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Hooks**: useState and useEffect for component state management

## Development Workflow

### Component Development
Since components are stored as template literals in PRD.md, the development pattern involves:

1. Components are exported as string constants (e.g., `export const HeroComponent`)
2. Each component includes proper imports and Next.js conventions
3. Components use modern React patterns with hooks and functional components

### Styling Guidelines
- Use Tailwind CSS utility classes exclusively
- Maintain consistent gradient patterns: `from-purple-600 to-pink-600`
- Apply backdrop blur effects: `backdrop-blur-sm` with transparent backgrounds
- Implement responsive design with mobile-first approach
- Use semantic color variables for consistent theming

### Content Strategy
The website focuses on:
- **AI Ambassador Technology**: Core platform messaging
- **Business Value Proposition**: Customer communication solutions
- **Enterprise Features**: Security, analytics, multilingual support
- **Pricing Transparency**: Clear three-tier structure
- **Company Credibility**: Y Combinator background, founder profiles

## Key Business Context

### Target Audience
- Hotels and hospitality businesses
- Event management companies  
- Businesses needing omnichannel customer communication
- Enterprise clients requiring multilingual support

### Core Value Propositions
- 24/7 AI-powered customer communication
- Omnichannel messaging (SMS, WhatsApp, Telegram)
- Multilingual support (100+ languages)
- Enterprise-grade security and compliance
- Advanced analytics and insights

### Competitive Positioning
- Focus on "AI Ambassador" terminology vs generic chatbots
- Emphasis on hospitality and event industry expertise
- Y Combinator pedigree and founder credibility
- Enterprise security and compliance features

## Technical Implementation Notes

### Component Integration
When implementing these components in a Next.js project:
- Import components from the respective files
- Ensure proper Next.js Link component usage for navigation
- Implement proper metadata for SEO optimization
- Add loading states and error boundaries as needed

### Performance Considerations
- Components use lazy loading patterns where appropriate
- Image optimization should be implemented for any added media
- Consider code splitting for larger component bundles
- Implement proper caching strategies for blog content

### Accessibility
- All interactive elements include proper ARIA labels
- Color contrast meets WCAG guidelines with purple/white combinations
- Keyboard navigation support for all interactive components
- Screen reader compatibility with semantic HTML structure