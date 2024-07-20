/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "images.unsplash.com",
      "pngbuy.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

export default nextConfig;
