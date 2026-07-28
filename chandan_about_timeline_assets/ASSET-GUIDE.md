# About Timeline Asset Guide

All files belong under `public/assets/about-timeline/`.

| Asset | Dimensions | Use |
|---|---:|---|
| `01-school-roots-collage.webp` | 1500 × 1635 | Static collage fallback |
| `02-college-learning-collage.webp` | 1500 × 1640 | Static collage fallback |
| `03-internship-building-collage.webp` | 1500 × 1572 | Static collage fallback |
| `04-startup-experience-collage.webp` | 1500 × 1581 | Static collage fallback |
| `05-now-next-collage.webp` | 1500 × 1313 | Static collage fallback |
| `01-school-main.webp` | 1200 × 1354 | Interactive stack media |
| `01-school-support-kite.webp` | 1200 × 1236 | Interactive stack media |
| `01-school-support-notes.webp` | 1200 × 1981 | Interactive stack media |
| `02-college-main.webp` | 1200 × 1214 | Interactive stack media |
| `02-college-support-notebook.webp` | 1200 × 1504 | Interactive stack media |
| `02-college-support-paper.webp` | 1200 × 2009 | Interactive stack media |
| `03-internship-main.webp` | 1200 × 1000 | Interactive stack media |
| `03-internship-support-code.webp` | 1200 × 1085 | Interactive stack media |
| `03-internship-support-architecture.webp` | 1200 × 830 | Interactive stack media |
| `04-startup-main.webp` | 1200 × 1008 | Interactive stack media |
| `04-startup-support-code.webp` | 1200 × 784 | Interactive stack media |
| `04-startup-support-team-note.webp` | 1200 × 1158 | Interactive stack media |
| `05-now-main.webp` | 1200 × 927 | Interactive stack media |
| `05-now-support-product-ui.webp` | 1200 × 614 | Interactive stack media |
| `05-now-support-dark-ui.webp` | 1200 × 1166 | Interactive stack media |
| `warm-paper-texture.webp` | 512 × 512 | Section texture |

Decorative SVGs are in `/assets/about-timeline/decor/`: leaf sprig, mountain sketch, red heart, green underline, red underline, and spark stars.

## Important
The supplied photographs are concept placeholders extracted from the approved render. Do not present them as real photographs of Chandan. Keep all paths in the timeline data config so they can later be replaced with real school, college, internship, startup, and current-life images.

Use individual media files for stack cycling. Use collage composites as no-JavaScript or static-preview fallbacks.

Build Polaroid borders, masking tape, push pins, torn notes, captions, shadows, and timeline labels with HTML/CSS. Do not bake important text into images.

Prefer WebP in the UI. Lazy-load, provide dimensions and `sizes`, use `object-fit: cover`, and reserve stack space to avoid layout shift.
