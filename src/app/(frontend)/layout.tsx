import Header from '@/components/Header'
import { SanityLive } from '@/sanity/lib/live'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'
import HashScroller from '@/components/HashScroller'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL("https://developedbychels.com"),
  title: {
    default: "Chelsea Sanson | Frontend Developer",
    template: "%s | developed by chels",
  },
}

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <HashScroller />
      <Header />
      {children}
      <SanityLive />
      <Footer />
    </ThemeProvider>
  )
}
