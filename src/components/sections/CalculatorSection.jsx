import React from 'react';
import { InputControl } from '../ui/InputControl';
import { MetricCard } from '../ui/MetricCard';
import { NUM_TREES, BASE_PRICE, COST_PER_TREE, INOCULATION, IFC_ADVISORY, LOGISTICS, PROCESSING, SALES_MARKETING } from '../../constants/financial';

export function CalculatorSection({ 
  yield_, 
  setYield, 
  priceChange, 
  setPriceChange, 
  taxRate, 
  setTaxRate, 
  discountRate, 
  setDiscountRate,
  calculations 
}) {
  const { adjPrice, revenue, directCost, fixedExp, pbt, tax, pat, irr, inflow, outflow, balance, ifcReturn, ifcShare, ifcY3, npv } = calculations;

  return (
    <section id="calculator" className="py-32 bg-stone-50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-32" />
      
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-700 font-sans-refined mb-4">Interactive Model</p>
          <h2 className="text-5xl md:text-6xl font-light mb-4">Financial Calculator</h2>
          <p className="text-lg text-stone-600">Adjust the parameters to model different investment scenarios.</p>
        </div>
        
        {/* Controls */}
        <div className="bg-white p-8 md:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <InputControl 
              label="Yield" 
              value={yield_} 
              min={0} 
              max={200} 
              onChange={(e) => setYield(parseFloat(e.target.value) || 0)}
              description="% of expected tree production"
            />
            <InputControl 
              label="Price Change" 
              value={priceChange} 
              min={-100} 
              max={100} 
              onChange={(e) => setPriceChange(parseFloat(e.target.value) || 0)}
              description="Market price adjustment"
            />
            <InputControl 
              label="Tax Rate" 
              value={taxRate} 
              min={0} 
              max={50} 
              onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
              description="Corporate tax rate"
            />
            <InputControl 
              label="Discount Rate" 
              value={discountRate} 
              min={0} 
              max={50} 
              onChange={(e) => setDiscountRate(parseFloat(e.target.value) || 0)}
              description="For NPV calculation"
            />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 mb-12">
          <MetricCard label="Revenue" value={`${Math.round(revenue/1000)}K`} large />
          <MetricCard label="Direct Cost" value={`${Math.round(directCost/1000)}K`} />
          <MetricCard label="Profit After Tax" value={`${Math.round(pat/1000)}K`} positive={pat >= 0} large />
          <MetricCard label="IRR (3Y)" value={`${irr.toFixed(1)}%`} prefix="" positive={irr >= 0} />
        </div>

        {/* Detailed Breakdowns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Revenue Breakdown */}
          <div className="bg-white p-8 md:p-10">
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-500 font-sans-refined mb-8">Revenue Breakdown</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Number of Trees</span>
                <span className="font-sans-refined text-stone-800">{NUM_TREES.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Yield Rate</span>
                <span className="font-sans-refined text-stone-800">{yield_}%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Effective Trees</span>
                <span className="font-sans-refined text-stone-800">{Math.round(NUM_TREES * (yield_ / 100)).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Base Price per Tree</span>
                <span className="font-sans-refined text-stone-800">${BASE_PRICE}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Price Adjustment</span>
                <span className={`font-sans-refined ${priceChange >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>{priceChange >= 0 ? '+' : ''}{priceChange}%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Adjusted Price per Tree</span>
                <span className="font-sans-refined text-stone-800">${adjPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-emerald-50 px-4 -mx-4 mt-4">
                <span className="font-medium text-stone-800">Total Revenue</span>
                <span className="font-sans-refined font-medium text-emerald-800">${revenue.toLocaleString()}</span>
              </div>
              <p className="text-xs text-stone-400 mt-2 font-sans-refined">
                Formula: {NUM_TREES.toLocaleString()} × {yield_}% × ${adjPrice.toFixed(2)} = ${revenue.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Direct Cost Breakdown */}
          <div className="bg-white p-8 md:p-10">
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-500 font-sans-refined mb-8">Direct Cost Breakdown</h3>
            <div className="space-y-4">
              <div className="py-3 border-b border-stone-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-stone-600">Cost of Trees</span>
                  <span className="font-sans-refined text-rose-700">${(NUM_TREES * COST_PER_TREE).toLocaleString()}</span>
                </div>
                <p className="text-xs text-stone-400 font-sans-refined">{NUM_TREES.toLocaleString()} trees × ${COST_PER_TREE}/tree</p>
              </div>
              <div className="py-3 border-b border-stone-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-stone-600">Inoculation Cost</span>
                  <span className="font-sans-refined text-rose-700">${(NUM_TREES * INOCULATION).toLocaleString()}</span>
                </div>
                <p className="text-xs text-stone-400 font-sans-refined">{NUM_TREES.toLocaleString()} trees × ${INOCULATION}/tree</p>
              </div>
              <div className="flex justify-between items-center py-3 bg-rose-50 px-4 -mx-4 mt-4">
                <span className="font-medium text-stone-800">Total Direct Cost</span>
                <span className="font-sans-refined font-medium text-rose-800">${directCost.toLocaleString()}</span>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200">
                <h4 className="text-xs uppercase tracking-wide text-stone-400 font-sans-refined mb-3">Per Tree Summary</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-stone-50 p-3">
                    <p className="text-xs text-stone-400 mb-1">Tree Cost</p>
                    <p className="font-sans-refined text-stone-700">${COST_PER_TREE}</p>
                  </div>
                  <div className="bg-stone-50 p-3">
                    <p className="text-xs text-stone-400 mb-1">Inoculation</p>
                    <p className="font-sans-refined text-stone-700">${INOCULATION}</p>
                  </div>
                </div>
                <div className="bg-stone-100 p-3 mt-2">
                  <div className="flex justify-between">
                    <p className="text-sm text-stone-600">Total per Tree</p>
                    <p className="font-sans-refined font-medium text-stone-800">${COST_PER_TREE + INOCULATION}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Cost Breakdown */}
          <div className="bg-white p-8 md:p-10">
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-500 font-sans-refined mb-8">Fixed Cost Breakdown</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Logistics</span>
                <span className="font-sans-refined text-rose-700">${LOGISTICS.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Processing</span>
                <span className="font-sans-refined text-rose-700">${PROCESSING.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Sales & Marketing</span>
                <span className="font-sans-refined text-rose-700">${SALES_MARKETING.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-rose-50 px-4 -mx-4 mt-4">
                <span className="font-medium text-stone-800">Total Fixed Expenses</span>
                <span className="font-sans-refined font-medium text-rose-800">${fixedExp.toLocaleString()}</span>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200">
                <h4 className="text-xs uppercase tracking-wide text-stone-400 font-sans-refined mb-3">Tax Calculation</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2">
                    <span className="text-stone-500">Profit Before Tax</span>
                    <span className={`font-sans-refined ${pbt >= 0 ? 'text-stone-700' : 'text-rose-700'}`}>${pbt.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-stone-500">Tax Rate</span>
                    <span className="font-sans-refined text-stone-700">{taxRate}%</span>
                  </div>
                  <div className="flex justify-between py-2 bg-amber-50 px-3 -mx-3">
                    <span className="text-stone-600 font-medium">Tax Amount</span>
                    <span className="font-sans-refined font-medium text-amber-800">${Math.round(tax).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 md:p-10">
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-500 font-sans-refined mb-8">Cash Flow Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">IFC Advisory (Y0)</span>
                <span className="font-sans-refined text-emerald-700">${(IFC_ADVISORY/1000).toFixed(0)}K</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Project Revenue</span>
                <span className="font-sans-refined text-emerald-700">${Math.round(revenue/1000)}K</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-emerald-50 px-4 -mx-4">
                <span className="font-medium">Total Inflow</span>
                <span className="font-sans-refined font-medium">${Math.round(inflow/1000)}K</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100 mt-4">
                <span className="text-stone-600">Direct Costs</span>
                <span className="font-sans-refined text-rose-700">${Math.round(directCost/1000)}K</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Fixed Expenses</span>
                <span className="font-sans-refined text-rose-700">${Math.round(fixedExp/1000)}K</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Tax</span>
                <span className="font-sans-refined text-rose-700">${Math.round(tax/1000)}K</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-rose-50 px-4 -mx-4">
                <span className="font-medium">Total Outflow</span>
                <span className="font-sans-refined font-medium">${Math.round(outflow/1000)}K</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10">
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-500 font-sans-refined mb-8">IFC Returns (Year 3)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Balance Before Dist</span>
                <span className="font-sans-refined">${Math.round(balance/1000)}K</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Initial Investment Return</span>
                <span className="font-sans-refined text-emerald-700">${Math.round(ifcReturn/1000)}K</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-stone-100">
                <span className="text-stone-600">Profit Share (90%)</span>
                <span className="font-sans-refined text-emerald-700">${Math.round(ifcShare/1000)}K</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-emerald-50 px-4 -mx-4">
                <span className="font-medium">Total Return</span>
                <span className="font-sans-refined font-medium text-emerald-800">${Math.round(ifcY3/1000)}K</span>
              </div>
              
              <div className="pt-6 mt-4 border-t border-stone-200 grid grid-cols-2 gap-4">
                <div className="bg-stone-50 p-4">
                  <p className="text-sm text-stone-500 mb-1 font-sans-refined">Multiple</p>
                  <p className="text-2xl font-light text-stone-800">{(ifcY3/IFC_ADVISORY).toFixed(2)}x</p>
                </div>
                <div className="bg-stone-50 p-4">
                  <p className="text-sm text-stone-500 mb-1 font-sans-refined">NPV @ {discountRate}%</p>
                  <p className={`text-2xl font-light ${npv >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>${Math.round(npv/1000)}K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

