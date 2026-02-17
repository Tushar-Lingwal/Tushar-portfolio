/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Tushar-portfolio',
  assetPrefix: '/Tushar-portfolio/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;