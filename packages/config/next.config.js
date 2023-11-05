/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui', 'shared-lib', 'config'],
  reactStrictMode: false,
  images: {
    domains: ['i.pinimg.com'], // 허용할 도메인 목록을 추가
  },
};

module.exports = nextConfig;
