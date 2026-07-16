// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// https://astro.build/config
// See https://docs.astro.build/en/guides/deploy/github/
// See https://starlight.astro.build/getting-started/
export default defineConfig({
  site: 'https://p3dual.com',
  integrations: [
    starlight({
      title: 'Docs',
      logo: {
        src: './src/assets/logo.png',
      },
      // https://starlight.astro.build/reference/icons/
      social: [
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/CQnkc5gS6a',
        },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/p3d-project/persona-3-dual',
        },
      ],
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Roadmap', link: 'docs/roadmap' },
        {
          label: 'Getting Started',
          items: [{ autogenerate: { directory: 'docs/getting-started' } }],
        },
        {
          label: 'Milestones',
          items: [{ autogenerate: { directory: 'docs/milestones' } }],
        },
        {
          label: 'P3D-Amicitia',
          items: [{ autogenerate: { directory: 'docs/p3d-amicitia' } }],
        },
        {
          label: 'P3D-Game',
          items: [{ autogenerate: { directory: 'docs/p3d-game' } }],
        },
        {
          label: 'P3D-Website',
          items: [{ autogenerate: { directory: 'docs/p3d-website' } }],
        },
        {
          label: 'References',
          items: [{ autogenerate: { directory: 'docs/references' } }],
        },
        { label: 'Credits', link: 'docs/credits' },
      ],
    }),
    react(),
    markdoc(),
    keystatic(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
