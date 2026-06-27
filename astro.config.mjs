// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// See https://docs.astro.build/en/guides/deploy/github/
// See https://starlight.astro.build/getting-started/
export default defineConfig({
  site: 'https://p3dual.com',
  integrations: [starlight({
    title: 'P3D Project Docs',
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
    ],
  }),],

  vite: {
    plugins: [tailwindcss()],
  },
});