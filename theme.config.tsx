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
        alt="My Cool Project Logo"
        style={{ width: '300px', height: '50px', marginRight: '8px' }}
      />
    </>
  )

}