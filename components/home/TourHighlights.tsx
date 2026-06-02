import Link from 'next/link';
import { tours } from '@/lib/data/tours';
import { TourCard } from '@/components/shared/TourCard';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';

export function TourHighlights() {
  return (
    <section className="py-24 md:py-32 bg-forest-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeader
            badge="Nossos Passeios"
            title="Escolha sua"
            titleHighlight="Aventura"
            subtitle="Três experiências únicas nas trilhas da Fazenda Adrenalina. Todas para 2 pessoas, com equipamentos de segurança inclusos."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tours.map((tour, i) => (
            <AnimateOnScroll key={tour.slug} delay={i * 0.12}>
              <TourCard tour={tour} />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/passeios"
              className="inline-flex items-center gap-2 border border-forest-600 text-white/70 hover:text-white hover:border-moss px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
            >
              Ver todos os detalhes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
