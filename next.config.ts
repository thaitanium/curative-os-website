import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '',
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

export default nextConfig;
