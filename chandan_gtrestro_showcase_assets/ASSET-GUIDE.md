# GT Restro Showcase Asset Guide

All browser-ready assets are under:

`public/assets/gtrestro-showcase/`

## Included assets

| Asset | Dimensions | Recommended use |
|---|---:|---|
| `gtrestro-device-composite.webp` | 2800 × 1728 | Primary centre visual with mobile, laptop and tablet |
| `gtrestro-cloud-dashboard-laptop.webp` | 2400 × 1919 | Optional standalone cloud-dashboard visual |
| `gtrestro-mobile-ordering.webp` | 1200 × 2330 | Optional mobile ordering visual |
| `gtrestro-electron-pos-tablet.webp` | 1200 × 1965 | Optional Electron/POS visual |
| `gtrestro-logo-original.webp` | 1200 × 1258 | Large optimized original GT Restro logo |
| `gtrestro-logo-original-source.png` | 332 × 348 | Unchanged original logo supplied by the user |

Transparent PNG versions are included alongside all device WebP files.

## Preferred implementation

Use the complete device composition for the approved desktop design:

`/assets/gtrestro-showcase/gtrestro-device-composite.webp`

Keep the individual device files available for:

- responsive rearrangement
- future scroll animation
- project-detail pages
- replacing one device without rebuilding the whole composition

## Use SVG icon components for everything else

Do not use raster images for:

- capability icons
- What-I-built icons
- gift icon
- technology logos
- platform labels
- globe, shield or arrow icons

Use the repository's existing SVG icon library.

Recommended options:

- `lucide-react` for interface icons
- `react-icons/si` for technology-brand icons

## Technology accuracy

The supplied example stack is based on the known GT Restro architecture:

- React
- Vite
- Node.js
- Express
- MySQL
- Socket.IO
- Electron
- Redis
- PWA

Codex must inspect the repository and remove or amend any technology that is not
actually used. Do not display TypeScript or Tailwind CSS merely because they
appeared in an earlier visual mockup.

## Image behavior

- Use WebP in the interface.
- Use the framework's optimized image component.
- The centre device image is below the hero, so lazy-loading is acceptable.
- Provide intrinsic dimensions and accurate `sizes`.
- Use `object-fit: contain`.
- Never crop the device composition.
- Reserve its aspect ratio to prevent layout shift.
