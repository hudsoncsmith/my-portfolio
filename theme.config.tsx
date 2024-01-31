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

export default function Document() {

  logo: (
    <>
      <img
        src="/images/IMG_8837.jpeg" // Replace with the actual path to your image
        alt="My Cool Project Logo"
        style={{ height: '50px', marginRight: '8px' }}
      />
    </>
  )

  const meta = {
    title: 'Hudson C. Smith',
    description: 'Mechanical Engineer | Physicist | Creative Problem Solver',
    image: "/images/IMG_0282.jpeg",
  }

}