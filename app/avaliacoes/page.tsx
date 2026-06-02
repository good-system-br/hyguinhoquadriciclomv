import type { Metadata } from 'next';
import { reviews } from '@/lib/data/reviews';
import { ReviewCard } from '@/components/shared/ReviewCard';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';
import { GOOGLE_BUSINESS_LINK, WHATSAPP_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Avaliações',
  description: 'Veja o que nossos clientes dizem sobre os passeios de quadriciclo do Hyguinho em Monte Verde. Nota 5.0 no Google.',
};

export default function AvaliacoesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 bg-forest-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-forest-700/60 text-moss border border-forest-600/40">
              <span className="w-1.5 h-1.5 bg-moss rounded-full" />
              Clientes Reais
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight text-white mb-5">
              O que Dizem <span className="text-moss">Nossos Clientes</span>
            </h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-forest-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Rating Summary */}
          <AnimateOnScroll>
            <div className="bg-forest-800 border border-forest-700 rounded-3xl p-8 md:p-12 mb-16 text-center">
              <div className="flex flex-col items-center">
                <p className="font-display font-black text-8xl md:text-9xl text-white leading-none">5.0</p>
                <div className="flex gap-2 my-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/50 mb-6">Baseado em avaliações reais no Google</p>
                <a
                  href={GOOGLE_BUSINESS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-moss hover:bg-moss-dark text-forest-950 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                  Ver todas no Google
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reviews.map((review, i) => (
              <AnimateOnScroll key={review.name} delay={i * 0.08}>
                <ReviewCard review={review} dark />
              </AnimateOnScroll>
            ))}
          </div>

          {/* Leave review CTA */}
          <AnimateOnScroll>
            <div className="bg-forest-800 border border-forest-700 rounded-3xl p-10 text-center">
              <h3 className="font-display font-black text-3xl uppercase text-white mb-3">
                Já Fez o Passeio?
              </h3>
              <p className="text-white/55 mb-8 max-w-md mx-auto">
                Sua avaliação ajuda outras pessoas a descobrir nossa experiência. Deixe sua opinião no Google!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={GOOGLE_BUSINESS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-moss hover:bg-moss-dark text-forest-950 font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
                >
                  Avaliar no Google
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-forest-600 text-white/70 hover:text-white hover:border-moss px-8 py-4 rounded-full font-semibold transition-all duration-200"
                >
                  Reservar meu passeio
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
