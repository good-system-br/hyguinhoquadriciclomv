import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { SITE_URL } from '@/lib/constants';

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Passeio de Quadriciclo em Monte Verde MG | Hyguinho Quadriciclos',
    template: '%s | Hyguinho Quadriciclos',
  },
  description:
    'Passeio de quadriciclo em Monte Verde MG na Fazenda Adrenalina. Aventura, segurança e diversão para 2 pessoas. Trilhas exclusivas a partir de R$160. Reserve já!',
  keywords: [
    'quadriciclo monte verde',
    'passeio de quadriciclo',
    'quadriciclo em monte verde',
    'passeio quadriciclo monte verde mg',
    'turismo monte verde',
    'aventura monte verde',
    'fazenda adrenalina',
    'trilha de quadriciclo',
    'quadriciclo minas gerais',
  ],
  authors: [{ name: 'Hyguinho Quadriciclos' }],
  openGraph: {
    title: 'Passeio de Quadriciclo em Monte Verde MG | Hyguinho Quadriciclos',
    description:
      'Passeios de quadriciclo em Monte Verde com trilhas na Fazenda Adrenalina. 2 pessoas por quadriciclo, segurança total. Reserve a partir de R$160!',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Hyguinho Quadriciclos Monte Verde',
    images: [{ url: '/img/passeio-quadriciclo-monte-verde-01.jpeg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  verification: { google: 'kz_ee3AAI3gaZDRqUpmlrnudI_FH9SHFCg5zNqK9Xgg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Hyguinho Quadriciclos Monte Verde',
              description: 'Passeios de quadriciclo em Monte Verde MG na Fazenda Adrenalina.',
              image: `${SITE_URL}/img/passeio-quadriciclo-monte-verde-01.jpeg`,
              '@id': `${SITE_URL}/`,
              url: `${SITE_URL}/`,
              telephone: '+5535998793419',
              priceRange: 'R$160 - R$300',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Monte Verde',
                addressRegion: 'MG',
                addressCountry: 'BR',
              },
              geo: { '@type': 'GeoCoordinates', latitude: -22.864722, longitude: -46.029444 },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                opens: '10:00',
                closes: '17:00',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                bestRating: '5',
                ratingCount: '50',
              },
            }),
          }}
        />
      </head>
      <body className="font-body bg-white text-forest-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
