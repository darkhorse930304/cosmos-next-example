const path = require('path')
const withSass = require('@zeit/next-sass')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withSass({
cssModules: true
})

module.exports = {
sassOptions: {
includePaths: [path.join(__dirname, 'styles')],
},
}

module.exports = nextConfig



