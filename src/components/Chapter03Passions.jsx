import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Users, Compass, Code } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Chapter03Passions() {
  const [selectedPassion, setSelectedPassion] = useState(null);

  const getIcon = (id) => {
    switch (id) {
      case '01': return <TrendingUp className="w-5 h-5 text-loreal-red" />;
      case '02': return <Users className="w-5 h-5 text-loreal-red" />;
      case '03': return <Compass className="w-5 h-5 text-loreal-red" />;
      case '04': return <Code className="w-5 h-5 text-loreal-red" />;
      default: return <ArrowUpRight className="w-5 h-5 text-loreal-red" />;
    }
  };

  return (
    <section id="chapter-04" className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      
      {/* Chapter Title Block */}
      <div className="relative">
        {/* Watermark 03 */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-24 -left-6 select-none font-serif italic text-[13rem] leading-none text-loreal-red/[0.07] md:-top-32 md:text-[22rem]"
        >
          03
        </div>

        <div>
          <p className="eyebrow mb-6 text-loreal-red">
            Chapter · <span className="chapter-number not-italic tracking-[0.3em] font-semibold">03</span>
          </p>
        </div>

        <div>
          <h2 className="font-serif text-4xl leading-[1.08] text-balance text-loreal-white md:text-6xl font-medium">
            Things I'll Always Say Yes To
          </h2>
        </div>

        <div>
          <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-loreal-white/70 md:text-[1.35rem]">
            Four curiosities that never quite let go of me.
          </p>
        </div>
      </div>

      {/* 4 Editorial Cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-20 md:gap-8 lg:grid-cols-4">
        {resumeData.passions.map((item) => (
          <article
            key={item.id}
            onClick={() => setSelectedPassion(item)}
            className="glass-card group flex flex-col overflow-hidden rounded-2xl border border-loreal-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-loreal-red hover:shadow-[0_40px_80px_-45px_rgba(200,16,46,0.35)] cursor-pointer"
          >
            {/* Card Media Header */}
            <figure className="relative aspect-[4/3] w-full overflow-hidden bg-loreal-charcoal">
              <img
                src={process.env.PUBLIC_URL + item.image}
                onError={(e) => {
                  if (item.fallbackImage) {
                    e.target.onerror = null;
                    e.target.src = item.fallbackImage;
                  }
                }}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute top-3 right-3 p-2 rounded-full bg-loreal-black/60 backdrop-blur-md text-loreal-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </figure>

            {/* Card Text Content */}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 mb-2">
                {getIcon(item.id)}
                <span className="eyebrow text-[10px] text-loreal-white/50">{item.category}</span>
              </div>

              <h3 className="font-serif text-2xl leading-tight text-loreal-white font-medium group-hover:text-gold transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 font-sans text-sm leading-relaxed text-loreal-white/70">
                {item.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Expanded Modal */}
      {selectedPassion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-loreal-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-xl rounded-3xl border border-loreal-white/20 bg-loreal-charcoal p-8 shadow-2xl overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="eyebrow text-gold">{selectedPassion.category}</span>
                <h3 className="font-serif text-3xl text-loreal-white font-medium mt-1">
                  {selectedPassion.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPassion(null)}
                className="rounded-full p-2 text-loreal-white/60 hover:text-loreal-white hover:bg-loreal-white/10 transition-colors"
              >
                ✕
              </button>
            </div>

            <img
              src={selectedPassion.image}
              alt={selectedPassion.title}
              className="w-full h-56 object-cover rounded-2xl mb-6 border border-loreal-white/10"
            />

            <p className="font-sans text-base leading-relaxed text-loreal-white/80">
              {selectedPassion.description}
            </p>

            <div className="mt-8 pt-4 border-t border-loreal-white/10 flex justify-end items-center text-xs text-loreal-white/60">
              <button
                onClick={() => setSelectedPassion(null)}
                className="rounded-full bg-loreal-red px-5 py-2 font-sans text-xs uppercase tracking-wider text-loreal-white hover:bg-loreal-red-dark"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Line Divider */}
      <div className="my-20 flex items-center justify-center md:my-28" aria-hidden="true">
        <div className="flex flex-col items-center gap-1 opacity-60">
          <div className="h-px w-40 bg-gold/40" />
          <div className="h-px w-24 bg-gold/30" />
          <div className="h-px w-12 bg-gold/20" />
        </div>
      </div>

    </section>
  );
}
