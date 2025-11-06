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
  // Vercel 배포 최적화
  output: 'standalone',
  // 빌드 최적화
  swcMinify: true,
  // 압축 활성화
  compress: true,
};

export default nextConfig;
