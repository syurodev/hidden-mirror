/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'konachan.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
