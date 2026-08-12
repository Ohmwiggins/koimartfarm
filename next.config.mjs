/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cnpaysvylgpmkitatsqf.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  async redirects() {
    return [
      // The Vercel preview host serves the same content as the apex domain.
      // Without this both get indexed and split ranking signals.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'koimartfarm.vercel.app' }],
        destination: 'https://koimartfarm.com/:path*',
        permanent: true,
      },
      // Old in-page anchors now have real pages.
      { source: '/home', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig