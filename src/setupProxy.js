const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/predict',
    createProxyMiddleware({
      target: 'https://www.repairproject.net', // server 주소를 넣어주면 된다.
      changeOrigin: true,
    }),
  );
};
