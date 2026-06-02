'use client';

import { useState } from 'react';
import { AnimateOnScroll } from '@/components/shared/AnimateOnScroll';
import { WHATSAPP_LINK, GOOGLE_MAPS_LINK, GOOGLE_BUSINESS_LINK, PHONE, EMAIL, INSTAGRAM_LINK, COMPANY_NAME } from '@/lib/constants';

export default function ContatoPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const text = `Olá! Meu nome é ${name}${email ? ` (${email})` : ''}.\n\n${message}`;
    window.open(`https://wa.me/5535998793419?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
    setName(''); setEmail(''); setMessage('');
    setTimeout(() => setSent(false), 5000);
  };

  const contacts = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.03a.75.75 0 00.914.914l5.181-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.299-1.431l-.38-.225-3.924 1.114 1.114-3.924-.225-.38A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      ),
      label: 'WhatsApp',
      value: PHONE,
      href: WHATSAPP_LINK,
      external: true,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      label: 'Telefone',
      value: PHONE,
      href: `tel:+5535998793419`,
      external: false,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: 'E-mail',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      external: false,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
        </svg>
      ),
      label: 'Localização',
      value: 'Fazenda Adrenalina, Monte Verde - MG',
      href: GOOGLE_MAPS_LINK,
      external: true,
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 bg-forest-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-forest-700/60 text-moss border border-forest-600/40">
              <span className="w-1.5 h-1.5 bg-moss rounded-full" />
              Fale Conosco
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight text-white mb-5">
              Entre em <span className="text-moss">Contato</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl mx-auto">
              Tire suas dúvidas, faça sua reserva ou simplesmente diga olá. Respondemos rápido!
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-forest-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <AnimateOnScroll direction="left">
              <div>
                <h2 className="font-display font-black text-3xl uppercase text-white mb-8">
                  Informações de <span className="text-moss">Contato</span>
                </h2>
                <div className="space-y-4 mb-10">
                  {contacts.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.external ? '_blank' : undefined}
                      rel={c.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-5 bg-forest-800 hover:bg-forest-700 border border-forest-700 hover:border-moss/40 rounded-2xl transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 bg-moss/15 rounded-xl flex items-center justify-center text-moss group-hover:bg-moss group-hover:text-forest-950 transition-all duration-200 flex-shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-semibold uppercase tracking-wider">{c.label}</p>
                        <p className="text-white font-semibold">{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-forest-800 hover:bg-moss text-white/60 hover:text-forest-950 rounded-xl flex items-center justify-center transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-forest-800 hover:bg-green-500 text-white/60 hover:text-white rounded-xl flex items-center justify-center transition-all duration-200"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.03a.75.75 0 00.914.914l5.181-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.299-1.431l-.38-.225-3.924 1.114 1.114-3.924-.225-.38A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                  </a>
                  <a
                    href={GOOGLE_BUSINESS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-forest-800 hover:bg-moss text-white/60 hover:text-forest-950 rounded-xl flex items-center justify-center transition-all duration-200"
                    aria-label="Google Reviews"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Form */}
            <AnimateOnScroll direction="right">
              <div className="bg-forest-800 border border-forest-700 rounded-3xl p-8 md:p-10">
                <h2 className="font-display font-black text-3xl uppercase text-white mb-8">
                  Envie uma <span className="text-moss">Mensagem</span>
                </h2>
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <div className="w-16 h-16 bg-moss/20 rounded-full flex items-center justify-center text-moss">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-moss font-bold text-lg">Mensagem enviada!</p>
                    <p className="text-white/50 text-sm">Você foi redirecionado para o WhatsApp. Respondemos em breve!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">Nome *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full bg-forest-900 border border-forest-700 focus:border-moss rounded-2xl px-5 py-4 text-white placeholder:text-white/25 outline-none transition-colors duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">E-mail (opcional)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full bg-forest-900 border border-forest-700 focus:border-moss rounded-2xl px-5 py-4 text-white placeholder:text-white/25 outline-none transition-colors duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider block mb-2">Mensagem *</label>
                      <textarea
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Qual passeio te interessa? Tem alguma dúvida?"
                        className="w-full bg-forest-900 border border-forest-700 focus:border-moss rounded-2xl px-5 py-4 text-white placeholder:text-white/25 outline-none transition-colors duration-200 resize-none text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 bg-moss hover:bg-moss-dark text-forest-950 font-black text-base py-5 rounded-2xl transition-all duration-200 hover:scale-[1.02]"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.03a.75.75 0 00.914.914l5.181-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.299-1.431l-.38-.225-3.924 1.114 1.114-3.924-.225-.38A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                      Enviar pelo WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Map */}
          <AnimateOnScroll>
            <div className="rounded-3xl overflow-hidden border border-forest-700 h-96">
              <iframe
                title="Mapa Hyguinho Quadriciclos"
                src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY_NAME)}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
