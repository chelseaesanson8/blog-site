# Blog Site Style Guide

## Typography

### Fonts
- **Headings**: Barlow (`font-heading`)
  - Used for all headings (h1, h2, h3)
  - Tracking: Tighter
  - Weights: Bold (700) for h1, Semibold (600) for h2, h3

- **Body**: Inter (`font-sans`)
  - Used for all body text and paragraphs
  - Clean, modern sans-serif

### Heading Sizes
- **H1**: 2.25em (36px)
  - Used for main post titles
  - Uppercase
  - Bold weight

- **H2**: 2.25em (36px)
  - Used for author names
  - Uppercase
  - Semibold weight

- **H3**: 1.25em (20px)
  - Used for section headings
  - Semibold weight

### Paragraphs
- Standard body text
- 1.25em top and bottom margins
- Inter font family

## Colors

### Light Mode
- **Background**: White (`bg-white`)
- **Text**: 
  - Primary: Slate 800 (`text-slate-800`)
  - Secondary: Stone 500 (`text-stone-500`)
- **Dark Text**: Slate 200 (`text-slate-200`)

### Dark Mode
- **Background**: Zinc 900 (`dark:bg-zinc-900`)
- **Text**: 
  - Primary: Slate 200 (`dark:text-slate-200`)
  - Secondary: Stone 400 (`dark:text-stone-400`)

## Layout

### Grid System
- **Desktop**: 2 columns (`grid-cols-2`)
- **Tablet**: 1 column (`sm:grid-cols-1`)
- **Large Desktop**: 2 columns (`lg:grid-cols-2`)
- **Max Width**: 2xl (`max-w-screen-2xl`)

### Spacing
- **Padding**: 
  - Standard: p-10
  - Vertical: my-20
- **Gap**: gap-0

## Components

### Post Header
- Grid layout with title and image
- Title: Centered, uppercase, bold
- Author: Below title, uppercase, semibold
- Image: Rounded corners

### Content
- **Prose Container**:
  - Max width: 2xl
  - Centered
  - Proper typography spacing
  - Dark mode support

### Images
- Rounded corners
- Responsive layout
- Alt text required
- Format: auto

## Responsive Design
- **Mobile**: Single column layout
- **Tablet**: Single column layout
- **Desktop**: Two column layout
- **Large Desktop**: Two column layout

## Dark Mode
- Automatic dark mode support
- Inverted colors for text and backgrounds
- Maintained contrast ratios
- Preserved typography hierarchy

## Accessibility
- Proper heading hierarchy
- Required alt text for images
- Sufficient color contrast
- Responsive text sizes
- Semantic HTML structure 