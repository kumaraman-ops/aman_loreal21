import React, { useState } from 'react';
import { Eye, MapPin, X } from 'lucide-react';

export default function InteractiveGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeItem, setActiveItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Mussoorie Fog & Valleys",
      category: "travel",
      tag: "Exploration",
      location: "Mussoorie, Uttarakhand",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "Trekking through early morning mountain mist with a camera and an unhurried mind."
    },
    {
      id: 2,
      title: "Market Candlesticks & Liquidity",
      category: "work",
      tag: "Trading",
      location: "Desk Studio",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      description: "Observing market dynamics, key support levels, and human emotional reactions to price."
    },
    {
      id: 3,
      title: "Acoustic Evenings in Hostel",
      category: "moments",
      tag: "Music & Stories",
      location: "Landour, India",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80",
      description: "Sharing songs and stories around a campfire with travelers from around the globe."
    },
    {
      id: 4,
      title: "Building Modern Interfaces",
      category: "work",
      tag: "Product Design",
      location: "Workspace",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      description: "Fine-tuning typography, Tailwind micro-animations, and luxury aesthetic details."
    },
    {
      id: 5,
      title: "High Altitude Solitude",
      category: "travel",
      tag: "Travel",
      location: "Himalayan Ridge",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
      description: "Finding clarity in silence high above the cloudline."
    },
    {
      id: 6,
      title: "Late Night Code & Coffee",
      category: "moments",
      tag: "Craft",
      location: "Studio",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      description: "The thrill of solving complex frontend challenges when the city sleeps."
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow mb-3 text-loreal-red">Visual Archive</p>
          <h2 className="font-serif text-4xl leading-tight text-loreal-white md:text-5xl font-medium">
            Gallery & Field Notes
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Artifacts' },
            { id: 'travel', label: 'Travel' },
            { id: 'work', label: 'Products & Markets' },
            { id: 'moments', label: 'Life Moments' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`rounded-full px-4 py-2 font-sans text-xs uppercase tracking-wider transition-all ${
                activeFilter === btn.id
                  ? 'bg-loreal-red text-loreal-white shadow-[0_0_15px_rgba(200,16,46,0.4)]'
                  : 'bg-loreal-white/5 text-loreal-white/60 hover:bg-loreal-white/10 hover:text-loreal-white border border-loreal-white/10'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map(item => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group relative overflow-hidden rounded-2xl border border-loreal-white/10 bg-loreal-charcoal aspect-[4/3] cursor-pointer shadow-lg hover:border-loreal-red transition-all duration-500 hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-loreal-black/90 via-loreal-black/30 to-transparent p-6 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="eyebrow text-[10px] text-gold mb-1">{item.tag}</span>
              <h3 className="font-serif text-xl text-loreal-white font-medium">{item.title}</h3>
              <p className="font-sans text-xs text-loreal-white/70 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-loreal-red" />
                {item.location}
              </p>
            </div>

            <div className="absolute top-4 right-4 p-2.5 rounded-full bg-loreal-black/60 backdrop-blur-md text-loreal-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-loreal-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-2xl rounded-3xl border border-loreal-white/20 bg-loreal-charcoal p-6 md:p-8 shadow-2xl overflow-hidden">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 rounded-full p-2 text-loreal-white/80 hover:bg-loreal-white/10 hover:text-loreal-white"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="w-full h-80 object-cover rounded-2xl mb-6 border border-loreal-white/10"
            />

            <span className="eyebrow text-gold">{activeItem.tag}</span>
            <h3 className="font-serif text-3xl text-loreal-white font-medium mt-1">
              {activeItem.title}
            </h3>
            
            <p className="font-sans text-xs text-loreal-white/60 flex items-center gap-1.5 mt-2 mb-4">
              <MapPin className="w-3.5 h-3.5 text-loreal-red" />
              {activeItem.location}
            </p>

            <p className="font-sans text-base leading-relaxed text-loreal-white/80">
              {activeItem.description}
            </p>

            <div className="mt-6 pt-4 border-t border-loreal-white/10 flex justify-end">
              <button
                onClick={() => setActiveItem(null)}
                className="rounded-full bg-loreal-red px-6 py-2.5 font-sans text-xs uppercase tracking-wider text-loreal-white hover:bg-loreal-red-dark"
              >
                Close Artifact
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
