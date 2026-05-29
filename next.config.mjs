/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  basePath: "/next-app",
  assetPrefix: "/next-app/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
