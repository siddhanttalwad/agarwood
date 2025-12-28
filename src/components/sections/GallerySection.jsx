import React, { useState } from 'react';
import { galleryImages } from '../../data/galleryImages';
import { Lightbox } from '../ui/Lightbox';

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevious = () => {
    setCurrentImage((currentImage - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-32 bg-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 font-sans-refined mb-4">Gallery</p>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4">The K-Life Investments Estate</h2>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">
            Explore our sustainable agarwood plantation in the highlands of Sri Lanka — where tradition meets innovation.
          </p>
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              onClick={() => { setCurrentImage(index); setLightboxOpen(true); }}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 ? 'col-span-2 row-span-2' : 
                index === 3 ? 'col-span-2' : ''
              }`}
            >
              <div className={`${index === 0 ? 'aspect-square' : index === 3 ? 'aspect-video' : 'aspect-square'} bg-stone-800`}>
                <img 
                  src={image.src} 
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-light">{image.caption}</p>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
      
      <Lightbox 
        images={galleryImages}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
  );
}

