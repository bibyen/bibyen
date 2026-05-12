/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Tell Next.js to generate static HTML
  trailingSlash: true,
  images: {
    unoptimized: true, // Required, GH Pages doesn't have an image server
  },
};

export default nextConfig;
