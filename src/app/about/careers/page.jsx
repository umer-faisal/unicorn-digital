'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior Web Developer',
      department: 'Development',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'We are looking for an experienced web developer to join our team.'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Join our marketing team and help clients achieve their digital goals.'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description: 'Create beautiful and intuitive user experiences for our clients.'
    }
  ];

  const benefits = [
    'Competitive salary and benefits',
    'Flexible work arrangements',
    'Professional development opportunities',
    'Collaborative team environment',
    'Cutting-edge projects and technologies',
    'Work-life balance'
  ];

  return (
    <div className="min-h-screen bg-neutral-muted text-text-base">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <Link href="/about" className="text-brand-soft hover:text-white transition-colors inline-flex items-center gap-2 mb-4">
              ← Back to About Us
            </Link>
            <h1 className="text-5xl font-bold text-white mb-6">Careers at Tayr Digital</h1>
            <p className="text-xl text-brand-soft max-w-3xl mx-auto">
              Join a team of passionate professionals working on cutting-edge digital solutions. We're always looking for talented individuals to help us grow.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="bg-neutral-muted rounded-lg p-8 md:p-12 border border-brand-soft">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <i className="ri-checkbox-circle-line text-brand-primary text-2xl mt-1"></i>
                    <span className="text-lg text-text-muted">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-neutral-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-neutral-base rounded-lg p-8 border border-brand-soft hover:border-brand-light hover:shadow-lg transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-dark mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-text-muted">
                        <span className="flex items-center gap-2">
                          <i className="ri-building-line"></i>
                          {position.department}
                        </span>
                        <span className="flex items-center gap-2">
                          <i className="ri-time-line"></i>
                          {position.type}
                        </span>
                        <span className="flex items-center gap-2">
                          <i className="ri-map-pin-line"></i>
                          {position.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-text-muted mb-4">{position.description}</p>
                  <Link 
                    href="/contact"
                    className="text-brand-primary hover:text-brand-dark font-semibold transition-colors inline-flex items-center gap-2"
                  >
                    Apply Now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Don't See a Position That Fits?</h2>
            <p className="text-xl text-brand-soft mb-8 max-w-2xl mx-auto">
              We're always interested in hearing from talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  Send Your Resume
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
