import type { Metadata } from 'next'
import '../styles/global.css'

export const metadata: Metadata = {
  title: 'Hudson C. Smith',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
