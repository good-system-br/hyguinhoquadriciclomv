import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';
import { WHATSAPP_LINK } from '@/lib/constants';

export function CTABanner() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/img/monte-verde-mao-de-deus.jpeg"
          alt="Monte Verde paisagem"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <AnimateOnScroll>
          <p className="text-moss text-sm font-bold uppercase tracking-widest mb-4">Reserve agora</p>
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight mb-6">
            Sua Próxima
            <br />
            <span className="text-moss">Aventura</span>
            <br />
            Te Espera
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Não deixe pra depois. Faça sua reserva agora pelo WhatsApp e garanta sua experiência inesquecível em Monte Verde.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-moss hover:bg-moss-dark text-forest-950 font-black text-lg px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-moss/25"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.03a.75.75 0 00.914.914l5.181-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.299-1.431l-.38-.225-3.924 1.114 1.114-3.924-.225-.38A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Reservar pelo WhatsApp
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
