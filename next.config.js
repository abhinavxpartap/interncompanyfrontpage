/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true
  },
  api: {
    externalResolver: true,
  },
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: '/services/:slug',
      },
      {
        source: '/:slug',
        destination: '/portfolios/:slug',
      }
    ];
  },
}


module.exports = nextConfig
