# K-LIFE Agarwood Investment Pilot

A React-based interactive financial model and presentation website for the K-LIFE agarwood investment pilot project in Sri Lanka.

## Features

- Interactive financial calculator with real-time scenario modeling
- Sensitivity analysis charts (Yield, Price, NPV)
- Profit heatmap visualization
- Image gallery with lightbox
- Responsive design with Tailwind CSS
- Optimized for Cloudflare Pages deployment

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Recharts** - Chart library for data visualization

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
agarwood-site/
├── public/
│   ├── images/          # Gallery images (add your images here)
│   └── _redirects       # Cloudflare Pages SPA routing
├── src/
│   ├── components/
│   │   └── AgarwoodSite.jsx  # Main component
│   ├── App.jsx          # App wrapper
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind imports
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## Cloudflare Pages Deployment

### Build Settings

When deploying to Cloudflare Pages:

1. **Build command**: `npm run build`
2. **Build output directory**: `dist`
3. **Root directory**: `/` (project root)
4. **Node.js version**: 18 or higher (auto-detected)

### Setup Steps

1. Connect your Git repository to Cloudflare Pages
2. Set the build command: `npm run build`
3. Set the output directory: `dist`
4. Deploy!

The `_redirects` file in `public/` ensures client-side routing works correctly.

### Environment Variables

No environment variables are required for this static site.

## Adding Images

Place your gallery images in `public/images/` directory. The component expects these filenames:

- `estate-aerial.jpg`
- `estate-overview.jpg`
- `panoramic-view.jpg`
- `main-entrance.jpg`
- `mature-trees.jpg`
- `dense-plantation.jpg`
- `landscaped-path.jpg`
- `estate-road.jpg`
- `hillside-views.jpg`
- `grounds-maintenance.jpg`
- `monsoon-trees.jpg`
- `irrigation-system.jpg`

## Development

- Development server runs on `http://localhost:5173`
- Hot module replacement (HMR) enabled
- Tailwind CSS JIT compilation

## License

© 2024 K-LIFE (Pvt) Ltd. All rights reserved.

