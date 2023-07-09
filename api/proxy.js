const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  createProxyMiddleware({
    target: "https://api.xn--5gq551h.co",
    changeOrigin: true,
  })(req, res)
}
