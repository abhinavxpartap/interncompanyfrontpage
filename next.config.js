/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
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
        destination: '/industry/:slug',
      },
      {
        source: '/:slug',
        destination: '/portfolios/:slug',
      },
      {
        source: '/:slug',
        destination: '/admin/blog/edit/:slug',
      },
      {
        source: '/:slug',
        destination: '/blogs/:slug',
      }
    ];
  },
}


module.exports = nextConfig
