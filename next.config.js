import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Module not found: Can't resolve 'msw/browser' が解決するまで
  experimental: {
    turbo: {
      resolveAlias: {
        'msw/browser': 'node_modules/msw/lib/browser',
        'msw/node': 'node_modules/msw/lib/node',
      },
    },
  },
};

export default withBundleAnalyzer({
  enabled: import.meta.env?.ANALYZE === 'true',
})(config);

