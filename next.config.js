/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  //profiler: false,
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/login',
  //       permanent: true,
  //     },
  //   ];
  // },
  eslint: {
    // This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // Handle Later: Remove this when project is ready for production.
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['*'],
  },
};
