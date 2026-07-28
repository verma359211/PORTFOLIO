# Codex Task: Rebuild the Startup Experience / GT Restro Section

You are working inside my existing Chandan Verma portfolio frontend project.

The portfolio already contains a hero section, an experience/GT Restro section,
a projects section and other sections below it.

Replace the current experience/GT Restro section with the approved design
provided in this package.

A folder named `chandan_startup_experience_assets` has been placed in the
project root. It contains:

- `CODEX-PROMPT.md`
- `ASSET-GUIDE.md`
- `RESPONSIVE-SPEC.md`
- `startup-experience-design-tokens.css`
- `startup-experience-content.example.ts`
- `asset-manifest.json`
- `startup-experience-reference-approved.png`
- `public/assets/startup-experience/*`

## First inspect the existing project

Before changing code:

1. Identify the framework, router, styling approach and package manager.
2. Locate the homepage.
3. Locate the existing experience/GT Restro section.
4. Determine the section ID and navigation link currently used.
5. Locate any GT Restro case-study route.
6. Identify the current image component, icon library and animation utilities.
7. Reuse the existing conventions.
8. Do not create a new application.
9. Do not introduce a second styling system.
10. Preserve the hero, Projects section and every unrelated section.

Read these files completely:

- `chandan_startup_experience_assets/ASSET-GUIDE.md`
- `chandan_startup_experience_assets/RESPONSIVE-SPEC.md`
- `chandan_startup_experience_assets/startup-experience-design-tokens.css`
- `chandan_startup_experience_assets/startup-experience-content.example.ts`
- `chandan_startup_experience_assets/asset-manifest.json`

Use:

`chandan_startup_experience_assets/startup-experience-reference-approved.png`

as the approved visual reference.

## Main objective

Replace the current section rather than adding a duplicate.

Preserve its existing navigation target. Use `id="experience"` only when the
existing section has no stable ID.

The new section should communicate:

- my first year of real startup product development
- the work I did across frontend, backend and Electron
- the systems and operational problems I solved
- GT Restro as the featured production project
- the architecture and technologies behind the work

The section should feel like a portfolio case-study summary, not a marketing
landing page.

## Install supplied assets

Copy:

`chandan_startup_experience_assets/public/assets/startup-experience`

into the application's actual public assets directory.

Final browser paths:

- `/assets/startup-experience/startup-developer-illustration.webp`
- `/assets/startup-experience/gtrestro-dashboard-preview.webp`
- `/assets/startup-experience/focus-target-illustration.webp`

Use WebP in the UI and retain PNG files as source/fallback.

Do not use the approved reference as a section background.

All text, icons, links and labels must remain real HTML.

## Layout and hierarchy

Follow `RESPONSIVE-SPEC.md`.

At desktop width, use a 12-column grid:

- narrative and illustration on the left
- core contribution in the upper middle
- large featured GT Restro card in the upper right
- wide red focus card below the middle
- narrower impact card beside it
- thin technology strip across the lower-right area

The featured-project card must take more space than the core-contribution card.

The focus card must be wider than the impact card.

The technology strip must be thinner than previous versions and should not
display a visible `TECH STACK` heading.

## Narrative column

Eyebrow:

`1 YEAR OF BUILDING`

Heading:

`Building`
`Better`
`Every Day.`

Supporting line:

`Ideas. Code. Systems. Impact.`

Use the supplied illustration:

`/assets/startup-experience/startup-developer-illustration.webp`

Alt text:

`Illustration of a developer building software at a laptop`

Keep the illustration grounded near the bottom of the left column.

Use one short decorative green stroke beneath the supporting line.

## Core contribution card

Eyebrow:

`CORE CONTRIBUTION`

Create three rows:

1. `Full-stack feature delivery`
2. `Shared platform architecture`
3. `System thinking for operations`

Each row includes:

- relevant SVG icon
- title
- short supporting description
- subtle divider between rows

Suggested Lucide icons:

- `Code2`
- `Layers3`
- `Settings2`

Use the descriptions from the supplied content example.

Make rows mildly interactive:

- pale-green hover/focus background
- icon moves no more than 3px
- keyboard focus visible
- no misleading links when the items are informational

## Featured project card

Eyebrow:

`FEATURED PROJECT`

Title:

`GT RESTRO`

Subtitle:

`Restaurant SaaS / POS Platform`

Use:

`/assets/startup-experience/gtrestro-dashboard-preview.webp`

The card should be the largest top-row card.

Use a real link to the existing GT Restro case-study route when it exists.

If no case-study route exists:

- centralize the temporary route as `#gtrestro-case-study`
- do not scatter placeholders

Use a circular green arrow action near the right side.

Interaction:

- screenshot scales only slightly
- arrow moves 3px
- visible focus state
- no heavy animation

## Focus card

Eyebrow:

`WHAT I FOCUSED ON`

Use a red card with high-contrast white text.

Items:

- Offline-first data synchronisation
- Reliable payment webhook processing
- Real-time multi-device coordination
- Cross-device printing workflows
- Shared backend across multiple platforms
- Cloud media and CDN optimisation

Use accessible check icons.

Use:

`/assets/startup-experience/focus-target-illustration.webp`

Keep the list as real HTML.

The focus card should be noticeably wider than the impact card.

## Impact card

Eyebrow:

`IMPACT`

Use three outcome-oriented rows:

### Web, Desktop & Mobile

`A shared product experience delivered across cloud, Electron and mobile clients.`

Suggested icon:

`MonitorSmartphone`

### Real-time Coordination

`Live operational updates across orders, kitchen workflows and connected devices.`

Suggested icon:

`Zap`

### Built for Restaurant Operations

`Production workflows designed around real teams and daily operational use.`

Suggested icon:

`Store`

Do not use unverified numeric claims such as 100+ features or 20+ modules.

Keep this card narrower than the focus card.

## Technology strip

Do not render a visible `TECH STACK` title.

Use SVG brand icons and names for:

- React
- Node.js
- MySQL
- Socket.IO
- Redis
- Docker
- Electron

Preferred icon source:

- the project's existing icon package
- otherwise `react-icons/si`

Do not use raster technology logos.

The strip should be:

- thin
- dark emerald
- evenly spaced
- vertically centred
- responsive
- accessible

On mobile, convert it into a 2- or 3-column icon grid.

Verify the repository before finalizing the displayed stack.

## Content architecture

Start from:

`chandan_startup_experience_assets/startup-experience-content.example.ts`

Move all editable copy, routes, asset paths, impact entries and technologies
into one data/config file appropriate to the existing project.

Do not hardcode the same values across multiple components.

## Suggested component structure

Adapt names to the repository conventions:

- `StartupExperienceSection`
- `ExperienceNarrative`
- `CoreContributionCard`
- `FeaturedGTProjectCard`
- `FocusCard`
- `ImpactCard`
- `TechnologyStrip`
- `ContributionItem`
- `ImpactItem`

Do not create one oversized component with all logic and styles inline.

## Visual design

Match the approved reference:

- warm cream/off-white section background
- deep emerald heading
- white cards
- soft warm shadows
- thin low-contrast borders
- bright red focus card
- dark emerald technology strip
- rounded outer section container
- balanced symmetry
- generous spacing
- editorial typography
- clean, mature presentation

Reuse the portfolio's existing font system where possible.

Scope all styles to this section.

Do not make broad global CSS changes.

## Image handling

Use the framework's optimized image component where available.

The section is below the hero:

- lazy-load images
- provide intrinsic dimensions
- provide accurate `sizes`
- reserve aspect-ratio space
- use WebP
- do not distort images

Suggested fitting:

- developer illustration: `contain`
- target illustration: `contain`
- dashboard: `cover` or `contain` based on card dimensions, without cropping
  important UI

## Motion

Use restrained motion only:

- section content fades and rises 12–16px on entry
- short stagger between cards
- dashboard scales from approximately 0.99 to 1
- icons move a few pixels on hover/focus
- respect `prefers-reduced-motion`

Do not add continuous animation, bouncing, large parallax or cursor-following
effects.

## Accessibility

- semantic section
- proper heading hierarchy
- meaningful image alt text
- real links
- visible focus states
- no clickable divs
- decorative marks hidden from assistive technology
- sufficient contrast
- no hover-only essential content

## Integration requirements

- replace the existing section
- preserve its navigation behavior
- leave the hero unchanged
- leave the Projects section unchanged
- preserve all unrelated sections
- keep URLs centralized
- avoid unnecessary dependencies
- use the existing styling system

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

- the result closely matches the approved reference
- featured project receives the most top-row space
- focus card is wider than impact
- technology strip is thin and has no title
- Electron is included
- no horizontal overflow
- supplied images remain crisp and undistorted
- navigation still reaches the section
- existing sections remain intact
- keyboard navigation works
- production build passes

Run:

- formatter
- lint
- type-check
- production build

Fix every issue introduced by this work.

At the end, report:

1. Files created
2. Files modified
3. Assets copied and final browser paths
4. Existing section replaced
5. Section ID/navigation preserved
6. GT Restro case-study route used
7. Technologies displayed
8. Commands run
9. Lint/type-check/build results
10. Remaining assumptions
