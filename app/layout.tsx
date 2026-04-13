import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const _caveat = Caveat({ subsets: ["latin"], variable: "--font-handwritten" });

export const metadata: Metadata = {
  title: 'Mayank | Motion Designer & Video Editor',
  description:
    'Motion designer and video editor from India — cinematic ads, reels, and social content. Clean storytelling, strong visuals, 1M+ views.',
  generator: 'v0.app',
  icons: {
    icon: '/images/icons/20b11aa1187ad281328ff924a4282e72.jpg',
    apple: '/images/icons/20b11aa1187ad281328ff924a4282e72.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.variable} ${_geistMono.variable} ${_playfair.variable} ${_caveat.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
