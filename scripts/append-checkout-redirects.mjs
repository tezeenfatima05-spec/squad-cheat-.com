import fs from 'node:fs';
import path from 'node:path';
import { CHECKOUT_PATH_REDIRECTS } from '../src/config/checkout-redirects.mjs';
import { getDistRoot } from './dist-root.mjs';

const file = path.join(getDistRoot(), '_redirects');
let content = fs.existsSync(file) ? fs.readFileSync(file, 'utf8').trimEnd() : '';

const seen = new Set(content.split('\n').map((line) => line.split(/\s+/)[0]));
const lines = [];

for (const [from, to] of CHECKOUT_PATH_REDIRECTS) {
  if (!from.endsWith('/') || seen.has(from)) continue;
  lines.push(`${from}  ${to}  302`);
}

if (lines.length === 0) {
  console.log('append-checkout-redirects: nothing to add.');
  process.exit(0);
}

content = [content, ...lines].filter(Boolean).join('\n') + '\n';
fs.writeFileSync(file, content, 'utf8');
console.log(`append-checkout-redirects: added ${lines.length} /go/* rule(s) → ${path.relative(process.cwd(), file)}`);
