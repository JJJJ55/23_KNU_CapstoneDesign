const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/predict', {
      target: 'http://3.37.37.124:5000', // server 주소를 넣어주면 된다.
      changeOrigin: true,
    }),
  );
};
