
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
      <style jsx>{`
        .page-container {
        }
        
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #111827 0%, #1e3a8a 50%, #111827 100%);
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.2);
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 56rem;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }
        
        .hero-title .highlight {
          color: #60a5fa;
        }
        
        .hero-description {
          font-size: 1.25rem;
          color: #d1d5db;
          margin-bottom: 2rem;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
        }
        
        .section {
          padding: 5rem 0;
        }
        
        .section-gray {
          background-color: #1f2937;
          
        }
        
        .section-dark {
          background-color: #111827;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }
        
        .section-description {
          font-size: 1.25rem;
          color: #9ca3af;
          max-width: 48rem;
          margin: 0 auto;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .feature-card {
          text-align: center;
        }
        
        .feature-icon {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          transition: transform 0.2s;
        }
        
        .feature-card:hover .feature-icon {
          transform: scale(1.1);
        }
        
        .feature-icon.blue {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        }
        
        .feature-icon.green {
          background: linear-gradient(135deg, #10b981, #047857);
        }
        
        .feature-icon.purple {
          background: linear-gradient(135deg, #8b5cf6, #6d28d9);
        }
        
        .feature-icon i {
          color: #ffffff;
          font-size: 1.875rem;
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .feature-description {
          color: #9ca3af;
          line-height: 1.625;
          margin: 0;
        }
        
        .services-preview-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .service-preview-card {
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          padding: 1.5rem;
          transition: all 0.2s;
        }
        
        .service-preview-card:hover {
          border-color: #2563eb;
        }
        
        .service-preview-icon {
          width: 3rem;
          height: 3rem;
          background-color: #2563eb;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: transform 0.2s;
        }
        
        .service-preview-card:hover .service-preview-icon {
          transform: scale(1.1);
        }
        
        .service-preview-icon i {
          color: #ffffff;
          font-size: 1.25rem;
        }
        
        .service-preview-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        
        .service-preview-description {
          color: #9ca3af;
          font-size: 0.875rem;
          margin: 0;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.25rem;
          font-weight: 700;
          color: #60a5fa;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          color: #9ca3af;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .testimonial-card {
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          padding: 2rem;
          transition: border-color 0.2s;
        }
        
        .testimonial-card:hover {
          border-color: #2563eb;
        }
        
        .testimonial-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .testimonial-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          margin-right: 1rem;
          object-fit: cover;
          object-position: top;
        }
        
        .testimonial-info h4 {
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .testimonial-info p {
          color: #9ca3af;
          font-size: 0.875rem;
          margin: 0;
        }
        
        .testimonial-rating {
          display: flex;
          margin-bottom: 1rem;
        }
        
        .testimonial-rating .star {
          color: #facc15;
          font-size: 0.875rem;
        }
        
        .testimonial-content {
          color: #d1d5db;
          line-height: 1.625;
        }
        
        .cta-section {
 background-color: #1f2937;          
 padding: 5rem 0;
          text-align: center;
        }
        
        .cta-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }
        
        .cta-description {
          font-size: 1.25rem;
          color: #dbeafe;
          margin-bottom: 2rem;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 1rem 2rem;
          font-size: 1.125rem;
        }
        
        .btn-primary {
          background-color: #2563eb;
          color: #ffffff;
        }
        
        .btn-primary:hover {
          background-color: #1d4ed8;
        }
        
        .btn-secondary {
          background-color: transparent;
          color: #2563eb;
          border: 2px solid #2563eb;
        }
        
        .btn-secondary:hover {
          background-color: #2563eb;
          color: #ffffff;
        }
        
        .btn-white {
          background-color: #ffffff;
          color: #2563eb;
        }
        
        .btn-white:hover {
          background-color: #f3f4f6;
        }
        
        .btn-outline-white {
          background-color: transparent;
          color: #ffffff;
          border: 2px solid #ffffff;
        }
        
        .btn-outline-white:hover {
          background-color: #ffffff;
          color: #2563eb;
        }
        
        @media (min-width: 640px) {
          .hero-buttons {
            flex-direction: row;
          }
          
          .cta-buttons {
            flex-direction: row;
          }
        }
        
        @media (min-width: 768px) {
          .hero-title {
            font-size: 4.5rem;
          }
          
          .hero-description {
            font-size: 1.5rem;
          }
          
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .services-preview-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .services-preview-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <div className="page-container">
        <Header />
        <main>
          <section className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">
                Unicorn
                <span className="highlight"> Digital </span>
              </h1>
              <p className="hero-description">
                Transform your business with cutting-edge digital solutions. We connect you with top-tier professionals for all your digital needs.
              </p>
              <div className="hero-buttons">
              <button className="border-white text-white hover:bg-gray-100 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                <Link href="/services" className="btn btn-primary">
                  Explore Services
                </Link>
                </button>
                <button className="border-white text-white hover:bg-gray-100 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                <Link href="/contact" className="btn btn-secondary">
                  Get Started
                </Link>
                </button>
              </div>
            </div>
          </section>

          <section className="section section-gray">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Why Choose Unicorn Digital?</h2>
                <p className="section-description">
                  We provide comprehensive digital solutions that help your business grow and thrive in the digital age.
                </p>
              </div>

              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon blue">
                    <i className="ri-award-line"></i>
                  </div>
                  <h3 className="feature-title">Premium Quality</h3>
                  <p className="feature-description">
                    All our services are delivered by vetted professionals with proven track records of excellence and innovation.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon green">
                    <i className="ri-rocket-line"></i>
                  </div>
                  <h3 className="feature-title">Fast Delivery</h3>
                  <p className="feature-description">
                    Quick turnaround times without compromising quality. Get your projects completed on schedule, every time.
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon purple">
                    <i className="ri-customer-service-line"></i>
                  </div>
                  <h3 className="feature-title">24/7 Support</h3>
                  <p className="feature-description">
                    Round-the-clock customer support to ensure your success. We're here whenever you need assistance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-dark">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Popular Services</h2>
                <p className="section-description">
                  Discover our most requested digital services that help businesses succeed online.
                </p>
              </div>

              <div className="services-preview-grid">
                <div className="service-preview-card">
                  <div className="service-preview-icon">
                    <i className="ri-code-s-slash-line"></i>
                  </div>
                  <h3 className="service-preview-title">Web Development</h3>
                  <p className="service-preview-description">Modern responsive websites</p>
                </div>
                <div className="service-preview-card">
                  <div className="service-preview-icon">
                    <i className="ri-smartphone-line"></i>
                  </div>
                  <h3 className="service-preview-title">Mobile Apps</h3>
                  <p className="service-preview-description">Native & cross-platform apps</p>
                </div>
                <div className="service-preview-card">
                  <div className="service-preview-icon">
                    <i className="ri-palette-line"></i>
                  </div>
                  <h3 className="service-preview-title">UI/UX Design</h3>
                  <p className="service-preview-description">Beautiful user experiences</p>
                </div>
                <div className="service-preview-card">
                  <div className="service-preview-icon">
                    <i className="ri-megaphone-line"></i>
                  </div>
                  <h3 className="service-preview-title">Digital Marketing</h3>
                  <p className="service-preview-description">Grow your online presence</p>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button className="border-white text-white hover:bg-gray-100 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                <Link href="/services" className="btn btn-primary">
                  View All Services
                </Link>
                </button>
              </div>
            </div>
          </section>

          <section className="section section-gray">
            <div className="container">
              <div className="stats-grid" ref={statsRef}>
                <div className="stat-item">
                  <div className="stat-number">{projects}+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{clients}+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{experts}+</div>
                  <div className="stat-label">Expert Professionals</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{success}%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-dark">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-description">
                  Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                </p>
              </div>

              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img
                      src="https://readdy.ai/api/search-image?query=Professional%20woman%20CEO%20with%20short%20brown%20hair%20wearing%20business%20suit%2C%20corporate%20headshot%2C%20clean%20background%2C%20confident%20smile%2C%20modern%20office%20setting&width=80&height=80&seq=testimonial1&orientation=squarish"
                      alt="Sarah Johnson"
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <h4>Sarah Johnson</h4>
                      <p>CEO, TechStart Inc.</p>
                    </div>
                  </div>

                  <div className="testimonial-rating">
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                  </div>

                  <p className="testimonial-content">
                    "ServiceHub delivered an exceptional website that exceeded our expectations. The team was professional, responsive, and delivered on time. Our online presence has never looked better!"
                  </p>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img
                      src="https://readdy.ai/api/search-image?query=Professional%20Asian%20man%20founder%20wearing%20glasses%20and%20casual%20business%20attire%2C%20friendly%20smile%2C%20clean%20background%2C%20modern%20workspace%2C%20confident%20pose&width=80&height=80&seq=testimonial2&orientation=squarish"
                      alt="Michael Chen"
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <h4>Michael Chen</h4>
                      <p>Founder, Digital Solutions</p>
                    </div>
                  </div>

                  <div className="testimonial-rating">
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                  </div>

                  <p className="testimonial-content">
                    "The mobile app development service was outstanding. They understood our vision perfectly and created an app that our users love. Highly recommend their expertise!"
                  </p>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img
                      src="https://readdy.ai/api/search-image?query=Professional%20Hispanic%20woman%20marketing%20director%20with%20long%20dark%20hair%2C%20professional%20blazer%2C%20warm%20smile%2C%20clean%20background%2C%20corporate%20environment&width=80&height=80&seq=testimonial3&orientation=squarish"
                      alt="Emily Rodriguez"
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <h4>Emily Rodriguez</h4>
                      <p>Marketing Director, GrowthCo</p>
                    </div>
                  </div>

                  <div className="testimonial-rating">
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                    <i className="ri-star-fill star"></i>
                  </div>

                  <p className="testimonial-content">
                    "Their digital marketing strategy transformed our business. We saw a 300% increase in leads within the first month. The ROI has been incredible!"
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button className="border-white text-white hover:bg-gray-100 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                <Link href="/contact" className="btn btn-primary">
                  Share Your Experience
                </Link>
                </button>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="container">
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-description">
                Join thousands of satisfied customers who have transformed their businesses with our services.
              </p>
              <div className="cta-buttons">
              <button className="border-white text-gray-500 hover:bg-gray-100 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                <Link href="/services" className="btn btn-white">
                  Browse Services
                </Link>
                </button>
                <button className="border-white text-gray-500 hover:bg-gray-100 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                <Link href="/contact" className="btn btn-outline-white">
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
