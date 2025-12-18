'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      title: '10 Essential SEO Strategies for 2025',
      excerpt: 'Discover the latest SEO techniques that will help your website rank higher in search results.',
      category: 'SEO',
      date: 'Dec 15, 2024',
      readTime: '5 min read'
    },
    {
      title: 'How AI is Transforming Digital Marketing',
      excerpt: 'Learn how artificial intelligence is revolutionizing the way businesses approach digital marketing.',
      category: 'AI',
      date: 'Dec 12, 2024',
      readTime: '7 min read'
    },
    {
      title: 'Complete Guide to E-Commerce Website Design',
      excerpt: 'Everything you need to know about creating an effective e-commerce website that converts.',
      category: 'Web Design',
      date: 'Dec 10, 2024',
      readTime: '10 min read'
    },
    {
      title: 'Social Media Marketing Best Practices',
      excerpt: 'Master the art of social media marketing with these proven strategies and tips.',
      category: 'Social Media',
      date: 'Dec 8, 2024',
      readTime: '6 min read'
    },
    {
      title: 'The Future of Web Development',
      excerpt: 'Explore emerging trends and technologies shaping the future of web development.',
      category: 'Web Development',
      date: 'Dec 5, 2024',
      readTime: '8 min read'
    },
    {
      title: 'Lead Generation Strategies That Work',
      excerpt: 'Proven methods to generate high-quality leads for your business.',
      category: 'Marketing',
      date: 'Dec 3, 2024',
      readTime: '9 min read'
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
            <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-brand-soft max-w-3xl mx-auto">
              Latest insights, tips, and trends in digital marketing, web development, and technology.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-neutral-muted rounded-lg overflow-hidden border border-brand-soft hover:border-brand-light hover:shadow-lg transition">
                  <div className="h-48 bg-gradient-to-br from-brand-primary to-brand-dark"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-text-muted text-sm mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-brand-dark mb-3">{post.title}</h2>
                    <p className="text-text-muted mb-4">{post.excerpt}</p>
                    <Link 
                      href="/resources/blog"
                      className="text-brand-primary font-semibold hover:text-brand-dark transition-colors inline-flex items-center gap-2"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
