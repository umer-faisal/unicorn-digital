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
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/case-studies" className="text-green-primary hover:text-green-dark transition-colors inline-flex items-center gap-2 mb-4">
            ← Back to Case Studies
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">SEO Case Studies</h1>
          <p className="text-xl text-text-muted max-w-3xl">
            Real results from our SEO campaigns. See how we've helped businesses improve their search engine rankings and drive organic traffic.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your SEO?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results.
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

