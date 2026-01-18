
import React, { useState } from 'react';

// --- Types & Constants ---
export const WHATSAPP_LINK = "https://wa.me/5535998793419?text=Ol%C3%A1%20tudo%20bem%2C%20vim%20pelo%20site%20do%20Google!";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/ErhUFfdAnUC2DiJv8";
export const GOOGLE_BUSINESS_LINK = "https://g.page/r/CRfCXnY8kz4GEBM/review";
export const COMPANY_NAME = "Hyguinho Quadriciclos Mv";

// --- Components ---

export const Navigation: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl py-3' : 'bg-black/20 backdrop-blur-md py-5 text-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className={`font-heading font-extrabold text-2xl md:text-3xl uppercase tracking-tight transition-all duration-300 ${scrolled ? 'text-orange-600' : 'text-white drop-shadow-2xl'}`}>
          Hyguinho <span className={scrolled ? 'text-gray-900' : 'text-orange-400'}>Mv</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 font-semibold text-base">
          <a href="#" className={`relative hover:text-orange-500 transition-colors duration-300 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>Início</a>
          <a href="#tours" className={`relative hover:text-orange-500 transition-colors duration-300 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>Passeios</a>
          <a href="#galeria" className={`relative hover:text-orange-500 transition-colors duration-300 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>Galeria</a>
          <a href="#contato" className={`relative hover:text-orange-500 transition-colors duration-300 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>Contato</a>
        </div>
        
        {/* Desktop CTA Button */}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.088-.113-.716-.953-.716-1.819 0-.866.454-1.292.614-1.463.16-.171.352-.214.47-.214.117 0 .235.001.337.006.113.005.242-.043.379.285.144.343.491 1.196.534 1.282.043.085.071.184.014.298-.057.114-.085.185-.171.285-.085.1-.184.223-.263.303-.092.096-.188.201-.081.385.107.184.476.786 1.021 1.272.632.557 1.166.731 1.352.824.187.093.298.077.406-.051.107-.127.462-.538.586-.719.124-.181.248-.153.419-.09.171.063 1.082.511 1.268.604.187.093.311.14.357.218.046.079.046.457-.098.862z"/></svg>
          Reservar
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6 transition-transform duration-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white shadow-2xl border-t-2 border-orange-500">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-2">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 hover:text-white hover:bg-orange-600 font-bold text-lg transition-all duration-300 py-4 px-5 rounded-xl shadow-sm hover:shadow-md">Início</a>
            <a href="#tours" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 hover:text-white hover:bg-orange-600 font-bold text-lg transition-all duration-300 py-4 px-5 rounded-xl shadow-sm hover:shadow-md">Passeios</a>
            <a href="#galeria" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 hover:text-white hover:bg-orange-600 font-bold text-lg transition-all duration-300 py-4 px-5 rounded-xl shadow-sm hover:shadow-md">Galeria</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="text-gray-900 hover:text-white hover:bg-orange-600 font-bold text-lg transition-all duration-300 py-4 px-5 rounded-xl shadow-sm hover:shadow-md">Contato</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-4 rounded-xl font-extrabold text-lg text-center transition-all duration-300 shadow-xl hover:shadow-2xl mt-3 flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.088-.113-.716-.953-.716-1.819 0-.866.454-1.292.614-1.463.16-.171.352-.214.47-.214.117 0 .235.001.337.006.113.005.242-.043.379.285.144.343.491 1.196.534 1.282.043.085.071.184.014.298-.057.114-.085.185-.171.285-.085.1-.184.223-.263.303-.092.096-.188.201-.081.385.107.184.476.786 1.021 1.272.632.557 1.166.731 1.352.824.187.093.298.077.406-.051.107-.127.462-.538.586-.719.124-.181.248-.153.419-.09.171.063 1.082.511 1.268.604.187.093.311.14.357.218.046.079.046.457-.098.862z"/></svg>
              Reservar Agora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-adventure text-white overflow-hidden">
    {/* Gradient Overlay com efeito mais suave */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>
    
    {/* Ambient Particles - mais sutis e elegantes */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-400/15 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-orange-500/20 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '3s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-orange-300/10 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
    </div>
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
      <div className="animate-fade-in-up">
        {/* Badge premium */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600/25 to-orange-700/25 backdrop-blur-md border border-orange-500/40 rounded-full px-6 py-2.5 mb-8 shadow-xl">
          <span className="text-2xl">🔥</span>
          <span className="text-orange-300 font-bold text-sm uppercase tracking-wide">Aventura Garantida</span>
        </div>
        
        {/* Título principal com melhor hierarquia */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-tight">
          <span className="block mb-2 drop-shadow-2xl">ADRENALINA SOB</span>
          <span className="text-orange-500 relative inline-block drop-shadow-2xl">
            <span className="relative z-10 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">QUATRO RODAS</span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 md:h-4 bg-gradient-to-r from-orange-600 to-orange-500 opacity-50 blur-sm"></span>
          </span>
        </h1>
        
        {/* Subtítulo com melhor legibilidade */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto font-light leading-relaxed text-gray-200 drop-shadow-lg">
          Sinta a emoção de pilotar em meio à natureza na <span className="text-orange-300 font-bold">Fazenda Adrenalina</span>. <br className="hidden sm:block" />Passeios inesquecíveis para você e sua dupla.
        </p>
        
        {/* CTAs com melhor hierarquia visual */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#tours" className="group relative bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-600/50 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Ver Nossos Passeios
            </span>
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group bg-white/10 backdrop-blur-lg border-2 border-white/40 hover:bg-white hover:text-gray-900 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 w-full sm:w-auto">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.088-.113-.716-.953-.716-1.819 0-.866.454-1.292.614-1.463.16-.171.352-.214.47-.214.117 0 .235.001.337.006.113.005.242-.043.379.285.144.343.491 1.196.534 1.282.043.085.071.184.014.298-.057.114-.085.185-.171.285-.085.1-.184.223-.263.303-.092.096-.188.201-.081.385.107.184.476.786 1.021 1.272.632.557 1.166.731 1.352.824.187.093.298.077.406-.051.107-.127.462-.538.586-.719.124-.181.248-.153.419-.09.171.063 1.082.511 1.268.604.187.093.311.14.357.218.046.079.046.457-.098.862z"/></svg>
              Falar com Hyguinho
            </span>
          </a>
        </div>
        
        {/* Stats cards mais elegantes */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
          <div className="group backdrop-blur-md bg-white/10 hover:bg-white/15 rounded-2xl p-4 md:p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl">
            <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-1">2+</div>
            <div className="text-xs md:text-sm text-gray-300 font-medium">Pessoas/Quadri</div>
          </div>
          <div className="group backdrop-blur-md bg-white/10 hover:bg-white/15 rounded-2xl p-4 md:p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl">
            <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-1">100%</div>
            <div className="text-xs md:text-sm text-gray-300 font-medium">Segurança</div>
          </div>
          <div className="group backdrop-blur-md bg-white/10 hover:bg-white/15 rounded-2xl p-4 md:p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-xl">
            <div className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-1">R$160</div>
            <div className="text-xs md:text-sm text-gray-300 font-medium">A partir de</div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Scroll indicator mais sutil */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
      <div className="flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs uppercase tracking-wider font-semibold">Role para baixo</span>
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
);

export const Features: React.FC = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {/* Feature 1 */}
        <div className="group p-6 md:p-8 bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-white rounded-3xl transition-all duration-500 border border-gray-100 hover:border-orange-200 hover:shadow-2xl hover:-translate-y-2">
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-orange-200">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Fazenda Adrenalina</h3>
          <p className="text-gray-600 leading-relaxed">Local privilegiado com trilhas exclusivas e paisagens deslumbrantes para sua aventura.</p>
        </div>
        
        {/* Feature 2 */}
        <div className="group p-6 md:p-8 bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-white rounded-3xl transition-all duration-500 border border-gray-100 hover:border-orange-200 hover:shadow-2xl hover:-translate-y-2">
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-orange-200">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">Horários Flexíveis</h3>
          <p className="text-gray-600 leading-relaxed">Saídas diárias das 10:00 às 17:00, incluindo o especial pôr do sol.</p>
        </div>
        
        {/* Feature 3 */}
        <div className="group p-6 md:p-8 bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-white rounded-3xl transition-all duration-500 border border-gray-100 hover:border-orange-200 hover:shadow-2xl hover:-translate-y-2">
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-orange-200">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">2 Pessoas por Quadri</h3>
          <p className="text-gray-600 leading-relaxed">Nossos valores são para o quadriciclo completo, levando até duas pessoas com total segurança.</p>
        </div>
      </div>
    </div>
  </section>
);

export const TourPackages: React.FC<{ id?: string }> = ({ id }) => {
  const tours = [
    { 
      name: "Passeio Normal", 
      price: "160", 
      time: "40 - 60 min", 
      desc: "Ideal para iniciantes e quem quer curtir a trilha com calma.",
      img: "./img/WhatsApp Image 2025-12-02 at 10.56.35 (1).jpeg",
      features: ["Trilha guiada", "Equipamentos inclusos", "Fotos do passeio"]
    },
    { 
      name: "Passeio Noturno", 
      price: "160", 
      time: "A combinar", 
      desc: "Uma experiência mística sob o céu estrelado da fazenda.",
      img: "./img/WhatsApp Image 2025-12-02 at 10.56.38 (3).jpeg",
      features: ["Aventura noturna", "Céu estrelado", "Experiência única"]
    },
    { 
      name: "Passeio Pôr do Sol", 
      price: "300", 
      time: "1h a 1h 30min", 
      isPopular: true,
      desc: "A vista mais incrível da região. Saída exclusiva às 17:00.",
      img: "./img/WhatsApp Image 2025-12-02 at 10.56.40.jpeg",
      features: ["Vista espetacular", "Melhor horário", "Fotos profissionais"]
    }
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 font-bold text-xs md:text-sm uppercase px-5 py-2.5 rounded-full mb-4 shadow-sm border border-orange-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            Nossos Pacotes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Escolha Sua Aventura</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">Valores referente ao quadriciclo completo (capacidade para 2 pessoas). <span className="font-semibold text-orange-600">Equipamentos de segurança inclusos.</span></p>
        </div>
        
        {/* Grid de tours */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-12">
          {tours.map((tour, idx) => (
            <div key={idx} className={`group bg-white rounded-3xl overflow-hidden shadow-lg border-2 transition-all duration-500 hover:shadow-2xl ${tour.isPopular ? 'border-orange-400 relative md:scale-105 shadow-orange-200/50' : 'border-gray-200 hover:border-orange-200'} hover:-translate-y-2`}>
              {tour.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white text-xs font-bold px-4 py-2.5 text-center uppercase z-10 shadow-lg flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  Mais Procurado
                </div>
              )}
              <div className="relative overflow-hidden h-56 md:h-64">
                <img src={tour.img} alt={tour.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-sm px-4 py-2 rounded-full shadow-lg">{tour.name}</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-extrabold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{tour.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{tour.desc}</p>
                
                {/* Features List */}
                <div className="mb-6 space-y-2.5">
                  {tour.features?.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700 bg-gray-50/80 rounded-lg px-3 py-2 transition-all duration-300 hover:bg-orange-50">
                      <svg className="w-5 h-5 mr-2.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Duração */}
                <div className="flex items-center text-gray-700 mb-6 font-semibold bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl px-4 py-3.5 shadow-sm">
                  <svg className="w-5 h-5 mr-2.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-sm">Duração: <span className="text-orange-600">{tour.time}</span></span>
                </div>
                
                {/* Preço */}
                <div className="flex items-end space-x-2 mb-6 pb-6 border-b-2 border-gray-100">
                  <span className="text-gray-400 text-lg font-semibold">R$</span>
                  <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{tour.price}</span>
                  <span className="text-gray-500 mb-3 font-medium">/ quadri</span>
                </div>
                
                {/* CTA Button */}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`group/btn flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 ${tour.isPopular ? 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-orange-500/50 hover:shadow-orange-600/60' : 'bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 text-white hover:shadow-xl'}`}>
                  <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.088-.113-.716-.953-.716-1.819 0-.866.454-1.292.614-1.463.16-.171.352-.214.47-.214.117 0 .235.001.337.006.113.005.242-.043.379.285.144.343.491 1.196.534 1.282.043.085.071.184.014.298-.057.114-.085.185-.171.285-.085.1-.184.223-.263.303-.092.096-.188.201-.081.385.107.184.476.786 1.021 1.272.632.557 1.166.731 1.352.824.187.093.298.077.406-.051.107-.127.462-.538.586-.719.124-.181.248-.153.419-.09.171.063 1.082.511 1.268.604.187.093.311.14.357.218.046.079.046.457-.098.862z"/></svg>
                  Reservar via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Badges - Mais elegantes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="group text-center p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-1">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">✅</div>
            <div className="text-xs md:text-sm font-bold text-gray-700">Segurança<br/>Garantida</div>
          </div>
          <div className="group text-center p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 hover:-translate-y-1">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🏆</div>
            <div className="text-xs md:text-sm font-bold text-gray-700">Melhor<br/>Avaliado</div>
          </div>
          <div className="group text-center p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">💯</div>
            <div className="text-xs md:text-sm font-bold text-gray-700">Satisfação<br/>Total</div>
          </div>
          <div className="group text-center p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-1">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">📸</div>
            <div className="text-xs md:text-sm font-bold text-gray-700">Fotos<br/>Incluídas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Gallery: React.FC = () => {
  const galleryImages = [
    "./img/WhatsApp Image 2025-12-02 at 10.56.35.jpeg",
    "./img/WhatsApp Image 2025-12-02 at 10.56.36 (1).jpeg",
    "./img/WhatsApp Image 2025-12-02 at 10.56.36 (2).jpeg",
    "./img/WhatsApp Image 2025-12-02 at 10.56.37 (1).jpeg",
    "./img/WhatsApp Image 2025-12-02 at 10.56.38.jpeg",
    "./img/WhatsApp Image 2025-12-02 at 10.56.38 (1).jpeg",
    "./img/WhatsApp Image 2025-12-02 at 10.56.39 (1).jpeg",
    "./img/WhatsApp Image 2025-12-02 at 10.56.39 (2).jpeg"
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-orange-600 font-bold text-sm uppercase px-4 py-2 rounded-full mb-4">Nossa Galeria</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Fotos dos Nossos Passeios</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Momentos reais capturados nas trilhas da Fazenda Adrenalina. Venha fazer parte dessa aventura!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, n) => (
            <div key={n} className="group relative overflow-hidden rounded-2xl h-72 shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src={img} 
                alt={`Passeio de quadriciclo ${n + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-6">
                <span className="text-white font-bold text-lg mb-2">#HyguinhoMv</span>
                <span className="text-orange-400 text-sm font-semibold">📸 Aventura Real</span>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-xl">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.088-.113-.716-.953-.716-1.819 0-.866.454-1.292.614-1.463.16-.171.352-.214.47-.214.117 0 .235.001.337.006.113.005.242-.043.379.285.144.343.491 1.196.534 1.282.043.085.071.184.014.298-.057.114-.085.185-.171.285-.085.1-.184.223-.263.303-.092.096-.188.201-.081.385.107.184.476.786 1.021 1.272.632.557 1.166.731 1.352.824.187.093.298.077.406-.051.107-.127.462-.538.586-.719.124-.181.248-.153.419-.09.171.063 1.082.511 1.268.604.187.093.311.14.357.218.046.079.046.457-.098.862z"/></svg>
            Reserve Seu Passeio Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export const ContactSection: React.FC = () => (
  <section id="contato" className="py-20 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Pronto para a sua Próxima Aventura?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Fale conosco para tirar dúvidas ou fazer sua reserva personalizada. Estamos esperando por você na Fazenda Adrenalina!
          </p>
          <div className="space-y-6">
            <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center hover:bg-white/5 p-3 rounded-xl transition-all duration-300 group cursor-pointer -ml-3">
              <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mr-4 text-orange-500 group-hover:bg-orange-600/30 transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Localização</p>
                <p className="font-semibold group-hover:text-orange-500 transition-colors">Fazenda Adrenalina - Ver no Mapa</p>
              </div>
            </a>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mr-4 text-orange-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefone / WhatsApp</p>
                <p className="font-semibold">(35) 99879-3419</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mr-4 text-orange-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">E-mail</p>
                <p className="font-semibold">hygormeendes98@gmail.com</p>
              </div>
            </div>
          </div>
          
          {/* Google Business Link */}
          <a href={GOOGLE_BUSINESS_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-6 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-gray-200 group">
            <svg className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
            <div>
              <div className="text-xs text-gray-500">Avalie-nos no</div>
              <div className="text-sm font-extrabold">Google</div>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="bg-white/5 p-10 rounded-3xl backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Seu Nome" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition text-white placeholder:text-gray-500" />
            <input type="email" placeholder="Seu E-mail" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition text-white placeholder:text-gray-500" />
            <textarea rows={4} placeholder="Como podemos ajudar?" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition text-white placeholder:text-gray-500"></textarea>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-orange-900/20">
              Enviar Agora
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export const Footer: React.FC = () => (
  <footer className="bg-gradient-to-b from-gray-900 to-black py-12 border-t border-orange-500/20">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="font-heading font-extrabold text-3xl uppercase tracking-tighter text-orange-600 mb-3">
            Hyguinho <span className="text-white">Mv</span>
          </div>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">Aventuras inesquecíveis de quadriciclo na Fazenda Adrenalina. Segurança, diversão e adrenalina garantidas!</p>
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/hyguinho_quadriciclos_mv/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-orange-600 text-white p-2 rounded-full transition" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-orange-600 text-white p-2 rounded-full transition" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-green-600 text-white p-2 rounded-full transition" aria-label="WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.088-.113-.716-.953-.716-1.819 0-.866.454-1.292.614-1.463.16-.171.352-.214.47-.214.117 0 .235.001.337.006.113.005.242-.043.379.285.144.343.491 1.196.534 1.282.043.085.071.184.014.298-.057.114-.085.185-.171.285-.085.1-.184.223-.263.303-.092.096-.188.201-.081.385.107.184.476.786 1.021 1.272.632.557 1.166.731 1.352.824.187.093.298.077.406-.051.107-.127.462-.538.586-.719.124-.181.248-.153.419-.09.171.063 1.082.511 1.268.604.187.093.311.14.357.218.046.079.046.457-.098.862z"/></svg>
            </a>
          </div>
        </div>
        
        {/* Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-orange-500 transition">Início</a></li>
            <li><a href="#tours" className="hover:text-orange-500 transition">Nossos Passeios</a></li>
            <li><a href="#galeria" className="hover:text-orange-500 transition">Galeria</a></li>
            <li><a href="#contato" className="hover:text-orange-500 transition">Contato</a></li>
          </ul>
        </div>
        
        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Contato</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              (35) 99879-3419
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              hygormeendes98@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
              <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">Fazenda Adrenalina</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="text-gray-500 text-sm">© 2026 Hyguinho Quadriciclos Mv. Todos os direitos reservados.</p>
        <p className="text-xs text-gray-600 uppercase tracking-widest font-bold">⚡ Desenvolvido por Good-System</p>
      </div>
    </div>
  </footer>
);

export const FloatingWhatsApp: React.FC = () => (
  <a 
    href={WHATSAPP_LINK} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group fixed bottom-6 right-6 z-[60] transition-all duration-300 hover:scale-110 active:scale-95"
    aria-label="Falar no WhatsApp"
  >
    {/* Pulse animation ring */}
    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
    
    {/* Main button */}
    <div className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl flex items-center overflow-hidden">
      {/* Hover text */}
      <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap overflow-hidden font-bold pr-0 group-hover:pr-3 text-sm">
        Falar no WhatsApp
      </span>
      
      {/* WhatsApp icon */}
      <svg className="w-7 h-7 md:w-8 md:h-8 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.512-2.96-2.626-.088-.113-.716-.953-.716-1.819 0-.866.454-1.292.614-1.463.16-.171.352-.214.47-.214.117 0 .235.001.337.006.113.005.242-.043.379.285.144.343.491 1.196.534 1.282.043.085.071.184.014.298-.057.114-.085.185-.171.285-.085.1-.184.223-.263.303-.092.096-.188.201-.081.385.107.184.476.786 1.021 1.272.632.557 1.166.731 1.352.824.187.093.298.077.406-.051.107-.127.462-.538.586-.719.124-.181.248-.153.419-.09.171.063 1.082.511 1.268.604.187.093.311.14.357.218.046.079.046.457-.098.862z"/>
      </svg>
    </div>
  </a>
);
