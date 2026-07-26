import React from 'react';
import { Sparkles, Target } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Chapter04BeautyEdge() {
  return (
    <section
      id="chapter-05"
      className="relative py-24 md:py-32 grain"
      style={{
        background: 'linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(24, 20, 22, 0.95) 50%, rgba(10,10,10,1) 100%)'
      }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Editorial Header */}
        <div className="relative">
          {/* Watermark 06 */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 -left-6 select-none font-serif italic text-[13rem] leading-none text-loreal-red/[0.08] md:-top-32 md:text-[22rem]"
          >
            06
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="eyebrow text-loreal-red">Chapter · 06</span>
            <span className="h-3 w-px bg-loreal-white/20" />
            <span className="eyebrow text-gold">Beauty & L'Oréal Edge</span>
          </div>

          <div>
            <h2 className="font-serif text-4xl leading-[1.08] text-balance text-loreal-white md:text-6xl font-medium">
              Why L'Oréal Edge?
            </h2>
          </div>

          <div>
            <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-loreal-white/70 md:text-[1.35rem]">
              Where passion for consumer psychology, technology, and aesthetic storytelling converges.
            </p>
          </div>
        </div>

        {/* Highlight Quote Box */}
        <div className="mt-14 relative overflow-hidden rounded-3xl border border-loreal-red/40 bg-gradient-to-br from-loreal-red/10 via-loreal-charcoal to-loreal-black p-8 md:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 h-64 w-64 rounded-full bg-loreal-red/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <Sparkles className="w-8 h-8 text-gold mb-4 animate-pulse" />

            <blockquote className="font-serif text-2xl md:text-3xl italic leading-snug text-loreal-white">
              "Beauty is not superficial   it is emotion, identity, and confidence. To build for L'Oréal Edge is to respect both the science of formula and the art of digital perception."
            </blockquote>

            <p className="mt-6 font-sans text-xs uppercase tracking-[0.28em] text-gold">
              Aman Kumar · Candidate Statement
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resumeData.edgeFitPillars.map((pillar) => (
            <div
              key={pillar.num}
              className="glass-card group p-6 rounded-2xl border border-loreal-white/10 hover:border-loreal-red/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-serif italic text-3xl text-gold">{pillar.num}</span>
                <div className="h-8 w-8 rounded-full bg-loreal-white/5 flex items-center justify-center group-hover:bg-loreal-red transition-colors">
                  <Target className="w-4 h-4 text-loreal-white" />
                </div>
              </div>

              <h3 className="font-serif text-xl text-loreal-white font-medium mb-3">
                {pillar.title}
              </h3>

              <p className="font-sans text-xs leading-relaxed text-loreal-white/70">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
