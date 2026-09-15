import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
const base = process.env.QA_URL || 'http://localhost:3000';
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;
const browser = await chromium.launch({
  headless: true,
  ...(executablePath ? { executablePath } : {}),
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  colorScheme: 'light',
});
const page = await context.newPage();
const errors = [];
const findings = [];
const screenshots = 'test-results';
fs.mkdirSync(screenshots, { recursive: true });
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text());
});
const xml = await (await fetch(`${base}/sitemap.xml`)).text();
const paths = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const internal = new Set();
const titles = new Set();
for (const path of paths) {
  const response = await page.goto(base + path);
  await page.waitForLoadState('networkidle');
  if (response.status() !== 200) errors.push(`${path}: HTTP ${response.status()}`);
  const data = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelectorAll('h1').length,
    description: document.querySelector('meta[name="description"]')?.content,
    canonical: document.querySelector('link[rel="canonical"]')?.href,
    schemas: [...document.querySelectorAll('script[type="application/ld+json"]')].map((x) =>
      JSON.parse(x.textContent),
    ),
    links: [...document.querySelectorAll('a[href]')].map((x) => x.getAttribute('href')),
    images: [...document.images]
      .filter((x) => x.complete && x.naturalWidth === 0)
      .map((x) => x.src),
  }));
  if (data.h1 !== 1) errors.push(`${path}: ${data.h1} h1 elements`);
  if (!data.description || !data.canonical) errors.push(`${path}: missing SEO`);
  if (titles.has(data.title)) errors.push(`${path}: duplicate title`);
  titles.add(data.title);
  if (data.images.length) errors.push(`${path}: broken images`);
  data.links
    .filter((x) => x.startsWith('/') && !x.startsWith('//'))
    .forEach((x) => internal.add(x.split('#')[0]));
  const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  if (axe.violations.length)
    errors.push(
      ...axe.violations.map(
        (v) => `${path}: ${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`,
      ),
    );
  findings.push({
    path,
    status: response.status(),
    title: data.title,
    jsonLd: data.schemas.length,
    accessibilityViolations: axe.violations.length,
  });
}
for (const p of internal) {
  const r = await fetch(base + p);
  if (!r.ok) errors.push(`Broken internal link: ${p}`);
}
for (const width of [375, 390, 768, 1024, 1440]) {
  await page.setViewportSize({ width, height: 950 });
  for (const path of paths) {
    await page.goto(base + path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    if (overflow) errors.push(`${path}: overflow at ${width}px`);
  }
  await page.goto(base);
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: `${screenshots}/hero-${width}.png` });
  for (let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=700){await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(80)}
  await page.waitForLoadState('networkidle');
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${screenshots}/home-${width}.png`, fullPage: true });
  if (width < 1024) {
    await page.getByRole('button', { name: 'Öppna meny' }).click();
    await page
      .getByRole('navigation', { name: 'Mobilmeny' })
      .getByRole('link', { name: 'Priser', exact: true })
      .click();
    await page.waitForURL('**/priser');
    if (new URL(page.url()).pathname != '/priser') errors.push(`Navigation failed at ${width}`);
    await page.getByRole('button', { name: 'Öppna meny' }).click();
    await page.keyboard.press('Escape');
    if (await page.getByRole('navigation', { name: 'Mobilmeny' }).count())
      errors.push('Escape did not close menu');
  }
}
await page.setViewportSize({ width: 1440, height: 1000 });
await page.emulateMedia({ colorScheme: 'dark' });
await page.goto(base);
await page.waitForTimeout(1300);
const darkAxe = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
  .analyze();
if (darkAxe.violations.length) errors.push(...darkAxe.violations.map((v) => 'Dark: ' + v.id));
await page.screenshot({ path: `${screenshots}/home-dark.png`, fullPage: true });
await page.emulateMedia({ reducedMotion: 'reduce' });
const animation = await page
  .locator('.hero-copy')
  .evaluate((el) => getComputedStyle(el).animationName);
if (animation !== 'none') errors.push('Reduced motion animation active');
for (const [from, to] of [
  ['/paketpris', '/paket'],
  ['/varavilkor', '/villkor'],
  ['/kurserpris', '/priser#kurser'],
  ['/kursertest', '/kurser'],
  ['/1307-2', '/boka'],
  ['/e-handel', 'https://www.trafikskolaonline.se/sv/skola/proffs/ehandel'],
  ['/priser/index.html', '/priser'],
]) {
  const r = await fetch(base + from, { redirect: 'manual' });
  if (r.status !== 308 || r.headers.get('location') !== to)
    errors.push(`Redirect mismatch ${from}: ${r.status} ${r.headers.get('location')}`);
}
for (const path of ['/missing-page', '/hello-world', '/author/admin', '/category/uncategorized']) {
  const r = await fetch(base + path);
  if (r.status !== 404) errors.push(`Expected 404 ${path}`);
}
const robots = await (await fetch(base + '/robots.txt')).text();
if (!robots.includes('Sitemap: https://proffstrafikskola.se/sitemap.xml'))
  errors.push('robots sitemap missing');
await page.emulateMedia({ colorScheme: 'light' });
await page.goto(base + '/priser');
const prices = await page.locator('main').innerText();
for (const price of [
  '499',
  '810',
  '2 299',
  '3 799',
  '7 399',
  '10 799',
  '14 299',
  '21 199',
  '9 999',
  '15 999',
  '21 999',
  '4 699',
  '8 299',
  '11 699',
  '15 199',
  '22 099',
  '2 200',
  '599',
  '749',
  '3 500',
]) {
  if (!prices.replaceAll('\u00a0', ' ').includes(price)) errors.push(`Price absent: ${price}`);
}
await page.screenshot({ path: `${screenshots}/prices-desktop.png`, fullPage: true });
fs.writeFileSync(
  'QA_RESULTS.json',
  JSON.stringify(
    {
      date: new Date().toISOString(),
      routes: findings,
      viewports: [375, 390, 768, 1024, 1440],
      internalLinks: internal.size,
      errors,
    },
    null,
    2,
  ),
);
console.log(
  JSON.stringify({ routes: findings.length, internalLinks: internal.size, errors }, null, 2),
);
await browser.close();
if (errors.length) process.exitCode = 1;
