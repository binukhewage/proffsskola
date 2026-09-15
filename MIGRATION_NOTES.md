# Migration notes

Audit date: 14 September 2026. Input archive: `proffstrafikskola.se 2.zip`. Archive export timestamps are 13-14 September 2026; original article modification dates range from 2024 to March 2026. Export date must not be mistaken for business-content freshness.

## Discovered public pages

| Source path | Original title | Modified |
| --- | --- | --- |
| / | Trafikskola Jakobsberg, Järfälla & Barkarby | Proffs Körskola | 2025-09-22T09:26:35+00:00 |
| /category/uncategorized/ | Uncategorized Archives - Proffs Trafikskola | Not supplied |
| /risktvaan/ | Risktvåan - Proffs Trafikskola | 2025-08-06T14:39:42+00:00 |
| /kontakt/ | Kontakt - Proffs Trafikskola | 2024-08-14T09:44:46+00:00 |
| /varavilkor/ | VåraVilkor - Proffs Trafikskola | 2026-03-13T09:20:01+00:00 |
| /author/admin/ | admin, Author at Proffs Trafikskola | Not supplied |
| /paketpris/ | PaketPris - Proffs Trafikskola | 2024-08-13T08:10:24+00:00 |
| /hello-world/ | Hello world! - Proffs Trafikskola | Not supplied |
| /kursertest/ | KurserTest - Proffs Trafikskola | 2024-09-18T15:44:35+00:00 |
| /vagen-till-korkort/ | Vägen Till Körkort - Proffs Trafikskola | 2024-09-13T09:22:04+00:00 |
| /intensivkurs/ | Intensivkurs Jakobsberg, Järfälla & Barkarby | Ta körkort med oss | 2025-04-29T07:24:36+00:00 |
| /handledarkurs/ | Handledarutbildning i Jakobsberg, Järfälla & Barkarby | 2025-08-06T14:36:04+00:00 |
| /priser/ | Priser - Proffs Trafikskola | 2025-04-29T07:25:32+00:00 |
| /kurserpris/ | KurserPris - Proffs Trafikskola | 2024-08-08T13:50:27+00:00 |
| /riskettan/ | Riskettan - Proffs Trafikskola | 2025-08-06T14:38:15+00:00 |
| /kurser/ | Kurser - Proffs Trafikskola | 2024-08-09T09:42:37+00:00 |
| /teori/ | Teori - Proffs Trafikskola | 2024-09-16T09:30:03+00:00 |
| /korlektioner/ | Körlektioner - Proffs Trafikskola | 2025-04-15T09:47:49+00:00 |
| /1307-2/ | - Proffs Trafikskola | 2024-09-18T15:35:43+00:00 |
| /e-handel/ | E-Handel - Proffs Trafikskola | 2025-05-17T16:34:20+00:00 |

## Architecture and preservation

See seo-redirects.md for every old/new route. All business topics are migrated, including taxiteori (expanded from homepage material into a dedicated page), full price tiers and terms. Navigation has been rebuilt around lessons, courses, intensive training, pricing and contact. Original metadata and outbound URLs are retained in source-audit/pages.json. Only homepage, intensive course and supervisor course had useful meta descriptions; every new route now has its own.

## Booking and integrations

- Trafikskola Online course booking: https://www.trafikskolaonline.se/sv/skola/proffs/kurser
- Trafikskola Online e-commerce: https://www.trafikskolaonline.se/sv/skola/proffs/ehandel
- Old e-handel embedded Körkortsjakten: https://iframe.korkortsjakten.se/1850. Direct school-specific provider links are used in the rebuild.
- Booknetic widgets existed in /1307-2 and /kursertest, relying on WordPress AJAX and an unavailable live database. They are replaced with a real provider choice page /boka, not a fabricated backend. Preserve access to historical bookings during cutover.
- Google Maps original address link retained; no third-party map loaded on page view.
- Original Facebook, Instagram and TikTok URLs retained exactly in lib/data.ts.
- Cloudflare Insights, Gravatar, Google Fonts, WordPress, Elementor and theme assets were audited but not migrated as runtime dependencies. No existing analytics conversion scheme was found in the supplied content.

## Business facts and evidence

- Address: Folkungavägen 10C, 177 56 Järfälla from /kontakt. Phone and email are consistent throughout.
- Reception hours: Mon-Thu 09:00-18:00, Fri 09:00-16:00 from /kontakt, repeated footer and storefront photo. Weekday driving hours: 08:00-18:30.
- Service area: Jakobsberg, Järfälla and Barkarby, repeatedly explicit in homepage and intensive/supervisor pages.
- Manual/automatic B training: supplied business banderoll in images 2 and 3; homepage source confirms B training.
- Source-based pricing is centralised in lib/data.ts; the complete extracted text is preserved under source-audit. No fabricated reviews, ratings, success rates, staff names or course availability.
- Course offers use the more prominent and newer homepage (September 2025), with conflict notices and no invented expiry.
- Language and Saturday conflicts use the narrower, explicitly listed source values.
- Intensive timelines are described as education plans, not guaranteed test outcomes.

## Photography audit

| Supplied file | Website asset | Observed subject and use |
| --- | --- | --- |
| 1.jpeg | storefront.jpg | Branded school entrance; contact/location/about |
| 2.jpeg | classroom.jpg | Red chairs, screen and whiteboard; teaching and courses |
| 3.jpeg | school.jpg | Reception area and business roll-up; school authenticity and supervisor page |
| 4.jpeg | proffs-car.jpg | Branded white Volkswagen with training sign; homepage/intensive hero and social preview |
| 6.jpg | driving.jpg | Driver and BMW interior; general driving/lesson illustration, not asserted as school fleet |
| 7.jpg | speedometer.jpg | Speedometer close-up; risk-training visual, not presented as a real halkbana |

All images use Next Image with intrinsic dimensions, responsive sizes and lazy loading below the fold. No generated photos or imported stock were added.

## Source conflicts and current regulation

See CLIENT_CONFIRMATION_REQUIRED.md for the actual unresolved business facts. The source claims mandatory supervisor introduction training and four-month theory-test validity; official 2026 authority sources show these changed. The rebuild corrects the rule claims with visible source links. Other legal text is migrated rather than rewritten as new legal advice. The conflict between 15% source refund terms and 10% provider terms is explicitly disclosed.

## Launch preservation

Keep all mapped redirects, the apex canonical hostname and HTTPS. Maintain the external provider account and reconcile prices/terms before accepting purchases. Do not enable third-party analytics without implementing any appropriate consent behavior. Retain original source records and access to legacy bookings. Publication, domain changes and submission to search engines remain deployment actions.

## Design audit

Old presentation used WordPress/Astra/Elementor, Open Sans/Vollkorn/Libre Baskerville with an additional Poppins override, repeated offer cards and embedded booking/theme scripts. Retained identity: business name, black/yellow palette, photography and content. Retired: old layout, CSS, scripts, sample blog content, superlative/guaranteed-outcome claims. New system: custom Scandinavian service-brand aesthetic, Manrope/DM Sans, 6px surfaces, asymmetric editorial layouts, restrained yellow, accessible dark mode and native motion. Design dials: variance 7, motion 5, density 4.