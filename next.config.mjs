/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://sore-puce-butterfly-cap.cyclic.app/:path*`,
      },
    ];
  },
};

export default nextConfig;
