

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})  

const defaultConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = withBundleAnalyzer(defaultConfig)
