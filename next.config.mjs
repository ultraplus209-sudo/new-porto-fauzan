/** @type {import('next').NextConfig} */
const nextConfig = {
  // create an export-style build that produces `.output/public` for Netlify
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
