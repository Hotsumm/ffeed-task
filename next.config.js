/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'newsimg-hams.hankookilbo.com',
      'img.danawa.com',
      'mblogthumb-phinf.pstatic.net',
      'encrypted-tbn0.gstatic.com',
    ],
  },
};

module.exports = nextConfig;
