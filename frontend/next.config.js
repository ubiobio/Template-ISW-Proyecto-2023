/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVIDOR: process.env.API_URL,
  },
};

module.exports = nextConfig;
