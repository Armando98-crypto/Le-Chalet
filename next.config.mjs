/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  ...(basePath && { output: "export" }),
  ...(basePath && { basePath }),
  ...(basePath && { assetPrefix: `${basePath}/` }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
