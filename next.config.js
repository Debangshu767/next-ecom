/** @type {import('next').NextConfig} */
const nextConfig = {

    images : {
        remotePatterns : [{hostname: "*"},{hostname: "plus.unsplash.com"}],
    },

    experimental : {
        serverActions : true
    }
}

module.exports = nextConfig

