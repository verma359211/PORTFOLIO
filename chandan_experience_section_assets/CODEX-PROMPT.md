# Codex task: Build the GT Restro first-year experience section

You are working inside my existing Chandan Verma portfolio frontend project.

A folder named `chandan_experience_section_assets` has been placed in the
project root. It contains:

- `CODEX-PROMPT.md`
- `ASSET-GUIDE.md`
- `RESPONSIVE-SPEC.md`
- `experience-design-tokens.css`
- `asset-manifest.json`
- `experience-section-reference-approved.png`
- `public/assets/experience/*`

## Before changing code

1. Inspect the existing application.
2. Identify its framework, router, homepage entry point, styling system,
   component conventions, package manager, linting and build commands.
3. Locate the existing hero section and all sections currently below it.
4. Locate the current Work, About, Experience and Contact navigation targets.
5. Reuse the project's current architecture and design system.
6. Do not create a new application.
7. Do not replace the existing hero.

Read these files completely:

- `chandan_experience_section_assets/ASSET-GUIDE.md`
- `chandan_experience_section_assets/RESPONSIVE-SPEC.md`
- `chandan_experience_section_assets/experience-design-tokens.css`
- `chandan_experience_section_assets/asset-manifest.json`

Use:

`chandan_experience_section_assets/experience-section-reference-approved.png`

as the approved desktop visual reference.

## Main objective

Build a responsive bento-grid portfolio section that showcases:

- my first year of real product-development experience
- the GT Restro restaurant SaaS platform
- what I personally worked on
- the technical and product skills I developed
- the stack I used
- a clear route into the GT Restro case study

This section must feel like part of a developer portfolio. It should not read
like a GT Restro marketing landing page.

Insert it immediately after the existing hero and give it:

`id="experience"`

Connect the existing Experience navigation item to this section.

## Asset installation

Copy or move the package's `public/assets/experience` contents into the
application's actual public assets directory.

The final browser paths should be:

- `/assets/experience/gtrestro-original-logo.webp`
- `/assets/experience/journey-team-illustration.webp`
- `/assets/experience/focus-handshake-illustration.webp`
- `/assets/experience/timeline-puzzle-hand.webp`
- `/assets/experience/contribution-team-illustration.webp`
- `/assets/experience/developer-reflection-avatar.webp`
- `/assets/experience/gtrestro-dashboard-laptop.webp`

Use WebP in the UI. Keep PNG files as source/fallback assets.

Do not use the full reference image as a section background.

All text, buttons, metrics, labels, icons and cards must be real HTML/CSS.

## Content to implement

Centralize the copy and metric values in one configuration object so they can
be edited without searching through JSX.

### Journey card

Eyebrow:

`1 YEAR JOURNEY`

Heading:

`1 year. Real learning.`
`Building GT Restro.`

Style only `GT Restro.` in red.

Description:

`From idea to impact — I spent my first year building a real restaurant SaaS product and sharpening my full stack skills.`

Use:

`/assets/experience/journey-team-illustration.webp`

### Portfolio-focus card

Eyebrow:

`PORTFOLIO FOCUS`

Main message:

`Build real products.`
`Solve real problems.`
`Showcase real skills.`

Use the dark emerald surface and:

`/assets/experience/focus-handshake-illustration.webp`

This card explains the purpose of the section: demonstrating my ability through
a real production product.

### Timeline card

Eyebrow:

`TIMELINE`

Start label:

`MAR 2024`

End label:

`PRESENT`

Duration:

`12`

Duration copy:

`Months`
`of Building`

Footer:

`Learn. Build. Iterate. Ship.`

Use:

`/assets/experience/timeline-puzzle-hand.webp`

Keep the date values in the shared content object so I can correct them later
without changing layout code.

### Featured-project card

Eyebrow:

`FEATURED PROJECT`

Use the original supplied logo:

`/assets/experience/gtrestro-original-logo.webp`

Project title:

`GT Restro`

Subtitle:

`Restaurant SaaS / POS Platform`

Description:

`A full stack platform I helped build for restaurant operations, billing, kitchen workflow, inventory, QR ordering, analytics and more.`

Module pills:

- POS
- Inventory
- Kitchen
- Orders
- QR Ordering
- Analytics
- Staff
- More

The module pills must be real HTML and use small icons from the project's
existing icon library.

### Contribution card

Eyebrow:

`MY CONTRIBUTION`

Heading:

`What this project`
`says about my skills`

Skill statements:

- `Built and shipped real product features`
- `Improved full stack problem solving`
- `Designed reusable systems and data flows`
- `Developed product thinking and ownership`

Use:

`/assets/experience/contribution-team-illustration.webp`

Do not make unverified claims about user counts, revenue or business growth.

### Tech-stack card

Eyebrow:

`TECH STACK`

Use sharp SVG icons from the project's current icon library for:

- React
- Node.js
- Express
- MySQL
- Socket.IO
- PWA

If the project already uses an appropriate icon package, reuse it. Otherwise,
use compact typographic technology badges rather than importing raster logos.
Only add a small icon dependency if it is genuinely necessary and consistent
with the project.

### Reflection card

Eyebrow:

`WHAT I GAINED`

Reflection:

`This first year taught me how to build for real users, think in systems, and ship features that matter.`

Use:

`/assets/experience/developer-reflection-avatar.webp`

This is my own reflection. Do not present it as a fake customer testimonial.

The three small dots below the reflection are decorative and do not need to
behave like a carousel unless the existing site already has multiple
reflections.

### Next-step card

Eyebrow:

`NEXT STEP`

Copy:

`Continuing to build stronger products and grow as a full stack developer.`

CTA:

`View Case Study`

Use:

`/assets/experience/gtrestro-dashboard-laptop.webp`

Link to the existing GT Restro case-study route if it exists. If no route
exists, define the destination once in the content/config object and use a
temporary `#gtrestro-case-study` target. Do not scatter placeholder URLs.

### Bottom stats strip

Left statement:

`Learning. Building. Shipping.`

Supporting line:

`Turning first-year experience into stronger products.`

Metrics:

- `1` / `Year of Building`
- `10+` / `Core Modules`
- `Real` / `Product Experience`
- `Growing` / `Every Day`

Use the existing icon library for the rocket, people, briefcase and growth
icons. Do not turn these metrics into images.

## Visual direction

Follow the approved reference closely:

- warm cream page background
- off-white card surfaces
- deep emerald primary color
- vivid red accent cards and headings
- black/dark green body copy
- subtle warm shadows
- thin low-contrast borders
- rounded bento cards
- playful line-art illustrations
- bold but clean sans-serif typography
- compact uppercase card eyebrows with a green status dot
- generous negative space
- a crafted editorial feel consistent with the existing hero

Reuse the color tokens from the existing hero where possible. If the hero
already contains cream and emerald CSS variables, extend those rather than
creating competing values.

Use the supplied `experience-design-tokens.css` only as a starting point and
integrate it into the project's existing token system.

## Desktop layout

Use CSS Grid and the exact grid-area logic in `RESPONSIVE-SPEC.md`.

At 1180px and above:

- 12-column grid
- journey card: 8 columns
- focus card: 4 columns
- timeline, project and contribution cards: 4 columns each
- tech, reflection and next-step cards: 4 columns each
- stats strip: all 12 columns

Do not implement the section as one screenshot or canvas.

The top journey card should have copy on the left and the illustration on the
right.

The timeline card should use a red outer card with a cream inner panel.

The focus and reflection cards should use dark emerald backgrounds.

The featured-project card must use the original fork-and-leaf GT Restro logo,
not a generated or substitute logo.

## Tablet and mobile

Implement every rule in `RESPONSIVE-SPEC.md`.

Key requirements:

- tablet becomes a deliberate 2-column bento layout
- mobile becomes a single-column reading experience
- no horizontal overflow at 320px
- card content must not overlap
- illustrations stay sharp and use `object-fit: contain`
- module pills wrap cleanly
- stats reorganize into readable groups
- maintain at least 20px horizontal padding on mobile
- do not merely scale down fixed desktop coordinates

Test at:

- 1920 × 1080
- 1440 × 900
- 1366 × 768
- 1024 × 768
- 768 × 1024
- 390 × 844
- 320 × 700

## Component structure

Adapt names to existing conventions, but prefer focused components such as:

- `ExperienceShowcaseSection`
- `JourneyCard`
- `PortfolioFocusCard`
- `ExperienceTimelineCard`
- `FeaturedProjectCard`
- `ContributionCard`
- `TechStackCard`
- `ReflectionCard`
- `NextStepCard`
- `ExperienceStatsStrip`

A data-driven card configuration is welcome where it improves maintenance, but
do not over-abstract cards that have meaningfully different layouts.

## Accessibility

- Use a semantic `section`.
- Use a real section heading containing both `first year` and `GT Restro`.
- Decorative illustrations should have appropriate empty alt text when their
  meaning is already expressed in nearby text.
- Meaningful illustrations should have concise alt text.
- All CTA elements must be real links or buttons.
- Do not use clickable `div` elements.
- Ensure visible keyboard focus.
- Preserve sufficient color contrast.
- Mark purely decorative dots and flourishes as `aria-hidden="true"`.

## Image performance

This section appears below the hero, so its images may normally be lazy-loaded.

When the framework has an optimized image component:

- use it
- provide intrinsic dimensions
- use accurate `sizes`
- reserve layout space
- prefer WebP paths
- use `object-fit: contain`

Do not stretch or crop the supplied illustrations.

## Motion

Use restrained viewport-entry motion only:

- opacity from 0 to 1
- translateY from 12–18px to 0
- a short card stagger
- subtle card lift on pointer hover

Respect `prefers-reduced-motion`.

Do not add continuous bouncing, spinning, cursor-following or heavy parallax.

## Code quality

- Reuse the existing stack.
- Do not introduce a second styling system.
- Avoid large inline-style objects.
- Use `clamp()`, CSS Grid and sensible breakpoints.
- Keep content in a single editable config.
- Keep project links in one config/constants location.
- Preserve all sections already below the hero.
- Do not modify unrelated pages.
- Do not make broad global CSS changes that could break the existing hero.
- Scope section styles carefully.

## Validation workflow

1. Inspect the current project.
2. Read all package documentation.
3. install/copy assets into the correct public path.
4. Build the section below the existing hero.
5. Connect the Experience navigation item.
6. Implement desktop, tablet and mobile layouts.
7. Compare the desktop result against the approved reference.
8. Verify the original logo is used.
9. Run formatter, lint, type check and production build.
10. Fix every issue introduced by this work.

## Acceptance criteria

The work is complete only when:

- the new section appears directly after the existing hero
- it clearly showcases my experience and skills, not only the GT Restro product
- the approved bento hierarchy is recognizable
- the original GT Restro logo is used
- all supplied assets are crisp and undistorted
- desktop, tablet and mobile layouts are intentionally designed
- there is no horizontal overflow
- the section is keyboard-accessible
- the project builds successfully
- existing portfolio sections remain intact

At the end, report:

- files created and modified
- asset files copied and their final browser paths
- the section ID and navigation connection
- the GT Restro case-study link used
- lint/type-check/build commands and results
- any content values left centralized for later correction
