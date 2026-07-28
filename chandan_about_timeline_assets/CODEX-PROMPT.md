# Codex Task: Build Chandan Verma's Personal About Timeline

You are working inside my existing Chandan Verma portfolio frontend project. The project already contains a hero, startup/GT Restro experience section, projects section, and other sections.

Build or replace the About section using the approved personal timeline design in this package. Do not add a duplicate About section.

A folder named `chandan_about_timeline_assets` is in the project root. Read these files completely:
- `CODEX-PROMPT.md`
- `ASSET-GUIDE.md`
- `RESPONSIVE-AND-INTERACTION-SPEC.md`
- `about-timeline-design-tokens.css`
- `about-timeline-content.example.ts`
- `asset-manifest.json`

Use `about-timeline-reference-approved.png` as the approved desktop reference.

## First inspect the repository
Identify the framework, router, package manager, homepage, current About navigation target, image component, fonts, styling conventions, icons, animation utilities, lint/type-check/build commands. Reuse the existing architecture. Do not create a new application or add a second styling framework. Preserve all unrelated sections.

## Objective
Create a personal editorial About section, not a résumé, dashboard, bento grid, or generic carousel. The layout has a horizontal five-chapter timeline, layered messy photo collages, paper/tape/pin details, automatically reordered image stacks, and stable readable copy.

Preserve the current About section ID/navigation. Use `id="about"` only when no established ID exists.

## Install assets
Copy `public/assets/about-timeline` from this package into the application's actual public directory. Use WebP files and keep PNG fallbacks. Do not use the full reference as a background. Keep all text as real HTML.

## Truthfulness
The supplied people/place photographs are concept placeholders. Do not imply they are real photographs of Chandan. Keep media arrays centralized so they can later be replaced with real personal images. Use generic concept alt text until replacement.

## Five chapters
Use the data file as the editable source:
1. School — Curiosity Takes Shape
2. College — Learning to Build
3. Internship — Entering the Industry
4. First Startup — Becoming a Product Builder
5. Now & Next

Known professional details can be used: ARC Document Solutions internship (Jun 2024–Nov 2024), Java automation, Jenkins CI/CD, Agile and production support; Gorain Technology/GT Restro from Apr 2025, across cloud, Electron, mobile, shared backend, real-time workflows, payments, printing and restaurant operations.

Do not invent hometown, school name, college name, degree, or school/college dates. Keep incomplete fields generic and centralized.

## Header
Recreate the approved editorial header:
- handwritten `about me` eyebrow and thin line
- large deep-green serif `Moments That Shaped Me.`
- two short intro paragraphs
- subtle oval/underline around `meaningful work`
- red handwritten `Thanks for being here.` and red heart
- CSS-created pinned note: `Still curious. Still building. Always improving.`
- supplied mountain sketch in the upper-right

## Timeline
At desktop width use five equal columns connected by a horizontal line. Use dark green numbered nodes. Place each layered media stack below its node, then the chapter copy. Maintain symmetry and negative space. The startup stack may be slightly larger through transform only.

## Media stack interaction
Build reusable components such as `TimelineMediaStack`, `LayeredPhoto`, and `TimelineChapter`.
- Cycle the top image only while visible.
- Use 4.5–6.5 second intervals and different initial delays.
- Pause on hover/focus, expanded state, hidden tab and outside viewport.
- Disable autoplay for reduced motion.
- Reorder stack layers; do not use a generic cross-fade slideshow.
- Hover/focus: lift 8–12px, scale about 1.04, fan supporting images, deepen shadow, and keep text stable.
- Click/tap: accessible inline expansion or lightbox with all images and full chapter copy, previous/next controls, Escape-to-close and focus restoration.
- Use collage composite assets as static/no-JavaScript fallback.

## Visual system
Warm paper texture, refined green serif typography, muted body copy, red handwritten accents, Polaroid frames, tape, pins, torn notes, botanical sketches and soft realistic shadows. Use the provided texture and SVG decorations. Create tape, notes, Polaroid frames and captions with HTML/CSS rather than large raster images.

## Responsive
Follow the supplied specification exactly. Tablet becomes a two-column/stepped timeline. Mobile becomes a proper vertical timeline, disables autoplay until user interaction, provides explicit controls, uses minimum 20px padding, and has no horizontal overflow at 320px. Do not scale down the desktop canvas with transforms.

## Accessibility and performance
Semantic ordered timeline, correct headings, real buttons, visible focus, decorative details hidden from assistive tech, reduced-motion support, lazy-loaded images, intrinsic dimensions, accurate sizes, paused cycling outside viewport, and no heavy carousel dependency unless already installed.

## Validation
Test 1920×1080, 1440×900, 1366×768, 1024×768, 768×1024, 390×844 and 320×700. Confirm reference similarity, red thank-you accent, stable timeline, correct cycling/pause behaviour, focus/keyboard support, mobile vertical layout, no overflow, truthful placeholder handling, and unchanged existing sections.

Run formatter, lint, type-check and production build. Fix all introduced issues.

At the end report files created/modified, final asset paths, section ID/navigation, data location, incomplete personal fields, cycling/reduced-motion behaviour, commands and results, and remaining assumptions.
