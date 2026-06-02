import type { Metadata } from 'next';
import { VideoHero } from '@/components/home/VideoHero';
import { TourHighlights } from '@/components/home/TourHighlights';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTABanner } from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: {
    absolute: 'Passeio de Quadriciclo em Monte Verde MG | Hyguinho Quadriciclos',
  },
  description:
    'Passeio de quadriciclo em Monte Verde MG na Fazenda Adrenalina. Trilhas exclusivas pela Serra da Mantiqueira para 2 pessoas, guia especializado e equipamentos inclusos. A partir de R$160. Reserve pelo WhatsApp!',
  alternates: { canonical: 'https://hyguinho-quadriciclos-mv.vercel.app/' },
  openGraph: {
    title: 'Passeio de Quadriciclo em Monte Verde MG | Hyguinho Quadriciclos',
    description:
      'Trilhas exclusivas na Fazenda Adrenalina, Monte Verde MG. Nota 5.0 no Google, guia experiente, equipamentos inclusos. Passeio Normal, Noturno e Pôr do Sol a partir de R$160.',
    images: [{
      url: '/img/passeio-quadriciclo-monte-verde-01.jpeg',
      width: 1200,
      height: 630,
      alt: 'Passeio de Quadriciclo em Monte Verde MG - Hyguinho Quadriciclos na Fazenda Adrenalina',
    }],
  },
};

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <TourHighlights />
      <GalleryPreview />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
