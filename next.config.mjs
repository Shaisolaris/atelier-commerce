/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/atelier-commerce',
  assetPrefix: '/atelier-commerce/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
