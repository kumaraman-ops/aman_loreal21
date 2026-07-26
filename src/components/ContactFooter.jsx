import React from 'react';
import { Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative border-t border-loreal-white/10 bg-loreal-black pt-24 pb-16 grain">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        
        {/* Main Contact Section (Form Removed) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8 mb-20">
          <span className="eyebrow text-loreal-red">Next Step</span>
          
          <h2 className="font-serif text-4xl leading-tight text-loreal-white md:text-6xl font-medium">
            Let's create the next chapter together.
          </h2>

          <p className="font-sans text-base leading-relaxed text-loreal-white/70 max-w-xl">
            Open for conversations, coffee, or discussions about L'Oréal Edge roles, digital products, and market strategy.
          </p>

          <div className="pt-4 flex flex-col items-center gap-6">
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="inline-flex items-center gap-3 font-serif text-2xl text-gold hover:text-loreal-white transition-colors border-b border-gold/40 pb-1"
            >
              <Mail className="w-6 h-6 text-loreal-red" />
              <span>{resumeData.personal.email}</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 rounded-full border border-loreal-white/20 flex items-center gap-2.5 text-xs font-sans uppercase tracking-wider text-loreal-white/80 hover:text-loreal-white hover:border-loreal-red hover:bg-loreal-red transition-all"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 rounded-full border border-loreal-white/20 flex items-center gap-2.5 text-xs font-sans uppercase tracking-wider text-loreal-white/80 hover:text-loreal-white hover:border-loreal-red hover:bg-loreal-red transition-all"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Sub-Footer */}
        <div className="pt-8 border-t border-loreal-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-loreal-white/50">
          <p className="font-serif italic">
            Written & Crafted by <span className="text-loreal-white font-normal">Aman Kumar</span> for L'Oréal Edge
          </p>

          <p className="font-sans text-[11px] uppercase tracking-wider">
            Issue 01 · All Rights Reserved © {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </footer>
  );
}
