# Proffs Trafikskola

Complete Swedish driving-school website built from scratch with Next.js App Router, React, TypeScript and Tailwind CSS v4. The supplied WordPress archive is used only as a factual source. No theme code, booking backend, analytics or WordPress runtime is shipped.

## Run

```sh
npm ci
npm run dev
```

Production:

```sh
npm run build
npm run start
```

To use an alternate port: `npm run start -- --port 3100`.

Node 22+ recommended. Dependencies are locked in package-lock.json. Font files are self-hosted; builds do not request Google Fonts. Use a Next-compatible Node host or Vercel. Do not deploy as a static-only file site: Next serves image optimization and permanent redirects.

## Routes

`/`, `/korlektioner`, `/kurser`, `/intensivkurs`, `/priser`, `/paket`, `/riskettan`, `/risktvaan`, `/handledarkurs`, `/teori`, `/taxiteori`, `/vagen-till-korkort`, `/om-oss`, `/kontakt`, `/boka`, `/villkor`.

Also `/sitemap.xml`, `/robots.txt`, and `/icon.svg`. Legacy mappings are implemented in next.config.ts and documented in seo-redirects.md.

## Editing

- `lib/data.ts`: business identity, contact information, source-based prices, service copy, photos and navigation.
- `lib/terms.json`: migrated school terms; coordinate changes with the booking provider.
- `lib/seo.ts`: metadata, LocalBusiness, Organization, Service, Offer, FAQ, WebPage and breadcrumb schemas.
- `components/`: reusable navigation, photography, pricing, FAQ, timeline, contact and booking components.
- `app/page.tsx`: homepage; `app/[slug]/page.tsx`: statically generated inner pages.
- `app/globals.css`: design tokens, component styling, responsive layouts and native animations. Tailwind is configured and available throughout; CSS tokens form the custom brand system.
- `source-audit/`: extracted source text and full page title/meta/link audit. These files are not in the public directory.

## Booking and contact

Course booking: https://www.trafikskolaonline.se/sv/skola/proffs/kurser

E-commerce: https://www.trafikskolaonline.se/sv/skola/proffs/ehandel

General booking buttons lead to `/boka`, where the user chooses the actual provider workflow. Test lessons use the verified school telephone. No form pretends to submit. Google Maps opens only after following the directions link; social links preserve the originals. The website itself sets no advertising or analytics cookies.

## Verification

```sh
npm run typecheck
npm run build
npx playwright install chromium
npm run start -- --port 3100
QA_URL=http://localhost:3100 npm run qa
```

An existing Chromium can be selected with `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

The QA script checks every sitemap route, status codes, unique titles, descriptions, canonicals, one H1, JSON-LD parsing, internal links, images, console errors, source price presence, redirects, 404s, robots, axe accessibility, mobile menu and reduced motion. It checks overflow at 375, 390, 768, 1024 and 1440px and produces screenshots in `test-results/` and a machine-readable `QA_RESULTS.json`.

## Launch

Resolve the actual content conflicts in CLIENT_CONFIRMATION_REQUIRED.md. Point the intended domain at the new deployment, retain HTTPS and the canonical apex hostname, verify provider price/terms consistency, run the QA script against the deployed host, and submit the sitemap in Search Console. Keep access to the previous WordPress system if historical Booknetic bookings need to be retrieved. No public deployment or DNS change has been made by this implementation.

## Design and assets

Manrope display + DM Sans body, self-hosted WOFF2 (SIL Open Font License; notices in public/fonts). Warm yellow `#f3c923`, near-black `#101010`, off-white `#f7f6f2`. Six supplied photos are integrated, with explicit dimensions and responsive Next Image variants. Photo treatment preserves the branded vehicle. Driving and speedometer images are not described as verified school vehicles.

Motion uses native CSS and IntersectionObserver. All content is server-rendered and visible without JavaScript. The system follows reduced-motion and color-scheme preferences. Controls and panels use a 6px radius; typography and spacing carry the visual hierarchy.
# proffsskola
