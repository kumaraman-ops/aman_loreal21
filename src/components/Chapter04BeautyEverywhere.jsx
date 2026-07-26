import React from 'react';

export default function Chapter04BeautyEverywhere() {
  const images = [
    { id: 'L27', src: '/L27.jpeg', title: 'Poetry' },
    { id: 'L28', src: '/L28.jpeg', title: 'Mona Lisa' },
    { id: 'L29', src: '/L29.jpeg', title: 'Diya & Flowers' },
    { id: 'L8', src: '/L8.jpeg', title: 'Moment 08' },
    { id: 'L16', src: '/L16.jpeg', title: 'Moment 16' },
    { id: 'L3', src: '/WhatsApp Image 2026-07-26 at 4.23.07 PM (3).jpeg', fallbackSrc: '/L30.jpeg', title: 'Moment 03' },
    { id: 'L31', src: '/L31.jpeg', title: 'Moment 31' },
    { id: 'L30', src: '/L30.jpeg', title: 'Moment 30' },
  ];

  return (
    <section 
      id="chapter-04-beauty" 
      className="relative py-24 md:py-32 grain bg-loreal-black text-loreal-white overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(200, 16, 46, 0.08), transparent 50%)'
        }}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        
        {/* Editorial Header */}
        <div className="relative mb-16">
          {/* Watermark 04 */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 -left-6 select-none font-serif italic text-[13rem] leading-none text-loreal-red/[0.08] md:-top-32 md:text-[22rem]"
          >
            04
          </div>

          <div>
            <p className="eyebrow mb-6 text-loreal-red">
              Chapter · <span className="chapter-number not-italic tracking-[0.3em] font-semibold">04</span>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl leading-[1.08] text-balance text-loreal-white md:text-6xl font-medium">
              Beauty Is Everywhere
            </h2>
          </div>

          <div>
            <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-loreal-white/70 md:text-[1.35rem]">
              Nobody told me where to find beauty. Travelling just slowed me down enough to notice it.
            </p>
          </div>
        </div>

        {/* 4x2 Cards Grid (8 Photos: L27, L28, L29, L8, L16, L3, L31, L30) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {images.map((img) => (
            <div 
              key={img.id}
              className="group relative overflow-hidden rounded-[1.5rem] border border-loreal-white/10 bg-loreal-charcoal shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:border-loreal-red hover:shadow-[0_30px_60px_-30px_rgba(200,16,46,0.4)] aspect-[3/4]"
            >
              <img
                src={process.env.PUBLIC_URL + img.src}
                onError={(e) => {
                  if (img.fallbackSrc) {
                    e.target.onerror = null;
                    e.target.src = process.env.PUBLIC_URL + img.fallbackSrc;
                  } else {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
                  }
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
          ))}
        </div>

      </div>
    </section>
  );
}
