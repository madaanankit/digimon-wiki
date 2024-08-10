/** @type {import('next').NextConfig} */

export default {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'digimon.shadowsmith.com',
                port: '',
                pathname: '/img/**',
            },
        ],
    },
};
