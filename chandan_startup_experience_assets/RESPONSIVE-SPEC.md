# Startup Experience Section Responsive Specification

This section replaces the current GT Restro/first-year experience section.
Preserve its existing navigation target. Use `id="experience"` only if no
stable section ID already exists.

## Desktop — 1180px and above

Use a 12-column grid:

- Left narrative column: columns 1–4
- Core contribution card: columns 5–7
- Featured project card: columns 8–12
- Focus card: columns 5–9
- Impact card: columns 10–12
- Technology strip: columns 5–12

The left narrative column spans both major rows and contains:

- eyebrow
- large three-line heading
- supporting line
- decorative green stroke
- developer illustration anchored near the bottom

The featured project card is the largest card in the top row.

The focus card must be visibly wider than the impact card.

The technology strip should be thinner than the earlier design:

- height around 112–132px on desktop
- no visible `TECH STACK` heading
- icon and name only
- consistent spacing and separators

## Tablet — 700px to 1179px

Use a 2-column grid:

1. Left narrative — span 2
2. Core contribution — span 1
3. Featured project — span 1
4. Focus — span 2
5. Impact — span 2
6. Technology strip — span 2

At wider tablets, keep the narrative text and developer illustration side by
side internally.

The technology strip wraps into two rows when needed.

## Mobile — below 700px

Use this order:

1. Eyebrow
2. Heading
3. Supporting line
4. Developer illustration
5. Core contribution
6. Featured project
7. Focus
8. Impact
9. Technology icon grid

Requirements:

- Minimum 20px horizontal padding
- No horizontal overflow at 320px
- All cards full width
- Dashboard screenshot uses `object-fit: contain`
- Focus illustration may move below the list
- Technology icons form a 3-column or 2-column grid
- Core contribution and impact descriptions remain visible
- No content should depend on hover

## Motion and interaction

Core contribution items:

- subtle pale-green hover/focus surface
- icon moves no more than 3px
- visible keyboard focus

Featured project:

- screenshot may scale to 1.01–1.015
- arrow moves 3px
- whole card may be a semantic link when appropriate

Focus list:

- check icons animate in once when entering viewport
- target illustration may rotate by 1–2 degrees on hover
- no continuous movement

Technology icons:

- subtle lift and label emphasis on hover/focus
- no large scaling
- respect `prefers-reduced-motion`

## Test sizes

- 1920 × 1080
- 1440 × 900
- 1366 × 768
- 1024 × 768
- 768 × 1024
- 390 × 844
- 320 × 700
