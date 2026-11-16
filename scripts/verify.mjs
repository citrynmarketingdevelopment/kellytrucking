import assert from 'node:assert/strict';

// Verify a running production build: npm run verify -- http://localhost:3000
const base = new URL(process.argv[2] || 'http://localhost:3000');
const paths = ['/', '/services/', '/contact/'];
const titles = new Set(), assets = new Set(), modes = new Set();
for (const path of paths) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path}: server-rendered heading`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title?.includes('Kelly Trucking'), `${path}: page title`);titles.add(title);
  assert.match(html, /<meta name="description" content="[^"]+"/, `${path}: description`);
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  assert(robots, `${path}: robots metadata`);modes.add(robots.includes('noindex') ? 'preview' : 'production');
  const graph = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] || 'null');
  assert.equal(graph?.['@context'], 'https://schema.org');
  assert(graph['@graph'].some(item => item['@type'] === 'Organization'));
  if (!robots.includes('noindex')) {
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    assert(canonical?.startsWith('https://'));assert.equal(new URL(canonical).pathname, path);
    assert.match(html, /<meta property="og:image" content="https:\/\//);
  } else assert.doesNotMatch(html, /<link rel="canonical"/);
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/(?:photos|fonts)\/[^"?]+|\/kelly-logo-[^"?]+)"/g)) assets.add(asset);
  for (const [, href] of html.matchAll(/href="(\/[^"?]*)"/g)) {
    if (/^\/(?:photos|fonts|_next)\//.test(href) || href.endsWith('.svg')) continue;
    assert(paths.includes(href.split('#')[0] || path), `${path}: internal link ${href}`);
  }
  if (path === '/contact/') assert.match(html, /Prepare Request Email/);
  console.log(`PASS ${path}: server-rendered content, metadata, structured data and links`);
}
assert.equal(titles.size, paths.length);assert.equal(modes.size, 1);
await Promise.all([...assets].map(async asset => assert.equal((await fetch(new URL(asset, base), { method: 'HEAD' })).status, 200, asset)));
for (const [old, target] of [['/index.html', '/'], ['/services.html', '/services/'], ['/contact.html', '/contact/'], ['/services/index.html', '/services/'], ['/contact/index.html', '/contact/']]) {
  const response = await fetch(new URL(old + '?source=legacy', base), { redirect: 'manual' });
  assert.equal(response.status, 308, old);
  const location = new URL(response.headers.get('location'), base);
  assert.equal(location.pathname, target);assert.equal(location.search, '?source=legacy');
}
assert.equal((await fetch(new URL('/missing-page/', base))).status, 404);
const robots = await (await fetch(new URL('/robots.txt', base))).text();
const sitemap = await (await fetch(new URL('/sitemap.xml', base))).text();
if (modes.has('preview')) { assert.match(robots, /Disallow: \//);assert.doesNotMatch(sitemap, /<loc>/); }
else { assert.match(robots, /Sitemap: https:\/\//);assert.equal([...sitemap.matchAll(/<loc>/g)].length, paths.length); }
console.log(`PASS ${assets.size} local assets, five legacy redirects, 404, robots and sitemap (${[...modes][0]})`);
