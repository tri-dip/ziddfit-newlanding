// src/components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 tracking-tighter">ZIDDFIT</h3>
          <p className="text-slate-500 text-sm mt-1">Determination in every rep.</p>
        </div>
        
        {/* <div className="flex justify-center gap-8 text-sm font-medium text-slate-400 mb-10">
          <span className="hover:text-blue-600 cursor-default transition">The Mission</span>
          <span className="hover:text-blue-600 cursor-default transition">Coming Soon</span>
          <span className="hover:text-blue-600 cursor-default transition">Contact</span>
        </div> */}

        <p className="text-slate-300 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} ZiddFit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}