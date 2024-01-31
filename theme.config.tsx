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
        src="/images/IMG_0282.jpeg" // Replace with the actual path to your image
        alt="My Cool Project Logo"
        style={{ width: '24px', height: '24px', marginRight: '8px' }}
      />
      <span style={{ fontWeight: 800 }}>My Cool Project</span>
    </>
  )
}