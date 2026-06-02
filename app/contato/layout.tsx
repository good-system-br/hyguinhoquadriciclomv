import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato e Reservas',
  description:
    'Entre em contato com o Hyguinho Quadriciclos em Monte Verde MG. Reserve seu passeio de quadriciclo pelo WhatsApp, veja nossa localização na Fazenda Adrenalina.',
  alternates: { canonical: 'https://hyguinho-quadriciclos-mv.vercel.app/contato' },
  openGraph: {
    title: 'Contato e Reservas — Hyguinho Quadriciclos Monte Verde',
    description:
      'Fale pelo WhatsApp e reserve seu passeio de quadriciclo em Monte Verde MG. Respondemos rápido e confirmamos na hora!',
    images: [{
      url: '/img/passeio-quadriciclo-monte-verde-01.jpeg',
      width: 1200,
      height: 630,
      alt: 'Contato Hyguinho Quadriciclos Monte Verde MG',
    }],
  },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
