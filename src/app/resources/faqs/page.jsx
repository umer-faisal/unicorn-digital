'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

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
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/resources" className="text-purple-primary hover:text-purple-dark transition-colors inline-flex items-center gap-2 mb-4">
            ← Back to Resources
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-text-muted max-w-3xl">
            Find answers to commonly asked questions about our services, processes, and how we can help your business.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-purple-primary rounded"></span>
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                  return (
                    <div key={questionIndex} className="border-b border-neutral-muted pb-4 last:border-0">
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full text-left flex items-center justify-between py-3 hover:text-purple-primary transition-colors"
                      >
                        <span className="text-lg font-semibold text-brand-dark">{item.question}</span>
                        <i className={`ri-${isOpen ? 'subtract' : 'add'}-line text-purple-primary text-xl`}></i>
                      </button>
                      {isOpen && (
                        <div className="mt-2 text-text-muted leading-relaxed pl-4 border-l-2 border-purple-primary/30">
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

        <div className="mt-12 bg-gradient-to-br from-purple-primary to-purple-dark rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Get in touch with our team and we'll be happy to help.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-purple-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-muted transition-colors no-underline"
          >
            Contact Us
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}


