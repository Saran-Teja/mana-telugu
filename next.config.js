/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com', 'upload.wikimedia.org'],
  },
};

module.exports = nextConfig;