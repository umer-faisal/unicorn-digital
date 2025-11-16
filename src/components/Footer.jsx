
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="bg-brand-dark border-t border-brand-primary mt-16">
        <div className="max-w-[1200px] mx-auto py-12 px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex flex-col items-start gap-2 mb-4">
                <div className="flex items-start justify-start">
                  <Image src="/Images/logo.png" alt="Unicorn Digital Logo" width={75} height={75} className="h-auto w-auto" />
                </div>
                {/* <h3 className="text-white font-bold text-xl">Unicorn Digital</h3> */}
              </Link>
              <p className="text-neutral-muted text-sm m-0">Your trusted partner for comprehensive digital services and solutions.</p>
            </div>

            <div>
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="list-none p-0">
                <li className="mb-2"><Link href="/" className="text-neutral-muted hover:text-brand-soft transition-colors">Home</Link></li>
                <li className="mb-2"><Link href="/services" className="text-neutral-muted hover:text-brand-soft transition-colors">Services</Link></li>
                <li className="mb-2"><Link href="/about" className="text-neutral-muted hover:text-brand-soft transition-colors">About</Link></li>
                <li className="mb-2"><Link href="/contact" className="text-neutral-muted hover:text-brand-soft transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-lg font-bold mb-4">Services</h4>
              <ul className="list-none p-0">
                <li className="mb-2"><a className="text-neutral-muted hover:text-brand-soft transition-colors" href="/service/1">Web Development</a></li>
                <li className="mb-2"><a className="text-neutral-muted hover:text-brand-soft transition-colors" href="/service/2">Mobile App</a></li>
                <li className="mb-2"><a className="text-neutral-muted hover:text-brand-soft transition-colors" href="/service/3">UI/UX Design</a></li>
                <li className="mb-2"><a className="text-neutral-muted hover:text-brand-soft transition-colors" href="/service/4">Digital Marketing</a></li>
                <li className="mb-2"><a className="text-neutral-muted hover:text-brand-soft transition-colors" href="/service/5">SEO Optimization</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-lg font-bold mb-4">Connect</h4>
              <div className="flex items-center gap-2 mb-2">
                <i className="ri-mail-line text-brand-primary bg-white w-8 h-8 rounded-full flex items-center justify-center"></i>
                <span className="text-neutral-muted text-sm"><a className="hover:text-brand-soft" href="mailto:info@unicorndigital.pk">info@unicorndigital.pk</a></span>
              </div>
              <div className="flex items-center gap-2 mb-2">  
                <i className="ri-phone-line text-brand-primary bg-white w-8 h-8 rounded-full flex items-center justify-center"></i>
                <span className="text-neutral-muted text-sm"><a className="hover:text-brand-soft" href="tel:+92 3008268275">+92 300 8268275</a></span>
              </div>
              <div className="flex gap-4 mt-4">
                <i className="ri-facebook-fill w-10 h-10 rounded-full bg-white text-brand-primary text-xl flex items-center justify-center cursor-pointer hover:bg-brand-soft hover:text-brand-dark transition-colors"></i>
                <i className="ri-twitter-fill w-10 h-10 rounded-full bg-white text-brand-primary text-xl flex items-center justify-center cursor-pointer hover:bg-brand-soft hover:text-brand-dark transition-colors"></i>
                <i className="ri-linkedin-fill w-10 h-10 rounded-full bg-white text-brand-primary text-xl flex items-center justify-center cursor-pointer hover:bg-brand-soft hover:text-brand-dark transition-colors"></i>
                <i className="ri-instagram-fill w-10 h-10 rounded-full bg-white text-brand-primary text-xl flex items-center justify-center cursor-pointer hover:bg-brand-soft hover:text-brand-dark transition-colors"></i>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-primary mt-8 pt-8 text-center">
            <p className="text-neutral-muted text-sm m-0">© 2025 Unicorn Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
