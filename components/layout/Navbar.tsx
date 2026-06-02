'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { WHATSAPP_LINK } from '@/lib/constants';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/passeios', label: 'Passeios' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/sobre', label: 'Sobre Nós' },
  { href: '/avaliacoes', label: 'Avaliações' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contato', label: 'Contato' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const solid = scrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid ? 'bg-forest-950/97 backdrop-blur-lg shadow-2xl py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/img/logo.png"
              alt="Hyguinho Quadriciclos MV"
              width={52}
              height={52}
              className="h-12 w-12 rounded-xl object-cover transition-opacity group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 text-sm">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 font-semibold rounded-lg transition-colors duration-200 ${
                    active
                      ? 'text-moss'
                      : 'text-white/75 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-moss rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-moss hover:bg-moss-dark text-forest-950 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-moss/20"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.03a.75.75 0 00.914.914l5.181-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.299-1.431l-.38-.225-3.924 1.114 1.114-3.924-.225-.38A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Reservar
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-white"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className="block h-0.5 w-6 bg-current rounded-full origin-center transition-transform duration-300"
                style={{ transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
              />
              <span
                className="block h-0.5 w-6 bg-current rounded-full transition-all duration-300"
                style={{ opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? 'scaleX(0)' : 'scaleX(1)' }}
              />
              <span
                className="block h-0.5 w-6 bg-current rounded-full origin-center transition-transform duration-300"
                style={{ transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 bg-forest-950 flex flex-col pt-24 px-6 pb-10 lg:hidden overflow-y-auto transition-opacity duration-250"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col gap-1 flex-1">
          {navLinks.map((link, i) => {
            const active = pathname === link.href;
            return (
              <div
                key={link.href}
                className="transition-all duration-300"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transitionDelay: mobileOpen ? `${i * 40}ms` : '0ms',
                }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 py-4 px-5 rounded-2xl text-lg font-bold transition-colors ${
                    active
                      ? 'bg-forest-800 text-moss'
                      : 'text-white/80 hover:bg-forest-900 hover:text-moss'
                  }`}
                >
                  {active && <span className="w-2 h-2 bg-moss rounded-full" />}
                  {link.label}
                </Link>
              </div>
            );
          })}
        </nav>

        <div
          className="mt-8 transition-all duration-300"
          style={{
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: mobileOpen ? '300ms' : '0ms',
          }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-moss text-forest-950 font-black text-lg py-5 rounded-2xl hover:bg-moss-dark transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L.057 23.03a.75.75 0 00.914.914l5.181-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.742-.522-5.299-1.431l-.38-.225-3.924 1.114 1.114-3.924-.225-.38A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Reservar Agora
          </a>
        </div>
      </div>
    </>
  );
}
