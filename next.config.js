/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com', // Add this entry as well
      },
      {
        protocol: 'https',
        hostname: 'leetcard.jacoblin.cool', // Add this entry as well
      },

    ],
  },
};

module.exports = nextConfig;
