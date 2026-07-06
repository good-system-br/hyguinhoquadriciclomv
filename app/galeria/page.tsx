'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'todas', label: 'Todas' },
  { id: 'aventura', label: 'Aventura' },
  { id: 'por-do-sol', label: 'Pôr do Sol' },
  { id: 'paisagem', label: 'Paisagem' },
];

const images = [
  { src: '/img/passeio-quadriciclo-monte-verde-02.jpeg', alt: 'Casal em trilha guiada de quadriciclo na Fazenda Adrenalina em Monte Verde MG', category: 'aventura' },
  { src: '/img/passeio-quadriciclo-monte-verde-03.jpeg', alt: 'Quadriciclo em aventura pela Serra da Mantiqueira em Monte Verde', category: 'aventura' },
  { src: '/img/passeio-quadriciclo-monte-verde-04.jpeg', alt: 'Trilha guiada de quadriciclo para turistas em Monte Verde MG', category: 'aventura' },
  { src: '/img/passeio-quadriciclo-monte-verde-05.jpeg', alt: 'Casal vivendo um dos melhores passeios em Monte Verde', category: 'aventura' },
  { src: '/img/espontanea.jpg', alt: 'Momento espontâneo durante passeio de quadriciclo em Monte Verde', category: 'aventura' },
  { src: '/img/passeio-quadriciclo-monte-verde-10.jpeg', alt: 'Aventura em Minas Gerais com quadriciclo para duas pessoas', category: 'aventura' },
  { src: '/img/passeio-quadriciclo-monte-verde-01.jpeg', alt: 'Quadriciclo parado na Fazenda Adrenalina em Monte Verde MG', category: 'aventura' },
  { src: '/img/passeio-quadriciclo-monte-verde-08.jpeg', alt: 'Passeio de quadriciclo no fim de tarde em Monte Verde MG', category: 'por-do-sol' },
  { src: '/img/maoesol.jpg', alt: 'Mão erguida ao pôr do sol em passeio de quadriciclo em Monte Verde', category: 'por-do-sol' },
  { src: '/img/maosolpessoas.jpg', alt: 'Grupo de turistas no passeio pôr do sol de quadriciclo em Monte Verde MG', category: 'por-do-sol' },
  { src: '/img/maofimdetarde.jpg', alt: 'Fim de tarde inesquecível em trilha na Fazenda Adrenalina', category: 'por-do-sol' },
  { src: '/img/passeio-quadriciclo-monte-verde-14.jpeg', alt: 'Vista panorâmica do pôr do sol em Monte Verde durante passeio de quadriciclo', category: 'por-do-sol' },
  { src: '/img/passeio-quadriciclo-monte-verde-15.jpeg', alt: 'Quadriciclo com céu dourado ao entardecer em Monte Verde MG', category: 'por-do-sol' },
  { src: '/img/passeio-quadriciclo-monte-verde-16.jpeg', alt: 'Passeio romântico de quadriciclo ao pôr do sol em Monte Verde', category: 'por-do-sol' },
  { src: '/img/passeio-quadriciclo-monte-verde-18.jpeg', alt: 'Fotos profissionais de quadriciclo no fim do dia em Monte Verde', category: 'por-do-sol' },
  { src: '/img/passeio-quadriciclo-monte-verde-11.jpeg', alt: 'Pôr do sol na Fazenda Adrenalina em Monte Verde Minas Gerais', category: 'por-do-sol' },
  { src: '/img/fogueira.jpg', alt: 'Fogueira no passeio especial de quadriciclo ao pôr do sol em Monte Verde', category: 'por-do-sol' },
  { src: '/img/monte-verde-mao-de-deus.jpeg', alt: 'Paisagem da Mão de Deus em Monte Verde Minas Gerais', category: 'paisagem' },
  { src: '/img/passeio-quadriciclo-monte-verde-19.jpeg', alt: 'Vista da Serra da Mantiqueira em Monte Verde durante passeio de quadriciclo', category: 'paisagem' },
  { src: '/img/passeio-quadriciclo-monte-verde-12.jpeg', alt: 'Natureza exuberante e trilha de aventura em Monte Verde MG', category: 'paisagem' },
];

export default function GaleriaPage() {
  const [filter, setFilter] = useState('todas');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'todas' ? images : images.filter((img) => img.category === filter);

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 bg-forest-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-forest-700/60 text-moss border border-forest-600/40">
            <span className="w-1.5 h-1.5 bg-moss rounded-full" />
            Fotos Reais
          </span>
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight text-white mb-5">
            Galeria <span className="text-moss">de Fotos</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Cada foto é uma memória real dos nossos passeios. Selecione uma categoria para filtrar.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-forest-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 border ${
                  filter === cat.id
                    ? 'bg-moss text-forest-950 border-moss'
                    : 'border-forest-700 text-white/60 hover:border-moss/50 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer bg-forest-800"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-forest-950/0 group-hover:bg-forest-950/50 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                className="w-full h-full max-h-[80vh] object-contain rounded-2xl"
              />
              <p className="text-white/50 text-sm text-center mt-4">{lightbox + 1} / {filtered.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
