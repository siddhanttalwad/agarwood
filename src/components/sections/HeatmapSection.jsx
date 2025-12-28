import React from 'react';
import { NUM_TREES, BASE_PRICE, COST_PER_TREE, INOCULATION, FIXED_EXPENSES } from '../../constants/financial';

export function HeatmapSection({ taxRate }) {
  const fixedExp = FIXED_EXPENSES;

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500 font-sans-refined mb-4">Matrix</p>
            <h2 className="text-4xl font-light">Profit Heatmap</h2>
          </div>
          <p className="text-stone-600 text-base">Yield % (rows) vs Price Change % (columns)</p>
        </div>
        
        <div className="bg-white p-8 overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-sm uppercase tracking-wide text-stone-500 font-sans-refined font-normal">Y \ P</th>
                {[-10, -5, 0, 5, 10].map(p => (
                  <th key={p} className="text-center py-4 px-4 text-sm uppercase tracking-wide text-stone-500 font-sans-refined font-normal">{p}%</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[80, 90, 100, 110, 120].map(y => (
                <tr key={y}>
                  <td className="py-4 px-4 text-base font-medium text-stone-700">{y}%</td>
                  {[-10, -5, 0, 5, 10].map(p => {
                    const pr = BASE_PRICE * (1 + p / 100);
                    const rev = NUM_TREES * (y / 100) * pr;
                    const cost = NUM_TREES * (COST_PER_TREE + INOCULATION);
                    const pbtCalc = rev - cost - fixedExp;
                    const txCalc = pbtCalc > 0 ? pbtCalc * (taxRate / 100) : 0;
                    const profit = pbtCalc - txCalc;
                    
                    let bg = 'bg-rose-100';
                    let text = 'text-rose-800';
                    if (profit > 500000) { bg = 'bg-emerald-100'; text = 'text-emerald-800'; }
                    else if (profit > 250000) { bg = 'bg-emerald-50'; text = 'text-emerald-700'; }
                    else if (profit > 0) { bg = 'bg-amber-50'; text = 'text-amber-800'; }
                    
                    return (
                      <td key={`${y}-${p}`} className={`text-center py-4 px-4 ${bg} ${text} font-sans-refined text-base transition-all hover:scale-105`}>
                        ${Math.round(profit/1000)}K
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

