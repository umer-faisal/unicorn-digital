
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  // Animated stats
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [experts, setExperts] = useState(0);
  const [success, setSuccess] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!statsRef.current || hasAnimated) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const animate = (setter, end, duration = 1500) => {
            let start = 0;
            const increment = end / (duration / 16);
            function step() {
              start += increment;
              if (start < end) {
                setter(Math.floor(start));
                requestAnimationFrame(step);
              } else {
                setter(end);
              }
            }
            step();
          };
          animate(setProjects, 500);
          animate(setClients, 150);
          animate(setExperts, 50);
          animate(setSuccess, 99);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <>
      <div>
        {/* Shared background wrapper for Header + Hero */}
        <div className="relative bg-gradient-to-br from-brand-dark via-brand-primary to-brand-dark">
          <div className="absolute inset-0 bg-black/25"></div>
          <div className="relative z-10">
            <Header />
            <section className="relative min-h-screen flex items-center justify-center">
              <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Unicorn
                  <span className="text-brand-soft"> Digital </span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-muted mb-8 max-w-2xl mx-auto">
                  Transform your business with cutting-edge digital solutions. We connect you with top-tier professionals for all your digital needs.
                </p>
                <div className="flex flex-col gap-4 justify-center sm:flex-row">
                  <button className="border border-white/50 text-white hover:bg-white/10 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                    <Link href="/services" className="inline-flex items-center justify-center rounded-md font-semibold text-lg no-underline bg-brand-primary text-white px-6 py-3 hover:bg-brand-light transition-colors">
                      Explore Services
                    </Link>
                  </button>
                  <button className="border border-white/50 text-white hover:bg-white/10 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md font-semibold text-lg no-underline text-brand-primary border-2 border-brand-primary px-6 py-3 hover:bg-brand-light hover:border-brand-light hover:text-white transition-colors">
                      Get Started
                    </Link>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <main>
          <section className="py-20 bg-neutral-muted">
            <div className="max-w-[1200px] mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Why Choose Unicorn Digital?</h2>
                <p className="text-xl text-text-muted max-w-3xl mx-auto">
                  We provide comprehensive digital solutions that help your business grow and thrive in the digital age.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="text-center bg-neutral-muted border border-brand-soft rounded-2xl p-8 hover:border-brand-light hover:shadow-[0_15px_30px_-10px_rgba(77,143,61,0.25)] transition">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-brand-soft bg-white group-hover:bg-brand-soft transition">
                    <i className="ri-award-line text-brand-primary text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">Premium Quality</h3>
                  <p className="text-text-muted leading-relaxed m-0">
                    All our services are delivered by vetted professionals with proven track records of excellence and innovation.
                  </p>
                </div>

                <div className="text-center bg-neutral-muted border border-brand-soft rounded-2xl p-8 hover:border-brand-light hover:shadow-[0_15px_30px_-10px_rgba(77,143,61,0.25)] transition">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-brand-soft bg-white">
                    <i className="ri-rocket-line text-brand-primary text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">Fast Delivery</h3>
                  <p className="text-text-muted leading-relaxed m-0">
                    Quick turnaround times without compromising quality. Get your projects completed on schedule, every time.
                  </p>
                </div>

                <div className="text-center bg-neutral-muted border border-brand-soft rounded-2xl p-8 hover:border-brand-light hover:shadow-[0_15px_30px_-10px_rgba(77,143,61,0.25)] transition">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-brand-soft bg-white">
                    <i className="ri-customer-service-line text-brand-primary text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">24/7 Support</h3>
                  <p className="text-text-muted leading-relaxed m-0">
                    Round-the-clock customer support to ensure your success. We're here whenever you need assistance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Popular Services</h2>
                <p className="text-xl text-text-muted max-w-3xl mx-auto">
                  Discover our most requested digital services that help businesses succeed online.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
                <div className="bg-neutral-muted border border-brand-soft rounded-xl p-6 hover:border-brand-light hover:shadow-[0_12px_24px_-10px_rgba(77,143,61,0.25)] transition">
                  <div className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-code-s-slash-line text-brand-primary text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Web Development</h3>
                  <p className="text-text-muted text-sm m-0">Modern responsive websites</p>
                </div>
                <div className="bg-neutral-muted border border-brand-soft rounded-xl p-6 hover:border-brand-light hover:shadow-[0_12px_24px_-10px_rgba(77,143,61,0.25)] transition">
                  <div className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-smartphone-line text-brand-primary text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Mobile Apps</h3>
                  <p className="text-text-muted text-sm m-0">Native & cross-platform apps</p>
                </div>
                <div className="bg-neutral-muted border border-brand-soft rounded-xl p-6 hover:border-brand-light hover:shadow-[0_12px_24px_-10px_rgba(77,143,61,0.25)] transition">
                  <div className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-palette-line text-brand-primary text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">UI/UX Design</h3>
                  <p className="text-text-muted text-sm m-0">Beautiful user experiences</p>
                </div>
                <div className="bg-neutral-muted border border-brand-soft rounded-xl p-6 hover:border-brand-light hover:shadow-[0_12px_24px_-10px_rgba(77,143,61,0.25)] transition">
                  <div className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center mb-4">
                    <i className="ri-megaphone-line text-brand-primary text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">Digital Marketing</h3>
                  <p className="text-text-muted text-sm m-0">Grow your online presence</p>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button className="border border-brand-primary text-brand-primary hover:bg-brand-light hover:border-brand-light hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  <Link href="/services" className="inline-flex items-center justify-center rounded-md font-semibold text-lg no-underline bg-brand-primary text-white px-6 py-3 hover:bg-brand-light transition-colors">
                    View All Services
                  </Link>
                </button>
              </div>
            </div>
          </section>

          <section className="py-20 bg-neutral-muted">
            <div className="max-w-[1200px] mx-auto px-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4" ref={statsRef}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">{projects}+</div>
                  <div className="text-text-muted">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">{clients}+</div>
                  <div className="text-text-muted">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">{experts}+</div>
                  <div className="text-text-muted">Expert Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">{success}%</div>
                  <div className="text-text-muted">Success Rate</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">What Our Clients Say</h2>
                <p className="text-xl text-text-muted max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="bg-neutral-muted border border-brand-soft rounded-xl p-8 hover:border-brand-light hover:shadow-[0_12px_28px_-12px_rgba(77,143,61,0.25)] transition">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=Professional%20woman%20CEO%20with%20short%20brown%20hair%20wearing%20business%20suit%2C%20corporate%20headshot%2C%20clean%20background%2C%20confident%20smile%2C%20modern%20office%20setting&width=80&height=80&seq=testimonial1&orientation=squarish"
                      alt="Sarah Johnson"
                      className="w-12 h-12 rounded-full mr-4 object-cover object-top"
                    />
                    <div>
                      <h4 className="text-brand-dark font-semibold mb-1">Sarah Johnson</h4>
                      <p className="text-text-muted text-sm m-0">CEO, TechStart Inc.</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                  </div>

                  <p className="text-text-muted leading-relaxed">
                    "ServiceHub delivered an exceptional website that exceeded our expectations. The team was professional, responsive, and delivered on time. Our online presence has never looked better!"
                  </p>
                </div>

                <div className="bg-neutral-muted border border-brand-soft rounded-xl p-8 hover:border-brand-light hover:shadow-[0_12px_28px_-12px_rgba(77,143,61,0.25)] transition">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=Professional%20Asian%20man%20founder%20wearing%20glasses%20and%20casual%20business%20attire%2C%20friendly%20smile%2C%20clean%20background%2C%20modern%20workspace%2C%20confident%20pose&width=80&height=80&seq=testimonial2&orientation=squarish"
                      alt="Michael Chen"
                      className="w-12 h-12 rounded-full mr-4 object-cover object-top"
                    />
                    <div>
                      <h4 className="text-brand-dark font-semibold mb-1">Michael Chen</h4>
                      <p className="text-text-muted text-sm m-0">Founder, Digital Solutions</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                  </div>

                  <p className="text-text-muted leading-relaxed">
                    "The mobile app development service was outstanding. They understood our vision perfectly and created an app that our users love. Highly recommend their expertise!"
                  </p>
                </div>

                <div className="bg-neutral-muted border border-brand-soft rounded-xl p-8 hover:border-brand-light hover:shadow-[0_12px_28px_-12px_rgba(77,143,61,0.25)] transition">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=Professional%20Hispanic%20woman%20marketing%20director%20with%20long%20dark%20hair%2C%20professional%20blazer%2C%20warm%20smile%2C%20clean%20background%2C%20corporate%20environment&width=80&height=80&seq=testimonial3&orientation=squarish"
                      alt="Emily Rodriguez"
                      className="w-12 h-12 rounded-full mr-4 object-cover object-top"
                    />
                    <div>
                      <h4 className="text-brand-dark font-semibold mb-1">Emily Rodriguez</h4>
                      <p className="text-text-muted text-sm m-0">Marketing Director, GrowthCo</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                    <i className="ri-star-fill text-brand-primary text-sm"></i>
                  </div>

                  <p className="text-text-muted leading-relaxed">
                    "Their digital marketing strategy transformed our business. We saw a 300% increase in leads within the first month. The ROI has been incredible!"
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button className="border border-brand-primary text-brand-primary hover:bg-brand-light hover:border-brand-light hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-md font-semibold text-lg no-underline bg-brand-primary text-white px-6 py-3 hover:bg-brand-light transition-colors">
                    Share Your Experience
                  </Link>
                </button>
              </div>
            </div>
          </section>

          <section className="bg-brand-dark py-20 text-center">
            <div className="max-w-[1200px] mx-auto px-4">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-brand-soft mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have transformed their businesses with our services.
              </p>
              <div className="flex flex-col gap-4 justify-center sm:flex-row">
                <button className="border border-white/50 text-white hover:bg-white/10 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  <Link href="/services" className="inline-flex items-center justify-center rounded-md font-semibold text-lg no-underline bg-white text-brand-primary px-6 py-3 hover:bg-neutral-muted transition-colors">
                    Browse Services
                  </Link>
                </button>
                <button className="border border-white/50 text-white hover:bg-white/10 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-md font-semibold text-lg no-underline text-white border-2 border-white px-6 py-3 hover:bg-white hover:text-brand-primary transition-colors">
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
