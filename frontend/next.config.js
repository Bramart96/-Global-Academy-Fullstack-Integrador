/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname, // ahora sí funciona
  },
};

module.exports = nextConfig;
