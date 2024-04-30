/** @type {import('next').NextConfig} */
const nextConfig = {
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
