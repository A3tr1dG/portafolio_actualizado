import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/portafolioastrid/',
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.js'],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    cssCodeSplit: true,
    minify: 'esbuild',
  },
});
