import React from 'react';

export function Lightbox({ images, currentIndex, isOpen, onClose, onPrevious, onNext }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <button 
        onClick={(e) => { e.stopPropagation(); onPrevious(); }}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].caption}
          className="max-w-full max-h-[75vh] object-contain mx-auto"
        />
        <p className="text-center text-white/70 mt-4 font-light">{images[currentIndex].caption}</p>
        <p className="text-center text-white/40 text-sm mt-2 font-sans-refined">{currentIndex + 1} / {images.length}</p>
      </div>
    </div>
  );
}

