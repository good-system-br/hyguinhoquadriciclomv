
import React, { useState, useEffect } from 'react';
import { 
  Navigation, 
  Hero, 
  Features, 
  TourPackages, 
  Gallery, 
  ReviewsAndMap,
  ContactSection, 
  Footer,
  FloatingWhatsApp 
} from './components/LandingSections';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Features />
      <TourPackages id="tours" />
      <Gallery />
      <ReviewsAndMap />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
