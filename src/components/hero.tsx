// src/components/Hero.tsx
import React from 'react';

export default function Hero() {
  return (
    <header className="pt-24 pb-0 px-6 text-center max-w-7xl mx-auto">
      {/* Coming Soon Badge */}

      {/* Main Headline */}
      <h1 className="text-7xl md:text-7xl font-bold mb-8 tracking-tight text-slate-900">
        Manage your gym with <span className="mt-4 inline-block text-blue-600">Determination.</span>
      </h1>

      {/* Description Paragraph */}
      <p className="text-2xl text-slate-600 mb-15 leading-relaxed">
        Running a gym is hard work; managing it shouldn't be. ZiddFit is a complete gym management ecosystem built to handle the heavy lifting of your business. From automating your monthly billing to tracking every member's personal bests, we provide the tools you need to build a stronger community.
      </p>

      <div className="inline-block px-6 py-2 mb-4 rounded-full bg-blue-100 border border-blue-200 text-m font-extrabold uppercase tracking-[0.1em] text-blue-800">
        Coming Soon
      </div>
    </header>
  );
}