/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/index",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
