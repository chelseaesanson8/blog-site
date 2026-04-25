import "@/app/globals.css";
import { Barlow, Inter, Fraunces } from 'next/font/google'

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

const fraunces = Fraunces({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-fraunces'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}