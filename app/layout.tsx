import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import getLocAttributes from '@/lib/getLocAttributes'
import LocaleUpdater from '@/components/LocaleUpdater'
import JsonLd from '@/components/JsonLd'
import WhatsAppButton from '@/components/whatsapp-button'

export const metadata: Metadata = {
  title: 'Werexp - Agencia de Desarrollo Web y Móvil',
  description: 'Agencia de diseño y desarrollo digital especializada en web, móvil y AR. Transformamos ideas en soluciones digitales innovadoras con tecnología de vanguardia.',
  generator: 'Next.js',
  keywords: 'werexp, desarrollo web, desarrollo móvil, AR, diseño digital, agencia digital, Perú, Lima, tecnología, innovación',
  authors: [{ name: 'Werexp Team' }],
  creator: 'Werexp',
  publisher: 'Werexp',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.werexp.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Werexp - Agencia de Desarrollo Web y Móvil',
    description: 'Agencia de diseño y desarrollo digital especializada en web, móvil y AR. Transformamos ideas en soluciones digitales innovadoras.',
    url: 'https://www.werexp.com',
    siteName: 'Werexp',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Werexp - Agencia de Desarrollo Web y Móvil',
    description: 'Agencia de diseño y desarrollo digital especializada en web, móvil y AR',
    creator: '@p1408',
  },
  verification: {
    google: 'gcgFd-oLiyZwnKYhmlpgDQYBvCqoo6Qx-1EIaqEzbys',
  },
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
        <link rel="icon" href="/images/icon.png" type="image/png" />
        <meta name="google-site-verification" content="gcgFd-oLiyZwnKYhmlpgDQYBvCqoo6Qx-1EIaqEzbys" />
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
        <JsonLd />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
