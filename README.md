# texas-st-casa.github.io
A Github Pages site for https://3749texas.casa

## Overview

This is a Vite + TypeScript + React + Radix UI + Tailwind CSS single-page application (SPA) showcasing our home at 3749 Texas Casa. The site features:

- **Home Page**: A welcoming introduction to our home with overview cards
- **Garden Page**: Information about the plants in our Texas garden with interactive tabs
- **History Page**: Historical information about our home and neighborhood with accordion sections

## Tech Stack

- **Vite**: Fast build tool and development server
- **React 19**: Latest version of React for building the UI
- **TypeScript**: Type-safe development
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible UI components (Tabs, Accordion)

## Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/dr-igor/texas-st-casa.github.io.git
cd texas-st-casa.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow:

1. Installs dependencies
2. Builds the production bundle
3. Deploys to GitHub Pages

You can also manually trigger a deployment from the Actions tab in GitHub.

### GitHub Pages Setup

To enable GitHub Pages for this repository:

1. Go to repository Settings > Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. The workflow will automatically deploy on push to main

The site will be available at: `https://dr-igor.github.io/texas-st-casa.github.io/`

## Project Structure

```
src/
├── components/
│   └── Navigation.tsx    # Main navigation component
├── pages/
│   ├── Home.tsx         # Home page
│   ├── Garden.tsx       # Garden page with plant information
│   └── History.tsx      # History page with accordion sections
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles with Tailwind directives
```

## License

This project is private and not licensed for reuse.
