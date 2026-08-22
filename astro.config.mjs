import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static output by default — the site is self-contained, deployable anywhere.
  site: 'https://gumbarros.com.br',
  build: {
    format: 'directory',
  },
});
