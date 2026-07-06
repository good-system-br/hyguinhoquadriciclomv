import Link from 'next/link';
import { WHATSAPP_LINK } from '@/lib/constants';
import type { Tour } from '@/lib/data/tours';

interface Props {
  tour: Tour;
  variant?: 'default' | 'featured';
}

export function TourCard({ tour, variant = 'default' }: Props) {
  const isFeatured = variant === 'featured' || tour.isPopular;

  return (
    <div
      className={`group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        isFeatured
          ? 'bg-forest-900 border-2 border-moss/40 shadow-xl shadow-moss/10'
          : 'bg-white border border-stone hover:border-forest-300'
      }`}
    >
      {tour.isPopular && (
        <div className="absolute top-4 left-4 z-10 bg-moss text-forest-950 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
          Mais Procurado
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="mb-4">
          <h3
            className={`font-display font-black text-2xl uppercase leading-none mb-1 ${
              isFeatured ? 'text-white' : 'text-forest-900'
            }`}
          >
            {tour.name}
          </h3>
          <p className={`text-sm font-medium ${isFeatured ? 'text-moss' : 'text-forest-500'}`}>
            {tour.subtitle}
          </p>
        </div>

        <p className={`text-sm leading-relaxed mb-6 flex-1 ${isFeatured ? 'text-white/70' : 'text-forest-600'}`}>
          {tour.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {tour.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm">
              <span className="w-5 h-5 rounded-full bg-moss/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-moss" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className={isFeatured ? 'text-white/80' : 'text-forest-700'}>{h}</span>
            </li>
          ))}
        </ul>

        {/* Duration + Contact */}
        <div
          className={`flex items-center justify-between py-4 border-y mb-6 ${
            isFeatured ? 'border-white/10' : 'border-stone'
          }`}
        >
          <div className="flex items-center gap-2">
            <svg
              className={`w-4 h-4 ${isFeatured ? 'text-moss' : 'text-forest-500'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={`text-sm font-medium ${isFeatured ? 'text-white/70' : 'text-forest-600'}`}>
              {tour.duration}
            </span>
          </div>
          <span className={`text-xs uppercase tracking-widest text-right ${isFeatured ? 'text-white/40' : 'text-forest-400'}`}>
            Consulte no WhatsApp
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-moss hover:bg-moss-dark text-forest-950 font-bold py-3.5 rounded-2xl transition-all duration-200 hover:scale-105 text-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Reservar
          </a>
          <Link
            href={`/passeios`}
            className={`px-4 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 border ${
              isFeatured
                ? 'border-white/20 text-white/80 hover:bg-white/10'
                : 'border-stone text-forest-600 hover:bg-forest-50'
            }`}
          >
            Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.03a.75.75 0 00.914.914l5.181-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.299-1.431l-.38-.225-3.924 1.114 1.114-3.924-.225-.38A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}
