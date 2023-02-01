import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePluginFonts } from 'vite-plugin-fonts';
import viteCompression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  preview: {
    port: 3000,
  },
  plugins: [
    react(),
    svgr(),
    VitePluginFonts({
      google: {
        families: ['Roboto'],
      },
    }),
    viteCompression(),
    tsconfigPaths(),
  ],
});
