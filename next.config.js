/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';
import withPreact from 'next-plugin-preact';

export default withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})(withPreact({
        webpack5: true,
        reactStrictMode: true,
        esmExternals: true,
        swcLoader: true,
        swcMinify: true,
        experimental: {
            modern: true,
        }
    }
));
