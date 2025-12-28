import React from 'react';

export function MetricCard({ label, value, prefix = '$', suffix = '', positive = true, large = false }) {
  return (
    <div className={`relative overflow-hidden ${large ? 'p-8' : 'p-6'}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-white" />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-stone-300 to-transparent" />
      <div className="relative">
        <p className="text-sm uppercase tracking-[0.2em] text-stone-500 mb-2">{label}</p>
        <p className={`font-light tabular-nums ${large ? 'text-4xl' : 'text-3xl'} ${positive ? 'text-stone-800' : 'text-rose-700'}`}>
          {prefix}{value}{suffix}
        </p>
      </div>
    </div>
  );
}

