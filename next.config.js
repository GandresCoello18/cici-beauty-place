/* eslint-disable @typescript-eslint/no-var-requires */
const config = {
  target: process.env.NODE_ENV === 'production' ? 'serverless' : 'server',
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = {
  withBundleAnalyzer: withBundleAnalyzer({}),
  config,
}
