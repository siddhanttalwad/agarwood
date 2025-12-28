import React from 'react';

export function InputControl({ label, value, min, max, onChange, unit = '%', description }) {
  const handleIncrement = () => {
    const newValue = Math.min(max, value + 1);
    onChange({ target: { value: newValue } });
  };
  
  const handleDecrement = () => {
    const newValue = Math.max(min, value - 1);
    onChange({ target: { value: newValue } });
  };
  
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '' || inputValue === '-') {
      onChange({ target: { value: inputValue } });
      return;
    }
    const numValue = parseFloat(inputValue);
    if (!isNaN(numValue)) {
      const clampedValue = Math.min(max, Math.max(min, numValue));
      onChange({ target: { value: clampedValue } });
    }
  };

  return (
    <div className="group">
      <label className="text-xs uppercase tracking-[0.2em] text-stone-500 font-light block mb-4">{label}</label>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={handleDecrement}
          className="w-10 h-10 flex items-center justify-center bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors font-sans-refined text-lg"
        >
          −
        </button>
        
        <div className="flex-1 relative">
          <input 
            type="number"
            min={min}
            max={max}
            value={value}
            onChange={handleInputChange}
            className="w-full h-10 text-center text-xl font-extralight text-stone-800 bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:outline-none tabular-nums font-sans-refined"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm font-sans-refined">{unit}</span>
        </div>
        
        <button 
          onClick={handleIncrement}
          className="w-10 h-10 flex items-center justify-center bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors font-sans-refined text-lg"
        >
          +
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="relative h-1 bg-stone-200 rounded-full overflow-hidden mt-3">
        <div 
          className="absolute h-full bg-gradient-to-r from-emerald-700 to-emerald-500 transition-all duration-300"
          style={{ width: `${Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100))}%` }}
        />
      </div>
      
      {description && <p className="text-xs text-stone-400 mt-2 font-light">{description}</p>}
    </div>
  );
}

