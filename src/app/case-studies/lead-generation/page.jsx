'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function LeadGenerationCaseStudies() {
  const caseStudies = [
    {
      client: 'Real Estate Agency',
      industry: 'Real Estate',
      challenge: 'Need for consistent qualified leads',
      solution: 'Multi-channel lead generation strategy',
      results: [
        '500+ qualified leads per month',
        '40% lead-to-client conversion rate',
        '150% increase in property inquiries',
        'ROI of 350% on ad spend'
      ]
    },
    {
      client: 'Home Services Company',
      industry: 'Home Services',
      challenge: 'Seasonal fluctuations in leads',
      solution: 'Year-round marketing campaigns',
      results: [
        '300% increase in lead volume',
        '60% reduction in cost per lead',
        'Improved lead quality',
        'Steady monthly lead flow'
      ]
    },
    {
      client: 'B2B Software Company',
      industry: 'Technology',
      challenge: 'Need for high-quality B2B leads',
      solution: 'Targeted content marketing and PPC',
      results: [
        '250% increase in qualified leads',
        '50% improvement in lead quality',
        '200% increase in demo bookings',
        'Better sales pipeline'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/case-studies" className="text-green-primary hover:text-green-dark transition-colors inline-flex items-center gap-2 mb-4">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Lead Generation Results</h1>
          <p className="text-xl text-text-muted max-w-3xl">
            See how we've helped businesses generate consistent, high-quality leads that convert into customers.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="bg-green-primary/10 text-green-primary px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
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
                    <div key={idx} className="flex items-start gap-3 bg-green-primary/5 rounded-lg p-4">
                      <i className="ri-checkbox-circle-line text-green-primary text-xl mt-1"></i>
                      <span className="text-text-base">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-primary to-green-dark rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Generate More Leads?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create a lead generation strategy that works for your business.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-green-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-muted transition-colors no-underline"
          >
            Get Started
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

