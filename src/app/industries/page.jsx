'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Industries() {
  const industries = [
    {
      name: 'E-Commerce & Retail',
      description: 'Boost your online sales with tailored digital solutions',
      icon: 'ri-shopping-cart-line'
    },
    {
      name: 'Healthcare & Medical',
      description: 'Digital solutions for healthcare providers and practices',
      icon: 'ri-hospital-line'
    },
    {
      name: 'Real Estate',
      description: 'Property listings, virtual tours, and lead generation',
      icon: 'ri-home-line'
    },
    {
      name: 'Finance & Banking',
      description: 'Secure, compliant digital solutions for financial services',
      icon: 'ri-bank-line'
    },
    {
      name: 'Education',
      description: 'E-learning platforms and educational technology',
      icon: 'ri-book-line'
    },
    {
      name: 'Technology & SaaS',
      description: 'Scalable solutions for tech companies and startups',
      icon: 'ri-code-box-line'
    },
    {
      name: 'Hospitality & Tourism',
      description: 'Booking systems and digital marketing for travel industry',
      icon: 'ri-hotel-line'
    },
    {
      name: 'Manufacturing',
      description: 'Industrial digital transformation and automation',
      icon: 'ri-factory-line'
    },
    {
      name: 'Legal Services',
      description: 'Professional websites and client management systems',
      icon: 'ri-scales-line'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-muted text-text-base">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-brand-soft max-w-3xl mx-auto">
              We provide specialized digital solutions tailored to the unique needs of different industries. 
              Our expertise spans across various sectors, helping businesses thrive in the digital landscape.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-neutral-muted rounded-lg p-8 border border-brand-soft hover:border-brand-light hover:shadow-lg transition"
                >
                  <div className="w-16 h-16 bg-brand-soft rounded-lg flex items-center justify-center mb-6">
                    <i className={`${industry.icon} text-brand-primary text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{industry.name}</h3>
                  <p className="text-text-muted leading-relaxed">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
            <p className="text-xl text-brand-soft mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  Get Started Today
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
