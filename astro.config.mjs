import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://goldenfox.games',
  integrations: [tailwind()],
  output: 'static',
});
