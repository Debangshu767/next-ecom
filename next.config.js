/** @type {import('next').NextConfig} */
const nextConfig = {

    images : {
        remotePatterns : [{hostname: "*"},{hostname: "images.unsplash.com"}],
    },
    experimental: {
        serverActions: true,
      },
    
}

module.exports = nextConfig

