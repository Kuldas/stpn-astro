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
            {
              name: 'layout',
              widget: 'hidden',
              label: 'Layout',
              default: '../../layouts/MarkdownPostLayout.astro',
            },
            { name: 'title', widget: 'string', label: 'Post title' },
            {
              name: 'pubDate',
              widget: 'datetime',
              label: 'Publish date',
              format: 'DD/MM/YYYY',
              date_format: 'DD/MM/YYYY',
              time_format: false,
            },
            { name: 'author', widget: 'string', label: 'Author' },
            { name: 'description', widget: 'string', label: 'Description' },
            {label: 'Featured Image',
              name: 'image',
              widget: 'object',
              required: false,
              fields: [
                {name: 'url', label: 'Image', widget: 'image', required: false},
                {name: 'alt', label: 'Alt text', widget: 'string', required: false},
              ]
            },
            { 
              name: 'tags', 
              widget: 'list', 
              label: 'Tags', 
              summary: '{{fields.name}}',
              field: {
                label: 'Name',
                name: 'name',
                widget: 'string',
              }
            },
            { name: 'body', widget: 'markdown', label: 'Post body' },
            ],
          },
          {
            name: 'settings',
            label: 'Settings',
            delete: false,
            editor: [
              { preview: false },
            ],
            files: [
              {
                name: 'general',
                label: 'Site Settings',
                file: '../../data/globalSettings.json',
                description: 'General Site settings',
                fields: [
                  { label: 'Global title', name: 'site_title', widget: 'string' },
                ], 
              },
            ],
          },
        ],
      },
    }),
    preact()]
});