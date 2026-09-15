import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      { source: '/paketpris', destination: '/paket', permanent: true },
      { source: '/varavilkor', destination: '/villkor', permanent: true },
      { source: '/priser', destination: '/korlektioner', permanent: true },
      { source: '/kurser', destination: '/kurserpris', permanent: true },
      { source: '/kursertest', destination: '/riskettan', permanent: true },
      { source: '/1307-2', destination: '/boka', permanent: true },
      {
        source: '/e-handel',
        destination: 'https://www.trafikskolaonline.se/sv/skola/proffs/ehandel',
        permanent: true,
      },
      { source: '/:path*/index.html', destination: '/:path*', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};
export default config;
