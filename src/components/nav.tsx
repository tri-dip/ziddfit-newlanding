// src/components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link'; 

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Wrap Logo in Link to go home */}
        <Link href="/">
          <Image 
            src="/Gemini_Generated_Image_a9vtra9vtra9vtra-removebg-preview.png" 
            alt="ZiddFit Logo" 
            width={140} 
            height={35} 
            className="cursor-pointer"
          />
        </Link>

        <div className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-widest text-slate-500">
          {/* Update this to a Link */}
          <Link href="/mission" className="hover:text-blue-600 transition">
            The Mission
          </Link>
          <Link href="/contact" className="cursor-default hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}