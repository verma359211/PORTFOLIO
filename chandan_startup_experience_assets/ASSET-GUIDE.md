# Startup Experience Asset Guide

All browser assets belong under:

`public/assets/startup-experience/`

## Included assets

| Asset | Dimensions | Purpose |
|---|---:|---|
| `startup-developer-illustration.webp` | 2200 × 1845 | Main illustration below the heading |
| `gtrestro-dashboard-preview.webp` | 2400 × 1124 | GT Restro featured-project dashboard |
| `focus-target-illustration.webp` | 1400 × 1551 | Target visual inside the red focus card |

Transparent PNG versions are included for the developer and target
illustrations. A high-resolution PNG dashboard preview is also included.

## Preferred usage

- Use WebP files in the website.
- Keep PNG files as source/fallback.
- Use the framework's optimized image component.
- The section is below the hero, so lazy-loading is acceptable.
- Reserve image dimensions to avoid layout shift.
- Use `object-fit: contain` for the developer and target illustrations.
- Use `object-fit: cover` or `contain` for the dashboard depending on the exact
  card dimensions, but never distort it.

## Icons that should stay vector-based

Do not create raster assets for:

- core-contribution icons
- impact icons
- check icons
- project arrow
- technology logos

Use the existing icon library.

Recommended:

- `lucide-react` for interface icons
- `react-icons/si` for technology-brand icons

## Technology icons

Render these as SVG icon components:

- React
- Node.js
- MySQL
- Socket.IO
- Redis
- Docker
- Electron

Codex should verify the actual repository stack before finalizing the list.
