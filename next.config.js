/** @type {import('next').NextConfig} */
const nextConfig = {

    images : {
        remotePatterns : [{hostname: "*"},{hostname: "images.unsplash.com"}],
    },

    
}

module.exports = nextConfig

