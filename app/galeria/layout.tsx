import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeria de Fotos',
  description:
    'Veja fotos dos passeios de quadriciclo em Monte Verde MG. Aventura, pôr do sol e paisagens da Serra da Mantiqueira na Fazenda Adrenalina com Hyguinho Quadriciclos.',
  alternates: { canonical: 'https://hyguinho-quadriciclos-mv.vercel.app/galeria' },
  openGraph: {
    title: 'Galeria — Passeio de Quadriciclo Monte Verde MG',
    description:
      'Fotos reais dos passeios de quadriciclo na Fazenda Adrenalina em Monte Verde. Trilhas, pôr do sol e a Serra da Mantiqueira para você conhecer antes de reservar.',
    images: [{
      url: '/img/passeio-quadriciclo-monte-verde-19.jpeg',
      width: 1200,
      height: 630,
      alt: 'Passeio Pôr do Sol de Quadriciclo em Monte Verde MG',
    }],
  },
};

export default function GaleriaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
