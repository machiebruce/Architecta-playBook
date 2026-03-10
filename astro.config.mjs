import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://machiebruce.github.io',
  base: '/Architecta-playBook',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
