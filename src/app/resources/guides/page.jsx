'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function Guides() {
  const guides = [
    {
      title: 'Complete Guide to SEO in 2025',
      description: 'Everything you need to know about search engine optimization',
      category: 'SEO',
      level: 'Beginner to Advanced',
      length: '45 min read'
    },
    {
      title: 'WordPress Development Best Practices',
      description: 'Learn how to build professional WordPress websites',
      category: 'Web Development',
      level: 'Intermediate',
      length: '30 min read'
    },
    {
      title: 'Digital Marketing Strategy Framework',
      description: 'A comprehensive framework for creating effective marketing campaigns',
      category: 'Marketing',
      level: 'All Levels',
      length: '60 min read'
    },
    {
      title: 'E-Commerce Conversion Optimization',
      description: 'Strategies to increase sales and improve conversion rates',
      category: 'E-Commerce',
      level: 'Intermediate',
      length: '40 min read'
    },
    {
      title: 'Social Media Marketing Playbook',
      description: 'Complete guide to social media marketing success',
      category: 'Social Media',
      level: 'Beginner',
      length: '35 min read'
    },
    {
      title: 'AI Tools for Business Automation',
      description: 'How to leverage AI to automate your business processes',
      category: 'AI',
      level: 'All Levels',
      length: '50 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-muted text-text-base">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <Link href="/resources" className="text-brand-soft hover:text-white transition-colors inline-flex items-center gap-2 mb-4">
              ← Back to Resources
            </Link>
            <h1 className="text-5xl font-bold text-white mb-6">Guides</h1>
            <p className="text-xl text-brand-soft max-w-3xl mx-auto">
              Comprehensive guides to help you navigate the digital landscape and grow your business.
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <div key={index} className="bg-neutral-muted rounded-lg p-8 border border-brand-soft hover:border-brand-light hover:shadow-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-brand-soft text-brand-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {guide.category}
                    </span>
                    <span className="text-text-muted text-sm">{guide.level}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-3">{guide.title}</h2>
                  <p className="text-text-muted mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-sm">{guide.length}</span>
                    <Link 
                      href="/resources/guides"
                      className="text-brand-primary font-semibold hover:text-brand-dark transition-colors inline-flex items-center gap-2"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
