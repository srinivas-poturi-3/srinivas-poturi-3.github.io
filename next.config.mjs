/** @type {import('next').NextConfig} */

import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  output: 'export', // Add this to handle static export
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
};

export default withPWA({
  dest: "public",
  cacheOnFrontEndNavCaching: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  }
})(nextConfig);
