import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowDown, Camera } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [customPhoto, setCustomPhoto] = useState(null);

  const roles = resumeData.personal.roles;

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      typingSpeed = 2200; // Pause at full word
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => {
        if (!isDeleting) {
          return currentRole.slice(0, prev.length + 1);
        } else {
          return currentRole.slice(0, prev.length - 1);
        }
      });

      if (!isDeleting && displayedText === currentRole) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles]);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhoto(url);
    }
  };

  return (
    <section id="hero" className="relative min-h-[100vh] overflow-hidden grain flex flex-col justify-center">
      {/* Background Radial Spotlights */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 75% 35%, rgba(200, 16, 46, 0.16), transparent 45%), linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(18, 18, 18) 55%, rgb(28, 28, 28) 100%)'
          }}
        />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-loreal-red/10 rounded-full blur-3xl animate-pulse-fast" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[100vh] max-w-7xl flex-col items-center justify-center gap-12 px-5 pb-20 pt-28 md:grid md:grid-cols-12 md:items-center md:gap-12 md:px-10 md:pt-32">
        
        {/* Left Column: Text & Content */}
        <div className="md:col-span-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-loreal-white/5 border border-loreal-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <p className="eyebrow text-gold tracking-[0.3em]">
              Issue 01 · Curiosity
            </p>
          </div>

          <h1 className="font-serif text-[3rem] leading-[1.04] text-loreal-white text-balance md:text-[5.4rem] font-medium tracking-tight">
            Every journey begins with{' '}
            <span className="italic text-loreal-red underline decoration-loreal-red/30 decoration-wavy decoration-1">
              curiosity.
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-loreal-white/70 md:text-lg">
            My Creative CV for <strong className="text-loreal-white font-medium">L'Oréal Edge</strong>
          </p>

          {/* Author Block */}
          <div className="mt-10 flex flex-col gap-2 border-l-2 border-loreal-red/60 pl-5 py-1">
            <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-loreal-white/50">
              Written by
            </span>
            <span className="font-serif text-2xl text-loreal-white md:text-3xl font-normal">
              {resumeData.personal.writtenBy}
            </span>

            <div className="mt-3 flex items-center gap-2">
              <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-loreal-white/50">
                Also known as
              </span>
              <span className="font-serif italic text-gold text-lg md:text-xl">
                {displayedText}
                <span className="ml-1 inline-block h-[1.1em] w-[2px] bg-gold/80 align-middle animate-pulse" />
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#chapter-01"
              className="rounded-full bg-loreal-red px-6 py-3 font-sans text-xs uppercase tracking-[0.22em] text-loreal-white transition-all duration-300 hover:bg-loreal-red-dark hover:shadow-[0_0_25px_rgba(200,16,46,0.5)] flex items-center gap-2"
            >
              <span>Explore The Story</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="rounded-full bg-loreal-white/10 px-6 py-3 font-sans text-xs uppercase tracking-[0.22em] text-loreal-white transition-all duration-300 hover:bg-loreal-white/20 border border-loreal-white/20"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Circular Portrait */}
        <div className="relative md:col-span-6 z-10 w-full flex justify-center">
          <div 
            className="group relative aspect-square w-full max-w-[24rem] sm:max-w-[26rem] md:max-w-[28rem] cursor-pointer overflow-hidden rounded-full shadow-[0_50px_130px_-40px_rgba(0,0,0,0.85)] transition-all duration-700 ease-out hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, rgb(26, 26, 26), rgb(51, 51, 51))'
            }}
          >
            {/* Background image preview / portrait */}
            <img
              src={customPhoto || process.env.PUBLIC_URL + '/L4.jpeg'}
              onError={(e) => {
                // Fallback if image fails to load
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80";
              }}
              alt="Aman Kumar"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
            />

            {/* Gradient Overlays */}
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(120% 90% at 50% 20%, transparent 50%, rgba(10, 10, 10, 0.4) 100%)' }}
            />
            
            {/* Inner Border Ring */}
            <span 
              aria-hidden="true" 
              className="pointer-events-none absolute inset-[8px] rounded-full opacity-70 transition-opacity group-hover:opacity-100"
              style={{
                boxShadow: 'rgba(212, 175, 55, 0.4) 0px 0px 0px 1px inset'
              }}
            />

            {/* Photo Uploader overlay button */}
            <label className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-loreal-black/60 backdrop-blur-md text-loreal-white/80 hover:text-loreal-white hover:bg-loreal-red transition-all cursor-pointer opacity-0 group-hover:opacity-100">
              <Camera className="w-4 h-4" />
              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
            </label>
          </div>
        </div>
      </div>

      {/* Scroll to begin indicator */}
      <div 
        className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-3 text-loreal-white/60 pointer-events-none"
        aria-hidden="true"
      >
        <span className="eyebrow text-[10px] tracking-[0.3em]">Scroll to begin</span>
        <span className="h-10 w-px bg-gradient-to-b from-loreal-red to-transparent animate-pulse" />
      </div>
    </section>
  );
}
