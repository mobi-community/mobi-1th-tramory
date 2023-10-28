/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui', 'shared-lib', 'config'],
  reactStrictMode: false,
};

module.exports = nextConfig;
