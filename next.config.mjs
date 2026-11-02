/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  transpilePackages: ["@courtneyring/components-library"],
  allowedDevOrigins: ["172.16.184.89"],
};

export default nextConfig;
