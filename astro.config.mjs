// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// See https://docs.astro.build/en/guides/deploy/github/
// See https://starlight.astro.build/getting-started/
export default defineConfig({
  adapter: cloudflare(),
  site: 'https://docs.p3dual.com',
  integrations: [
    starlight({
      title: 'Docs',
      // fallback for pages without their own description
      description:
        'Documentation for the P3D Project and Persona 3 Dual, the open-source demake of Persona 3 for dual-screen hardware.',
      favicon: '/favicon.ico',
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://docs.p3dual.com/share-image.png',
          },
        },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '863' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '640' } },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content: "Persona 3 Dual logo over Makoto's silhouette",
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: 'https://docs.p3dual.com/share-image.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image:alt',
            content: "Persona 3 Dual logo over Makoto's silhouette",
          },
        },
      ],
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
      components: {
        Header: './src/components/overrides/Header.astro',
        PageFrame: './src/components/overrides/PageFrame.astro',
        Sidebar: './src/components/overrides/Sidebar.astro',
        SiteTitle: './src/components/overrides/SiteTitle.astro',
      },
      expressiveCode: {
        shiki: {
          // workerd not liking webassembly
          engine: 'javascript',
        },
      },
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Roadmap', link: 'roadmap' },
        {
          label: 'Guides',
          items: [{ autogenerate: { directory: 'guides' } }],
        },
        {
          label: 'Milestones',
          items: [{ autogenerate: { directory: 'milestones' } }],
        },
        {
          label: 'References',
          items: [{ autogenerate: { directory: 'references' } }],
        },
        { label: 'Credits', link: 'credits' },
      ],
    }),
    react(),
    markdoc(),
    keystatic(),
  ],
  vite: {
    plugins: [tailwindcss()],
    // https://github.com/expressive-code/expressive-code/issues/439
    optimizeDeps: {
      include: ['@astrojs/starlight>astro-expressive-code'],
    },
  },
});
