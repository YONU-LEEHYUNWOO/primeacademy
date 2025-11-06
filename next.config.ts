import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
  // 개발 환경에서 특정 오류 무시
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // React Strict Mode에서 발생하는 MetaMask 관련 경고 무시
  reactStrictMode: true,
};

export default nextConfig;
