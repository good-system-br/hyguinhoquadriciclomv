export interface Review {
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  tour?: string;
}

export const reviews: Review[] = [
  {
    name: 'Gustavo S.',
    location: 'São Paulo, SP',
    rating: 5,
    date: 'Dezembro 2024',
    text: 'Passeio incrível! A equipe do Hyguinho é muito atenciosa e profissional. Trilha segura e cheia de emoção, valeu cada centavo. Com certeza voltaremos!',
    tour: 'Pôr do Sol',
  },
  {
    name: 'Camila R.',
    location: 'Campinas, SP',
    rating: 5,
    date: 'Novembro 2024',
    text: 'Adoramos o passeio do pôr do sol! Quadriciclos novos, visual maravilhoso e o Hyguinho foi super atencioso. Uma experiência única em Monte Verde.',
    tour: 'Pôr do Sol',
  },
  {
    name: 'Felipe M.',
    location: 'Belo Horizonte, MG',
    rating: 5,
    date: 'Janeiro 2025',
    text: 'Experiência top! Fui com minha namorada e foi incrível. Voltarei com a família toda. Reservar pelo WhatsApp foi rapidíssimo.',
    tour: 'Passeio Normal',
  },
  {
    name: 'Ana Paula L.',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    date: 'Dezembro 2024',
    text: 'Que aventura maravilhosa! As trilhas são lindas e o guia foi excelente. Recomendo demais para quem visita Monte Verde.',
    tour: 'Passeio Normal',
  },
  {
    name: 'Ricardo T.',
    location: 'Curitiba, PR',
    rating: 5,
    date: 'Outubro 2024',
    text: 'Melhor passeio que fiz em Monte Verde. O pôr do sol é simplesmente espetacular. Serviço de primeira, equipe muito profissional.',
    tour: 'Pôr do Sol',
  },
  {
    name: 'Mariana K.',
    location: 'São Paulo, SP',
    rating: 5,
    date: 'Setembro 2024',
    text: 'Fui com meu marido e foi uma experiência inesquecível. O Hyguinho é super simpático e faz você se sentir seguro o tempo todo.',
    tour: 'Passeio Normal',
  },
];
