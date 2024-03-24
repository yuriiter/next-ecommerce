/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
