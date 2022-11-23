import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Astro Learner | Blog',
  description: 'My journey learning Astro',
  site: 'http://localhost:3000/',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});