import type { Metadata } from 'next';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';
import { CTABanner } from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a história do Hyguinho Quadriciclos. Aventura, segurança e experiências inesquecíveis em Monte Verde MG desde o início.',
};

const values = [
  {
    icon: '🛡️',
    title: 'Segurança Primeiro',
    desc: 'Todos os equipamentos são revisados antes de cada saída. Capacetes, protetores e briefing completo antes de começar.',
  },
  {
    icon: '🌿',
    title: 'Respeito à Natureza',
    desc: 'Nossas trilhas são projetadas para preservar o ambiente natural da Serra da Mantiqueira.',
  },
  {
    icon: '❤️',
    title: 'Experiência Personalizada',
    desc: 'Cada passeio é único. Nos adaptamos ao ritmo e experiência de cada grupo.',
  },
  {
    icon: '⭐',
    title: 'Excelência no Serviço',
    desc: '5 estrelas no Google. Nossa satisfação é sua experiência ser inesquecível.',
  },
];

const differentials = [
  { number: '50+', label: 'Avaliações 5 estrelas' },
  { number: '3', label: 'Tipos de passeio' },
  { number: '2', label: 'Pessoas por quadriciclo' },
  { number: '7', label: 'Dias por semana' },
];

export default function SobrePage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-20 bg-forest-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/passeio-quadriciclo-monte-verde-05.jpeg"
            alt="Sobre o Hyguinho Quadriciclos"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 to-forest-950" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-forest-700/60 text-moss border border-forest-600/40">
              <span className="w-1.5 h-1.5 bg-moss rounded-full" />
              Nossa História
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight text-white mb-5">
              Sobre <span className="text-moss">Nós</span>
            </h1>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">
              Uma paixão por aventura transformada em experiência inesquecível para turistas de todo o Brasil.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-forest-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <AnimateOnScroll direction="left">
              <div className="relative">
                <img
                  src="/img/passeio-quadriciclo-monte-verde-03.jpeg"
                  alt="Hyguinho guiando passeio"
                  className="w-full rounded-3xl object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <div className="absolute -bottom-5 -right-5 bg-moss text-forest-950 px-6 py-4 rounded-2xl font-display font-black text-center">
                  <p className="text-3xl leading-none">5.0</p>
                  <p className="text-xs font-bold uppercase">Google ★★★★★</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right">
              <span className="text-moss text-sm font-bold uppercase tracking-widest mb-3 block">A Nossa Missão</span>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white leading-none mb-6">
                Aventura com
                <br />
                <span className="text-moss">Propósito</span>
              </h2>
              <div className="space-y-4 text-white/65 leading-relaxed">
                <p>
                  O Hyguinho Quadriciclos nasceu do amor por Monte Verde e pela natureza exuberante da Serra da Mantiqueira. Nossa missão é simples: proporcionar experiências autênticas que conectem as pessoas com a beleza natural da região.
                </p>
                <p>
                  Na Fazenda Adrenalina, você encontra trilhas exclusivas, paisagens de tirar o fôlego e a emoção do quadriciclo em um ambiente seguro e profissional. Somos especialistas em fazer cada visitante se sentir em casa enquanto vive a adrenalina da aventura.
                </p>
                <p>
                  Cada passeio é guiado pessoalmente, com atenção total à segurança e ao conforto de todos. Do casal que busca um momento romântico ao grupo de amigos em busca de adrenalina — temos o passeio perfeito para você.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Numbers */}
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
              {differentials.map((d) => (
                <div key={d.label} className="bg-forest-800 rounded-3xl p-8 text-center border border-forest-700">
                  <p className="font-display font-black text-5xl text-moss leading-none mb-2">{d.number}</p>
                  <p className="text-white/50 text-sm">{d.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Values */}
          <div className="mb-24">
            <AnimateOnScroll>
              <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white leading-none text-center mb-12">
                Nossos <span className="text-moss">Valores</span>
              </h2>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <AnimateOnScroll key={v.title} delay={i * 0.1}>
                  <div className="bg-forest-800 border border-forest-700 hover:border-moss/40 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1">
                    <span className="text-4xl mb-4 block">{v.icon}</span>
                    <h3 className="font-bold text-white text-lg mb-3">{v.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Safety */}
          <AnimateOnScroll>
            <div className="bg-forest-800 border border-forest-700 rounded-3xl p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-moss text-sm font-bold uppercase tracking-widest mb-3 block">Prioridade Absoluta</span>
                  <h2 className="font-display font-black text-4xl uppercase text-white leading-none mb-6">
                    Segurança
                    <br />
                    <span className="text-moss">Em Primeiro</span>
                  </h2>
                  <ul className="space-y-4 text-white/65">
                    {[
                      'Capacetes e protetores fornecidos gratuitamente',
                      'Briefing completo antes de cada saída',
                      'Guia experiente durante todo o percurso',
                      'Quadriciclos revisados e manutenidos regularmente',
                      'Seguro durante o passeio',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-moss/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <img
                    src="/img/passeio-quadriciclo-monte-verde-10.jpeg"
                    alt="Segurança no passeio de quadriciclo"
                    className="w-full rounded-2xl object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
