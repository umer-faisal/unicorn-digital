'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function SEOCaseStudies() {
  const caseStudies = [
    {
      client: 'E-Commerce Retail Store',
      industry: 'Retail',
      challenge: 'Low organic visibility and declining traffic',
      solution: 'Comprehensive SEO audit and optimization',
      results: [
        '300% increase in organic traffic',
        '250% more qualified leads',
        'Top 3 rankings for 15+ keywords',
        '150% increase in revenue'
      ]
    },
    {
      client: 'Healthcare Practice',
      industry: 'Healthcare',
      challenge: 'Poor local search visibility',
      solution: 'Local SEO strategy and optimization',
      results: [
        '500% increase in local searches',
        '200% more appointment bookings',
        'First page rankings for local keywords',
        'Improved Google Business Profile'
      ]
    },
    {
      client: 'Real Estate Agency',
      industry: 'Real Estate',
      challenge: 'Competitive market with low rankings',
      solution: 'Technical SEO and content optimization',
      results: [
        '400% increase in organic traffic',
        '180% more property inquiries',
        'Top 5 rankings for 30+ keywords',
        'Improved site speed and UX'
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
            <h1 className="text-5xl font-bold text-white mb-6">SEO Case Studies</h1>
            <p className="text-xl text-brand-soft max-w-3xl mx-auto">
              Real results from our SEO campaigns. See how we've helped businesses improve their search engine rankings and drive organic traffic.
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Improve Your SEO?</h2>
            <p className="text-xl text-brand-soft mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results.
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
