import fs from 'node:fs';
import path from 'node:path';

/** Astro static output root (`dist/` or `dist/client/` with @astrojs/cloudflare). */
export function getDistRoot() {
  const root = process.cwd();
  const plain = path.join(root, 'dist');
  const client = path.join(plain, 'client');

  if (fs.existsSync(client)) {
    return client;
  }

  return plain;
}
