import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // 1. Force Next.js to compile Shery.js internals
  transpilePackages: ['sheryjs'],

  // 2. Configure Webpack to handle the shader files (.glsl) used by Shery.js
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader'],
    });
    return config;
  },
};

export default nextConfig;