// src/components/Hero.tsx
import React from 'react';

export default function Hero() {
  return (
    <header className="py-24 px-6 text-center max-w-4xl mx-auto">
      {/* Coming Soon Badge */}
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest">
        Coming Soon
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
        Manage your gym with <span className="text-blue-600">Determination.</span>
      </h1>

      {/* Description Paragraph */}
      <p className="text-xl text-slate-600 mb-10 leading-relaxed">
        The all-in-one SaaS platform designed to streamline gym operations, 
        track member progress, and fuel growth. We are currently building 
        the future of fitness management.
      </p>
    </header>
  );
}