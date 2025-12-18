'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function CaseStudies() {
  const categories = [
    {
      name: 'SEO Case Studies',
      description: 'Real results from our SEO campaigns',
      icon: 'ri-search-line',
      link: '/case-studies/seo',
      color: 'green-primary',
      count: 12
    },
    {
      name: 'Web Design Case Studies',
      description: 'Stunning website transformations',
      icon: 'ri-palette-line',
      link: '/case-studies/web-design',
      color: 'brand-primary',
      count: 18
    },
    {
      name: 'Lead Generation Results',
      description: 'Measurable lead generation success',
      icon: 'ri-user-add-line',
      link: '/case-studies/lead-generation',
      color: 'green-primary',
      count: 25
    }
  ];

  const featuredCases = [
    {
      title: 'E-Commerce Store Sees 300% Increase in Organic Traffic',
      category: 'SEO',
      industry: 'Retail',
      results: '300% traffic increase, 250% more leads',
      image: 'https://via.placeholder.com/400x250?text=E-Commerce+SEO'
    },
    {
      title: 'Healthcare Practice Doubles Online Appointments',
      category: 'Web Design',
      industry: 'Healthcare',
      results: '200% appointment bookings, 150% patient satisfaction',
      image: 'https://via.placeholder.com/400x250?text=Healthcare+Website'
    },
    {
      title: 'Real Estate Agency Generates 500+ Qualified Leads Monthly',
      category: 'Lead Generation',
      industry: 'Real Estate',
      results: '500+ monthly leads, 40% conversion rate',
      image: 'https://via.placeholder.com/400x250?text=Real+Estate+Leads'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Case Studies</h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Discover real results from our clients across different industries. 
            See how our digital solutions have transformed businesses and driven measurable growth.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Link 
              key={index}
              href={category.link}
              className={`bg-white border-2 border-${category.color}/20 rounded-xl p-8 hover:border-${category.color} hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.15)] transition cursor-pointer group block no-underline`}
            >
              <div className={`w-16 h-16 bg-${category.color}/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-${category.color} transition-colors`}>
                <i className={`${category.icon} text-${category.color} text-2xl group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{category.name}</h3>
              <p className="text-text-muted mb-4">{category.description}</p>
              <div className={`text-${category.color} font-semibold`}>{category.count} Case Studies →</div>
            </Link>
          ))}
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCases.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-brand-primary to-brand-dark relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-brand-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-green-primary text-sm font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{study.title}</h3>
                  <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                    <i className="ri-checkbox-circle-line text-green-primary"></i>
                    <span>{study.results}</span>
                  </div>
                  <Link 
                    href="/case-studies"
                    className="text-brand-primary font-semibold hover:text-brand-dark transition-colors"
                  >
                    Read Full Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-primary to-green-dark rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Want to See Your Business Here?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's work together to create your success story.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-green-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-muted transition-colors no-underline"
          >
            Start Your Project
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

