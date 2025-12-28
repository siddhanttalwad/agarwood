import React, { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useFinancialCalculations } from '../hooks/useFinancialCalculations';
import { Navigation } from './layout/Navigation';
import { Footer } from './layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectSection } from './sections/ProjectSection';
import { ValueChainSection } from './sections/ValueChainSection';
import { ModelCasesSection } from './sections/ModelCasesSection';
import { CalculatorSection } from './sections/CalculatorSection';
import { SensitivitySection } from './sections/SensitivitySection';
import { HeatmapSection } from './sections/HeatmapSection';
import { GallerySection } from './sections/GallerySection';
import { CTASection } from './sections/CTASection';

export default function AgarwoodSite() {
  const [yield_, setYield] = useState(100);
  const [priceChange, setPriceChange] = useState(0);
  const [taxRate, setTaxRate] = useState(30);
  const [discountRate, setDiscountRate] = useState(10);
  
  const scrolled = useScrollPosition(50);
  const calculations = useFinancialCalculations(yield_, priceChange, taxRate, discountRate);

  return (
    <div className="bg-stone-50 text-stone-900 antialiased" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <Navigation scrolled={scrolled} />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ValueChainSection />
      <ModelCasesSection />
      <CalculatorSection 
        yield_={yield_}
        setYield={setYield}
        priceChange={priceChange}
        setPriceChange={setPriceChange}
        taxRate={taxRate}
        setTaxRate={setTaxRate}
        discountRate={discountRate}
        setDiscountRate={setDiscountRate}
        calculations={calculations}
      />
      <SensitivitySection 
        yield_={yield_}
        priceChange={priceChange}
        taxRate={taxRate}
        discountRate={discountRate}
        ifcY3={calculations.ifcY3}
      />
      <HeatmapSection taxRate={taxRate} />
      <GallerySection />
      <CTASection />
      <Footer />
    </div>
  );
}
