import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePluginFonts } from 'vite-plugin-fonts';
import * as path from 'path';
import viteCompression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';
import dynamicImport from 'vite-plugin-dynamic-import';

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
    // dynamicImport(),
  ],
  // build: {
  // minify: false,
  // },

  // resolve: {
  //   alias: [
  //     { find: '@', replacement: path.resolve(__dirname, 'src') },
  //     {
  //       find: '@components',
  //       replacement: path.resolve(__dirname, 'src', 'components'),
  //     },
  //     { find: '@pages', replacement: path.resolve(__dirname, 'src', 'pages') },
  //     {
  //       find: '@constants',
  //       replacement: path.resolve(__dirname, 'src', 'constants'),
  //     },
  //     { find: '@/store', replacement: path.resolve(__dirname, 'src', 'store') },
  //     { find: '@utils', replacement: path.resolve(__dirname, 'src', 'utils') },
  //     { find: '@hooks', replacement: path.resolve(__dirname, 'src', 'hooks') },
  //   ],
  // },
});
