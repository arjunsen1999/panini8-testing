/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "/api/auth/:path*", // Ensure this isn't redirected
      },
      // other rewrites
    ];
  },
};

export default nextConfig;
