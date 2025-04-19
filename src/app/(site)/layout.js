import '@/styles/global.css'
import { Bitter, Montserrat, Merriweather } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Initialize the fonts with subsets and weights
const bitter = Bitter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-bitter',
  preload: true,
  adjustFontFallback: true,
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  preload: true,
  adjustFontFallback: true,
})

const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  preload: true,
  adjustFontFallback: true,
})

export const metadata = {
  title: 'AURÊA - Calculs de structures et études photovoltaïques',
  description: 'Bureau d\'études spécialisé en calculs de structures et études photovoltaïques',
  icons: {
    icon: '/images/logo/favicon.png',
    apple: '/images/logo/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html 
      lang="fr" 
      className={`${bitter.variable} ${montserrat.variable} ${merriweather.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          rel="icon" 
          href="/images/logo/favicon.png"
          type="image/png"
          sizes="32x32"
        />
        <link 
          rel="apple-touch-icon" 
          href="/images/logo/favicon.png"
          sizes="180x180"
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 