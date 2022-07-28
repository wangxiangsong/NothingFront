import { defineConfig } from 'umi';
import path from 'path';
import routes from './src/config/routes';
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  alias: {
    '@utils': path.resolve(__dirname, '../src/utils/'),
    '@assets': path.resolve(__dirname, '../src/assets/'),
    '@components': path.resolve(__dirname, '../src/components/'),
    '@pages': path.resolve(__dirname, '../src/pages/'),
    '@styles': path.resolve(__dirname, '../src/styles/'),
    '@mock': path.resolve(__dirname, '../mock/'),
    '@': path.resolve(__dirname, '../src/'),
  },
  chainWebpack(config: any) {
    config.plugin('windicss').use(WindiCSSWebpackPlugin);
  },
});
