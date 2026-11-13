# Squad Cheats — squad-cheat.com

Astro site converted from the master template for **Squad** (Steam PC).

- Central config: `src/config/site.ts`
- Products: `/products/squad-cheats/` (Squad Cheats, Cloud DMA, HWID Spoofer)
- Build: `npm install` → `npm run build`
- **Cloudflare:** Build command `npm run build`, deploy `wrangler deploy` (or `npm run deploy`). Uses `dist/client` + `_redirects` for `/go/*` checkout links.
