/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Squad Cheats, ESP & More | Aimbot & Visuals for PC',
    description:
      'Squad cheats for Steam PC: aimbot, player ESP, object markers and misc tools—configs and status at squad-cheat.com.',
  },
  '/products/squad-cheats/': {
    title: 'Squad Cheats & Utility Products',
    description:
      'Squad cheats plus Cloud DMA and HWID Spoofer utilities for Steam—feature lists and secure checkout at squad-cheat.com.',
  },
  '/products/squad-cheats/squad/': {
    title: 'Squad Cheats | Aimbot, ESP & Config Tools',
    description:
      'Full Squad cheat build with aimbot, player ESP, HAB and vehicle markers, no recoil and config save/load.',
  },
  '/products/squad-cheats/cloud-dma/': {
    title: 'Cloud DMA for Squad Operators',
    description:
      'Remote Cloud DMA access with portal onboarding and slot status before pairing with Squad sessions.',
  },
  '/products/squad-cheats/hwid-spoofer/': {
    title: 'HWID Spoofer | Hardware Recovery',
    description:
      'HWID Spoofer with restore-point checklist and verification steps before launching Squad on a fresh account.',
  },
  '/products/squad-cheats/utilities/': {
    title: 'Squad Utilities | Cloud DMA & HWID',
    description:
      'Compare Cloud DMA and HWID Spoofer—when each utility fits and links to full product pages.',
  },
  '/blog/': {
    title: 'Squad Cheats Guides & Patch Notes',
    description:
      'ESP setup, aimbot tuning, object ESP tips and patch-day checklists for Squad on squad-cheat.com.',
  },
  '/forum/': {
    title: 'Squad Community Forum | Squad Cheats',
    description: 'Discuss configs, patch changes, ESP tuning and setup questions for Squad.',
  },
  '/faq/': {
    title: 'FAQ | Squad Cheats, Products & Setup',
    description:
      'Answers on Squad cheats, ESP, aimbot, Cloud DMA, HWID tools and checkout at squad-cheat.com.',
  },
  '/terms/': {
    title: 'Terms & Conditions | Squad Cheats',
    description: 'Purchase terms, license use, and refund policy for Squad Cheats products sold through squad-cheat.com.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Squad Cheats',
    description: 'How squad-cheat.com uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About Squad Cheats',
    description: 'What Squad Cheats publishes: Squad products, utilities, guides, and status notes at squad-cheat.com.',
  },
  '/support/': {
    title: 'Support | Squad Cheats',
    description: 'Get help with loader setup, HWID, and checkout for Squad Cheats and utilities.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
