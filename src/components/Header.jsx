
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHover, setIsServicesHover] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const servicesMenu = {
    'Web Development': [
      'Custom Website Design',
      'WordPress Development',
      'E-Commerce Development',
      'Website Redesign',
      'Website Maintenance',
      'AI-Powered Websites & Smart Forms',
    ],
    'SEO Services': [
      'Local SEO',
      'National SEO',
      'Technical SEO',
      'On-Page SEO',
      'SEO Audits',
      'Link Building',
      'AI SEO Optimization & Content Automation',
    ],
    'Digital Marketing': [
      'Google Ads (PPC)',
      'Facebook & Instagram Ads',
      'Conversion Optimization (CRO)',
      'Lead Generation',
      'Email Marketing',
      'AI Marketing & Funnel Automation',
    ],
    'Social Media Marketing': [
      'Social Media Management',
      'Content Creation',
      'Paid Social Ads',
      'Brand Growth Strategy',
    ],
    'AI Services': ['AI Automation', 'AI Chatbots', 'Custom AI Solutions'],
  };

  return (
    <>
      <header
        className={`${
          isHomePage ? 'bg-transparent' : 'bg-brand-dark border-b border-brand-primary'
        } relative z-50`}
      >
        <div className="max-w-[1200px] mx-auto p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <div className="flex items-center justify-center">
                <Image
                  src="/Images/logo.png"
                  alt="Tayr Digital Logo"
                  width={100}
                  height={100}
                  className="h-auto w-auto"
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesHover(true)}
                onMouseLeave={() => setIsServicesHover(false)}
              >
                <button
                  type="button"
                  className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors flex items-center gap-1"
                >
                  Services
                  <i className="ri-arrow-down-s-line text-sm" />
                </button>

                {/* Mega Menu Dropdown */}
                {isServicesHover && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-full max-w-5xl bg-white rounded-lg shadow-2xl border border-neutral-muted overflow-hidden">
                    <div className="p-6 grid grid-cols-2 md:grid-cols-5 gap-6">
                      {/* Column 1: Web Development */}
                      <div>
                        <Link href="/services/web-development" className="group">
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                              Web Development
                            </h3>
                            <i className="ri-arrow-right-line text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </Link>
                        <ul className="space-y-2">
                          {servicesMenu['Web Development'].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/services/web-development"
                                className="text-text-muted text-sm hover:text-brand-primary transition-colors block py-1"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: SEO Services */}
                      <div>
                        <Link href="/services/seo-services" className="group">
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-lg font-bold text-brand-dark group-hover:text-green-primary transition-colors">
                              SEO Services
                            </h3>
                            <i className="ri-arrow-right-line text-green-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </Link>
                        <ul className="space-y-2">
                          {servicesMenu['SEO Services'].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/services/seo-services"
                                className="text-text-muted text-sm hover:text-green-primary transition-colors block py-1"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: Digital Marketing */}
                      <div>
                        <Link href="/services/digital-marketing" className="group">
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-lg font-bold text-brand-dark group-hover:text-green-primary transition-colors">
                              Digital Marketing
                            </h3>
                            <i className="ri-arrow-right-line text-green-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </Link>
                        <ul className="space-y-2">
                          {servicesMenu['Digital Marketing'].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/services/digital-marketing"
                                className="text-text-muted text-sm hover:text-green-primary transition-colors block py-1"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 4: Social Media Marketing */}
                      <div>
                        <Link href="/services/social-media-marketing" className="group">
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-lg font-bold text-brand-dark group-hover:text-green-primary transition-colors">
                              Social Media
                            </h3>
                            <i className="ri-arrow-right-line text-green-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </Link>
                        <ul className="space-y-2">
                          {servicesMenu['Social Media Marketing'].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/services/social-media-marketing"
                                className="text-text-muted text-sm hover:text-green-primary transition-colors block py-1"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 5: AI Services */}
                      <div>
                        <Link href="/services/ai-services" className="group">
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-lg font-bold text-brand-dark group-hover:text-orange-primary transition-colors">
                              AI Services
                            </h3>
                            <i className="ri-arrow-right-line text-orange-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </Link>
                        <ul className="space-y-2">
                          {servicesMenu['AI Services'].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/services/ai-services"
                                className="text-text-muted text-sm hover:text-orange-primary transition-colors block py-1"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer with View All */}
                    <div className="border-t border-neutral-muted bg-neutral-muted px-6 py-4">
                      <Link
                        href="/services"
                        className="text-brand-primary font-semibold hover:text-brand-dark transition-colors inline-flex items-center gap-2"
                      >
                        View All Services
                        <i className="ri-arrow-right-line" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/industries"
                className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors"
              >
                Industries
              </Link>
              <Link
                href="/case-studies"
                className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/resources"
                className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/about"
                className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors"
              >
                Contact Us
              </Link>
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
