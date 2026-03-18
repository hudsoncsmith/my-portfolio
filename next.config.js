const nextra = require('nextra').default || require('nextra')

const withNextra = nextra({
  defaultShowCopyCode: true
})

module.exports = withNextra({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})
