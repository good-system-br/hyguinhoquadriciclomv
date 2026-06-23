import type { Metadata } from 'next';
import { tours } from '@/lib/data/tours';
import { TourCard } from '@/components/shared/TourCard';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';
import { CTABanner } from '@/components/home/CTABanner';
import { WHATSAPP_LINK, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Passeios de Quadriciclo em Monte Verde MG',
  description:
    'Conheça os passeios de quadriciclo em Monte Verde MG: Normal, Noturno e Pôr do Sol . Trilhas na Fazenda Adrenalina, guia especializado, equipamentos inclusos.',
  alternates: { canonical: `${SITE_URL}/passeios` },
  openGraph: {
    title: 'Passeios de Quadriciclo em Monte Verde MG | Hyguinho Quadriciclos',
    description:
      'Passeio Normal, Noturno e Pôr do Sol. Trilhas exclusivas na Fazenda Adrenalina para 2 pessoas a partir de R$160.',
    images: [{ url: '/img/passeio-quadriciclo-monte-verde-19.jpeg', width: 1200, height: 630 }],
  },
};

export default function PasseiosPage() {
  const toursSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Passeios de Quadriciclo em Monte Verde MG',
    description: 'Trilhas exclusivas de quadriciclo na Fazenda Adrenalina, Monte Verde MG.',
    url: `${SITE_URL}/passeios`,
    itemListElement: tours.map((tour, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristTrip',
        name: `${tour.name} — Quadriciclo Monte Verde MG`,
        description: tour.longDescription,
        image: `${SITE_URL}${tour.image}`,
        url: `${SITE_URL}/passeios`,
        touristType: 'Aventura',
        itinerary: {
          '@type': 'ItemList',
          name: `Roteiro — ${tour.name}`,
          itemListElement: tour.highlights.map((h, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: h,
          })),
        },
        offers: {
          '@type': 'Offer',
          price: tour.price,
          priceCurrency: 'BRL',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'LocalBusiness',
            name: 'Hyguinho Quadriciclos Monte Verde',
            telephone: '+5535998793419',
          },
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toursSchema) }}
      />
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-forest-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/passeio-quadriciclo-monte-verde-04.jpeg"
            alt="Passeios de quadriciclo Monte Verde"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 to-forest-950" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-forest-700/60 text-moss border border-forest-600/40">
              <span className="w-1.5 h-1.5 bg-moss rounded-full" />
              Fazenda Adrenalina
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight text-white mb-5">
              Nossos <span className="text-moss">Passeios</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Três experiências únicas nas trilhas de Monte Verde. Escolha a que mais combina com você.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-24 bg-forest-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {tours.map((tour, i) => (
              <AnimateOnScroll key={tour.slug} delay={i * 0.12}>
                <TourCard tour={tour} />
              </AnimateOnScroll>
            ))}
          </div>

          {/* Detailed info per tour */}
          <div className="space-y-16">
            {tours.map((tour, i) => (
              <AnimateOnScroll key={`detail-${tour.slug}`}>
                <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                  <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      {tour.isPopular && (
                        <div className="absolute top-4 left-4 bg-moss text-forest-950 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                          Mais Procurado
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 bg-forest-700/60 text-moss border border-forest-600/40">
                      {tour.difficulty}
                    </div>
                    <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white leading-none mb-3">
                      {tour.name}
                    </h2>
                    <p className="text-moss font-semibold mb-5">{tour.subtitle}</p>
                    <p className="text-white/65 leading-relaxed mb-8">{tour.longDescription}</p>
                    <ul className="space-y-3 mb-8">
                      {tour.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-white/80">
                          <span className="w-5 h-5 rounded-full bg-moss/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-white/40 text-xs">a partir de</p>
                        <p className="font-display font-black text-4xl text-white leading-none">R${tour.price}</p>
                        <p className="text-white/40 text-xs">por quadriciclo</p>
                      </div>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-moss hover:bg-moss-dark text-forest-950 font-black py-4 rounded-2xl transition-all duration-200 hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.03a.75.75 0 00.914.914l5.181-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.299-1.431l-.38-.225-3.924 1.114 1.114-3.924-.225-.38A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                        </svg>
                        Reservar
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
