import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://squad-cheat.com',
  output: 'static',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/squad-cheats/',
    '/cheats/lite/': '/products/squad-cheats/',
    '/cheats/pro/': '/products/squad-cheats/',
    '/cheats/elite/': '/products/squad-cheats/squad/',
    '/cheats/compare/': '/products/squad-cheats/utilities/',
    '/contact/': '/support/',
    '/products/dota-2-cheats/': '/products/squad-cheats/',
    '/products/dota-2-cheats/utilities/': '/products/squad-cheats/utilities/',
    '/blog/squad-external-tool-guide/': '/blog/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
