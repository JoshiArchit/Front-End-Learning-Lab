/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages (static hosting)
  output: "export",

  // Required for project pages: https://<user>.github.io/<repo>/
  basePath: "/Front-End-Learning-Lab",
  assetPrefix: "/Front-End-Learning-Lab/",

  // Makes routes export as /route/index.html so GitHub Pages can serve them
  trailingSlash: true,

  // GitHub Pages can't run Next.js image optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;