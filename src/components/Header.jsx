
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-transparent">
        <div className="max-w-[1200px] mx-auto p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <Image src="/Images/logo.png" alt="Tayr Digital Logo" width={100} height={100} className="h-auto w-auto" />
              </div>
              {/* <h1 className="text-white font-bold text-xl">Unicorn Digital</h1> */}
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors">Home</Link>
              <Link href="/services" className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors">Services</Link>
              <Link href="/industries" className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors">Industries</Link>
              <Link href="/case-studies" className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors">Case Studies</Link>
              <Link href="/resources" className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors">Resources</Link>
              <Link href="/about" className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors">About Us</Link>
              <Link href="/contact" className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors">Contact Us</Link>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 text-white hover:text-brand-soft"
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`} />
            </button>
          </div>

          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col gap-3 mt-4 pt-2 md:hidden`}>
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white font-medium hover:text-brand-soft transition-colors">Home</Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-white font-medium hover:text-brand-soft transition-colors">Services</Link>
            <Link href="/industries" onClick={() => setIsMenuOpen(false)} className="text-white font-medium hover:text-brand-soft transition-colors">Industries</Link>
            <Link href="/case-studies" onClick={() => setIsMenuOpen(false)} className="text-white font-medium hover:text-brand-soft transition-colors">Case Studies</Link>
            <Link href="/resources" onClick={() => setIsMenuOpen(false)} className="text-white font-medium hover:text-brand-soft transition-colors">Resources</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-white font-medium hover:text-brand-soft transition-colors">About Us</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-white font-medium hover:text-brand-soft transition-colors">Contact Us</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
