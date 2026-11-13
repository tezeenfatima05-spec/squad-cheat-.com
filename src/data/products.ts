import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { ASSETS, PRODUCT_BASE } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const SQUAD_FULL_FEATURES = [
  'Aimbot: Hold / Toggle modes',
  'Draw FOV border & radius control',
  'Bone targeting: Head, Neck, Body, Legs',
  'Aimbot keybind, smooth & distance',
  'Player ESP: 2D box & corner styles',
  'Box fill: static & gradient',
  'Health bar: static, health-based, gradient',
  'Health text, nickname & weapon ESP',
  'Tracer lines & skeleton ESP',
  'Scope zoom value & rendering distance',
  'Object ESP: HAB base & FOB radio',
  'Show distance, vehicles & category',
  'Object health: bar, text, or both',
  'Battle mode & custom crosshair',
  'Out of arrows: range, size, distance',
  'Unlimited ammo & unlimited RPG shots',
  'No recoil, no sway & rapid fire',
  'Ammo count: bar or text',
  'Big player, speedhack & FOV changer',
  'Menu: particles, accent, light/dark theme',
  'Languages: RUS & ENG',
  'VSync, FPS counter & DPI scale',
  'Watermark & notify position',
  'Config selector: create, delete, save, load',
];

export const productRelatedBlogSlugs: Record<string, string[]> = {
  squad: ['squad-esp-visuals-setup', 'squad-aimbot-config-guide', 'squad-hwid-spoofer-after-ban'],
  'cloud-dma': ['squad-cloud-dma-overview', 'squad-patch-day-checklist'],
  'hwid-spoofer': ['squad-hwid-spoofer-after-ban', 'squad-patch-day-checklist'],
};

const productBase = PRODUCT_BASE;
const gameplay = '/images/gameplay';

const galleryRaw = {
  visuals: {
    src: `${gameplay}/screenshot-1.png`,
    alt: 'Squad cheats player ESP with boxes and health bars on infantry',
    caption: 'Player ESP',
    captionDesc: '2D boxes, health bars, nicknames and skeleton overlays for infantry targets.',
  },
  aimbot: {
    src: `${gameplay}/screenshot-2.png`,
    alt: 'Squad aimbot settings with FOV border and bone selection',
    caption: 'Aimbot controls',
    captionDesc: 'FOV radius, smooth aim, bone targeting and hold/toggle modes.',
  },
  misc: {
    src: `${gameplay}/screenshot-3.png`,
    alt: 'Squad cheats miscellaneous options including no recoil and crosshair',
    caption: 'Miscellaneous tools',
    captionDesc: 'No recoil, rapid fire, crosshair styles and battle mode toggles.',
  },
  objects: {
    src: `${gameplay}/screenshot-4.png`,
    alt: 'Squad object ESP showing HAB base and vehicle markers',
    caption: 'Object ESP',
    captionDesc: 'HAB bases, FOB radios, vehicles and distance readouts on the map.',
  },
  menu: {
    src: `${gameplay}/screenshot-5.png`,
    alt: 'Squad cheats menu with theme and language options',
    caption: 'Customizable menu',
    captionDesc: 'Light/dark theme, accent color, particles and config profiles.',
  },
  config: {
    src: `${gameplay}/screenshot-6.png`,
    alt: 'Squad cheats config selector with save and load presets',
    caption: 'Config manager',
    captionDesc: 'Create, save, load and delete named configs from one panel.',
  },
};

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => galleryRaw[k]);
}

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on squad-cheat.com and Discord #status before purchase—especially after a Squad or anti-cheat update.',
  },
  {
    num: '02',
    title: 'Complete checkout',
    desc: 'Choose Squad Cheats or the utility you need. Review the feature list on the product page before checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord with your order email ready if you need help with loader access or HWID resets.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use the operator portal, load a conservative preset, test in a local session, then join your server.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Squad receives frequent updates. Confirm module availability on the live status panel at squad-cheat.com before you purchase or launch. Overlay behavior may differ in menus and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Squad can violate the game Terms of Service and lead to bans. You use this software at your own risk. Compatibility and availability can change after game or Windows updates without notice.';

const squadSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current Squad client via Steam with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Squad published hardware requirements.' },
];

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements' | 'about' | 'body'>
> = {
  squad: {
    images: slide('visuals', 'aimbot', 'misc', 'objects', 'menu', 'config'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: squadSystemRequirements,
    fullFeatures: SQUAD_FULL_FEATURES,
    overview: {
      title: 'Built around Squad infantry and vehicle awareness',
      paragraphs: [
        'Squad Cheats combines aimbot tuning, player ESP, object markers and misc combat tools in one external menu. Options are grouped so you can set FOV, bones, health bars and vehicle ESP before your first round.',
        'The build is maintained for Steam PC Squad with config save/load, bilingual menu support and conservative defaults for larger servers.',
      ],
    },
    about: [
      {
        type: 'p',
        text: 'Whether you run riflemen on foot or armor in a motorized squad, the same ESP and aim modules stay readable at distance. Object ESP highlights HAB bases, FOB radios and vehicles so you can rotate without guessing.',
      },
      { type: 'h2', text: 'Tune before you queue' },
      {
        type: 'p',
        text: 'Start with wider FOV limits, skeleton ESP off, and battle mode disabled until you confirm stable FPS. Save ranked and public presets separately in the config selector.',
      },
    ],
    body: [
      { type: 'h2', text: 'Module overview' },
      {
        type: 'p',
        text: 'Aimbot, player ESP, object ESP, miscellaneous combat helpers and full menu customization ship together. Patch notes and preset updates post to Discord #status when Squad builds change.',
      },
    ],
  },
  'cloud-dma': {
    images: slide('visuals', 'menu', 'config'),
    goodToKnow: 'Cloud DMA requires compatible hardware and network setup. Follow the portal checklist before pairing with Squad sessions.',
    limitations:
      'Remote DMA availability depends on region and slot capacity. Not a substitute for reading current anti-cheat status or following setup docs.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqWifi', text: 'Low-latency internet for cloud DMA sessions.' },
      { icon: 'reqSettings', text: 'Follow the Cloud DMA onboarding guide in the operator portal.' },
    ],
    fullFeatures: [
      'Cloud-hosted DMA access',
      'Remote session pairing guide',
      'Slot status in operator portal',
      'Setup checklist for new rigs',
      'Discord engineer onboarding',
      'Secure checkout & license delivery',
    ],
    overview: {
      title: 'Cloud DMA when local hardware is not an option',
      paragraphs: [
        'Cloud DMA gives you remote access to DMA infrastructure when you cannot run a local card setup. The portal walks through pairing, session checks and compatibility before you join Squad.',
        'Use this path when your PC or region needs cloud slots—not as a replacement for reading live cheat status on squad-cheat.com.',
      ],
    },
    body: [
      { type: 'h2', text: 'When Cloud DMA fits' },
      {
        type: 'p',
        text: 'Choose Cloud DMA if you need remote hardware access or travel between machines. Pair with Squad Cheats only after both products show online in the status banner.',
      },
    ],
  },
  'hwid-spoofer': {
    images: slide('config', 'menu', 'visuals'),
    goodToKnow:
      'Create a Windows restore point before spoofing. Verify identifiers changed after a cold reboot before launching Squad.',
    limitations:
      'Spoofing does not fix account-only bans. Never stack two spoof tools. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Squad after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Hardware recovery for flagged PCs',
      paragraphs: [
        'The HWID Spoofer helps when new Squad accounts fail instantly on one PC but work elsewhere. Disk and MAC tools ship with verification steps and restore-point checklists.',
        'Use when hardware is flagged—not for account reputation issues alone. After spoof, load a conservative Squad preset before joining public servers.',
      ],
    },
    body: [
      { type: 'h2', text: 'Full workflow' },
      {
        type: 'p',
        text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then a conservative cheat profile. See the HWID blog guide for screenshots of each step.',
      },
    ],
  },
};

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'squad';
}

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(cheat.title),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: content.about,
      body: content.body ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        about: content.about,
        body: content.body ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('visuals', 'aimbot', 'misc', 'objects', 'menu', 'config');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'Squad cheats, Cloud DMA, and HWID Spoofer utilities for Steam PC.',
  buyUrl: checkoutPath('squad'),
};
