/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  basePath: "/pmi",
  assetPrefix: "/pmi/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
