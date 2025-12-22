
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHover, setIsServicesHover] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
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
      {/* Backdrop Overlay - Mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <header
        className={`${
          isHomePage ? 'bg-transparent' : 'bg-brand-dark border-b border-brand-primary'
        } relative z-50 overflow-visible`}
      >
        <div className="max-w-[1200px] mx-auto p-4 relative">
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
                <Link
                  href="/services"
                  className="text-white whitespace-nowrap font-medium hover:text-brand-soft transition-colors flex items-center gap-1"
                >
                  Services
                  <i className="ri-arrow-down-s-line text-sm" />
                </Link>

                {/* Mega Menu Dropdown - Desktop */}
                {isServicesHover && (
                  <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] max-w-[calc(100vw-4rem)] bg-white rounded-lg shadow-2xl border border-neutral-muted z-50">
                    <div className="p-4 md:p-6 grid grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                      {/* Column 1: Web Development */}
                      <div>
                        <Link href="/services/web-development" className="group" onClick={() => setIsServicesHover(false)}>
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                              Web Development
                            </h3>
                            <i className="ri-arrow-right-line text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm" />
                          </div>
                        </Link>
                        <ul className="space-y-1.5">
                          {servicesMenu['Web Development'].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/services/web-development"
                                className="text-text-muted text-xs hover:text-brand-primary transition-colors block py-0.5"
                                onClick={() => setIsServicesHover(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: SEO Services */}
                      <div>
                        <Link href="/services/seo-services" className="group" onClick={() => setIsServicesHover(false)}>
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-base font-bold text-brand-dark group-hover:text-green-primary transition-colors">
                              SEO Services
                            </h3>
                            <i className="ri-arrow-right-line text-green-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm" />
                          </div>
                        </Link>
                        <ul className="space-y-1.5">
                          {servicesMenu['SEO Services'].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/services/seo-services"
                                className="text-text-muted text-xs hover:text-green-primary transition-colors block py-0.5"
                                onClick={() => setIsServicesHover(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: Digital Marketing */}
                      <div>
                        <Link href="/services/digital-marketing" className="group" onClick={() => setIsServicesHover(false)}>
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-base font-bold text-brand-dark group-hover:text-green-primary transition-colors">
                              Digital Marketing
                            </h3>
                            <i className="ri-arrow-right-line text-green-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm" />
                          </div>
                        </Link>
                        <ul className="space-y-1.5">
                          {servicesMenu['Digital Marketing'].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/services/digital-marketing"
                                className="text-text-muted text-xs hover:text-green-primary transition-colors block py-0.5"
                                onClick={() => setIsServicesHover(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 4: Social Media Marketing */}
                      <div>
                        <Link href="/services/social-media-marketing" className="group" onClick={() => setIsServicesHover(false)}>
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-base font-bold text-brand-dark group-hover:text-green-primary transition-colors">
                              Social Media
                            </h3>
                            <i className="ri-arrow-right-line text-green-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm" />
                          </div>
                        </Link>
                        <ul className="space-y-1.5">
                          {servicesMenu['Social Media Marketing'].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/services/social-media-marketing"
                                className="text-text-muted text-xs hover:text-green-primary transition-colors block py-0.5"
                                onClick={() => setIsServicesHover(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 5: AI Services */}
                      <div>
                        <Link href="/services/ai-services" className="group" onClick={() => setIsServicesHover(false)}>
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-base font-bold text-brand-dark group-hover:text-orange-primary transition-colors">
                              AI Services
                            </h3>
                            <i className="ri-arrow-right-line text-orange-primary opacity-0 group-hover:opacity-100 transition-opacity text-sm" />
                          </div>
                        </Link>
                        <ul className="space-y-1.5">
                          {servicesMenu['AI Services'].map((item, index) => (
                            <li key={index}>
                              <Link
                                href="/services/ai-services"
                                className="text-text-muted text-xs hover:text-orange-primary transition-colors block py-0.5"
                                onClick={() => setIsServicesHover(false)}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer with View All */}
                    <div className="border-t border-neutral-muted bg-neutral-muted px-4 md:px-6 py-3 md:py-4">
                      <Link
                        href="/services"
                        className="text-brand-primary font-semibold hover:text-brand-dark transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                        onClick={() => setIsServicesHover(false)}
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

          {/* Mobile Menu Sidebar */}
          <nav
            className={`fixed top-0 left-0 h-full w-[280px] bg-brand-dark shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } flex flex-col`}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-brand-primary">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/Images/logo.png"
                  alt="Tayr Digital Logo"
                  width={40}
                  height={40}
                  className="h-auto w-auto"
                />
                <span className="text-white font-bold text-lg">Tayr Digital</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-brand-soft transition-colors p-2"
              >
                <i className="ri-close-line text-xl" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-medium hover:text-brand-soft transition-colors text-base"
              >
                Home
              </Link>

              {/* Services Dropdown - Mobile */}
              <div>
                <button
                  onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                  className="text-white font-medium hover:text-brand-soft transition-colors flex items-center justify-between w-full text-base"
                >
                  Services
                  <i className={`ri-arrow-right-s-line transition-transform ${isServicesMobileOpen ? 'rotate-90' : ''}`} />
                </button>
                {isServicesMobileOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-brand-primary pl-4">
                    <Link
                      href="/services/web-development"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesMobileOpen(false);
                      }}
                      className="text-white/80 text-sm hover:text-brand-soft transition-colors"
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/seo-services"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesMobileOpen(false);
                      }}
                      className="text-white/80 text-sm hover:text-brand-soft transition-colors"
                    >
                      SEO Services
                    </Link>
                    <Link
                      href="/services/digital-marketing"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesMobileOpen(false);
                      }}
                      className="text-white/80 text-sm hover:text-brand-soft transition-colors"
                    >
                      Digital Marketing
                    </Link>
                    <Link
                      href="/services/social-media-marketing"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesMobileOpen(false);
                      }}
                      className="text-white/80 text-sm hover:text-brand-soft transition-colors"
                    >
                      Social Media
                    </Link>
                    <Link
                      href="/services/ai-services"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesMobileOpen(false);
                      }}
                      className="text-white/80 text-sm hover:text-brand-soft transition-colors"
                    >
                      AI Services
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/industries"
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-medium hover:text-brand-soft transition-colors text-base"
              >
                Industries
              </Link>
              <Link
                href="/case-studies"
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-medium hover:text-brand-soft transition-colors text-base"
              >
                Case Studies
              </Link>
              <Link
                href="/resources"
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-medium hover:text-brand-soft transition-colors text-base"
              >
                Resources
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-medium hover:text-brand-soft transition-colors text-base"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-medium hover:text-brand-soft transition-colors text-base"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
