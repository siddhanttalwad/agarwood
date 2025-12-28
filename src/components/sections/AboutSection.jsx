import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500 font-sans-refined mb-4">About</p>
            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              K-LIFE<br /><em className="italic">(Pvt) Ltd.</em>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <p className="text-xl text-stone-700 leading-relaxed">
              K-LIFE (Pvt) Ltd. is a leader in sustainable agriculture and export-driven agribusiness. Since its establishment in 2013, the company has integrated traditional knowledge with modern technology to develop profitable, eco-friendly ventures.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              We have successfully delivered innovative projects addressing biodiversity loss, climate resilience, and sustainable land management. Our approach centers on multi-stakeholder collaboration with local farmers and international organizations to co-create scalable solutions.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Through our agarwood cultivation initiatives using polyculture systems, K-LIFE combines environmental stewardship with business acumen to create high-value commodities for global markets.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-stone-200 mt-12">
              <div>
                <p className="text-4xl font-light text-emerald-800">2013</p>
                <p className="text-sm uppercase tracking-wide text-stone-500 mt-1 font-sans-refined">Established</p>
              </div>
              <div>
                <p className="text-4xl font-light text-emerald-800">5K</p>
                <p className="text-sm uppercase tracking-wide text-stone-500 mt-1 font-sans-refined">Pilot Trees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

