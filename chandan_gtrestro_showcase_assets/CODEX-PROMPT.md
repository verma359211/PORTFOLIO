# Codex Task: Rebuild the GT Restro Startup Experience Section

You are working inside my existing Chandan Verma portfolio frontend project.

The portfolio already contains:

1. An editorial hero section
2. A GT Restro startup/experience section
3. A projects section and other sections below it

The current GT Restro experience section feels too dense and overwhelming.

Replace that existing section with a cleaner, spacious, light-mode GT Restro
showcase based on the supplied approved reference.

A folder named `chandan_gtrestro_showcase_assets` has been placed in the
project root. It contains:

- `CODEX-PROMPT.md`
- `ASSET-GUIDE.md`
- `RESPONSIVE-SPEC.md`
- `gtrestro-showcase-design-tokens.css`
- `gtrestro-showcase-content.example.ts`
- `asset-manifest.json`
- `gtrestro-showcase-reference-approved.png`
- `public/assets/gtrestro-showcase/*`

## Inspect the project before changing code

1. Identify the framework, router, styling system and package manager.
2. Locate the homepage and the current GT Restro experience section.
3. Determine the current section ID and navigation link used for Experience.
4. Find any existing GT Restro case-study route and project URL constants.
5. Identify the existing icon package, animation utilities and image component.
6. Reuse the current architecture and conventions.
7. Do not create a new project.
8. Do not add a second styling system.
9. Preserve the hero, projects section and every unrelated section.

Read these files completely:

- `chandan_gtrestro_showcase_assets/ASSET-GUIDE.md`
- `chandan_gtrestro_showcase_assets/RESPONSIVE-SPEC.md`
- `chandan_gtrestro_showcase_assets/gtrestro-showcase-design-tokens.css`
- `chandan_gtrestro_showcase_assets/gtrestro-showcase-content.example.ts`
- `chandan_gtrestro_showcase_assets/asset-manifest.json`

Use:

`chandan_gtrestro_showcase_assets/gtrestro-showcase-reference-approved.png`

as the approved desktop reference.

## Main objective

Replace the existing GT Restro experience section rather than adding a
duplicate section.

Preserve its current navigation target. If the current implementation has no
stable ID, use:

`id="experience"`

The new section should explain what I built during my first startup experience:

- a cloud restaurant-management application
- an Electron desktop POS
- mobile and tablet experiences
- shared Node/Express backend APIs
- MySQL-backed data workflows
- real-time Socket.IO updates
- offline-compatible desktop behavior
- connected operational modules such as POS, orders, kitchen, inventory,
  reports, QR ordering and administration

The design must focus on my engineering contribution and startup experience,
not only market GT Restro as a product.

## Install the supplied assets

Copy:

`chandan_gtrestro_showcase_assets/public/assets/gtrestro-showcase`

into the application's real public assets directory.

Preferred centre visual:

`/assets/gtrestro-showcase/gtrestro-device-composite.webp`

Optional individual assets:

- `/assets/gtrestro-showcase/gtrestro-cloud-dashboard-laptop.webp`
- `/assets/gtrestro-showcase/gtrestro-mobile-ordering.webp`
- `/assets/gtrestro-showcase/gtrestro-electron-pos-tablet.webp`

Original logo:

`/assets/gtrestro-showcase/gtrestro-logo-original.webp`

Do not use the complete reference screenshot as a page background.

All headings, descriptions, labels, buttons, icons and technology names must
remain real HTML.

## Visual direction

Match the approved reference:

- light mode
- warm cream/off-white background
- dark charcoal typography
- deep GT Restro green
- restrained lime-green emphasis
- thin green borders
- generous white space
- a smaller centre device composition
- balanced three-column desktop structure
- symmetric vertical and horizontal alignment
- a subtle rounded section container
- no dark full-section background
- no large bento wall
- no unnecessary cards around every line of text
- no glassmorphism
- no excessive decoration

The section should feel calm, mature, credible and product-focused.

Integrate the supplied design tokens into the portfolio's current token system
instead of making broad global CSS changes.

## Content

Centralize all content in one data/config object.

Start with:

`chandan_gtrestro_showcase_assets/gtrestro-showcase-content.example.ts`

### Eyebrow

`MY FIRST STARTUP JOURNEY`

### Heading

`I Built GT Restro`
`for Real-World`
`Restaurant Operations.`

Style only `GT Restro` in green.

### Description

`A complete restaurant management platform I helped build in a startup environment — spanning cloud web apps, an Electron POS, shared backend APIs, and real operational workflows.`

## Left capability highlights

Display four compact, evenly spaced capability items:

- All-in-One Platform
- Real-time Sync
- Offline Compatible
- Secure & Scalable

Use interactive SVG icons from the existing icon library.

Suggested Lucide icons:

- `LayoutGrid`
- `RefreshCw`
- `WifiOff`
- `ShieldCheck`

Interaction:

- hover/focus adds a pale-green surface
- icon shifts or rotates by only 2–4px
- visible keyboard focus
- no continuous animation

These can be non-link interactive informational items. Use semantic markup and
do not create misleading links.

## Centre product composition

Use:

`/assets/gtrestro-showcase/gtrestro-device-composite.webp`

The image shows:

- cloud dashboard on laptop
- mobile ordering application
- Electron/POS experience on tablet

Requirements:

- smaller than the earlier version
- centered within its column
- full composition visible
- `object-fit: contain`
- no crop
- subtle shadow only
- reserve aspect ratio
- use the framework's image component
- lazy-load because this is below the hero

Below the image, show four platform labels:

- Cloud Website
- Shared Backend
- Electron Desktop
- Mobile & Tablet

Use SVG icons and small dot separators on desktop.

Suggested icons:

- Cloud
- Server
- Monitor
- Smartphone

On mobile, convert labels into a two-column grid instead of a single horizontal
line.

## Right: What I built

Heading:

`What I built`

Create five interactive feature rows/cards:

1. `Complete restaurant management system`
2. `POS, orders, kitchen, inventory & reports`
3. `Shared backend powering multiple apps`
4. `Real-time updates with Socket.IO`
5. `Built for day-to-day operational use`

Use these suggested icons:

- Store
- ClipboardList
- CloudCog
- Zap
- UsersRound

Each item should include a short supporting description from the shared content
file.

Desktop interaction:

- default view shows icon and title
- hover or keyboard focus reveals/emphasizes the supporting description
- item receives a pale-green background and slight horizontal movement
- keep the layout stable; do not cause the entire section to jump

Mobile:

- supporting descriptions should be visible by default or exposed using an
  accessible disclosure interaction
- do not rely on hover

Do not use checkmark bullets for all items. The icon for each item should
visually represent its function.

## Trial card

Use a clean bordered card beneath the What-I-built items.

Icon:

Use an interactive `Gift` SVG icon.

Copy:

- `Try GT Restro`
- `30-DAY FREE TRIAL`
- `Explore the platform, features and workflows firsthand.`

Primary CTA:

`Visit Website`

Destination:

`https://gtrestro.com`

Display:

`www.gtrestro.com`

The CTA must be a real external link.

Use:

- `target="_blank"`
- `rel="noreferrer noopener"`
- an accessible label such as `Visit GT Restro and start the 30-day free trial`

Interaction:

- gift icon scales subtly
- CTA arrow moves 3–4px
- border becomes slightly stronger
- respect reduced motion

Do not add credit-card claims, cancellation claims or pricing unless those are
explicitly supplied elsewhere in the project.

## Technology strip

Use one full-width technology strip at the bottom.

Do not use raster technology logos.

Render sharp SVG brand icons from the existing icon library.

Default stack to display:

- React
- Vite
- Node.js
- Express
- MySQL
- Socket.IO
- Electron
- Redis
- PWA

Important:

Inspect the repository before finalizing the stack.

- Remove technologies not actually used.
- Add verified technologies when relevant.
- Do not show TypeScript or Tailwind CSS merely because they appeared in an
  earlier visual render.
- Keep the stack values in the shared content/config object.

Suggested icons:

- `SiReact`
- `SiVite`
- `SiNodedotjs`
- `SiExpress`
- `SiMysql`
- `SiSocketdotio`
- `SiElectron`
- `SiRedis`
- an installable-app or mobile icon for PWA

At the far right, include:

- `Secure. Reliable. Scalable.`
- `Built for real restaurant operations.`

Use a `ShieldCheck` icon.

On smaller screens, let the stack wrap into a balanced icon grid.

## Desktop layout

Follow `RESPONSIVE-SPEC.md`.

At large desktop widths, use a spacious 12-column layout:

- intro: left
- devices: centre
- What-I-built and trial: right
- technology strip: full width below

Keep the device image slightly smaller than the available centre column.

Use consistent top alignment for:

- heading block
- device composition
- What-I-built heading

The trial card should align visually with the lower part of the device
composition.

The entire section should appear symmetric and intentionally spaced.

## Responsive behavior

Implement all requirements in `RESPONSIVE-SPEC.md`.

Tablet:

- intro above or beside device composition depending on width
- capability highlights in 4 columns or 2×2
- device composition full width
- What-I-built and trial may form a two-column row
- tech stack wraps cleanly

Mobile:

- one-column reading order
- no fixed absolute positioning
- device composition fully visible
- What-I-built descriptions accessible without hover
- trial CTA full width
- technology icons in a wrapped grid
- no horizontal overflow at 320px
- at least 20px page padding

## Component structure

Adapt to repository conventions, but prefer focused components such as:

- `GTStarterExperienceSection`
- `ShowcaseIntro`
- `CapabilityHighlights`
- `GTDeviceComposition`
- `PlatformLabels`
- `WhatIBuiltList`
- `WhatIBuiltItem`
- `FreeTrialCard`
- `TechnologyStrip`

Keep all content and URLs in one configuration file.

Do not create one giant JSX component with hundreds of lines of repeated
markup.

## Accessibility

- semantic section
- proper heading hierarchy
- meaningful alt text:
  `GT Restro cloud dashboard, mobile ordering app and Electron POS shown across laptop, phone and tablet`
- real links
- visible focus styles
- interactive informational items keyboard accessible
- decorative dots hidden from assistive technology
- sufficient contrast
- no clickable divs
- no hover-only essential content on mobile

## Motion

Use restrained motion:

- section content fades and rises 12–16px on entry
- device composition fades and scales from approximately 0.985 to 1
- interactive icons move only a few pixels
- no continuous animation
- no bouncing
- no heavy parallax
- respect `prefers-reduced-motion`

## Integration constraints

- replace the current GT Restro experience section
- do not add a second duplicate section
- preserve the current section ID/navigation behavior
- leave the hero unchanged
- leave the Projects section unchanged
- preserve every unrelated page and component
- scope all new styles
- avoid broad global CSS changes
- reuse the existing font system

## Validation

Test at:

- 1920 × 1080
- 1440 × 900
- 1366 × 768
- 1024 × 768
- 768 × 1024
- 390 × 844
- 320 × 700

Confirm:

- the result matches the approved light-mode composition
- spacing is symmetric
- the device composition is not oversized
- no horizontal overflow
- icons are sharp SVGs
- free-trial link works
- What-I-built items work with mouse and keyboard
- mobile users can access descriptions without hover
- current navigation still reaches the section
- existing hero and Projects sections remain unchanged
- production build passes

Run:

- formatter
- lint
- type-check
- production build

Fix every issue introduced by this implementation.

At the end, report:

1. Files created
2. Files modified
3. Assets copied and final browser paths
4. Existing section replaced
5. Section ID/navigation preserved
6. GT Restro external URL configured
7. Technology stack finally displayed
8. Commands run
9. Lint/type-check/build results
10. Any remaining assumptions
