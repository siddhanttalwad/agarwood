import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { NUM_TREES, BASE_PRICE, COST_PER_TREE, INOCULATION, IFC_ADVISORY, FIXED_EXPENSES } from '../../constants/financial';

export function SensitivitySection({ yield_, priceChange, taxRate, discountRate, ifcY3 }) {
  const fixedExp = FIXED_EXPENSES;

  const yieldData = [80, 90, 100, 110, 120].map(y => {
    const p = BASE_PRICE * (1 + priceChange / 100);
    const r = NUM_TREES * (y / 100) * p;
    const c = NUM_TREES * (COST_PER_TREE + INOCULATION);
    const pbt = r - c - fixedExp;
    const tx = pbt > 0 ? pbt * (taxRate / 100) : 0;
    return { yield: `${y}%`, profit: (pbt - tx) / 1000 };
  });

  const priceData = [-10, -5, 0, 5, 10].map(p => {
    const pr = BASE_PRICE * (1 + p / 100);
    const r = NUM_TREES * (yield_ / 100) * pr;
    const c = NUM_TREES * (COST_PER_TREE + INOCULATION);
    const pbt = r - c - fixedExp;
    const tx = pbt > 0 ? pbt * (taxRate / 100) : 0;
    return { price: `${p}%`, profit: (pbt - tx) / 1000 };
  });

  const npvData = [0, 5, 10, 15, 20, 25, 30].map(rate => {
    const dr = rate / 100;
    const npvCalc = (-IFC_ADVISORY + (ifcY3 / Math.pow(1 + dr, 3))) / 1000;
    return { rate: `${rate}%`, npv: npvCalc };
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500 font-sans-refined mb-4">Analysis</p>
          <h2 className="text-4xl font-light">Sensitivity Testing</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-stone-50 p-8">
            <h3 className="text-base uppercase tracking-wide text-stone-600 font-sans-refined mb-6">Yield Sensitivity</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={yieldData}>
                <defs>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#059669" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
                <XAxis dataKey="yield" tick={{ fontSize: 12 }} stroke="#a8a29e" />
                <YAxis tick={{ fontSize: 12 }} stroke="#a8a29e" />
                <Tooltip 
                  formatter={(v) => [`$${v.toFixed(0)}K`, 'Profit']}
                  contentStyle={{ border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="profit" stroke="#059669" strokeWidth={2} fillOpacity={1} fill="url(#colorProfit)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-stone-50 p-8">
            <h3 className="text-base uppercase tracking-wide text-stone-600 font-sans-refined mb-6">Price Sensitivity</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={priceData}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0369a1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0369a1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
                <XAxis dataKey="price" tick={{ fontSize: 12 }} stroke="#a8a29e" />
                <YAxis tick={{ fontSize: 12 }} stroke="#a8a29e" />
                <Tooltip 
                  formatter={(v) => [`$${v.toFixed(0)}K`, 'Profit']}
                  contentStyle={{ border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="profit" stroke="#0369a1" strokeWidth={2} fillOpacity={1} fill="url(#colorPrice)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-stone-50 p-8">
          <h3 className="text-base uppercase tracking-wide text-stone-600 font-sans-refined mb-6">NPV Sensitivity to Discount Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={npvData}>
              <defs>
                <linearGradient id="colorNpv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
              <XAxis dataKey="rate" tick={{ fontSize: 12 }} stroke="#a8a29e" />
              <YAxis tick={{ fontSize: 12 }} stroke="#a8a29e" />
              <Tooltip 
                formatter={(v) => [`$${v.toFixed(0)}K`, 'NPV']}
                contentStyle={{ border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="npv" stroke="#7c3aed" strokeWidth={2} fillOpacity={1} fill="url(#colorNpv)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

