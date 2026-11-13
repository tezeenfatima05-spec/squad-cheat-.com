import fs from 'node:fs';
import path from 'node:path';

function walk(dir, acc = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else if (f === 'index.html') acc.push(p);
  }
  return acc;
}

const skip = (p) =>
  /404|dota-2-cheats|squad-external-tool-guide|\\cheats\\/.test(p.replace(/\\/g, '/'));

const pages = walk('dist').filter((p) => !skip(p));
const issues = [];

for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const route =
    '/' +
    path
      .relative('dist', path.dirname(file))
      .replace(/\\/g, '/')
      .replace(/^\.$/, '');
  const routeNorm = route === '/' ? '/' : `${route}/`;

  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? '';
  const h1s = [...html.matchAll(/<h1[\s>]/gi)];
  const canon = html.match(/<link rel="canonical" href="([^"]*)"/i)?.[1] ?? '';

  if (!title.trim()) issues.push({ route: routeNorm, issue: 'missing title' });
  if (!desc.trim()) issues.push({ route: routeNorm, issue: 'missing meta description' });
  if (h1s.length !== 1) issues.push({ route: routeNorm, issue: `h1 count ${h1s.length}` });
  if (canon && !canon.includes('squad-cheat.com'))
    issues.push({ route: routeNorm, issue: `bad canonical ${canon}` });
}

console.log(JSON.stringify({ pages: pages.length, issues }, null, 2));
