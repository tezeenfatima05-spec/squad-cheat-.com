import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const squadProduct = link('Squad Cheats', productPath('squad'));
const productsHub = link('Squad products', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const cloudDma = link('Cloud DMA', productPath('cloud-dma'));
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Squad Cheats are online?',
    a: a('The live status banner is on squad-cheat.com and in the Discord #status channel. Always check after a Squad game update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library. Follow the guide before launching Squad on Steam.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party squad cheats?',
    a: a('Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Squad via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your product.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `${productsHub} lists ${squadProduct}, ${cloudDma}, and ${hwid} with feature lists and checkout.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Squad player ESP?',
    a: `Player ESP shows infantry with boxes, health bars, nicknames, skeletons and weapon readouts. Configure rendering distance and styles on the ${squadProduct} page.`,
    scopes: ['squad'],
  },
  {
    id: 'esp-vs-aim',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aimbot?',
    a: a('ESP is visual information only. Aimbot assists targeting when you hold or toggle your keybind. You can run ESP-heavy profiles with minimal aim assist.'),
    scopes: ['squad'],
  },
  {
    id: 'aimbot-smooth',
    topic: 'scripts',
    icon: 'crosshair',
    q: 'How do I tune aimbot smooth and FOV?',
    a: a('Start with a visible FOV border, smooth above 35%, and body or neck bones at range. Lower smooth only after a full training session.'),
    scopes: ['squad'],
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when new accounts fail instantly on one PC but work elsewhere. It does not fix account reputation bans alone.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'cloud-dma-when',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What is Cloud DMA for?',
    a: `${cloudDma} provides remote DMA access when local hardware is not available. Follow portal onboarding before pairing with Squad sessions.`,
    scopes: ['cloud-dma'],
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are squad cheats undetected forever?',
    a: a('No provider can promise permanent detection status. We ship updates after patches—verify the status banner every session.'),
  },
  {
    id: 'vac-update',
    topic: 'setup',
    icon: 'faqVacUpdate',
    q: 'What should I do after a Squad patch?',
    a: a('Reload the loader, use a conservative preset, and read Discord #status before joining public servers.'),
  },
];

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Straight answers before checkout.',
  subtitle: 'Compatibility, bans and access—no vague promises.',
} as const;

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs;
}

export function getLandingFaqs(limit = 6): SiteFaqItem[] {
  return siteFaqs.slice(0, limit);
}

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined =
    kind === 'tier'
      ? [...scoped, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];
  return combined.slice(0, 10);
}

const blogTopicFaqs: Partial<Record<string, SiteFaqItem[]>> = {
  Setup: [
    {
      id: 'blog-setup-1',
      topic: 'blog',
      icon: 'faqBlogSetup',
      q: 'Do these setup steps apply after every patch?',
      a: a('Re-check squad-cheat.com status and reload portal presets after Squad updates.'),
    },
  ],
  Guides: [
    {
      id: 'blog-guides-1',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Where is the full feature list?',
      a: `${squadProduct} lists every module with checkout via our secure redirect.`,
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to ${squadProduct} and ${productsHub}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open Discord with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('visual')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which product covers ESP from this article?',
      a: `${squadProduct} includes full player and object ESP modules.`,
    });
  }
  if (slug.includes('aimbot')) {
    slugHints.push({
      id: 'blog-slug-aim',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Where do I configure aimbot options?',
      a: a('Open the Aimbot tab in the Squad Cheats menu—FOV, bones, smooth and keybind live there.'),
    });
  }
  if (slug.includes('hwid')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace the HWID product?',
      a: `Recovery guides complement ${hwid}—read the product page for workflow scope.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player ESP & boxes', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Aimbot & FOV controls', icon: 'compareAutoCombo' as const, lite: true, pro: true, elite: true },
  { feature: 'Object ESP (HAB/FOB)', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Config save/load', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
