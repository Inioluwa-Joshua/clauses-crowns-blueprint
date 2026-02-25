/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Common for migrations or simple static sites
  },
  // If you use path aliases, Next.js handles them via tsconfig.json
};

export default nextConfig;
