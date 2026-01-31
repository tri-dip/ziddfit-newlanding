// src/components/Hero.tsx
import React from 'react';

export default function Hero() {
  return (
    <header className="pt-16 md:pt-32 pb-0 px-4 md:px-6 text-center max-w-7xl mx-auto">
      {/* Main Headline - Added tracking-tighter for a modern look and adjusted widths */}
      <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-8 md:mb-12 tracking-tighter text-slate-900">
        Manage your gym with <span className="mt-2 md:mt-4 inline-block text-blue-600">Determination.</span>
      </h1>

      {/* Description Paragraph - Increased max-width and leading for desktop spread */}
      <p className="text-lg md:text-2xl text-slate-600 mb-12 md:mb-20 leading-relaxed md:leading-[1.6] max-w-5xl mx-auto tracking-wide">
        Running a gym is hard work; managing it shouldn't be. ZiddFit is a complete gym management ecosystem built to handle the heavy lifting of your business. From automating your monthly billing to tracking every member's personal bests, we provide the tools you need to build a stronger community.
      </p>

      {/* Coming Soon Badge */}
      <div className="inline-block px-6 py-2.5 mb-12 rounded-full bg-blue-100 border border-blue-200 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-blue-800">
        Coming Soon
      </div>
    </header>
  );
}