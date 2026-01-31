// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      {/* Reduced mobile padding to px-4 to allow negative margin trickery.
        Keeping md:px-12 for desktop spread.
      */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-24 flex justify-between items-center">

        {/* Logo - Increased negative margin to -ml-4 to pull it further left */}
        <Link href="/" className="flex items-center -ml-1 md:ml-0">
          <Image
            src="/Gemini_Generated_Image_sil1dksil1dksil1-removebg-preview (1).png"
            alt="ZiddFit Logo"
            width={60}
            height={60}
            className="cursor-pointer object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-widest text-slate-500">
          <Link href="/mission" className="hover:text-blue-600 transition-colors duration-200">The Mission</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact</Link>
        </div>

        {/* Mobile Menu Button - Added -mr-1 to tighten the gap to the right edge */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 -mr-1"
          aria-label="Toggle Menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 stroke-slate-900"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path
              d="M4 6h16"
              className={`transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
            />
            <path
              d="M4 12h16"
              className={`transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <path
              d="M4 18h16"
              className={`transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Match the padding-left of the logo container (px-4) */}
        <div className="bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-2 text-sm font-bold uppercase tracking-[0.2em]">
          <Link
            href="/mission"
            className="py-4 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            The Mission
          </Link>
          <Link
            href="/contact"
            className="py-4 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}