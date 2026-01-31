// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-25 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/Gemini_Generated_Image_sil1dksil1dksil1-removebg-preview.png" 
            alt="ZiddFit Logo" 
            width={200} 
            height={70} 
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-m font-semibold uppercase tracking-widest text-slate-500">
          <Link href="/mission" className="hover:text-blue-600 transition-colors duration-200">The Mission</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact</Link>
        </div>

        {/* Mobile Menu Button - 3 Horizontal Slashes */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 group"
          aria-label="Toggle Menu"
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 h-6 stroke-slate-900" 
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
        <div className="bg-white border-t border-slate-100 p-4 flex flex-col gap-2 text-sm font-bold uppercase tracking-[0.2em]">
          
          <Link 
            href="/mission" 
            className="px-4 py-4 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            The Mission
          </Link>

          <Link 
            href="/contact" 
            className="px-4 py-4 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            Contact
          </Link>
          
        </div>
      </div>
    </nav>
  );
}