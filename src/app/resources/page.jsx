'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Resources() {
  const resourceCategories = [
    {
      name: 'Blog',
      description: 'Latest insights, tips, and trends in digital marketing and technology',
      icon: 'ri-article-line',
      link: '/resources/blog'
    },
    {
      name: 'Guides',
      description: 'Comprehensive guides to help you navigate the digital landscape',
      icon: 'ri-book-open-line',
      link: '/resources/guides'
    },
    {
      name: 'FAQs',
      description: 'Answers to commonly asked questions about our services',
      icon: 'ri-question-line',
      link: '/resources/faqs'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-muted text-text-base">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Resources</h1>
            <p className="text-xl text-brand-soft max-w-3xl mx-auto">
              Explore our collection of articles, guides, and resources to help your business thrive in the digital world.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <Link 
                  key={index}
                  href={category.link}
                  className="bg-neutral-muted rounded-lg p-8 border border-brand-soft hover:border-brand-light hover:shadow-lg transition block no-underline"
                >
                  <div className="w-16 h-16 bg-brand-soft rounded-lg flex items-center justify-center mb-6">
                    <i className={`${category.icon} text-brand-primary text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">{category.name}</h3>
                  <p className="text-text-muted">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-brand-soft mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  Subscribe Now
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
