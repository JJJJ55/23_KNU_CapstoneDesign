const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/predict', // 불러오려는 server 의 api path
    createProxyMiddleware({
      target: 'http://43.202.47.103:5000', // server 주소를 넣어주면 된다.
      changeOrigin: true,
    }),
  );
};