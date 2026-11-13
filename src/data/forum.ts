export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Config', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

export const forumPosts: ForumPost[] = [
  guideDiscussion({
    slug: 'squad-esp-distance-start',
    title: 'What rendering distance should I use for player ESP first?',
    excerpt: 'Sample thread about conservative ESP range on large maps.',
    category: 'Guides & Config',
    categoryTone: 'blue',
    sourceTitle: 'Squad ESP and visuals setup',
    sourcePath: '/blog/squad-esp-visuals-setup/',
    upvotes: 62,
    answer: 'Start between 300 and 400 meters on public servers. Raise distance only after you confirm FPS stays stable in firefights.',
    detail: 'Corner boxes and gradient health bars read clearer than full boxes on foliage-heavy maps.',
    tip: 'Save a “training” profile with shorter range before copying it to your ranked preset.',
  }),
  guideDiscussion({
    slug: 'squad-aimbot-hold-toggle',
    title: 'Hold vs toggle aimbot for marksman kits?',
    excerpt: 'Discussion on input mode for long-range engagements.',
    category: 'Guides & Config',
    categoryTone: 'blue',
    sourceTitle: 'Squad aimbot config guide',
    sourcePath: '/blog/squad-aimbot-config-guide/',
    upvotes: 48,
    answer: 'Most players use hold on a thumb mouse button so aim assist only tracks while aiming down sights.',
    detail: 'Toggle is better in CQB tests; avoid it on public servers until you trust your FOV radius.',
    tip: 'Draw the FOV border while tuning so you see the active cone in the screenshot.',
  }),
  {
    slug: 'squad-patch-status-channel',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Where to read loader status after a Squad update?',
    excerpt: 'Operators point newcomers to the homepage banner and Discord #status.',
    author: 'ops_lead',
    age: '5 hours ago',
    commentsCount: 3,
    upvotes: 91,
    flair: 'Status',
    body: [
      'Check squad-cheat.com banner and Discord #status before launching the loader.',
      'If a module shows offline, reload the portal build—do not enable every misc option on day zero of a patch.',
    ],
    comments: [
      { author: 'rifle_main', age: '3h', score: 12, body: 'Conservative preset saved my session last patch.' },
    ],
    sourceTitle: 'Squad patch day checklist',
    sourcePath: '/blog/squad-patch-day-checklist/',
  },
  {
    slug: 'squad-object-esp-vehicles',
    category: 'Guides & Config',
    categoryTone: 'blue',
    title: 'Vehicle ESP clutter on Pacific maps?',
    excerpt: 'Tips for filtering categories and distance on motorized layers.',
    author: 'armor_crew',
    age: '1 day ago',
    commentsCount: 2,
    upvotes: 37,
    body: [
      'Enable show category and distance first; add vehicle health text only for LAT/HAT roles.',
      'Pair with a lower player ESP range so the overlay stays readable from the turret.',
    ],
    comments: [],
    sourceTitle: 'Object ESP tips',
    sourcePath: '/blog/squad-object-esp-tips/',
  },
  {
    slug: 'squad-hwid-after-ban-thread',
    category: 'General',
    categoryTone: 'purple',
    title: 'HWID spoofer vs new account on Squad?',
    excerpt: 'Community summary of when hardware recovery applies.',
    author: 'recovery_ops',
    age: '3 days ago',
    commentsCount: 4,
    upvotes: 55,
    body: [
      'New account works when hardware is clean. Spoof when every fresh account dies on one PC instantly.',
      'Follow the portal cold-reboot verification before joining servers.',
    ],
    comments: [
      { author: 'guide_team', age: '2d', score: 8, body: 'See the HWID product page for the full checklist.' },
    ],
    sourceTitle: 'HWID spoofer after a ban',
    sourcePath: '/blog/squad-hwid-spoofer-after-ban/',
  },
  {
    slug: 'squad-config-profiles-share',
    category: 'Community',
    categoryTone: 'green',
    title: 'Naming conventions for config profiles?',
    excerpt: 'Players share how they split rifle, armor and training presets.',
    author: 'squad_admin',
    age: '4 days ago',
    commentsCount: 5,
    upvotes: 29,
    body: [
      'Use map + role in the name: gorodok_rifle_v1, yeho_crew_v2.',
      'Delete old profiles after major patches instead of overwriting blindly.',
    ],
    comments: [],
    sourceTitle: 'Config profiles guide',
    sourcePath: '/blog/squad-config-profiles-guide/',
  },
  {
    slug: 'squad-cloud-dma-latency',
    category: 'General',
    categoryTone: 'purple',
    title: 'Cloud DMA latency expectations?',
    excerpt: 'Thread on pairing remote DMA with Squad sessions.',
    author: 'dma_user',
    age: '6 days ago',
    commentsCount: 2,
    upvotes: 22,
    body: [
      'Run the portal latency check before pairing. Cloud DMA is not a substitute for reading cheat status.',
    ],
    comments: [],
    sourceTitle: 'Cloud DMA overview',
    sourcePath: '/blog/squad-cloud-dma-overview/',
  },
];

export function getForumPost(slug: string) {
  return forumPosts.find((p) => p.slug === slug);
}

export function getAllForumSlugs() {
  return forumPosts.map((p) => p.slug);
}
