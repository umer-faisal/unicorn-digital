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
    <div className="min-h-screen bg-neutral-muted text-text-base">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <Link href="/case-studies" className="text-brand-soft hover:text-white transition-colors inline-flex items-center gap-2 mb-4">
              ← Back to Case Studies
            </Link>
            <h1 className="text-5xl font-bold text-white mb-6">Lead Generation Results</h1>
            <p className="text-xl text-brand-soft max-w-3xl mx-auto">
              See how we've helped businesses generate consistent, high-quality leads that convert into customers.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-neutral-muted rounded-lg p-8 border border-brand-soft">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="bg-brand-soft text-brand-primary px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
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
                        <div key={idx} className="flex items-start gap-3 bg-brand-soft rounded-lg p-4">
                          <i className="ri-checkbox-circle-line text-brand-primary text-xl mt-1"></i>
                          <span className="text-text-base">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Generate More Leads?</h2>
            <p className="text-xl text-brand-soft mb-8 max-w-2xl mx-auto">
              Let's create a lead generation strategy that works for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  Get Started
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
