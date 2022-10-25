module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    deviceSizes: [300, 450, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  compiler: {
    removeConsole: true,
    styledComponents: {
      ssr: true,
    },
  },
  productionBrowserSourceMaps: true,
  swcMinify: true,
};
