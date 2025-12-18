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
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/about" className="text-grey-primary hover:text-grey-dark transition-colors inline-flex items-center gap-2 mb-4">
            ← Back to About Us
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Careers at Tayr Digital</h1>
          <p className="text-xl text-text-muted max-w-3xl">
            Join a team of passionate professionals working on cutting-edge digital solutions. We're always looking for talented individuals to help us grow.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <i className="ri-checkbox-circle-line text-grey-primary text-2xl mt-1"></i>
                <span className="text-lg text-text-muted">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white border-2 border-grey-primary/20 rounded-xl p-8 hover:border-grey-primary hover:shadow-lg transition">
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
                  className="inline-flex items-center gap-2 text-grey-primary hover:text-grey-dark font-semibold transition-colors"
                >
                  Apply Now →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-grey-dark to-grey-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't See a Position That Fits?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always interested in hearing from talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-grey-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-muted transition-colors no-underline"
          >
            Send Your Resume
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

