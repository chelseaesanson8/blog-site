import Header from '@/components/Header'
import { SanityLive } from '@/sanity/lib/live'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      {children}
      <SanityLive />
      <Footer />
    </ThemeProvider>
  )
}
