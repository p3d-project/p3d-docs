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
  integrations: [starlight({
    title: 'Docs',
    logo: {
      src: './src/assets/logo.png',
    },
    // https://starlight.astro.build/reference/icons/
    social: [
      {
        icon: 'discord',
        label: 'Discord',
        href: 'https://discord.gg/CQnkc5gS6a'
      },
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/p3d-project/persona-3-dual',
      },
    ],
    customCss: [
      './src/styles/starlight.css',
    ],
    sidebar: [
      { label: 'Home', link: '/' },
      { label: 'Roadmap', link: 'docs/guides/roadmap'},
      { 
        label: 'Getting Started',
        items:
        [
          'docs/guides/install-game',
          'docs/code-of-conduct',
          'docs/guides/social-media-guidelines',
          'docs/guides/roles',
          'docs/guides/team-application',
          'docs/guides/team-rules',
          'docs/onboarding',
          'docs/guides/q-and-a',
        ]
      },
      {
        label: 'Milestones',
        items:
        [
          {
            label: 'Milestone 1',
            items:
            [
              'docs/milestones/1/promo-sources',
            ]
          }
        ]
      },
      { label: 'P3D-Amicitia', link: '/docs/p3d-amicitia/readme' },
      {
        label: 'P3D-Game',
        items:
        [
          'docs/p3d-game/contributing',
          'docs/p3d-game/license',
          'docs/p3d-game/readme',
          {
            label: 'Systems',
            items:
            [
              'docs/p3d-game/systems/audio',
              'docs/p3d-game/systems/collision',
              'docs/p3d-game/systems/dialogue',
              'docs/p3d-game/systems/environments',
              'docs/p3d-game/systems/jmaps',
              'docs/p3d-game/systems/models',
              'docs/p3d-game/systems/scenes',
            ]
          }
        ]
      },
      { label: 'P3D-Website', link: '/docs/p3d-website/readme' },
      {
        label: 'References',
        items:
        [
          'docs/references/game-dev-team-reference',
          'docs/references/web-dev-team-reference',
          'docs/references/graphics-team-reference',
          'docs/references/ux-ui-team-reference',
          'docs/references/3d-team-reference',
          'docs/references/music-team-reference',
          'docs/references/art-standards',
          'docs/references/art-portfolio',
        ]
      },
      { label: 'Credits', link: 'docs/guides/credits'}
    ],
  }), react(), markdoc(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
  },
});