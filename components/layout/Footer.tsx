import Link from 'next/link';
import Image from 'next/image';
import { WHATSAPP_LINK, GOOGLE_MAPS_LINK, INSTAGRAM_LINK, PHONE, EMAIL } from '@/lib/constants';

const pages = [
  { href: '/', label: 'Início' },
  { href: '/passeios', label: 'Passeios' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/sobre', label: 'Sobre Nós' },
  { href: '/avaliacoes', label: 'Avaliações' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contato', label: 'Contato' },
];

export function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-forest-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <Image
                src="/img/logo.png"
                alt="Hyguinho Quadriciclos MV"
                width={80}
                height={80}
                className="h-20 w-20 rounded-2xl object-cover"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Hyguinho Quadriciclos Monte Verde. Aventuras inesquecíveis de quadriciclo na Fazenda Adrenalina, em Monte Verde - MG. Segurança, diversão e natureza garantidas.
            </p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-forest-800 hover:bg-moss text-white/60 hover:text-forest-950 rounded-xl flex items-center justify-center transition-all duration-200"
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
                className="w-10 h-10 bg-forest-800 hover:bg-moss text-white/60 hover:text-forest-950 rounded-xl flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.03a.75.75 0 00.914.914l5.181-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.299-1.431l-.38-.225-3.924 1.114 1.114-3.924-.225-.38A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Páginas</h4>
            <ul className="space-y-2.5">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-white/50 hover:text-moss text-sm transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-white font-semibold text-sm mb-2">Hyguinho Quadriciclos Monte Verde</p>
                <a
                  href={`tel:+5535998793419`}
                  className="flex items-start gap-3 text-white/50 hover:text-moss text-sm transition-colors group"
                >
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-moss/60 group-hover:text-moss" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  {PHONE}
                </a>
              </li>
              <li>
                <p className="text-white/45 text-sm leading-relaxed">Fazenda Adrenalina, Monte Verde - MG</p>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-white/50 hover:text-moss text-sm transition-colors group"
                >
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-moss/60 group-hover:text-moss" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/50 hover:text-moss text-sm transition-colors group"
                >
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-moss/60 group-hover:text-moss" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                  Fazenda Adrenalina, Monte Verde - MG
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">© 2026 Hyguinho Quadriciclos. Todos os direitos reservados.</p>
          <p className="text-white/20 text-xs uppercase tracking-widest font-bold">Desenvolvido por Good-System</p>
        </div>
      </div>
    </footer>
  );
}
