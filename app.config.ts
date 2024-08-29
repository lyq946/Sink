export default defineAppConfig({
  title: 'BriefURL',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics.',
  image: 'https://briefurl.top/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
