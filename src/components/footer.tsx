
import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-0 pb-10 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-s font-bold text-slate-900 tracking-tighter">ZIDDFIT</h3>
          <p className="text-slate-500 text-sm mt-1">Determination in every rep.</p>
        </div>
        

        <p className="text-slate-300 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} ZiddFit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}