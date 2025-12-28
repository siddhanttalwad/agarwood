import React from 'react';

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900" />
      <div className="absolute inset-0 grain pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-900/10 rounded-full blur-3xl" />
      
      {/* Geometric accent */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-32 left-20 w-24 h-24 border border-white/5 rotate-12 hidden lg:block" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
        <p className="animate-fade-up text-xs uppercase tracking-[0.4em] text-emerald-300/70 mb-8 font-sans-refined">Investment Pilot · Sri Lanka</p>
        
        <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl font-light leading-[1.1] mb-8 text-balance">
          Unlocking a Stalled<br />
          <em className="font-normal italic text-emerald-200">Export Value Chain</em>
        </h1>
        
        <p className="animate-fade-up-delay-2 text-lg md:text-xl font-light text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          An inoculation-led agarwood value enhancement pilot, supported by a scenario-based financial model.
        </p>
        
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })} 
            className="group relative px-8 py-4 bg-white text-stone-900 font-sans-refined text-sm tracking-wide overflow-hidden"
          >
            <span className="relative z-10">Explore the Model</span>
            <div className="absolute inset-0 bg-emerald-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button 
            onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth' })} 
            className="px-8 py-4 border border-white/30 text-white font-sans-refined text-sm tracking-wide hover:bg-white/10 transition-colors"
          >
            View Project Overview
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/40">
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans-refined">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

