import Header from '@/components/Header'
import { SanityLive } from '@/sanity/lib/live'
import { Barlow, Inter } from 'next/font/google'

const barlow = Barlow({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-barlow'
})

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-inter'
})

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
        <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
          <body>
            <Header />
            {children}
            <SanityLive />
          </body>
        </html>
  )
}