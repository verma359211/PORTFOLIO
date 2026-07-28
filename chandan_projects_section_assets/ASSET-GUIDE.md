# Projects Section Asset Guide

All assets are located under:

`public/assets/projects/`

## Included project previews

| Files | Dimensions | Purpose |
|---|---:|---|
| `banana-type-preview.svg` / `.png` / `.webp` | 1600 × 1000 | Banana Type illustrated game preview |
| `ecommerce-preview.svg` / `.png` / `.webp` | 1600 × 1000 | E-commerce storefront preview |
| `deployhub-preview.svg` / `.png` / `.webp` | 1600 × 1000 | Deployment terminal and upload preview |
| `bug-tracker-preview.svg` / `.png` / `.webp` | 1600 × 1000 | Issue-tracking dashboard preview |
| `rag-pipeline-preview.svg` / `.png` / `.webp` | 1600 × 1000 | RAG architecture/pipeline preview |

## Which format to use

- Prefer `.webp` in the application.
- Keep `.svg` as the resolution-independent editable master.
- Keep `.png` for lossless inspection and fallback.
- The generated visuals are portfolio preview illustrations matching the approved design.
- Replace them later with direct product screenshots when those screenshots are available, without changing the card component.

## Assets that should not be raster images

Build these using HTML/CSS or an icon library:

- project number labels
- project titles and descriptions
- GitHub and live buttons
- technology icons and labels
- dotted pattern and top-right geometric decoration
- arrows and external-link icons
- hard shadows and borders

For technology icons, use SVG icons from the repository's existing icon library.
Prefer `react-icons/si` when appropriate.

## Image rendering

- Use `object-fit: cover` for Banana Type, E-commerce and Bug Tracker.
- Use `object-fit: contain` for DeployHub and RAG Pipeline when the full composition must remain visible.
- Supply intrinsic dimensions and responsive `sizes`.
- Lazy-load because the projects section is below the hero.
