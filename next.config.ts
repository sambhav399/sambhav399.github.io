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
            ecma: 2020,
            module: true,
            toplevel: true,
            compress: {
              passes: 3,
              drop_console: true,
              drop_debugger: true,
              pure_getters: true,
              unsafe: true,
              unsafe_arrows: true,
              unsafe_comps: true,
              unsafe_math: true,
              unsafe_methods: true,
              unsafe_symbols: true,
              hoist_funs: true,
              hoist_vars: true,
              reduce_funcs: true,
              reduce_vars: true,
            },
            mangle: {
              toplevel: true,
              properties: {
                regex: /^_/,
              },
            },
            format: {
              comments: false,
            },
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
