import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React's Strict Mode for highlighting potential issues (recommended in dev)
  reactStrictMode: true,

  // Configure image optimization for Firebase Storage
  images: {
    domains: ['firebasestorage.googleapis.com','res.cloudinary.com'],
    // formats: ['image/webp'], // Optional: enable modern image formats
  },

  // Optional: Enable experimental features if using Next.js 13+ app directory
  // experimental: {
  //   appDir: true,
  //   serverActions: true,
  // },

  // Optional: Set environment variables if needed
  // env: {
  //   FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  //   NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE,
  // },

  // Optional: Webpack customization (e.g., polyfills or aliasing)
  // webpack(config) {
  //   return config;
  // },

  // Optional: Internationalization setup
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
};

export default nextConfig;
