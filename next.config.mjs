/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
 images: {
    unoptimized: true,
  },
  basePath: '/next-app',
  assetPrefix: '/next-app/',
};

export default nextConfig;
