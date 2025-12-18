'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Industries() {
  const industries = [
    {
      name: 'E-Commerce & Retail',
      description: 'Boost your online sales with tailored digital solutions',
      icon: 'ri-shopping-cart-line',
      color: 'brand-primary'
    },
    {
      name: 'Healthcare & Medical',
      description: 'Digital solutions for healthcare providers and practices',
      icon: 'ri-hospital-line',
      color: 'green-primary'
    },
    {
      name: 'Real Estate',
      description: 'Property listings, virtual tours, and lead generation',
      icon: 'ri-home-line',
      color: 'brand-primary'
    },
    {
      name: 'Finance & Banking',
      description: 'Secure, compliant digital solutions for financial services',
      icon: 'ri-bank-line',
      color: 'green-primary'
    },
    {
      name: 'Education',
      description: 'E-learning platforms and educational technology',
      icon: 'ri-book-line',
      color: 'purple-primary'
    },
    {
      name: 'Technology & SaaS',
      description: 'Scalable solutions for tech companies and startups',
      icon: 'ri-code-box-line',
      color: 'brand-primary'
    },
    {
      name: 'Hospitality & Tourism',
      description: 'Booking systems and digital marketing for travel industry',
      icon: 'ri-hotel-line',
      color: 'green-primary'
    },
    {
      name: 'Manufacturing',
      description: 'Industrial digital transformation and automation',
      icon: 'ri-factory-line',
      color: 'orange-primary'
    },
    {
      name: 'Legal Services',
      description: 'Professional websites and client management systems',
      icon: 'ri-scales-line',
      color: 'grey-primary'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Industries We Serve</h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            We provide specialized digital solutions tailored to the unique needs of different industries. 
            Our expertise spans across various sectors, helping businesses thrive in the digital landscape.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className={`bg-white border-2 border-${industry.color}/20 rounded-xl p-8 hover:border-${industry.color} hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.15)] transition cursor-pointer group`}
            >
              <div className={`w-16 h-16 bg-${industry.color}/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-${industry.color} transition-colors`}>
                <i className={`${industry.icon} text-${industry.color} text-2xl group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{industry.name}</h3>
              <p className="text-text-muted leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-brand-primary to-brand-dark rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can drive your business forward.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-muted transition-colors no-underline"
          >
            Get Started Today
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}


