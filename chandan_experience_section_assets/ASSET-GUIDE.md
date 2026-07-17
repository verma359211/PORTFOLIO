# Experience section asset guide

All browser assets belong under:

`public/assets/experience/`

## Included files

| Asset | Dimensions | Purpose |
|---|---:|---|
| `gtrestro-original-logo.webp` | 1200 × 1258 | Original GT Restro fork-and-leaf logo; preferred optimized asset |
| `gtrestro-original-logo-source.png` | 332 × 348 | Original source supplied by the user; preserve unchanged |
| `journey-team-illustration.webp` | 2200 × 1444 | Top journey-card team illustration; transparent |
| `focus-handshake-illustration.webp` | 1800 × 1342 | Handshake illustration for the dark portfolio-focus card; transparent |
| `timeline-puzzle-hand.webp` | 1200 × 812 | Puzzle-piece hand illustration for the timeline card; transparent |
| `contribution-team-illustration.webp` | 1900 × 1273 | Team illustration for the contribution/skills card; transparent |
| `developer-reflection-avatar.webp` | 900 × 900 | Circular avatar for the reflection card |
| `gtrestro-dashboard-laptop.webp` | 1900 × 1110 | Laptop/dashboard illustration for the case-study CTA card; transparent |

PNG equivalents are included for every extracted illustration.

## Important implementation rules

- Use WebP files in the UI and retain PNG files as source/fallback.
- Do not use the full approved screenshot as a background.
- Do not embed headings, labels, metrics or buttons into images.
- Use the original GT Restro logo supplied in this package.
- The illustrations have transparent backgrounds and should use
  `object-fit: contain`.
- The extracted assets are intentionally oversized for crisp display on
  high-density screens.
- The original logo source is 332 × 348 and is already sufficient for its
  expected display size. A larger optimized version is included for convenient
  image-pipeline usage, but it does not replace the unchanged source.
- Build the decorative green lines, dots, icons, card surfaces and typography
  using CSS and the project's existing icon library.
- For tech-stack logos, prefer the project's existing icon package
  (`react-icons`, Simple Icons, Devicon, etc.) so they remain sharp SVGs.
