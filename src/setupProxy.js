const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  const target = process.env.REACT_APP_PROXY_TARGET;
  const webSocketTarget = target.replace('http', 'ws');

  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    }),
  );

  app.use(
    createProxyMiddleware('/ws', {
      target: webSocketTarget,
      changeOrigin: true,
      ws: true,
    }),
  );
};
