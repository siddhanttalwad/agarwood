import React from 'react';

export function Navigation({ scrolled }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <div className={`transition-colors duration-300 ${scrolled ? 'text-stone-800' : 'text-white'}`}>
          <span className="text-xl tracking-[0.15em] font-light">K-LIFE</span>
        </div>
        <div className={`flex gap-8 text-sm font-sans-refined tracking-wide ${scrolled ? 'text-stone-600' : 'text-white/80'}`}>
          <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="hover:opacity-60 transition-opacity">About</button>
          <button onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth' })} className="hover:opacity-60 transition-opacity">Project</button>
          <button onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })} className="hover:opacity-60 transition-opacity">Model</button>
          <button onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })} className="hover:opacity-60 transition-opacity">Images</button>
        </div>
      </div>
    </nav>
  );
}

