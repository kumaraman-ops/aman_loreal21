import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Chapter01Story from './components/Chapter01Story';
import Chapter02Journey from './components/Chapter02Journey';
import Chapter03Passions from './components/Chapter03Passions';
import Chapter04BeautyEverywhere from './components/Chapter04BeautyEverywhere';
import Chapter05MorningRoutine from './components/Chapter05MorningRoutine';
import Chapter04BeautyEdge from './components/Chapter04BeautyEdge';
import ContactFooter from './components/ContactFooter';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section, footer');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="relative min-h-screen bg-loreal-black text-loreal-white selection:bg-loreal-red selection:text-loreal-white font-sans antialiased overflow-x-hidden">
      
      {/* Background Ambient Radial Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed left-0 top-0 z-[1] h-96 w-96 rounded-full opacity-40 mix-blend-screen blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(200, 16, 46, 0.2), transparent 75%)',
          transform: 'translate(100px, 100px)'
        }}
      />

      {/* Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <Chapter01Story />
        <Chapter02Journey />
        <Chapter03Passions />
        <Chapter04BeautyEverywhere />
        <Chapter05MorningRoutine />
        <Chapter04BeautyEdge />
      </main>

      {/* Contact & Editorial Footer */}
      <ContactFooter />
    </div>
  );
}

export default App;
