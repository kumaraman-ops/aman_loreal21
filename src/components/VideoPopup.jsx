import React, { useState, useEffect } from 'react';
import { X, Play, Film, AlertTriangle } from 'lucide-react';

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCloseAttempt = () => {
    setShowConfirm(true);
  };

  const handleConfirmSkip = () => {
    setShowConfirm(false);
    setIsOpen(false);
  };

  const handleCancelSkip = () => {
    setShowConfirm(false);
  };

  const handleReopen = () => {
    setIsOpen(true);
    setShowConfirm(false);
  };

  return (
    <>
      {/* Video Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 lg:p-10 animate-fadeIn">
          {/* Ultra Translucent / Nearly Transparent Backdrop */}
          <div 
            className="fixed inset-0 bg-black/10 backdrop-blur-none transition-opacity"
            onClick={handleCloseAttempt}
          />

          {/* Main Modal Container */}
          <div className="relative w-full max-w-6xl lg:max-w-[1240px] bg-loreal-charcoal/95 border border-gold/40 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[94vh]">
            
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50">
              <div className="flex items-center space-x-3">
                <span className="flex h-3 w-3 rounded-full bg-loreal-red animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
                  <Film className="w-4 h-4" /> Featured Presentation
                </span>
              </div>
              
              {/* Close "X" Button */}
              <button
                onClick={handleCloseAttempt}
                className="group relative p-2 rounded-full bg-white/10 hover:bg-loreal-red/30 text-neutral-300 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50"
                aria-label="Close video popup"
                title="Close"
              >
                <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative w-full bg-black aspect-video flex-1 flex items-center justify-center">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/Pjzffw7xW5o?si=yYdLS9kxRaYGi0e2&autoplay=1&enablejsapi=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Modal Footer Info */}
            <div className="flex items-center justify-between px-6 py-3 bg-black/70 text-xs text-neutral-400 border-t border-white/5">
              <span>L'Oréal Paris Spotlight</span>
              <button
                onClick={handleCloseAttempt}
                className="text-neutral-400 hover:text-loreal-red underline transition-colors"
              >
                Skip Video
              </button>
            </div>

            {/* Confirmation Modal when user tries to close */}
            {showConfirm && (
              <div className="absolute inset-0 z-20 bg-black/90 backdrop-blur-md flex items-center justify-center p-6 animate-fadeIn">
                <div className="max-w-md w-full bg-loreal-graphite border border-loreal-red/50 rounded-xl p-6 text-center shadow-2xl space-y-5">
                  <div className="mx-auto w-12 h-12 rounded-full bg-loreal-red/20 border border-loreal-red/40 flex items-center justify-center text-loreal-red">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">Skip Video?</h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      Are you sure you want to skip watching this video? You can reopen it anytime using the button at the bottom right.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      onClick={handleCancelSkip}
                      className="px-5 py-2.5 rounded-lg bg-gold hover:bg-gold-light text-black font-semibold text-sm transition-colors shadow-md"
                    >
                      Keep Watching
                    </button>
                    <button
                      onClick={handleConfirmSkip}
                      className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-loreal-red/30 text-white font-medium text-sm border border-white/10 transition-colors"
                    >
                      Yes, Skip Video
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Bottom-Right Button to View Video Popup Again */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          {/* Outer Pulsing Glow Aura */}
          <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-loreal-red via-gold to-loreal-red opacity-80 blur-sm animate-pulse" />
          
          {/* Continuous Ripple Ring */}
          <span className="absolute -inset-2 rounded-full border border-gold/70 animate-ping opacity-40 pointer-events-none" />

          {/* Floating Button */}
          <button
            onClick={handleReopen}
            className="relative group flex items-center gap-3 px-5 py-3.5 rounded-full bg-loreal-black text-white border border-gold shadow-[0_0_25px_rgba(200,16,46,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="View video popup again"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-loreal-red text-white group-hover:bg-gold group-hover:text-black transition-colors shadow-md animate-pulse">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gold group-hover:text-white transition-colors pr-1">
              Watch Video
            </span>
          </button>
        </div>
      )}
    </>
  );
}
