# GT Restro Showcase Responsive Specification

The section replaces the current, overly dense GT Restro startup-experience
section. Preserve the existing navigation target or section ID used by the
portfolio. Default to `id="experience"` when no existing ID is present.

## Large desktop — 1280px and above

Use a spacious 12-column layout:

- Intro and capability highlights: columns 1–4
- Device composition: columns 4–9
- What-I-built list and trial card: columns 10–12
- Technology strip: columns 1–12

The device composition may overlap the intro/feature column slightly, but it
must never cover text.

Recommended balance:

- intro: approximately 29–31%
- devices: approximately 43–46%
- right rail: approximately 24–27%

Keep the central device composition smaller than in the earlier version.
It should feel like the visual focus without filling the entire screen.

Use generous section padding and consistent vertical alignment.

## Tablet — 700px to 1279px

Use this reading order:

1. Eyebrow, heading and description
2. Four capability highlights
3. Device composition
4. Platform labels
5. What-I-built items
6. Trial card
7. Technology stack

At wider tablet sizes, place What-I-built and the trial card in a two-column
row below the device composition.

Capability highlights should form a 4-column or 2×2 grid.

The What-I-built list may use two columns at approximately 900px and above.

## Mobile — below 700px

Use a single column:

1. Eyebrow
2. Heading
3. Description
4. Capability highlight grid
5. Device composition
6. Platform labels
7. What-I-built interactive items
8. Free-trial card
9. Technology stack
10. Closing statement

Requirements:

- Minimum 20px horizontal page padding
- No horizontal overflow at 320px
- Device composition uses `object-fit: contain`
- Platform labels wrap into a 2-column grid
- What-I-built items remain real buttons/cards with visible focus states
- Trial CTA becomes full width
- Technology stack becomes a wrapped icon grid, not a horizontal overflow strip
- Keep text readable without fixed desktop coordinates

## Interaction

What-I-built items:

- Each item is a focusable card or button-like disclosure.
- Hover/focus reveals the short description.
- Icon moves or rotates only 2–4px.
- Background changes from transparent to a soft green.
- Do not require hover to access important information on mobile.
- The description should be visible by default on mobile or available via an
  accessible disclosure button.

Capability highlights and platform labels:

- Slight icon movement or background tint on hover/focus
- No continuous animation

Trial card:

- Gift icon gains a subtle scale effect on hover
- CTA arrow moves 3–4px
- Respect `prefers-reduced-motion`

## Required test sizes

- 1920 × 1080
- 1440 × 900
- 1366 × 768
- 1024 × 768
- 768 × 1024
- 390 × 844
- 320 × 700
