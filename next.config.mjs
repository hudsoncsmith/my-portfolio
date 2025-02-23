import nextra from 'nextra';
import theme from 'nextra-theme-docs';

const withNextra = nextra({
  theme,
  themeConfig: './theme.config.tsx', // Adjust if needed
});

export default withNextra({
  reactStrictMode: true,
});
