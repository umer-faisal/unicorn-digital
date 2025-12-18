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
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/resources" className="text-purple-primary hover:text-purple-dark transition-colors inline-flex items-center gap-2 mb-4">
            ← Back to Resources
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Guides</h1>
          <p className="text-xl text-text-muted max-w-3xl">
            Comprehensive guides to help you navigate the digital landscape and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white border-2 border-purple-primary/20 rounded-xl p-8 hover:border-purple-primary hover:shadow-[0_12px_24px_-10px_rgba(168,85,247,0.3)] transition">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-purple-primary/10 text-purple-primary px-3 py-1 rounded-full text-sm font-semibold">
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
                  className="text-purple-primary font-semibold hover:text-purple-dark transition-colors inline-flex items-center gap-2"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}


