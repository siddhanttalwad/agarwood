import React from 'react';

export function ProjectSection() {
  const problems = [
    { title: 'Inoculant Failure', desc: 'Most locally available inoculants have not performed reliably, leaving trees biologically idle.' },
    { title: 'Zero Commercial Value', desc: 'Mature trees remain without resin formation, generating no commercial return on significant sunk investment.' },
    { title: 'Untapped Potential', desc: 'Kilo for kilo, agarwood is the most valuable non-timber agroforestry product in the world.' }
  ];

  const solutions = [
    'Demonstrate reliable resin formation',
    'Validate commercially viable yields',
    'Establish repeatable unit economics',
    'Create a scalable reference model'
  ];

  return (
    <section id="project" className="py-32 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-[0.02]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-950/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 font-sans-refined mb-4">The Opportunity</p>
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Why Agarwood in Sri Lanka<br /><em className="italic text-stone-400">Is Stuck</em>
          </h2>
          <p className="text-xl text-stone-300 leading-relaxed">
            Sri Lanka has over one million planted Aquilaria trees, yet the sector remains largely dormant. The core issue: systemic inoculation failure preventing resin formation—the source of agarwood's extraordinary value.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-20">
          {problems.map((item, i) => (
            <div key={i} className="p-6 md:p-8 border border-stone-600/50 hover:border-emerald-600/50 transition-colors group bg-stone-800/30">
              <div className="w-8 h-px bg-emerald-500 mb-4 md:mb-6 group-hover:w-12 transition-all" />
              <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3 text-white">{item.title}</h3>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-700/50 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 font-sans-refined mb-4">The Solution</p>
              <h3 className="text-4xl font-light mb-6 text-white">What This Investment Solves</h3>
              <p className="text-lg text-stone-300 leading-relaxed mb-8">
                This pilot deploys a field-tested, biomimetic inoculation protocol on K-Life-owned trees to demonstrate reliable resin formation, validate commercially viable yields, and establish repeatable unit economics.
              </p>
              <ul className="space-y-4">
                {solutions.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-stone-200 text-lg">
                    <span className="w-6 h-px bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-stone-800/50 p-6">
                <p className="text-sm uppercase tracking-wide text-stone-400 font-sans-refined mb-2">Risk Profile</p>
                <p className="text-3xl font-light text-emerald-400">Low</p>
                <p className="text-base text-stone-400 mt-2">Trees already owned, costs fixed upfront</p>
              </div>
              <div className="bg-stone-800/50 p-6">
                <p className="text-sm uppercase tracking-wide text-stone-400 font-sans-refined mb-2">Timeline</p>
                <p className="text-3xl font-light text-emerald-400">3 Years</p>
                <p className="text-base text-stone-400 mt-2">To harvest and export sale</p>
              </div>
              <div className="bg-stone-800/50 p-6">
                <p className="text-sm uppercase tracking-wide text-stone-400 font-sans-refined mb-2">Market</p>
                <p className="text-3xl font-light text-emerald-400">Established</p>
                <p className="text-base text-stone-400 mt-2">ME & East Asia demand</p>
              </div>
              <div className="bg-stone-800/50 p-6">
                <p className="text-sm uppercase tracking-wide text-stone-400 font-sans-refined mb-2">Model</p>
                <p className="text-3xl font-light text-emerald-400">Replicable</p>
                <p className="text-base text-stone-400 mt-2">National reference case</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

