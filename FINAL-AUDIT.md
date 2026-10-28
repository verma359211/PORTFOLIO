# Portfolio final audit — 28 October 2026

## Result

The audited production build passes. No blocking issue was found in the homepage paths checked. Audit fixes are currently local, ready to review and commit.

## Fixed

- Replaced the school chapter's unfinished “will be added here” copy with a finished introduction.
- Contact API now validates types, required fields, email format, header line breaks, message length and body size before attempting SMTP. It returns meaningful HTTP errors, handles missing configuration, applies a best-effort per-instance cooldown and includes a honeypot.
- Contact UI now limits input lengths, prevents duplicate in-flight submissions and times out stalled requests. Mail sets the validated visitor address as Reply-To.
- Preserved incoming section URL anchors and safely ignores malformed encoded anchors.
- Added keyboard focus containment and focus restoration to the résumé reward dialog.
- Fixed ResizeObserver cleanup in the legacy star background.
- Added sitemap.xml, robots.txt and canonical metadata. The About page has its own title, canonical URL and primary heading.
- Fixed legacy About navigation destinations and removed a nested button/link. Updated the old introductory wording and deprecated image props.
- Added a keyboard skip link.
- Replaced deprecated `next lint` with the ESLint CLI.
- Updated the dependency lockfile, including Next.js 15.5.28 and Nodemailer 10.2.1. A PostCSS override uses the patched shared PostCSS version (8.5.32) instead of Next's vulnerable nested copy.

## Verification

- `npm run build`: passed; homepage first-load JavaScript reported as 223 kB by Next.js. This is a bundle measurement, not a Lighthouse score.
- `tsc --noEmit`: passed.
- `node --test scripts/test-feedback.cjs scripts/test-contact.cjs`: 13 tests passed. Includes real offline Nodemailer message composition; SMTP is mocked for route tests.
- `npm audit --omit=dev --audit-level=low`: zero reported vulnerabilities at audit time. Dependency tree resolves without invalid-package errors.
- ESLint: zero errors; five existing warnings in legacy components not used by the current homepage (ProjectCard, gallary, photo, ttt).
- All 40 timeline asset paths and 25 literal local asset references checked exist.
- GT Restro, ScaleLab, Bug Tracer, the target app, résumé URL, project repositories, Lab RAG architecture notes and Banana Type demo returned HTTP 200. This verifies reachability, not the complete behavior of those external apps.
- Local About, robots, sitemap, favicon, manifest and social-preview routes returned HTTP 200.
- Homepage DOM checks: one H1, no duplicate IDs, no broken internal anchors, no unnamed buttons and no failed loaded images.
- Desktop and 390/320 px checks: no page horizontal overflow. Both featured projects remain present across Light, Space and Blueprint themes.
- Work navigation scrolls to the project section. Mobile menu closes after selecting a section.
- School gallery advances images, closes with Escape and restores focus to its trigger.
- No browser console errors observed during the completed checks.

## Remaining / optional

1. **Manual email delivery check:** actual Gmail authentication and arrival in the inbox were not exercised. No real test message was sent. Submit one contact message and one feedback entry after deployment to verify the production environment credentials and delivery.
2. **Legacy cleanup:** five lint warnings remain in old, unused gallery/game/card components. They are not current-homepage failures. These can be modernized or archived separately without changing the active design.
3. **Optional source-media reduction:** some original photos in public are large (the largest school original is approximately 7.4 MB). The active timeline uses responsive Next Image and lazy loading, so these originals are not simply downloaded at full size by every visitor. Resizing archival originals could reduce repository/deployment size and cold image-processing work.
4. **Rate limiting:** email cooldowns are in-memory per server instance. Shared storage or an external anti-spam service is an optional improvement if anonymous submissions become abusive.

## Repeatable commands

```sh
npm run lint
npm run build
npx tsc --noEmit
node --test scripts/test-feedback.cjs scripts/test-contact.cjs
npm audit --omit=dev --audit-level=low
```
