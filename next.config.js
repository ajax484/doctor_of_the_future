/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },

      {
        protocol: "https",
        hostname: "images.pexels.com",
      },

      {
        protocol: "https",
        hostname: "th.bing.com",
      },

      {
        protocol: "https",
        hostname: "kvxotdwrwawhcmehobmj.supabase.co",
      },

      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};
