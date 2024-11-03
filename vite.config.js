import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    minify: true,   
  },
});