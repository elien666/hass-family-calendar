const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/forecast',
    createProxyMiddleware({
      target: 'https://api.pirateweather.net',
      changeOrigin: true,
    })
  )
  .use(
    '/gti',
    createProxyMiddleware({
      target: 'http://gti.geofox.de',
      changeOrigin: true,
    })
  )
}