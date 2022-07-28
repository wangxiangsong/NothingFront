import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    exclude: ['node_modules', '.git', 'dist', 'mock', '.umi'],
  },
  attributify: true,
  darkMode: 'class',
});
