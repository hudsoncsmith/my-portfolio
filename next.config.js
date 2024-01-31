const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = {
  compiler: {
    styledComponents: true,
  },
}

module.exports = withNextra()
