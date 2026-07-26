import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Header({ activeSection }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'chapter-01', label: 'Story' },
    { id: 'chapter-02', label: 'Journey' },
    { id: 'chapter-04', label: 'Passions' },
    { id: 'chapter-04-beauty', label: 'Beauty' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Red Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-loreal-red transition-transform duration-150 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-loreal-black/85 backdrop-blur-md border-b border-loreal-white/10 shadow-2xl py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-5 md:px-10">
          
          {/* Brand / Issue Title */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className="group relative flex items-center gap-3 text-left focus:outline-none"
          >
            <span className="font-serif text-lg italic transition-colors text-loreal-white group-hover:text-loreal-red">
              Issue 01
            </span>
            <span className="hidden h-4 w-px md:inline-block bg-loreal-white/30" />
            <span className="hidden font-sans text-[11px] uppercase tracking-[0.32em] transition-colors md:inline-block text-loreal-white/60 group-hover:text-loreal-white">
              Curiosity
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`group relative font-sans text-[12px] uppercase tracking-[0.22em] transition-colors ${
                  activeSection === item.id ? 'text-loreal-red font-semibold' : 'text-loreal-white/70 hover:text-loreal-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-loreal-red transition-transform duration-300 ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </a>
            ))}
          </nav>

          {/* Right Action & Counter */}
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 md:flex">
              <span className="eyebrow transition-colors text-loreal-white/60">
                {Math.round(scrollProgress).toString().padStart(2, '0')}
              </span>
              <div className="h-px w-12 bg-loreal-white/25 overflow-hidden">
                <div 
                  className="h-full bg-loreal-red transition-all duration-300 origin-left"
                  style={{ transform: `scaleX(${scrollProgress / 100})` }}
                />
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="rounded-full px-4 py-2 font-sans text-[11px] uppercase tracking-[0.22em] transition-all duration-300 hover:border-loreal-red hover:bg-loreal-red hover:text-loreal-white border border-loreal-white/40 text-loreal-white flex items-center gap-1.5 shadow-sm"
            >
              <span>Continue</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-loreal-white md:hidden hover:text-loreal-red transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-loreal-black/95 border-b border-loreal-white/10 backdrop-blur-xl px-6 py-6 transition-all duration-300">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`font-sans text-sm uppercase tracking-[0.2em] py-2 border-b border-loreal-white/5 ${
                    activeSection === item.id ? 'text-loreal-red font-semibold' : 'text-loreal-white/80'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
