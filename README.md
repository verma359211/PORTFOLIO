This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Theme previews

The homepage has a temporary **Light / Space / Blueprint** switcher at the bottom of the screen. Light is the default on every fresh visit; selections are not saved. Switching themes preserves the current page, form fields, and game state.

Space and Blueprint use inline SVGs and CSS animation. The pause button controls the new background decorations, and `prefers-reduced-motion` disables their animation automatically. Decorative elements do not receive pointer or keyboard input.

The preview controls and scenery live in `components/themePreview.tsx`, palette tokens in `app/theme-preview.css`, and section treatments in scoped CSS-module overrides. The original Light rules remain in place. To remove the preview UI, replace the `ThemePreview` wrapper in `app/page.tsx` with the original `main` element using the same `styles.pageSurface` class, and remove its import.

### Blueprint engineering showcase

Blueprint includes a two-column ScaleLab / Bug Tracer showcase after GT Restro, followed by three smaller project cards. The featured component and styles are in `components/engineeringShowcase.tsx` and `components/engineeringShowcase.module.css`. Light and Space display the smaller projects without the Blueprint-only highlights.

The `#projects` collection groups the two large Blueprint highlights with a compact continuation (`#more-projects`): Lab RAG, VideoMCQ and Banana Type. Cards use CSS/SVG concept sketches, share the selected glass finish and link to verified public repositories. Descriptions and links live in `lib/workbenchProjects.ts`; the continuation component is `components/workbenchProjects.tsx`. VideoMCQ links to the walkthrough listed by its README, while Banana Type links to the typing app listed by its repository. The previous placeholder gallery has been removed.

The traffic and investigation controls are local illustrative previews: they do not send reports or run load tests. Replace `ScalePreview` and `TracePreview` with real product captures when available. Project links are collected at the top of the component; evaluation claims retain their local/controlled-test context. The section stacks on mobile, supports keyboard controls and respects reduced motion.

Blueprint also has a temporary Card Finish selector: Drafting film, Frosted glass, Marker sketch, and the previous Color cards. The first three use amber/cyan accents and CSS/SVG white pen outlines on translucent surfaces. The selector applies to GT Restro cards, the engineering showcase and the project gallery. Frosted blur is disabled on mobile. Finishes are preview state and are not saved between visits.

Light finishes are also available: Light tracing paper, Light ice glass, and Light ivory marker. These use dark ink on pale translucent surfaces while preserving the blue page background; ice-glass blur is disabled on mobile.

Neutral translucent white finishes include Clear white glass (the current Blueprint default), Milky white glass, and White vellum. Their white base opacity increases from 54% to 76% to 88%; the page shows through beneath. Milky white blur is disabled on mobile.

### GT Restro startup story

The second section is a visual case study of the Founding Engineer / Full Stack Developer role. Three keyboard-accessible chapters cover product modules, backend performance and offline billing. The product chapter uses public GT Restro POS imagery, with provenance in `public/gtrestro/SOURCES.md`. Performance and scale figures come from the supplied résumé; the offline control is a local illustration. Additional security, production and technology details sit in an expandable panel. The old startup card grid has been replaced by `components/gtrestroStory.tsx` and its CSS module.

Résumé buttons share the Google Drive viewer URL in `lib/portfolioLinks.ts` and open in a new tab. The startup story uses an outer drafting-film frame; its role, chapter controls, contribution captions and metric labels have larger text, with stacked chapter controls on mobile.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
