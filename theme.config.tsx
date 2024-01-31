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
        src="/images/IMG_8837.jpeg" // Replace with the actual path to your image
        alt="My Cool Project Logo"
        style={{ width: ' 150px', height: '25px', marginRight: '8px' }}
      />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        My Cool Project
      </span>
    </>
  )

}