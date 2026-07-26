import React, { useState } from 'react';
import { Briefcase, GraduationCap, Code, Download, FileText, CheckCircle2, Star } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ResumeExperience() {
  const [viewMode, setViewMode] = useState('structured'); // 'structured' or 'editorial'

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">

      {/* Section Header & Toggle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-loreal-white/10 pb-8">
        <div>
          <p className="eyebrow mb-2 text-loreal-red">Credentials & Impact</p>
          <h2 className="font-serif text-4xl leading-tight text-loreal-white md:text-5xl font-medium">
            Experience & Skill Matrix
          </h2>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-3">
          <div className="p-1 rounded-full bg-loreal-white/5 border border-loreal-white/15 flex items-center">
            <button
              onClick={() => setViewMode('structured')}
              className={`rounded-full px-5 py-2 font-sans text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${viewMode === 'structured'
                  ? 'bg-loreal-red text-loreal-white shadow-md font-semibold'
                  : 'text-loreal-white/60 hover:text-loreal-white'
                }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Structured CV</span>
            </button>

            <button
              onClick={() => setViewMode('editorial')}
              className={`rounded-full px-5 py-2 font-sans text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${viewMode === 'editorial'
                  ? 'bg-loreal-red text-loreal-white shadow-md font-semibold'
                  : 'text-loreal-white/60 hover:text-loreal-white'
                }`}
            >
              <Star className="w-3.5 h-3.5 text-gold" />
              <span>Editorial Overview</span>
            </button>
          </div>

          <button
            onClick={handlePrintResume}
            className="hidden sm:flex items-center gap-2 rounded-full border border-loreal-white/30 px-4 py-2 font-sans text-xs uppercase tracking-wider text-loreal-white hover:bg-loreal-white/10 transition-colors"
            title="Print or Save CV PDF"
          >
            <Download className="w-3.5 h-3.5 text-gold" />
            <span>Export CV</span>
          </button>
        </div>
      </div>

      {/* View Content */}
      {viewMode === 'structured' ? (
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Left Column: Work Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-5 h-5 text-loreal-red" />
              <h3 className="font-serif text-2xl text-loreal-white font-medium">Professional Path</h3>
            </div>

            <div className="relative border-l-2 border-loreal-white/15 pl-6 space-y-10">
              {resumeData.structuredExperience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node Dot */}
                  <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-loreal-red border-4 border-loreal-black group-hover:scale-125 transition-transform" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-serif text-2xl text-loreal-white font-medium group-hover:text-gold transition-colors">
                      {exp.role}
                    </h4>
                    <span className="eyebrow text-[10px] text-gold px-3 py-1 rounded-full bg-loreal-white/5 border border-loreal-white/10 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-loreal-white/60 mb-4 uppercase tracking-widest">
                    {exp.company} · {exp.location}
                  </p>

                  <ul className="space-y-2.5">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="font-sans text-sm leading-relaxed text-loreal-white/80 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-loreal-red shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills & Competencies */}
          <div className="lg:col-span-5 space-y-8">
            {/* Frontend Skills */}
            <div className="glass-card p-6 rounded-2xl border border-loreal-white/10">
              <h4 className="font-serif text-xl text-loreal-white font-medium mb-4 flex items-center gap-2">
                <Code className="w-4 h-4 text-gold" />
                <span>Technical Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.frontend.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-loreal-white/5 text-xs text-loreal-white/90 border border-loreal-white/15 hover:border-loreal-red transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Strategy Skills */}
            <div className="glass-card p-6 rounded-2xl border border-loreal-white/10">
              <h4 className="font-serif text-xl text-loreal-white font-medium mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-loreal-red" />
                <span>Strategic & Brand Capabilities</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.strategy.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-loreal-red/10 text-xs text-loreal-white border border-loreal-red/30 hover:bg-loreal-red/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-6 rounded-2xl border border-loreal-white/10">
              <h4 className="font-serif text-xl text-loreal-white font-medium mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-gold" />
                <span>Education & Mindset</span>
              </h4>
              <div className="text-xs text-loreal-white/80 space-y-1">
                <p className="font-serif text-base text-loreal-white">Continuous Self-Directed Learning</p>
                <p className="text-loreal-white/60">Product Craft, Financial Markets & Frontend Architecture</p>
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* Editorial Summary Box */
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-loreal-white/15 relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <h3 className="font-serif text-3xl text-loreal-white">
              The Philosophy Behind The Candidate
            </h3>
            <p className="font-sans text-base leading-relaxed text-loreal-white/80">
              "I believe modern product development for consumer brands is not just about writing clean React code or tweaking CSS grids   it's about translating brand soul into digital physical form. At L'Oréal Edge, I aim to combine rapid technical iteration with deep aesthetic rigor."
            </p>
            <div className="pt-4 flex items-center gap-4">
              <span className="eyebrow text-gold">Ready for L'Oréal Edge</span>
              <span className="h-4 w-px bg-loreal-white/20" />
              <span className="font-serif italic text-loreal-white/70">Aman Kumar</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
