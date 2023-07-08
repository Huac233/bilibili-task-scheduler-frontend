const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  createProxyMiddleware({
    target: "http://45.148.134.152:8000",
    changeOrigin: true,
  })(req, res)
}
