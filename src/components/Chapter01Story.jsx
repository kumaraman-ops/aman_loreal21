import React from 'react';

export default function Chapter01Story() {
  return (
    <section id="chapter-01" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
        
        {/* Left Column: Heading & Editorial Intro */}
        <div className="md:col-span-7">
          <div className="relative">
            {/* Watermark 01 */}
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute -top-24 -left-6 select-none font-serif italic text-[13rem] leading-none text-loreal-red/[0.07] md:-top-32 md:text-[22rem]"
            >
              01
            </div>

            <div>
              <p className="eyebrow mb-6 text-loreal-red">
                Chapter · <span className="chapter-number not-italic tracking-[0.3em] font-semibold">01</span>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-4xl leading-[1.08] text-balance text-loreal-white md:text-6xl font-medium">
                Some people collect souvenirs.{' '}
                <span className="italic text-loreal-white/90">I collect stories.</span>
              </h2>
            </div>

            <div>
              <p className="mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-loreal-white/70 md:text-[1.35rem]">
                Not a résumé. Not a highlight reel. Just the moments and the people who quietly changed the way I look at things.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-loreal-white/10 flex items-center gap-6 text-xs text-loreal-white/60">
              <span className="eyebrow text-gold">Perspective</span>
              <span className="h-3 w-px bg-loreal-white/20" />
              <span>Curiosity Over Comfort</span>
              <span className="h-3 w-px bg-loreal-white/20" />
              <span>Empathy in Craft</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Card */}
        <div className="md:col-span-5">
          <div className="relative">
            <span 
              aria-hidden="true" 
              className="absolute -inset-3 -z-10 rounded-[2rem] border border-loreal-white/10 bg-loreal-white/[0.02]"
            />
            
            <figure className="group mx-auto max-w-sm">
              <div className="relative w-full overflow-hidden border border-loreal-white/15 bg-loreal-charcoal transition-all duration-500 group-hover:border-loreal-red aspect-[3/4] rounded-[1.5rem] shadow-2xl">
                <img
                  src={process.env.PUBLIC_URL + '/L9.jpeg'}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
                  }}
                  alt="Aman Kumar editorial story"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.15) 50%, transparent 60%)' }}
                />
              </div>

              <figcaption className="mt-4 flex items-center justify-between font-sans text-xs text-loreal-white/70">
                <span className="italic">Somewhere in the middle of it all</span>
                <span className="eyebrow text-[10px] text-loreal-white/40">Sea Breeze</span>
              </figcaption>
            </figure>
          </div>
        </div>

      </div>
    </section>
  );
}
