import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import getLocAttributes from '@/lib/getLocAttributes'
import LocaleUpdater from '@/components/LocaleUpdater'

export const metadata: Metadata = {
  title: 'Werexp Web',
  description: 'Created with Werexp',
  generator: 'Werexp Web',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Determine locale: use NEXT_PUBLIC_LOCALE if provided, otherwise fallback to 'es-PE'
  const locale = process.env.NEXT_PUBLIC_LOCALE ?? 'es-PE'
  const { lang, dir } = getLocAttributes(locale)

  return (
    <html lang={lang} dir={dir}>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {/* Client-side updater: non-intrusive detection + persistence in localStorage */}
        <LocaleUpdater defaultLocale={locale} />
        {children}
      </body>
    </html>
  )
}
