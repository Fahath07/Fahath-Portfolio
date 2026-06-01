import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fahath Al Salam | Full Stack Developer',
  description: 'Personal portfolio of Fahath Al Salam - Computer Science Engineering Student and Full Stack Developer. Building scalable web applications and solving real-world problems through technology.',
  keywords: ['Full Stack Developer', 'Web Developer', 'React', 'Django', 'Python', 'Portfolio', 'Fahath Al Salam'],
  authors: [{ name: 'Fahath Al Salam' }],
  creator: 'Fahath Al Salam',
  openGraph: {
    title: 'Fahath Al Salam | Full Stack Developer',
    description: 'Computer Science Engineering Student and Full Stack Developer',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
