// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://devnotpay.github.io',
  base: '/FreeWorkTracker',
  vite: {
    plugins: [tailwindcss()]
  }
});
