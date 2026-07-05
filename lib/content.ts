export const SITE = {
  name: 'Irish Prajapati',
  brand: 'IRISH',
  role: 'Backend Developer',
  email: 'irishmjn@gmail.com',
  github: 'https://github.com/irishprajapati',
  linkedin: 'https://www.linkedin.com/in/eris-prajapati-a744ba259/',
  url: 'https://prajapatiirish.com.np',
} as const;

export const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4';

export const NAV_LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#approach', label: 'Workflow' },
  { href: '#stack', label: 'Knowledge' },
  { href: '#contact', label: 'Connect' },
] as const;

export const HERO = {
  tagline: 'Backend Developer',
  lines: ['Build.', 'Scale.', 'Ship.'] as const,
  subtextLead: "I build production backends",
  subtextBold: 'they scale.',
  cta: 'See my work',
  touchCta: 'Connect',
  award: { title: 'Top-Rated', subtitle: 'Backend Engineer' },
  stats: [
    { value: '4+', label: 'Production APIs' },
    { value: '80%', label: 'Latency Reduced' },
    { value: '2+', label: 'Years Building' },
  ] as const,
} as const;
