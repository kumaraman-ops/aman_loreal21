import React from 'react';

export default function Chapter05MorningRoutine() {
  const images = [
    { id: 'p1', src: '/p1.jpeg', title: 'Product 01' },
    { id: 'p2', src: '/p2.jpeg', title: 'Product 02' },
    { id: 'p3', src: '/p3.jpeg', title: 'Product 03' },
  ];

  return (
    <section 
      id="chapter-05-morning" 
      className="relative py-24 md:py-32 grain bg-loreal-black text-loreal-white overflow-hidden border-t border-loreal-white/10"
    >
      {/* Background Radial Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(200, 16, 46, 0.1), transparent 60%)'
        }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        
        {/* Editorial Header */}
        <div className="relative mb-16">
          {/* Watermark 05 */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 -left-6 select-none font-serif italic text-[13rem] leading-none text-loreal-red/[0.08] md:-top-32 md:text-[22rem]"
          >
            05
          </div>

          <div>
            <p className="eyebrow mb-6 text-loreal-red">
              Chapter · <span className="chapter-number not-italic tracking-[0.3em] font-semibold">05</span>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl leading-[1.08] text-balance text-loreal-white md:text-6xl font-medium">
              Every Morning Is Another Chance
            </h2>
          </div>

          <div>
            <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-loreal-white/70 md:text-[1.35rem]">
              Cold water, a black bottle, and the quiet decision to begin again.
            </p>
          </div>
        </div>

        {/* 3 Images Grid (p1, p2, p3) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {images.map((img) => (
            <figure key={img.id} className="group">
              <div className="relative w-full overflow-hidden border border-loreal-white/10 bg-loreal-charcoal transition-all duration-500 group-hover:border-loreal-red aspect-[3/4] rounded-2xl shadow-xl hover:-translate-y-1.5">
                <img
                  src={process.env.PUBLIC_URL + img.src}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80";
                  }}
                  alt={img.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.15) 50%, transparent 60%)' }}
                />
              </div>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
