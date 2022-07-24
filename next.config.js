/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPreact = require('next-plugin-preact');

module.exports = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})(withPreact({
        reactStrictMode: true,
        swcMinify: true,
        experimental: {
            esmExternals: true,
        }
    }
));
