const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments.topLevelAwait = true;
    return config;
  }
};

module.exports = nextConfig;
