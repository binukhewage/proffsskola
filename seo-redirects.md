# SEO URL migration

Next.js sends HTTP 308 permanent redirects. Trailing slashes normalize automatically. Legacy `index.html` paths redirect to clean URLs. No valuable business page is removed.

| Old path | New destination | Status |
| --- | --- | --- |
| / | / | 200 retained |
| /category/uncategorized | No replacement | 404; WordPress sample content intentionally retired |
| /risktvaan | /risktvaan | 200 retained |
| /kontakt | /kontakt | 200 retained |
| /varavilkor | /villkor | 308 permanent |
| /author/admin | No replacement | 404; WordPress sample content intentionally retired |
| /paketpris | /paket | 308 permanent |
| /hello-world | No replacement | 404; WordPress sample content intentionally retired |
| /kursertest | /kurser | 308 permanent |
| /vagen-till-korkort | /vagen-till-korkort | 200 retained |
| /intensivkurs | /intensivkurs | 200 retained |
| /handledarkurs | /handledarkurs | 200 retained |
| /priser | /priser | 200 retained |
| /kurserpris | /priser#kurser | 308 permanent |
| /riskettan | /riskettan | 200 retained |
| /kurser | /kurser | 200 retained |
| /teori | /teori | 200 retained |
| /korlektioner | /korlektioner | 200 retained |
| /1307-2 | /boka | 308 permanent |
| /e-handel | https://www.trafikskolaonline.se/sv/skola/proffs/ehandel | 308 permanent |

Additional routes: `/paket`, `/villkor`, `/om-oss`, `/boka`, `/taxiteori`.

The sample Hello World post and its author/category indexes contain no business content. Their retirement is deliberate and documented; redirecting unrelated posts to the homepage would create soft-404 behavior. Preserve old inbound business links via the explicit mappings above.

Each `/<path>/index.html` redirects to `/<path>`; if that is a legacy slug, its own redirect then applies. `/index.html` redirects to `/`.