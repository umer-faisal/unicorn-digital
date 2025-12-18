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
      link: '/resources/blog',
      color: 'purple-primary',
      count: 50
    },
    {
      name: 'Guides',
      description: 'Comprehensive guides to help you navigate the digital landscape',
      icon: 'ri-book-open-line',
      link: '/resources/guides',
      color: 'purple-primary',
      count: 25
    },
    {
      name: 'FAQs',
      description: 'Answers to commonly asked questions about our services',
      icon: 'ri-question-line',
      link: '/resources/faqs',
      color: 'purple-primary',
      count: 30
    }
  ];

  const featuredPosts = [
    {
      title: '10 Essential SEO Strategies for 2025',
      category: 'SEO',
      date: 'Dec 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'How AI is Transforming Digital Marketing',
      category: 'AI',
      date: 'Dec 12, 2024',
      readTime: '7 min read'
    },
    {
      title: 'Complete Guide to E-Commerce Website Design',
      category: 'Web Design',
      date: 'Dec 10, 2024',
      readTime: '10 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Resources</h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Explore our collection of articles, guides, and resources to help your business thrive in the digital world.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resourceCategories.map((category, index) => (
            <Link 
              key={index}
              href={category.link}
              className={`bg-white border-2 border-purple-primary/20 rounded-xl p-8 hover:border-purple-primary hover:shadow-[0_12px_24px_-10px_rgba(168,85,247,0.3)] transition cursor-pointer group block no-underline`}
            >
              <div className="w-16 h-16 bg-purple-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-primary transition-colors">
                <i className={`${category.icon} text-purple-primary text-2xl group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{category.name}</h3>
              <p className="text-text-muted mb-4">{category.description}</p>
              <div className="text-purple-primary font-semibold">{category.count} Articles →</div>
            </Link>
          ))}
        </div>

        {/* Featured Blog Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-primary/10 text-purple-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{post.title}</h3>
                <div className="flex items-center gap-4 text-text-muted text-sm">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <Link 
                  href="/resources/blog"
                  className="text-purple-primary font-semibold hover:text-purple-dark transition-colors inline-flex items-center gap-2 mt-4"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-primary to-purple-dark rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and resources.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-purple-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-muted transition-colors no-underline"
          >
            Subscribe Now
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

