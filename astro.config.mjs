import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
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