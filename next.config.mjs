/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow local images from public folder
    unoptimized: false,
    // If you need external image sources, add them here:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //   },
    // ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
