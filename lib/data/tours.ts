export interface Tour {
  slug: string;
  name: string;
  subtitle: string;
  duration: string;
  maxPeople: number;
  difficulty: string;
  description: string;
  longDescription: string;
  practicalInfo: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
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
    duration: '40 – 60 min',
    maxPeople: 2,
    difficulty: '',
    adventureLevel: 3,
    description:
      'Uma das melhores opções de o que fazer em Monte Verde para quem quer aventura em Minas Gerais com segurança, natureza e orientação profissional.',
    longDescription:
      'O Passeio Normal é a porta de entrada para quem quer viver uma trilha na Fazenda Adrenalina com conforto, emoção e acompanhamento do início ao fim. Você passa por trechos de mata, mirantes e caminhos ideais para iniciantes, com ritmo leve e muita paisagem de Monte Verde. É a escolha certa para casais, amigos e famílias que procuram os melhores passeios em Monte Verde com segurança e uma experiência inesquecível.',
    practicalInfo: [
      'Precisa de CNH? Não para o passeio como passageiro; para pilotar, consulte a equipe.',
      'Roupas recomendadas: calça comprida e tênis fechado.',
      'Treinamento incluso antes da saída.',
    ],
    highlights: [
      'Trilha guiada por especialista',
      'Equipamentos de segurança inclusos',
      'Fotos do passeio',
      'Capacidade para 2 pessoas',
      'Saídas das 10h às 17h',
    ],
    image: '/img/passeio-quadriciclo-monte-verde-19.jpeg',
    imageAlt: 'Casal pilotando quadriciclo em trilha da Fazenda Adrenalina em Monte Verde MG',
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
    duration: 'A combinar',
    maxPeople: 2,
    difficulty: 'Intermediário',
    adventureLevel: 4,
    description:
      'Uma aventura em Minas Gerais para quem quer ver Monte Verde de um jeito diferente: trilha noturna, emoção e contato direto com a natureza.',
    longDescription:
      'Quando a noite chega, a Fazenda Adrenalina revela uma atmosfera especial para quem busca o que fazer em Monte Verde depois do pôr do sol. O percurso noturno combina silêncio da mata, trilha guiada e a adrenalina de pilotar sob o céu estrelado. É um dos passeios mais diferentes e memoráveis para casais e grupos pequenos que querem sair do óbvio.',
    practicalInfo: [
      'Precisa de CNH? Para pilotar, confirme as regras no WhatsApp.',
      'Roupas recomendadas: casaco leve e tênis fechado.',
      'Treinamento incluso e iluminação nos quadriciclos.',
    ],
    highlights: [
      'Passeio noturno exclusivo',
      'Iluminação nos quadriciclos',
      'Céu estrelado de Monte Verde',
      'Equipamentos completos',
      'Horário a combinar via WhatsApp',
    ],
    image: '/img/passeio-quadriciclo-monte-verde-12.jpeg',
    imageAlt: 'Casal em quadriciclo iluminado durante passeio noturno em Monte Verde MG',
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
    duration: '1h – 1h 30min',
    maxPeople: 2,
    difficulty: '',
    adventureLevel: 4,
    description:
      'O passeio mais especial para quem procura os melhores passeios em Monte Verde, com vista panorâmica, luz dourada e clima perfeito para fotos.',
    longDescription:
      'A experiência do pôr do sol é a mais procurada por quem quer viver uma trilha na Fazenda Adrenalina com vista privilegiada da Serra da Mantiqueira. A saída exclusiva às 17h permite aproveitar a luz perfeita para fotos e o cenário mais romântico de Monte Verde. É uma escolha forte para casais e turistas que buscam aventura em Minas Gerais com visual inesquecível.',
    practicalInfo: [
      'Precisa de CNH? Consulte antes de reservar.',
      'Roupas recomendadas: roupa confortável e agasalho para o fim da tarde.',
      'Treinamento incluso com orientação do guia.',
    ],
    highlights: [
      'Saída exclusiva às 17h',
      'Vista panorâmica dos picos',
      'Duração estendida (1h30)',
      'Fotos profissionais incluídas',
      'Experiência ideal para casais',
    ],
    image: '/img/passeio-quadriciclo-monte-verde-03.jpeg',
    imageAlt: 'Casal andando de quadriciclo no pôr do sol em Monte Verde MG',
    images: [
      '/img/passeio-quadriciclo-monte-verde-14.jpeg',
      '/img/passeio-quadriciclo-monte-verde-15.jpeg',
      '/img/passeio-quadriciclo-monte-verde-16.jpeg',
    ],
    isPopular: true,
    schedule: 'Saída às 17h',
  },
];
