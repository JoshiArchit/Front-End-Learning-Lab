/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Front-End-Learning-Lab",
  assetPrefix: "/Front-End-Learning-Lab/",
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
