import type { NextConfig } from "next";
import TerserPlugin from "terser-webpack-plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  eslint: {
    dirs: ["src"],
  },
  compiler: {
    styledComponents: {
      pure: true,
      fileName: false,
      displayName: false,
      minify: true,
      ssr: true,
    },
  },
  productionBrowserSourceMaps: false,
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      const terser = new TerserPlugin({
        terserOptions: {
          compress: { drop_console: true, passes: 3 },
          mangle: { properties: { regex: /^_/ } },
          format: { comments: false },
        },
        extractComments: false,
      });

      config.optimization ||= {};
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        ...(config.optimization.minimizer || []),
        terser,
      ];
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
