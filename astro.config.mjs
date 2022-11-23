import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      previewStyles: [
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;700&display=swap',
        'src/styles/global.css',
      ],
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'master',
        },
        collections:  [
          {
            name: 'posts',
            label: 'Blog posts',
            folder: 'src/pages/posts',
            create: true,
            delete: true,
            fields: [
            { name: 'title', widget: 'string', label: 'Post title' },
            { name: 'body', widget: 'markdown', label: 'Post body'},
            ],
          },
        ],
      },
    }),
    preact()]
});