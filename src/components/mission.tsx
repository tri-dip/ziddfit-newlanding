// src/components/Mission.tsx
import React from 'react';

export default function Mission() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: The "Zidd" Philosophy */}
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">Our Philosophy</span>
            <h2 className="text-4xl font-black mt-4 mb-6 text-slate-900 leading-tight uppercase">
              Beyond the <span className="italic text-blue-600">Software.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              In Hindi, <span className="font-bold text-slate-900 italic">"Zidd"</span> means a stubborn, unyielding determination. It’s the force that gets you to the gym at 5 AM and the reason you don't drop the bar when it gets heavy.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe gym management software should reflect that same grit. ZiddFit isn't just about spreadsheets; it's about honoring the discipline of the gym owner and the progress of the athlete.
            </p>
          </div>

          {/* Right Side: The Mission Statement */}
          <div className="bg-slate-950 p-10 rounded-3xl text-white relative overflow-hidden shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              To empower fitness entrepreneurs with tools that eliminate administrative friction, 
              allowing them to focus 100% on building stronger communities and healthier lives.
            </p>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p className="text-sm font-semibold uppercase tracking-widest">Discipline first</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <p className="text-sm font-semibold uppercase tracking-widest">Growth focused</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
