import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default {

  logo: (
    <>
      <img
        src="/images/IMG_8837.png" // Replace with the actual path to your image
        alt="Hudson C. Smith"
        style={{ width: '450px', height: '75px', marginRight: '8px' }}
      />
    </>
  ),

  head: (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Add the following line to include the favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      {/* Other meta tags, styles, and scripts can go here */}
      <title>Hudson C. Smith</title>
    </>
  ),

  // Disable the search bar
  search: {
    component: () => null
  },

  // Remove GitHub and Discord links
  project: {
    link: ''
  },
  chat: {
    link: ''
  },

  // Customize the footer
  footer: {
    text: `© ${new Date().getFullYear()} Hudson C. Smith`
  }
}