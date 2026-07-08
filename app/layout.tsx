import type { Metadata } from 'next'
import { Archivo, Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import TimingBanner from '@/components/TimingBanner'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  style: ['normal', 'italic'],
  weight: ['400', '600', '800', '900'],
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Nikola Tošić · #11 · Clio Cup Series 2026',
  description:
    'Zvanični sajt trkača Nikole Tošića #11 u Renault Clio Cup Series 2026. Sedam vikenda, jedan cilj.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="sr"
      className={`${archivo.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body>
        <TimingBanner />
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}
