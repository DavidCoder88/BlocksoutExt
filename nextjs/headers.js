async function headers() {
  return [
    {
      source: '/:path*',
      headers: [
        // security headers from here - https://nextjs.org/docs/advanced-features/security-headers
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Cross-Origin-Opener-Policy',
          value: 'same-origin',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        // { key: "Access-Control-Allow-Credentials", value: "true" },
        // { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
        // { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
      ],
    },
  ];
}

module.exports = headers;
