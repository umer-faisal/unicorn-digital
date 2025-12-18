'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function WebDesignCaseStudies() {
  const caseStudies = [
    {
      client: 'Healthcare Practice',
      industry: 'Healthcare',
      challenge: 'Outdated website with poor user experience',
      solution: 'Complete website redesign with modern UI/UX',
      results: [
        '200% increase in appointment bookings',
        '150% improvement in user engagement',
        '60% faster page load times',
        'Mobile-responsive design implementation'
      ]
    },
    {
      client: 'E-Commerce Fashion Brand',
      industry: 'Retail',
      challenge: 'Low conversion rates and cart abandonment',
      solution: 'Redesigned checkout process and improved UX',
      results: [
        '85% reduction in cart abandonment',
        '120% increase in conversion rate',
        'Improved product discovery',
        'Enhanced mobile shopping experience'
      ]
    },
    {
      client: 'SaaS Technology Company',
      industry: 'Technology',
      challenge: 'Complex product needed clear presentation',
      solution: 'User-centric design with clear information architecture',
      results: [
        '300% increase in demo requests',
        'Improved product understanding',
        'Better lead quality',
        'Enhanced brand perception'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/case-studies" className="text-brand-primary hover:text-brand-dark transition-colors inline-flex items-center gap-2 mb-4">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Web Design Case Studies</h1>
          <p className="text-xl text-text-muted max-w-3xl">
            Discover how our website redesigns have transformed businesses and improved user experiences.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                    {study.industry}
                  </span>
                  <h2 className="text-2xl font-bold text-brand-dark">{study.client}</h2>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Challenge</h3>
                  <p className="text-text-muted">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Solution</h3>
                  <p className="text-text-muted">{study.solution}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-dark mb-4">Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-brand-primary/5 rounded-lg p-4">
                      <i className="ri-checkbox-circle-line text-brand-primary text-xl mt-1"></i>
                      <span className="text-text-base">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-brand-primary to-brand-dark rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for a Website Redesign?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create a website that drives results for your business.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-muted transition-colors no-underline"
          >
            Get Started
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

