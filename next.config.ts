import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...['services', 'contact'].flatMap(page => [
        { source: `/${page}.html`, destination: `/${page}/`, permanent: true },
        { source: `/${page}/index.html`, destination: `/${page}/`, permanent: true },
      ]),
    ];
  },
};
export default nextConfig;
