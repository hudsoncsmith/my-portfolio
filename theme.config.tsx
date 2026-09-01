import React from 'react'

const config = {
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

      {/* Open Graph / link preview thumbnail */}
      <meta property="og:title" content="Hudson C. Smith" />
      <meta property="og:description" content="Robotics engineer building automation systems for aerospace, defense, and manufacturing." />
      <meta property="og:image" content="https://www.hudsoncsmith.com/images/sanding_photo.jpeg" />
      <meta property="og:url" content="https://www.hudsoncsmith.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Hudson C. Smith" />
      <meta name="twitter:description" content="Robotics engineer building automation systems for aerospace, defense, and manufacturing." />
      <meta name="twitter:image" content="https://www.hudsoncsmith.com/images/sanding_photo.jpeg" />
    </>
  ),

  // Disable the search bar
  search: {
    component: () => null
  },

  // Remove GitHub and Discord links
  project: {
    link: undefined
  },
  chat: {
    link: undefined
  },

  // Customize the footer
  footer: {
    text: `© ${new Date().getFullYear()} Hudson C. Smith`
  },

  // Remove feedback link
  feedback: {
    content: null
  },

  // Remove edit link
  editLink: {
    component: null
  },

  // Remove the "Last updated on" text
  gitTimestamp: null,

  // Ensure sidebar is enabled
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },

  // Disable dark mode
  darkMode: false,

  // Force light theme
  nextThemes: {
    defaultTheme: 'light',
    forcedTheme: 'light'
  }
}