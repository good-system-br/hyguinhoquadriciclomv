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
              '@type': ['LocalBusiness', 'TouristAttraction', 'SportsActivityLocation'],
              name: 'Hyguinho Quadriciclos Monte Verde',
              alternateName: 'Hyguinho Quadriciclos',
              description: 'Passeios de quadriciclo em Monte Verde MG na Fazenda Adrenalina. Trilhas pela Serra da Mantiqueira, passeio normal, noturno e pôr do sol.',
              image: [
                `${SITE_URL}/img/passeio-quadriciclo-monte-verde-01.jpeg`,
                `${SITE_URL}/img/passeio-quadriciclo-monte-verde-19.jpeg`,
                `${SITE_URL}/img/passeio-quadriciclo-monte-verde-12.jpeg`,
              ],
              '@id': `${SITE_URL}/`,
              url: `${SITE_URL}/`,
              telephone: '+5535998793419',
              email: 'hygormeendes98@gmail.com',

              currenciesAccepted: 'BRL',
              paymentAccepted: 'Dinheiro, PIX, Cartão de Crédito',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Fazenda Adrenalina',
                addressLocality: 'Monte Verde',
                addressRegion: 'MG',
                postalCode: '37530-000',
                addressCountry: 'BR',
              },
              geo: { '@type': 'GeoCoordinates', latitude: -22.864722, longitude: -46.029444 },
              hasMap: 'https://maps.app.goo.gl/ErhUFfdAnUC2DiJv8',
              areaServed: {
                '@type': 'City',
                name: 'Monte Verde',
                containedInPlace: { '@type': 'State', name: 'Minas Gerais' },
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                opens: '10:00',
                closes: '18:00',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                bestRating: '5',
                worstRating: '1',
                ratingCount: '48',
              },
              sameAs: [
                'https://www.instagram.com/hyguinho_quadriciclos_mv/',
                'https://g.page/r/CRfCXnY8kz4GEBM/review',
              ],
              makesOffer: [
                {
                  '@type': 'Offer',
                  name: 'Passeio Normal de Quadriciclo',
                  description: 'Trilha guiada de 40-60 min pela Fazenda Adrenalina. Ideal para iniciantes.',
                  price: '160',
                  priceCurrency: 'BRL',
                  availability: 'https://schema.org/InStock',
                },
                {
                  '@type': 'Offer',
                  name: 'Passeio Pôr do Sol de Quadriciclo',
                  description: 'Passeio de 1h30 com vista panorâmica ao entardecer. Saída às 17h.',
                  price: '300',
                  priceCurrency: 'BRL',
                  availability: 'https://schema.org/InStock',
                },
                {
                  '@type': 'Offer',
                  name: 'Passeio Noturno de Quadriciclo',
                  description: 'Aventura noturna sob o céu estrelado de Monte Verde.',
                  price: '160',
                  priceCurrency: 'BRL',
                  availability: 'https://schema.org/InStock',
                },
              ],
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
