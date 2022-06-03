/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'platform-lookaside.fbsbx.com',
      'tailwindui.com'
    ]
  },
  reactStrictMode: true
};

module.exports = nextConfig;