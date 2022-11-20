/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
        fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
    },
    images: { domains: ['maps.gstatic.com'] },
};

module.exports = nextConfig;