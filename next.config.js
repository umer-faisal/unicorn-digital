/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Help Windows/antivirus-locked files by using polling in dev
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

module.exports = nextConfig;


