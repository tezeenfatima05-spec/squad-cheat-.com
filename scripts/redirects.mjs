/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/squad-cheats/'],
  ['/cheats/', '/products/squad-cheats/'],
  ['/cheats/lite', '/products/squad-cheats/'],
  ['/cheats/lite/', '/products/squad-cheats/'],
  ['/cheats/pro', '/products/squad-cheats/'],
  ['/cheats/pro/', '/products/squad-cheats/'],
  ['/cheats/elite', '/products/squad-cheats/squad/'],
  ['/cheats/elite/', '/products/squad-cheats/squad/'],
  ['/cheats/compare', '/products/squad-cheats/utilities/'],
  ['/cheats/compare/', '/products/squad-cheats/utilities/'],
  ['/products/dota-2-cheats', '/products/squad-cheats/'],
  ['/products/dota-2-cheats/', '/products/squad-cheats/'],
  ['/products/dota-2-cheats/utilities', '/products/squad-cheats/utilities/'],
  ['/products/dota-2-cheats/utilities/', '/products/squad-cheats/utilities/'],
  ['/products/squad-cheats/utilities', '/products/squad-cheats/utilities/'],
  ['/products/squad-cheats', '/products/squad-cheats/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
