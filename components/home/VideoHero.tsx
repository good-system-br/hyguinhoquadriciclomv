import { WHATSAPP_LINK } from '@/lib/constants';

const fadeUp = (fromY: string, delay: string, duration = '0.6s') =>
  ({
    animation: `hero-fade-up ${duration} ease-out ${delay} both`,
    '--from-y': fromY,
  } as React.CSSProperties);

const text3D: React.CSSProperties = {
  textShadow: [
    '1px 1px 0 #558A2F',
    '2px 2px 0 #3D7A3D',
    '3px 3px 0 #2D5A2D',
    '4px 4px 0 #1A3D1A',
    '5px 5px 0 #0F280F',
    '6px 6px 0 #0A1A0A',
    '7px 7px 18px rgba(0,0,0,0.85)',
  ].join(', '),
};

export function VideoHero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-forest-950">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/img/passeio-quadriciclo-monte-verde-01.jpeg"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        aria-hidden="true"
      >
        <source src="/img/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/30 to-forest-950/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/30 to-transparent" />

      {/* ── MOBILE: apenas texto 3D ── */}
      <div className="sm:hidden relative z-10 text-center text-white px-4 flex flex-col items-center gap-3">
        <h1
          className="font-display font-black text-[4.25rem] uppercase leading-[0.88] tracking-tight"
          style={{
            ...text3D,
            ...fadeUp('24px', '0.3s', '0.8s'),
          }}
        >
          Hyguinho
          <br />
          <span className="text-moss">Quadriciclo</span>
        </h1>
        <p
          className="text-white/45 text-xs uppercase tracking-[0.25em] font-medium mt-2"
          style={fadeUp('12px', '0.9s', '0.5s')}
        >
          Monte Verde · MG
        </p>
      </div>

      {/* ── DESKTOP: layout completo ── */}
      <div className="hidden sm:block relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div
          style={fadeUp('16px', '0.2s')}
          className="inline-flex items-center gap-2.5 border border-white/15 bg-white/8 backdrop-blur-sm rounded-full px-5 py-2 text-sm font-medium text-white/70 mb-8"
        >
          <span className="w-2 h-2 bg-moss rounded-full animate-pulse" />
          Fazenda Adrenalina · Monte Verde, MG
        </div>

        <h1
          style={fadeUp('32px', '0.35s', '0.75s')}
          className="font-display font-black text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[8rem] uppercase leading-none tracking-tight mb-6"
        >
          Hyguinho
          <br />
          <span className="text-moss">Quadriciclo</span>
        </h1>

        <p
          style={fadeUp('20px', '0.55s')}
          className="text-lg sm:text-xl md:text-2xl text-white/65 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Experiências inesquecíveis em meio às montanhas de Minas Gerais.
        </p>

        <div style={fadeUp('16px', '0.7s')}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-moss hover:bg-moss-dark text-forest-950 font-black text-lg px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl shadow-moss/20"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.03a.75.75 0 00.914.914l5.181-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.299-1.431l-.38-.225-3.924 1.114 1.114-3.924-.225-.38A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Reservar Agora
          </a>
        </div>
      </div>

      {/* Stats bar — desktop only */}
      <div
        style={fadeUp('20px', '1s')}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-950 to-transparent pt-16 pb-8 hidden sm:block"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '5.0', label: 'Estrelas Google', icon: '★' },
              { value: 'R$160', label: 'A partir de', icon: '↗' },
              { value: '2', label: 'Pessoas por quadri', icon: '◎' },
              { value: '100%', label: 'Segurança', icon: '✓' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="font-display font-black text-2xl md:text-3xl text-white">{stat.value}</span>
                  <span className="text-moss text-sm font-bold">{stat.icon}</span>
                </div>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue — desktop only */}
      <div
        style={{ animation: 'hero-fade-in 0.6s ease-out 1.8s both' } as React.CSSProperties}
        className="absolute right-6 bottom-24 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[10px] uppercase tracking-[0.2em] font-medium [writing-mode:vertical-rl]">Scroll</span>
        <div
          style={{ animation: 'scroll-line-pulse 1.6s ease-in-out infinite' } as React.CSSProperties}
          className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent"
        />
      </div>
    </section>
  );
}
