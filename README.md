# Cake Gallery

A responsive photo gallery for browsing custom cake designs, built with React, TypeScript, and Vite.

## What It Does

Cake Gallery displays a filterable grid of custom cake photos. Visitors can browse all cakes or filter by themed category (Harry Potter, Mario, Shadow and Bone, Looshkin, Sonic, Worst Witch, Easter, and Other). Dark mode is enabled by default and persists across sessions.

## How It Works

### Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| UI components | Chakra UI |
| Animation | Framer Motion |
| Styling | Emotion (CSS-in-JS via Chakra) |

### Architecture

The app is a fully static single-page application — no backend, no API calls, no database. All cake data is defined in source code and all images are bundled as static assets.

```
src/
├── main.tsx              # Entry point — mounts React, provides Chakra UI theme
├── App.tsx               # Root layout — manages selected category state
├── theme.ts              # Chakra UI theme (dark mode default, custom grays)
├── data/
│   └── cakes.ts          # All cake entries and category definitions
├── hooks/
│   └── useCakes.ts       # Filters cakes by selected category
└── components/
    ├── NavBar.tsx         # Header with app title and dark/light mode toggle
    ├── CategoryList.tsx   # Sidebar category filter buttons (desktop only)
    ├── CakeGrid.tsx       # Responsive grid — renders a CakeCard per cake
    └── CakeCard.tsx       # Individual cake: image, name, category badge
```

### Data Flow

1. `App.tsx` holds the `selectedCategory` state and renders the layout grid
2. `CategoryList` displays category buttons and calls back to `App` when one is clicked
3. `CakeGrid` passes `selectedCategory` to the `useCakes` hook
4. `useCakes` returns either all cakes or those matching the selected category
5. `CakeGrid` maps the result into `CakeCard` components

### Layout

- **Desktop (lg and above):** navigation bar at top, category sidebar on the left, cake grid fills the right
- **Mobile:** stacked layout — navigation bar on top, category sidebar hidden, cake grid below

### Adding New Cakes

1. Copy the image file into `public/photos/`
2. Open [src/data/cakes.ts](src/data/cakes.ts) and add an entry to the `cakes` array:

```ts
{ id: 42, name: "My New Cake", imagePath: "/photos/my-new-cake.jpg", category: "Other" }
```

3. To add a new category, add the string to the `categories` array in the same file and use it as a `category` value in cake entries.

## Running Locally

**Prerequisites:** Node.js 18 or later

```bash
# Install dependencies
npm install

# Start the development server (hot reload enabled)
npm run dev
# App available at http://localhost:5173

# Build for production
npm run build
# Output written to dist/

# Preview the production build locally
npm run preview
```

## Deploying to Vercel

This project is a static Vite app and deploys to Vercel with zero configuration.

### Option 1: Deploy from GitHub (recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in (or create a free account)
3. Click **Add New > Project**
4. Import your GitHub repository
5. Vercel auto-detects Vite — the settings below are filled in automatically:

   | Setting | Value |
   |---|---|
   | Framework Preset | Vite |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Install Command | `npm install` |

6. Click **Deploy**

Every push to `main` will trigger a new deployment automatically.

### Option 2: Deploy via Vercel CLI

```bash
# Install the Vercel CLI
npm install -g vercel

# From the project root, run:
vercel

# Follow the prompts — accept the auto-detected Vite settings
# Your site URL is printed when the deploy completes

# To deploy to production:
vercel --prod
```

### Environment Variables

This app has no environment variables. No `.env` setup is needed in the Vercel dashboard.

### Custom Domain

After deploying, go to your project in the Vercel dashboard, open **Settings > Domains**, and add your custom domain. Vercel handles SSL automatically.
