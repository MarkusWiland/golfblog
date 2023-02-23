const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
