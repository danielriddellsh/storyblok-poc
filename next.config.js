/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        storyBlok_ApiToken: process.env.STORYBLOK_API_TOKEN,
    },
}

module.exports = nextConfig
