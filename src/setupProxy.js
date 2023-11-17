const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/predict', {
      target: 'https://www.repairproject.net:443', // server 주소를 넣어주면 된다.
      changeOrigin: true,
    }),
  );
};
