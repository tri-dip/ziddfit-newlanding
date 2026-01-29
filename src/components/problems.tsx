// src/components/ProblemSection.tsx
import React from 'react';

const problems = [
  {
    title: "Manual Billing Fatigue",
    description: "Stop chasing payments. ZiddFit automates your invoicing so you never miss a subscription renewal again.",
    // Red warning icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Scattered Member Data",
    description: "Ditch the spreadsheets. Keep workout logs, health metrics, and contact info in one secure dashboard.",
    // Document icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Lost Community",
    description: "Members leave when they don't see progress. Use our 'Determination Tracker' to keep them motivated.",
    // Users icon
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  }
];

export default function ProblemSection() {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Running a gym shouldn't feel like a heavy lift.
          </h3>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto">
            ZiddFit is being built to solve the daily friction points that slow down your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {problems.map((item, index) => (
            <div key={index} className="flex flex-col items-start space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="bg-red-50 p-3 rounded-lg text-red-600">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}