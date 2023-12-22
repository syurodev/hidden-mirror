/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pximg.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
