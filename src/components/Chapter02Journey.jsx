import React, { useState } from 'react';
import { Play, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Chapter02Journey({ onSelectPhoto }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = (videoEl) => {
    if (videoEl) {
      if (videoEl.paused) {
        videoEl.play();
        setIsPlaying(true);
      } else {
        videoEl.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="chapter-02" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Editorial Chapter Header */}
        <div className="relative">
          {/* Watermark 02 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-6 select-none font-serif italic text-[13rem] leading-none text-loreal-red/[0.07] md:-top-32 md:text-[22rem]"
          >
            02
          </div>

          <div>
            <p className="eyebrow mb-6 text-loreal-red">
              Chapter · <span className="chapter-number not-italic tracking-[0.3em] font-semibold">02</span>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl leading-[1.08] text-balance text-loreal-white md:text-6xl font-medium">
              The Journey That Was Never Planned
            </h2>
          </div>

          <div>
            <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-loreal-white/70 md:text-[1.35rem]">
              A one-way ticket, a guitar in the corner of a hostel, and strangers who somehow felt like old friends by morning.
            </p>
          </div>
        </div>

        {/* Video Card Feature */}
        <div className="mt-14 md:mt-20">
          <figure className="group relative overflow-hidden rounded-3xl border border-loreal-white/15 bg-loreal-charcoal shadow-[0_50px_130px_-60px_rgba(0,0,0,0.85)]">
            <div className="relative aspect-video w-full overflow-hidden">
              <video
                id="mussoorie-video"
                className="h-full w-full object-cover"
                src={process.env.PUBLIC_URL + '/L7V.mp4#t=0.5'}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Custom Play/Pause Overlay indicator */}
              {!isPlaying && (
                <div
                  onClick={() => toggleVideo(document.getElementById('mussoorie-video'))}
                  className="absolute inset-0 flex items-center justify-center bg-loreal-black/40 backdrop-blur-[2px] cursor-pointer group-hover:bg-loreal-black/30 transition-all"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-loreal-red/90 text-loreal-white shadow-[0_0_40px_rgba(200,16,46,0.8)] transition-transform duration-300 hover:scale-110">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              )}
            </div>

            <figcaption className="flex items-center justify-between px-6 py-4 border-t border-loreal-white/10 bg-loreal-black/80 font-serif text-sm italic text-loreal-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-loreal-red" />
                <span>Mussoorie   the part of the trip I never planned</span>
              </div>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold">Film Highlight</span>
            </figcaption>
          </figure>
        </div>

        {/* 4 Photo Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-6">
          {resumeData.journeyPhotos.map((photo) => (
            <figure
              key={photo.id}
              onClick={() => onSelectPhoto && onSelectPhoto(photo)}
              className="group cursor-pointer transition-transform duration-700 hover:-translate-y-1.5"
            >
              <div className={`relative w-full overflow-hidden border border-loreal-white/10 bg-loreal-charcoal transition-all duration-500 group-hover:border-loreal-red ${photo.aspect} rounded-2xl shadow-lg`}>
                <img
                  src={process.env.PUBLIC_URL + photo.image}
                  onError={(e) => {
                    if (photo.fallbackImage) {
                      e.target.onerror = null;
                      e.target.src = photo.fallbackImage;
                    }
                  }}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </figure>
          ))}
        </div>

        {/* Divider N E S W */}
        <div className="my-20 flex items-center justify-center md:my-28" aria-hidden="true">
          <div className="flex items-center gap-4 opacity-70">
            <span className="h-px w-16 bg-gold/50" />
            <span className="font-serif text-xs italic tracking-[0.4em] text-loreal-white/70">
              N · E · S · W
            </span>
            <span className="h-px w-16 bg-gold/50" />
          </div>
        </div>

      </div>
    </section>
  );
}
