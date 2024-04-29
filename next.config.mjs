/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/contact-book/index",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
