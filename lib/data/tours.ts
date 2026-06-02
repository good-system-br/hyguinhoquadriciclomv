export interface Tour {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  duration: string;
  maxPeople: number;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  description: string;
  longDescription: string;
  highlights: string[];
  image: string;
  images: string[];
  isPopular?: boolean;
  schedule: string;
  adventureLevel: number;
}

export const tours: Tour[] = [
  {
    slug: 'passeio-normal',
    name: 'Passeio Normal',
    subtitle: 'Perfeito para a primeira aventura',
    price: 160,
    duration: '40 – 60 min',
    maxPeople: 2,
    difficulty: 'Iniciante',
    adventureLevel: 3,
    description:
      'Trilha guiada ideal para iniciantes e quem quer curtir as paisagens de Monte Verde com segurança e emoção.',
    longDescription:
      'Uma aventura completa para dois, percorrendo as trilhas exclusivas da Fazenda Adrenalina. Nosso guia experiente conduz você com total segurança pelas matas e paisagens da Serra da Mantiqueira. Perfeito para casais, amigos ou família — sem precisar de experiência anterior.',
    highlights: [
      'Trilha guiada por especialista',
      'Equipamentos de segurança inclusos',
      'Fotos do passeio',
      'Capacidade para 2 pessoas',
      'Saídas das 10h às 17h',
    ],
    image: '/img/passeio-quadriciclo-monte-verde-01.jpeg',
    images: [
      '/img/passeio-quadriciclo-monte-verde-02.jpeg',
      '/img/passeio-quadriciclo-monte-verde-03.jpeg',
      '/img/passeio-quadriciclo-monte-verde-04.jpeg',
    ],
    schedule: 'Todos os dias, das 10h às 17h',
  },
  {
    slug: 'passeio-noturno',
    name: 'Passeio Noturno',
    subtitle: 'Aventura sob o céu estrelado',
    price: 160,
    duration: 'A combinar',
    maxPeople: 2,
    difficulty: 'Intermediário',
    adventureLevel: 4,
    description:
      'Uma experiência única de quadriciclo noturno sob o céu estrelado de Monte Verde — emoção e mistério garantidos.',
    longDescription:
      'Com o cair da noite, as trilhas da Fazenda Adrenalina ganham uma atmosfera completamente diferente. O silêncio da mata, o céu cheio de estrelas e a adrenalina do passeio noturno criam uma memória inesquecível. Uma experiência exclusiva para quem quer algo além do comum.',
    highlights: [
      'Passeio noturno exclusivo',
      'Iluminação nos quadriciclos',
      'Céu estrelado de Monte Verde',
      'Equipamentos completos',
      'Horário a combinar via WhatsApp',
    ],
    image: '/img/passeio-quadriciclo-monte-verde-12.jpeg',
    images: [
      '/img/passeio-quadriciclo-monte-verde-10.jpeg',
      '/img/passeio-quadriciclo-monte-verde-11.jpeg',
    ],
    schedule: 'Horário a combinar',
  },
  {
    slug: 'por-do-sol',
    name: 'Pôr do Sol',
    subtitle: 'A experiência mais procurada',
    price: 300,
    duration: '1h – 1h 30min',
    maxPeople: 2,
    difficulty: 'Iniciante',
    adventureLevel: 4,
    description:
      'O passeio mais especial com a vista mais incrível de Monte Verde ao entardecer. Saída exclusiva às 17h.',
    longDescription:
      'A experiência definitiva em Monte Verde. Saída exclusiva às 17h para contemplar o pôr do sol mais bonito da região. As trilhas elevadas da Fazenda Adrenalina oferecem um visual panorâmico dos picos da Mantiqueira enquanto o céu se pinta de tons dourados. Ideal para casais — um momento que você vai querer reviver.',
    highlights: [
      'Saída exclusiva às 17h',
      'Vista panorâmica dos picos',
      'Duração estendida (1h30)',
      'Fotos profissionais incluídas',
      'Experiência ideal para casais',
    ],
    image: '/img/passeio-quadriciclo-monte-verde-19.jpeg',
    images: [
      '/img/passeio-quadriciclo-monte-verde-14.jpeg',
      '/img/passeio-quadriciclo-monte-verde-15.jpeg',
      '/img/passeio-quadriciclo-monte-verde-16.jpeg',
    ],
    isPopular: true,
    schedule: 'Saída às 17h',
  },
];
