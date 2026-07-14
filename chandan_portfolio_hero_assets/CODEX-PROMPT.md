# Codex task: Build Chandan Verma's portfolio hero section

You are working inside my existing portfolio frontend repository.

## First step

Inspect the existing project before writing code:

1. Identify the framework, routing system, styling approach, package manager, linting rules, aliases and existing component conventions.
2. Reuse the current stack and conventions instead of replacing them.
3. If this is an empty project, use React with Next.js App Router, TypeScript and CSS Modules or Tailwind CSS. Use Framer Motion only when it is already installed or can be added cleanly.
4. Run the existing lint, type-check and build commands after implementation.

## Reference and assets

Use the supplied approved screenshot as the visual reference:

- `hero-reference-approved.png`

Use these local image assets:

- `/public/assets/hero/chandan-developer-fisheye.webp`
  - Main centre artwork.
  - Transparent background.
  - Display it with `object-fit: contain`.
  - Preserve its original illustrated, warm, hand-drawn aesthetic.
- `/public/assets/hero/gtrestro-project-cover.webp`
  - Image inside the featured GT Restro project card.
- PNG alternatives are available in the same folder.
- Use the CSS variables from `hero-design-tokens.css`, or move them into the project's global theme file.

Do not hotlink images. Do not bake any page text into an image. All headings, labels, buttons and navigation must remain real HTML.

## Goal

Recreate the approved hero closely, but as a polished, responsive, production-ready portfolio section for:

- Name: Chandan Verma
- Role: Full Stack Developer & Product Builder
- Featured product: GT Restro
- Background statement: CREATE

The page should feel editorial, crafted and premium—not like a generic SaaS landing page.

## Exact hero copy

Logo / monogram:

`CV`

Navigation:

- Work
- About
- Experience
- Contact

Role label:

`FULL STACK DEVELOPER &`
`PRODUCT BUILDER`

Intro:

`I build thoughtful digital products`
`with code, design,`
`and systems thinking —`
`from idea to impact.`

Large background word:

`CREATE`

Large name:

`CHANDAN`
`VERMA`

Featured project:

- Eyebrow/title: `GT Restro`
- Project name: `GT Restro`
- Category: `Restaurant SaaS / POS Platform`
- Accessible action label: `View GT Restro case study`

CTA card:

- Main copy: `Let's build something meaningful together.`
- Action: `START A PROJECT`

Copyright:

`©2026`

## Desktop composition

Match the approved screenshot at approximately 1440 × 900 and scale fluidly beyond it.

### Overall

- Full viewport hero with `min-height: 100svh`.
- Warm ivory background, approximately `#f4efe7`.
- Deep emerald typography, approximately `#0a3028`.
- Use a restrained sans-serif such as the project's current font, Inter, Manrope, Geist or a comparable grotesk.
- Add a subtle editorial grid using CSS pseudo-elements or layered gradients.
- Grid lines must be thin and quiet, not decorative noise.
- Add small crosshair intersections at selected grid points using CSS, not image assets.

### Header

- Height around 88–96px on desktop.
- `CV` monogram aligned left.
- Navigation distributed across the top.
- Circular emerald menu button aligned right.
- Use a simple three-line icon built with CSS or the project's icon library.
- Header is transparent and integrated into the grid.

### Background word

- Place `CREATE` behind the foreground content.
- Uppercase, very large, bold, tightly tracked.
- Size should use `clamp()`, roughly 11–15vw on desktop.
- Opacity around 0.045–0.075.
- It must remain readable as a shape but never compete with the main content.
- Keep it as selectable HTML text.

### Left column

- Position the role label in the upper-middle area.
- Add a small emerald status dot before it.
- Place the intro copy below with generous breathing room.
- Place `©2026` above the name.
- Render `CHANDAN VERMA` in two large lines at the bottom-left.
- Use strong weight, tight line height around 0.84–0.90 and responsive `clamp()`.
- The name may overlap the centre artwork slightly, as in the reference, but must stay legible.

### Centre artwork

- Use `chandan-developer-fisheye.webp`.
- It is the main visual anchor.
- Display around 700–820px on large desktop, responsive through `clamp()`.
- Preserve transparency.
- Keep the complete circular artwork visible.
- Allow a small controlled overlap with the name.
- Add only a very soft warm shadow or glow; do not put it in a visible card.
- Do not crop the artwork on desktop.
- Give the image a higher z-index than `CREATE` and lower z-index than the name where they overlap.

### Right column

Create two separate cards.

#### Featured project card

- Warm white translucent card.
- Rounded corners around 18–22px.
- Thin border and soft shadow.
- Header row: `GT Restro` on the left and an unobtrusive three-dot control on the right.
- Use the supplied GT Restro cover image with rounded corners.
- Footer contains a green dot, project name, category and a northeast arrow.
- Entire card should be a semantic link.
- Hover: lift 4–6px, slightly deepen shadow and move arrow diagonally.
- Keep the motion subtle.

#### Contact CTA

- Deep emerald card.
- White or warm-white text.
- A small star/spark symbol at the top.
- Main sentence split naturally across lines.
- Divider line.
- `START A PROJECT` and northeast arrow at the bottom.
- Link to the existing contact section or contact route.
- Hover: gentle brightness change and arrow movement.

## Responsive behaviour

### Tablet

- Preserve the editorial character.
- Reduce the centre illustration to roughly 52–62vw.
- Keep the left copy and centre art as the main composition.
- Move the right cards below or into a narrow side column depending on available width.
- Avoid covering text with the illustration.

### Mobile

At widths below roughly 700px:

1. Compact header with `CV`, one optional `Work` link and the menu button.
2. Keep `CREATE` in the background, smaller and partially cropped for visual interest.
3. Show role label and intro first.
4. Show the centre illustration at full available width.
5. Show `CHANDAN VERMA` below or partially overlapping the lower edge of the illustration without clipping.
6. Stack the project and CTA cards.
7. Use at least 20px horizontal padding.
8. No horizontal scrolling at 320px width.
9. Ensure all text remains readable without relying on the desktop absolute positioning.

Do not simply scale the desktop canvas down. Create a deliberate mobile composition.

## Interaction and animation

Use restrained entrance animation only:

- Grid and background word fade in.
- Main illustration fades and scales from about 0.985 to 1.
- Left copy and name rise by 12–20px.
- Right cards enter with a short stagger.
- Total entrance duration should feel quick and refined.
- No continuous spinning, bouncing or excessive parallax.
- Respect `prefers-reduced-motion`.

Add polished hover/focus states for navigation, cards and CTA.

## Accessibility

- Use semantic `header`, `nav`, `main`, `section`, headings and links.
- Main page heading should include `Chandan Verma`.
- Give the artwork meaningful alt text:
  `Illustration of Chandan working at a multi-screen development desk`
- The decorative `CREATE` text should be `aria-hidden="true"` if the same idea is represented elsewhere.
- Use visible keyboard focus states.
- Verify contrast.
- Menu button requires an accessible name and state.
- Do not use clickable `div` elements.

## Performance

- Use the framework's optimized image component where applicable.
- Preload or mark the centre hero image as high priority.
- Supply correct `sizes`.
- Prefer the provided WebP assets and keep PNG as fallback/source material.
- Do not lazy-load the primary centre artwork.
- Avoid large JavaScript animation libraries unless already present.
- Avoid layout shift by reserving image dimensions/aspect ratios.

## Suggested component structure

Adapt names to the existing project:

- `PortfolioHero`
- `PortfolioHeader`
- `HeroIntroduction`
- `HeroArtwork`
- `FeaturedProjectCard`
- `ContactProjectCard`

Keep components focused. Do not over-engineer a one-section page.

## Implementation quality

- Avoid a giant component with hundreds of inline style declarations.
- Use reusable design tokens.
- Use `clamp()`, CSS grid and sensible breakpoints.
- Keep absolute positioning limited to the desktop art direction.
- Do not use canvas for the layout.
- Do not reproduce the screenshot as one background image.
- The result must remain editable and maintainable.

## Acceptance checklist

Before finishing, verify:

- The desktop view clearly matches the approved reference's hierarchy and spacing.
- `CREATE` is a subtle background word.
- The centre artwork is crisp, complete and not distorted.
- `CHANDAN VERMA` is the strongest textual element.
- The GT Restro and contact cards are real accessible links.
- The page has no horizontal overflow from 320px to 1920px.
- The hero works at 1366×768, 1440×900, 1920×1080, 768×1024 and 390×844.
- Keyboard navigation and reduced-motion mode work.
- Lint, type-check and production build pass.
- Provide a concise summary of changed files and any asset paths used.
