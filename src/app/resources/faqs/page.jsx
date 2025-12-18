'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does Tayr Digital offer?',
          answer: 'Tayr Digital offers a comprehensive range of digital services including web development, SEO, digital marketing, social media marketing, AI automation, and custom AI solutions. We also provide ongoing website maintenance and support.'
        },
        {
          question: 'How long does it take to complete a project?',
          answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex e-commerce platform could take 8-12 weeks. We provide detailed timelines during the consultation phase.'
        },
        {
          question: 'Do you work with businesses of all sizes?',
          answer: 'Yes! We work with startups, small businesses, mid-size companies, and large enterprises. Our solutions are tailored to meet the unique needs and budgets of each client.'
        }
      ]
    },
    {
      category: 'Web Development',
      questions: [
        {
          question: 'What technologies do you use for web development?',
          answer: 'We use modern technologies including React, Next.js, WordPress, Node.js, and various other frameworks depending on your project requirements. We always choose the best technology stack for your specific needs.'
        },
        {
          question: 'Do you provide website maintenance?',
          answer: 'Yes, we offer comprehensive website maintenance services including updates, security patches, backups, and ongoing support to keep your website running smoothly.'
        }
      ]
    },
    {
      category: 'SEO & Marketing',
      questions: [
        {
          question: 'How long does it take to see SEO results?',
          answer: 'SEO is a long-term strategy. Typically, you can expect to see initial results in 3-6 months, with more significant improvements occurring over 6-12 months. However, this varies based on competition and industry.'
        },
        {
          question: 'What is included in your digital marketing packages?',
          answer: 'Our digital marketing packages include strategy development, campaign management, content creation, social media management, PPC advertising, email marketing, and comprehensive reporting and analytics.'
        }
      ]
    },
    {
      category: 'AI Services',
      questions: [
        {
          question: 'What AI services do you offer?',
          answer: 'We offer AI automation solutions, AI chatbots for customer service, custom AI solutions tailored to your business needs, and AI-powered marketing automation tools.'
        },
        {
          question: 'How can AI help my business?',
          answer: 'AI can help automate repetitive tasks, improve customer service through chatbots, optimize marketing campaigns, analyze data more effectively, and provide personalized customer experiences that drive engagement and conversions.'
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const newIndex = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === newIndex ? null : newIndex);
  };

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
            <h1 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-brand-soft max-w-3xl mx-auto">
              Find answers to commonly asked questions about our services, processes, and how we can help your business.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-neutral-muted rounded-lg p-8 border border-brand-soft">
                  <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                    <span className="w-1 h-8 bg-brand-primary rounded"></span>
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                      return (
                        <div key={questionIndex} className="border-b border-brand-soft pb-4 last:border-0">
                          <button
                            onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                            className="w-full text-left flex items-center justify-between py-3 hover:text-brand-primary transition-colors"
                          >
                            <span className="text-lg font-semibold text-brand-dark">{item.question}</span>
                            <i className={`ri-${isOpen ? 'subtract' : 'add'}-line text-brand-primary text-xl`}></i>
                          </button>
                          {isOpen && (
                            <div className="mt-2 text-text-muted leading-relaxed pl-4 border-l-2 border-brand-primary">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-brand-soft mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Get in touch with our team and we'll be happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  Contact Us
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
