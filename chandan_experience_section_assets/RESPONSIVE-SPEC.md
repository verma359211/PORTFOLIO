# Responsive layout specification

This section belongs immediately after the existing portfolio hero and uses
`id="experience"`.

## Desktop: 1180px and above

Use a 12-column CSS grid:

- Journey introduction: columns 1–8
- Portfolio focus: columns 9–12
- Timeline: columns 1–4
- Featured project: columns 5–8
- Contribution: columns 9–12
- Tech stack: columns 1–4
- Reflection: columns 5–8
- Next step: columns 9–12
- Stats strip: columns 1–12

Use the approved screenshot as the visual source of truth at approximately
1672 × 941. Keep the section max width around 1560–1640px.

## Tablet: 700px–1179px

Use a 2-column grid:

1. Journey introduction — span 2
2. Portfolio focus — span 2
3. Timeline — span 1
4. Featured project — span 1
5. Contribution — span 2
6. Tech stack — span 1
7. Reflection — span 1
8. Next step — span 2
9. Stats strip — span 2

The journey card should retain a two-part internal layout where space permits:
copy on the left and the team illustration on the right. At narrower tablet
widths, allow the illustration to sit below the heading.

The stats strip should become a 2 × 2 metric grid while retaining the intro
message above or beside it.

## Mobile: below 700px

Use one column in this exact reading order:

1. Journey introduction
2. Portfolio focus
3. Timeline
4. Featured project
5. Contribution
6. Tech stack
7. Reflection
8. Next step
9. Stats

Requirements:

- Minimum 20px horizontal page padding.
- No horizontal scrolling at 320px.
- Card padding: 20–24px.
- Card radius: 16–18px.
- Keep all text as HTML.
- The main team illustration may be 80–95% of the card width.
- The handshake, puzzle hand, contribution team and laptop images use
  `object-fit: contain`.
- Module pills should wrap naturally.
- Tech items should use a 3-column or 2-column icon grid.
- Stats become stacked or a 2-column grid.
- Do not reproduce the desktop layout with transforms or fixed pixel scaling.

## Typography

Use the current portfolio font system. If none exists:

- Heading: Manrope, Geist or Inter
- Body: Inter or Manrope

Use `clamp()` for major headings and keep line-height compact but readable.

## Motion

Use a subtle reveal when the section enters the viewport:

- Cards fade and rise 12–18px.
- Use a very short stagger.
- No continuous motion.
- Respect `prefers-reduced-motion`.
