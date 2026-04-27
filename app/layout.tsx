import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Marketing KPI Dashboard',
  description: 'Dashboard',
  generator: 'KPI Dashboard',
  icons: {
    icon: [
      {
        url: '/kpi.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/kpi.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/kpi.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/kpi.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
