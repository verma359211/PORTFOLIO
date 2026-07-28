# About Timeline — Responsive and Interaction Specification

## Desktop — 1180px and above
- Editorial header with handwritten `about me`, large serif heading, intro copy, red `Thanks for being here.`, pinned note, and mountain sketch.
- Five equal timeline columns connected by one horizontal line.
- Numbered green nodes align with each chapter.
- Layered photo stacks sit beneath each node.
- Descriptions remain stable beneath the collages.
- Startup chapter may scale slightly larger without changing grid widths.

## Automatic image-stack behaviour
- Start cycling only when the section is in the viewport.
- Reorder the top image every 4.5–6.5 seconds.
- Use a different initial delay for each chapter.
- Pause on hover, keyboard focus, expansion, hidden browser tab, or when outside the viewport.
- Disable automatic cycling with `prefers-reduced-motion: reduce`.
- Reorder the stack; do not implement a generic fading slideshow.

## Hover/focus
- Lift stack 8–12px.
- Scale to about 1.04.
- Fan supporting images outward by 3–8 degrees.
- Increase shadow depth.
- Keep text and timeline positions stable.

## Click/tap
- Expand inline or open an accessible lightbox.
- Show full chapter copy and all chapter images.
- Provide previous/next controls.
- Escape closes a modal and focus is restored.

## Tablet — 700px to 1179px
- Two-column chapter grid.
- Use a stepped or vertical timeline rail.
- Final chapter may span both columns.
- Keep layered photo treatment.

## Mobile — below 700px
- One vertical timeline.
- Image stack above chapter text.
- Minimum 20px horizontal padding.
- No horizontal overflow at 320px.
- Do not rely on hover.
- Disable autoplay until user interaction and provide explicit image controls.
- Keep the red `Thanks for being here.` near the introduction.

## Typography
Reuse current portfolio fonts. Suggested fallbacks:
- Serif: Cormorant Garamond or Libre Baskerville
- Sans-serif: Manrope or Inter
- Handwritten: Caveat
Do not distribute font files.

## Test sizes
1920×1080, 1440×900, 1366×768, 1024×768, 768×1024, 390×844, 320×700.
