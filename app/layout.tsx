import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creator Invoice Generator — Automate Brand Deal Invoices',
  description: 'Generate professional invoices for sponsored posts, brand deals, and affiliate partnerships. Track payments and manage brand relationships effortlessly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fcbbddfc-732f-4100-8b74-9aa35252d0e5"></script>
      </head>
      <body style={{ backgroundColor: '#0d1117', color: '#c9d1d9', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
