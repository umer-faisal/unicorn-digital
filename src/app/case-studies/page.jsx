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
      count: 12
    },
    {
      name: 'Web Design Case Studies',
      description: 'Stunning website transformations',
      icon: 'ri-palette-line',
      link: '/case-studies/web-design',
      count: 18
    },
    {
      name: 'Lead Generation Results',
      description: 'Measurable lead generation success',
      icon: 'ri-user-add-line',
      link: '/case-studies/lead-generation',
      count: 25
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-muted text-text-base">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Case Studies</h1>
            <p className="text-xl text-brand-soft max-w-3xl mx-auto">
              Discover real results from our clients across different industries. 
              See how our digital solutions have transformed businesses and driven measurable growth.
            </p>
          </div>
        </section>

        {/* Category Cards */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link 
                  key={index}
                  href={category.link}
                  className="bg-neutral-muted rounded-lg p-8 border border-brand-soft hover:border-brand-light hover:shadow-lg transition block no-underline"
                >
                  <div className="w-16 h-16 bg-brand-soft rounded-lg flex items-center justify-center mb-6">
                    <i className={`${category.icon} text-brand-primary text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{category.name}</h3>
                  <p className="text-text-muted mb-4">{category.description}</p>
                  <div className="text-brand-primary font-semibold">{category.count} Case Studies →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Want to See Your Business Here?</h2>
            <p className="text-xl text-brand-soft mb-8 max-w-2xl mx-auto">
              Let's work together to create your success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  Start Your Project
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
