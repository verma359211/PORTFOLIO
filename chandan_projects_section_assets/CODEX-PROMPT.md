# Codex Task: Implement Chandan Verma's Projects Showcase Section

You are working inside my existing portfolio frontend repository.

The portfolio already contains:

1. An editorial hero section
2. A GT Restro experience section

A folder named `chandan_projects_section_assets` has been placed in the project root.

It contains:

- `CODEX-PROMPT.md`
- `ASSET-GUIDE.md`
- `RESPONSIVE-SPEC.md`
- `projects-design-tokens.css`
- `projects.data.example.ts`
- `asset-manifest.json`
- `projects-section-reference-approved.png`
- `public/assets/projects/*`

## First: inspect the existing application

Before writing code:

1. Identify the framework, router, styling system, package manager and build commands.
2. Locate the homepage and the existing hero and experience sections.
3. Locate the Work/Projects navigation item.
4. Locate any current project-detail pages, data files or shared card components.
5. Reuse existing fonts, utilities, icons and animation conventions.
6. Do not create a new application.
7. Do not replace or redesign the existing hero or experience section.
8. Do not introduce a second styling framework.

Read these files completely:

- `chandan_projects_section_assets/ASSET-GUIDE.md`
- `chandan_projects_section_assets/RESPONSIVE-SPEC.md`
- `chandan_projects_section_assets/projects-design-tokens.css`
- `chandan_projects_section_assets/projects.data.example.ts`
- `chandan_projects_section_assets/asset-manifest.json`

Use:

`chandan_projects_section_assets/projects-section-reference-approved.png`

as the approved visual reference.

## Main task

Implement a responsive Projects section directly after the existing Experience section.

Give it:

`id="projects"`

Connect the existing Work or Projects navigation link to this section.

The section must showcase five projects:

- Banana Type
- E-commerce Website
- DeployHub
- Bug Tracker
- RAG Pipeline

The final implementation should closely match the approved reference while remaining editable, responsive, accessible and maintainable.

## Install the supplied assets

Copy the package's:

`chandan_projects_section_assets/public/assets/projects`

contents into the application's actual public assets directory.

The final browser paths must be:

- `/assets/projects/banana-type-preview.webp`
- `/assets/projects/ecommerce-preview.webp`
- `/assets/projects/deployhub-preview.webp`
- `/assets/projects/bug-tracker-preview.webp`
- `/assets/projects/rag-pipeline-preview.webp`

Use WebP files in the UI.

Retain SVG and PNG files as editable masters/fallbacks.

Do not use the full approved reference image as a page background.

All headings, descriptions, stack names, links, buttons and project numbers must remain real HTML.

## Visual direction

Recreate the approved Neo-Brutalist editorial design:

- warm cream background
- oversized black uppercase heading
- lime highlight on the word `REAL`
- heavy black borders
- rectangular cards
- hard black offset shadows
- purple, lime, mint and cream project-preview surfaces
- bold compact labels
- high contrast
- minimal border radius
- playful CSS decoration in the upper-right
- no glassmorphism
- no generic soft SaaS cards

Integrate the supplied project tokens into the existing portfolio token system rather than making unrelated global changes.

## Section introduction

Label:

`PROJECTS`

Heading:

`THINGS I BUILD`
`SOLVE REAL PROBLEMS.`

Highlight only:

`REAL`

Supporting text:

`A collection of projects where I turn ideas into useful, scalable and impactful solutions.`

Create the upper-right decoration with HTML/CSS:

- lime square
- smaller purple square
- offset black shadow
- dotted pattern
- plus symbol
- three short black line marks

Do not create that decoration as an image.

Mark it decorative for accessibility.

## Project data

Use one centralized project-data file.

Start from:

`chandan_projects_section_assets/projects.data.example.ts`

Adapt it to the repository's language and conventions.

All project copy, screenshots, technology names, GitHub URLs and live URLs must be editable from this one data source.

The URLs in the supplied example are intentionally empty. Do not invent links.

When a URL is missing:

- do not navigate to `#`
- hide or intentionally disable the action
- retain balanced spacing
- make the missing value easy to add later

## Desktop layout

At 1280px and above:

- two-column grid
- Banana Type and E-commerce in row one
- DeployHub and Bug Tracker in row two
- RAG Pipeline in the left column of row three
- closing CTA in the right column of row three

Every project card:

- thick black border
- hard black offset shadow
- minimal or no corner radius
- split horizontally
- preview around 53%
- details around 47%
- project number positioned in a lime square at the top-left
- cream details panel
- no overlapping or tiny text

Details order:

1. Number
2. Project title
3. Project type
4. Description
5. GitHub and live actions
6. `TECH STACK`
7. Icon-based technology row

The cards should have consistent height within each row.

## Project actions

Every project supports:

- GitHub
- Live Demo, Live Site or View App

GitHub action:

- GitHub icon
- text `GitHub`
- accessible label such as `View Banana Type source code on GitHub`
- open external URLs in a new tab
- `rel="noreferrer noopener"`

Live action:

- external-link or link icon
- context-specific visible label
- accessible project-specific label

Use bordered Neo-Brutalist buttons.

Hover/focus:

- move 2px up and left
- shift or increase hard shadow
- visible keyboard focus
- no soft floating animation

## Technology stack

Do not use text-only tags.

Every technology must display:

- recognizable SVG icon
- visible technology name or accessible tooltip/label
- consistent size and alignment

Reuse the project's current icon library.

Prefer Simple Icons through `react-icons/si` when already installed.

Examples include:

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Next.js
- Node.js
- MongoDB
- Stripe
- Docker
- PostgreSQL
- Redis
- GitHub
- Express
- Socket.IO
- Python
- LangChain
- FAISS/Pinecone
- OpenAI
- FastAPI

Do not download random raster logos and do not use emoji.

Create a reusable `TechIcon` or `TechBadge` component.

## Card content

Use the descriptions and stack data from the supplied project-data template.

Keep the design portfolio-focused: explain the purpose and technical value of each project rather than sounding like an advertisement.

## Closing card

Create the closing card in the right column of the final row.

Use a bright lime surface, black border and hard shadow.

Text:

`BUILT WITH CURIOSITY.`
`SOLVED WITH CODE.`

Primary action:

`VIEW ALL PROJECTS`

Secondary action:

`SEE MORE ON GITHUB`

Keep their destinations in the same centralized data/config location.

Use no fake URLs.

## Responsive implementation

Implement every rule in `RESPONSIVE-SPEC.md`.

Important behavior:

### Tablet

- one project card per row
- preserve internal side-by-side layout when room permits
- RAG and CTA become separate full-width rows
- reduce shadow offsets slightly

### Mobile

- one card per row
- preview above details
- project number stays visible
- technology icons wrap cleanly
- buttons become full-width or equal two-column actions
- minimum 18–20px horizontal padding
- no horizontal overflow at 320px
- simplify or hide the top-right decoration when necessary
- preserve the thick borders and hard shadows

Do not shrink the desktop canvas with transforms.

## Components

Adapt names to the repository, but use focused reusable components such as:

- `ProjectsShowcaseSection`
- `ProjectsIntro`
- `ProjectCard`
- `ProjectPreview`
- `ProjectDetails`
- `ProjectActions`
- `TechIcon`
- `ProjectsClosingCard`

Do not create five copy-pasted card components.

## Image handling

Use the framework's optimized image component where available.

Images are below the hero, so:

- lazy-load them
- provide intrinsic dimensions
- provide accurate `sizes`
- reserve aspect-ratio space
- use the supplied WebP assets
- do not stretch or distort them

Suggested fitting:

- Banana Type: cover
- E-commerce: cover
- DeployHub: contain
- Bug Tracker: cover
- RAG Pipeline: contain

The SVG files are editable masters only and need not be rendered directly unless the framework handles them cleanly.

## Motion

Use restrained motion only:

- cards reveal with opacity and 12–16px upward movement
- short stagger
- cards shift 2–3px up and left on hover
- project preview may scale up no more than 1.015
- respect `prefers-reduced-motion`

No continuous floating, bouncing, parallax or cursor-following effects.

## Accessibility

- semantic section with `id="projects"`
- correct heading hierarchy
- meaningful image alt text
- real links, not clickable divs
- visible focus states
- decorative shapes marked `aria-hidden`
- technology icons hidden from screen readers when the visible label already names them
- sufficient contrast

## Integration requirements

- keep the existing hero unchanged
- keep the experience section unchanged
- preserve all sections after the new Projects section
- connect Work/Projects navigation to `#projects`
- scope all new styles
- do not make broad global CSS changes
- reuse existing fonts and utilities

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

- layout resembles the approved reference
- no horizontal overflow
- all supplied images are crisp and undistorted
- technology icons render
- links are correctly hidden or active based on their data
- keyboard navigation works
- existing sections are intact
- project cards remain readable
- production build succeeds

Run:

- formatter
- lint
- type-check
- production build

Fix every issue introduced by the implementation.

At the end, report:

1. Files created
2. Files modified
3. Assets copied and final browser paths
4. Section ID and navigation connection
5. Project URLs configured
6. Missing URLs still requiring values
7. Commands run
8. Lint/type-check/build results
