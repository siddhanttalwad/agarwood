import React from 'react';
import { valueChainSteps } from '../../data/valueChainSteps';

export function ValueChainSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-stone-100 to-stone-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500 font-sans-refined mb-4">Process</p>
          <h2 className="text-5xl font-light">The Agarwood Value Chain</h2>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-2">
            {valueChainSteps.map((item, i) => (
              <div key={i} className="flex items-start">
                <div className={`text-center relative flex-1 ${item.highlight ? 'scale-105' : ''}`}>
                  <div className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center text-lg font-sans-refined ${item.highlight ? 'bg-emerald-700 text-white' : 'bg-white text-stone-500 border border-stone-200'}`}>
                    {item.step}
                  </div>
                  <h4 className={`text-lg font-medium mb-2 ${item.highlight ? 'text-emerald-800' : 'text-stone-700'}`}>{item.title}</h4>
                  <p className="text-base text-stone-600 leading-relaxed px-1">{item.desc}</p>
                </div>
                {i < 5 && (
                  <div className="hidden lg:flex items-center justify-center w-8 mt-6">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

