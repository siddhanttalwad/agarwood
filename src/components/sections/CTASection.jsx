import React from 'react';

export function CTASection() {
  return (
    <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto px-8 text-center relative">
        <h2 className="text-5xl md:text-6xl font-light mb-6">
          Ready to Explore<br /><em className="italic text-stone-400">This Opportunity?</em>
        </h2>
        <p className="text-lg text-stone-300 mb-12 leading-relaxed">
          This pilot represents a unique chance to unlock value in a dormant sector while supporting sustainable agroforestry practices.
        </p>
        <button 
          onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 bg-white text-stone-900 font-sans-refined text-base tracking-wide hover:bg-emerald-100 transition-colors"
        >
          Run Your Scenario
        </button>
      </div>
    </section>
  );
}

