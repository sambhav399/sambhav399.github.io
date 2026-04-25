import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  compiler: {
    styledComponents: {
      pure: true,
      fileName: false,
      displayName: false,
      minify: true,
      ssr: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sambhav399.github.io',
      },
    ],
  },
  productionBrowserSourceMaps: false,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
