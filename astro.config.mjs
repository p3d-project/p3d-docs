// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
// See https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  site: 'https://p3dual.com',
  integrations: [starlight({
    title: 'P3Dual Project Docs',
  }),],
});