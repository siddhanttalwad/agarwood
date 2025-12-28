import React from 'react';
import { scenarios } from '../../data/scenarios';

export function ModelCasesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500 font-sans-refined mb-4">Scenarios</p>
            <h2 className="text-4xl font-light">Model Cases</h2>
          </div>
          <p className="text-stone-600 max-w-md text-base">
            Conservative assumptions designed to reflect the most probable outcomes across three scenarios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((scenario, i) => (
            <div key={i} className={`p-8 ${i === 1 ? 'bg-stone-800 text-white' : 'bg-stone-50'}`}>
              <div className={`w-3 h-3 rounded-full mb-4 ${i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-white' : 'bg-rose-500'}`} />
              <h3 className="text-xl font-medium mb-6">{scenario.name}</h3>
              <div className="space-y-4 text-base font-sans-refined">
                <div className="flex justify-between">
                  <span className={i === 1 ? 'text-stone-300' : 'text-stone-600'}>Yield</span>
                  <span className="font-medium">{scenario.yield}%</span>
                </div>
                <div className="flex justify-between">
                  <span className={i === 1 ? 'text-stone-300' : 'text-stone-600'}>Price Change</span>
                  <span className="font-medium">{scenario.price}%</span>
                </div>
                <div className="flex justify-between">
                  <span className={i === 1 ? 'text-stone-300' : 'text-stone-600'}>Tax Rate</span>
                  <span className="font-medium">{scenario.tax}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

