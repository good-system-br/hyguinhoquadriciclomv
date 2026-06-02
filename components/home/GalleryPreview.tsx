import Link from 'next/link';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';

const previewImages = [
  { src: '/img/passeio-quadriciclo-monte-verde-05.jpeg', alt: 'Aventura de quadriciclo em Monte Verde', span: 'md:col-span-2 md:row-span-2' },
  { src: '/img/passeio-quadriciclo-monte-verde-14.jpeg', alt: 'Pôr do Sol na Fazenda Adrenalina', span: '' },
  { src: '/img/passeio-quadriciclo-monte-verde-15.jpeg', alt: 'Vista panorâmica Monte Verde', span: '' },
  { src: '/img/passeio-quadriciclo-monte-verde-07.jpeg', alt: 'Trilha exclusiva de quadriciclo', span: '' },
  { src: '/img/passeio-quadriciclo-monte-verde-08.jpeg', alt: 'Passeio pôr do sol Monte Verde', span: '' },
];

export function GalleryPreview() {
  return (
    <section className="py-24 md:py-32 bg-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader
            badge="Galeria"
            title="Momentos"
            titleHighlight="Reais"
            subtitle="Cada foto é uma memória. Veja como é a experiência de quadriciclo na Fazenda Adrenalina."
            light
          />
        </div>

        <AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[480px] md:h-[560px]">
            {previewImages.map((img, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-stone ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="text-center mt-10">
            <Link
              href="/galeria"
              className="inline-flex items-center gap-2 bg-forest-900 hover:bg-forest-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Ver Galeria Completa
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
