/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app'],
  },
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL + '/:path*',
      },
    ]
  },
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true,
  },
}
module.exports = nextConfig
