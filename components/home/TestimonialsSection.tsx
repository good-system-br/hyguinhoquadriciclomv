import Link from 'next/link';
import { reviews } from '@/lib/data/reviews';
import { ReviewCard } from '@/components/shared/ReviewCard';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';
import { GOOGLE_BUSINESS_LINK } from '@/lib/constants';

export function TestimonialsSection() {
  const featured = reviews.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-forest-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionHeader
            badge="Avaliações"
            title="O que dizem"
            titleHighlight="Nossos Clientes"
            center={false}
          />
          <AnimateOnScroll direction="right">
            <div className="flex items-center gap-4 bg-forest-800 rounded-2xl px-6 py-4 border border-forest-700 flex-shrink-0">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-display font-black text-3xl text-white leading-none">5.0</p>
                <p className="text-white/40 text-xs mt-1">Google Reviews</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((review, i) => (
            <AnimateOnScroll key={review.name} delay={i * 0.1}>
              <ReviewCard review={review} dark />
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/avaliacoes"
              className="inline-flex items-center justify-center gap-2 border border-forest-600 text-white/70 hover:text-white hover:border-moss px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
            >
              Ver todas as avaliações
            </Link>
            <a
              href={GOOGLE_BUSINESS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
            >
              <svg className="w-4 h-4 text-moss" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
              Avaliar no Google
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
