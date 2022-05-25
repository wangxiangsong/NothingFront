export default {
  proxy: {
    '/home': {
      target:
        'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list',
      changeOrigin: true,
      pathRewrite: { '^/common-api': '' },
    },
  },
};
