import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE, SITE_DOMAIN, SUPPORT_EMAIL } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Squad Cheats',
    domain: SITE_DOMAIN,
    title: 'Squad Cheats, ESP & More | Aimbot & Visuals for PC',
    description:
      'Squad cheats with aimbot, player ESP, object markers and misc tools for Steam PC—configs and patch notes at squad-cheat.com.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Squad — patch build online',
    eyebrow: '#1 Squad Provider',
    titleLine1: 'Squad',
    titleLine2: 'Cheats & ESP',
    subtitle:
      'Squad cheats with aimbot tuning, player ESP, vehicle markers and config profiles for Steam PC—updated with presets and support at squad-cheat.com.',
    ctaPrimary: 'View products',
    ctaDiscord: 'Buy now',
    modesLabel: 'Squad modes',
    modes: ['AAS', 'RAAS', 'Invasion', 'Training'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'Aimbot, ESP, object markers and misc tools for Squad, maintained every patch.',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'Smooth. Scoped. Controlled.',
        desc: 'Hold or toggle modes with FOV border, bone targeting and distance caps tuned for infantry kits.',
        bullets: [
          'Hold and toggle input modes',
          'FOV radius with draw border',
          'Bones: head, neck, body, legs',
          'Smooth, keybind and max distance',
        ],
        tags: ['squad aimbot', 'fov', 'bone aim'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Read the firefight.',
        desc: 'Box styles, health bars, nicknames and skeletons that stay readable on large maps.',
        bullets: [
          '2D box and corner styles',
          'Static or gradient box fill',
          'Health bar modes and health text',
          'Nickname, weapon and skeleton ESP',
        ],
        tags: ['squad esp', 'player esp', 'skeleton'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Object ESP',
        subtitle: 'HABs, FOBs, vehicles.',
        desc: 'Mark emplacements and armor with distance, category and health display options.',
        bullets: ['HAB base and FOB radio', 'Vehicle and category filters', 'Health bar or text on objects'],
        tags: ['object esp', 'vehicles', 'hab esp'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Rendering',
        subtitle: 'Distance that scales.',
        desc: 'Scope zoom readouts and rendering sliders per role—rifle, LAT, or armor crew.',
        bullets: ['Scope zoom value display', 'Rendering distance slider', 'Tracer lines to targets'],
        tags: ['render distance', 'scope esp'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Miscellaneous',
        subtitle: 'Combat helpers.',
        desc: 'Battle mode, crosshair styles, ammo toggles and movement tools in one tab.',
        bullets: [
          'No recoil, no sway, rapid fire',
          'Unlimited ammo and RPG shots',
          'Big player, speedhack, FOV changer',
          'Out-of-arrows indicators',
        ],
        tags: ['no recoil', 'rapid fire', 'crosshair'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Menu & theme',
        subtitle: 'Your layout.',
        desc: 'Light or dark theme, accent color, particles and bilingual menu text.',
        bullets: [
          'Light / dark theme',
          'Accent color and particles',
          'RUS and ENG languages',
          'VSync, FPS, DPI scale',
        ],
        tags: ['menu theme', 'language'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Config manager',
        subtitle: 'Save every preset.',
        desc: 'Create, rename, save and load configs for public, clan and training servers.',
        bullets: ['Config selector with profiles', 'Create, delete, save, load', 'Watermark and notify position'],
        tags: ['config', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Patch support',
        subtitle: 'Status first.',
        desc: 'Portal loader pushes and Discord #status when Squad builds change.',
        bullets: ['Live status banner', 'Portal patch notes', 'Conservative default presets'],
        tags: ['patch day', 'updates'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Utilities',
        subtitle: 'DMA & HWID.',
        desc: 'Cloud DMA and HWID Spoofer cards live on the products hub when you need hardware paths.',
        bullets: ['Cloud DMA remote pairing', 'HWID recovery checklist', 'Discord onboarding'],
        tags: ['cloud dma', 'hwid'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Ranked tooling backed by patches—not promises',
    subtitle:
      'Most Squad cheat shops ship stale loaders, obvious automation, and ticket bots. We built squad-cheat.com around patch-day delivery, humanized scripts, and live operators.',
    usLabel: 'Squad Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'anti-cheat-aware builds pushed within hours of Squad updates—check Discord #status before you queue ranked.',
      },
      {
        title: 'Humanized scripts & delays',
        desc: 'Smooth aim, FOV limits and conservative ESP defaults feel natural—not obvious bot bursts that flood reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, Squad configs and HWID resets—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the Squad process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Infantry, armor and training profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major Squad or anti-cheat changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Steam PC players running Squad ESP, aimbot and utilities on squad-cheat.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first round in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and queue Squad on Steam PC—with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import a conservative preset, and tune aimbot plus player ESP sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue Squad',
        desc: 'Check the live status banner, launch Steam Squad, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching Squad after updates.',
    items: ['Windows 10 & 11', 'Steam', 'Squad client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Squad cheat',
    title: 'Squad Cheats',
    subtitle: 'Full suite—aimbot, player ESP, object ESP, misc combat tools and config manager.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Full build',
        name: 'Squad',
        title: 'Squad Cheats',
        desc: 'Aimbot, player ESP, HAB and vehicle ESP, no recoil, rapid fire, menu themes and config save/load for Steam Squad.',
        features: ['Aimbot & bone targeting', 'Player ESP & skeletons', 'HAB, FOB & vehicle ESP', 'No recoil & rapid fire', 'Config save/load', 'RUS & ENG menu'],
        more: 18,
        href: `${productBase}squad/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Squad Cheats products',
    subtitle: 'Squad Cheats plus Cloud DMA and HWID Spoofer utilities.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'Cloud utility',
        title: 'Cloud DMA',
        subtitle: 'Remote DMA access',
        desc: 'Cloud-hosted DMA pairing when local hardware is not an option—portal onboarding and slot status before Squad sessions.',
        features: ['Cloud-hosted DMA', 'Pairing guide', 'Slot status panel', 'Engineer onboarding'],
        more: 2,
        href: `${productBase}cloud-dma/`,
      },
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID tools for disk serials and MAC addresses—follow the portal guide before launching Squad on a fresh account.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 6,
        href: `${productBase}hwid-spoofer/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'ESP setup, aimbot tuning, object markers and patch-day checks for Squad.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Setup',
        title: 'Squad ESP and visuals setup for public servers',
        slug: 'squad-esp-visuals-setup',
        image: '/images/blog/squad-esp-visuals-setup.png',
        desc: 'Configure player ESP boxes, health bars, skeletons and rendering distance before your first round.',
        date: 'Nov 10, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Squad aimbot config: FOV, bones and smooth',
        slug: 'squad-aimbot-config-guide',
        image: '/images/blog/squad-aimbot-config-guide.png',
        desc: 'Hold vs toggle modes, bone selection, FOV border and smooth settings explained.',
        date: 'Nov 9, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'HWID spoofer after a Squad hardware ban',
        slug: 'squad-hwid-spoofer-after-ban',
        image: '/images/blog/squad-hwid-spoofer-after-ban.png',
        desc: 'When spoofing helps, when a new account is enough, and the portal checklist.',
        date: 'Nov 8, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Cloud DMA overview for Squad operators',
        slug: 'squad-cloud-dma-overview',
        image: '/images/blog/squad-cloud-dma-overview.png',
        desc: 'What Cloud DMA covers, when slots apply, and how pairing with Squad Cheats works.',
        date: 'Nov 7, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Updates',
        title: 'Squad patch day checklist',
        slug: 'squad-patch-day-checklist',
        image: '/images/blog/squad-patch-day-checklist.png',
        desc: 'Status banner, loader reload, and conservative profiles after updates.',
        date: 'Nov 5, 2026',
        readTime: '4 min read',
      },
      {
        tag: 'Features',
        title: 'Object ESP tips: HAB, FOB and vehicles',
        slug: 'squad-object-esp-tips',
        image: '/images/blog/squad-object-esp-tips.png',
        desc: 'Show distance, category filters and health styles for emplacements.',
        date: 'Nov 4, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Features',
        title: 'Config profiles: save, load and share presets',
        slug: 'squad-config-profiles-guide',
        image: '/images/blog/squad-config-profiles-guide.png',
        desc: 'Create named configs for rifle, armor and training modes.',
        date: 'Nov 3, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Aimbot', title: 'Tuned for infantry kits', desc: 'Hold/toggle modes, FOV border, bone select and smooth sliders in one tab.' },
      { num: '02', label: 'Vision', title: 'Player ESP that stays readable', desc: 'Filter by distance, box style, health bars and skeleton overlays.' },
      { num: '03', label: 'World', title: 'Object markers on the map', desc: 'HAB, FOB, vehicles and distance readouts on a compact overlay.' },
      { num: '04', label: 'Misc', title: 'Combat helpers', desc: 'No recoil, rapid fire, crosshair styles and battle mode toggles.' },
      { num: '05', label: 'Menu', title: 'Theme and language', desc: 'Light/dark theme, accent color, RUS/ENG and DPI scale.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'Separate public, clan and training presets with save/load.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a Squad profile you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check anti-cheat status',
        desc: 'Read the live banner on squad-cheat.com before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick Squad Cheats—the access level that matches your ranked goals.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune delays in a practice lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save infantry and armor presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how Squad plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you queue ranked.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe script delays and player ESP ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or Squad configs? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Squad Cheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about Squad Cheats and utilities.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: SUPPORT_EMAIL,
        href: `mailto:${SUPPORT_EMAIL}`,
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'messageCircle',
        title: 'Join the community',
        desc: 'Discord engineers on shift 24/7 for setup and configs.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on squad-cheat.com or via our secure checkout.' },
      { title: 'Platform', desc: 'Steam on Windows 10 or 11—and your Squad client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or Steam.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Squad cheats are online?',
        a: 'The live status banner is on squad-cheat.com and in the Discord #status channel. Always check after a Squad or anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Squad.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party squad cheats?',
        a: 'Yes—any modification carries risk. anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Squad via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Cheat tiers, HWID Spoofer, Cloud DMA and player ESP live at squad-cheat.com/products/squad-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Squad cheats — scripts, player ESP and tools for PC. squad-cheat.com',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: `${productBase}squad/`, label: 'Squad Cheats', ariaLabel: 'Squad Cheats' },
      { href: productBase, label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About Squad Cheats',
      description:
        'Squad Cheats provides Squad cheat tiers, utility tools and PC support resources at squad-cheat.com.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Squad Cheats is a PC-focused resource for Squad players exploring aimbot, player ESP, object markers and misc tools. We publish setup guides and live status notes so you can evaluate squad cheats before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers Squad Cheats, Cloud DMA and HWID Spoofer utilities. Blog articles explain ESP tuning, patch-day checks, and anti-cheat update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, Steam account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How Squad Cheats handles analytics, cookies, and contact data when you use squad-cheat.com.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on squad-cheat.com.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for Squad Cheats products and squad-cheat.com.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using squad-cheat.com or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to Squad Cheats and utility tools (HWID Spoofer, Cloud DMA) delivered through an operator portal and loader for Squad on Steam for Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Squad or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. squad-cheat.com does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching Squad.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, anti-cheat penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Steam Squad on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Squad build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Squad can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Squad Cheats Support',
      description:
        'Get support for loader, HWID, and checkout questions at squad-cheat.com.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'Squad Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join Squad Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
