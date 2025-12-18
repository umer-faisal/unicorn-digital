'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function OurProcess() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description: 'We start by understanding your business, goals, target audience, and unique challenges. Through detailed consultations, we identify opportunities and define success metrics.',
      icon: 'ri-search-line'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Our team develops a comprehensive strategy tailored to your needs. We create detailed project plans, timelines, and roadmaps that align with your business objectives.',
      icon: 'ri-file-list-line'
    },
    {
      number: '03',
      title: 'Design & Development',
      description: 'Our skilled designers and developers bring the strategy to life. We use the latest technologies and best practices to create solutions that are both beautiful and functional.',
      icon: 'ri-code-s-slash-line'
    },
    {
      number: '04',
      title: 'Testing & Quality Assurance',
      description: 'Every project undergoes rigorous testing to ensure it meets our high standards. We check for functionality, performance, security, and user experience before launch.',
      icon: 'ri-checkbox-circle-line'
    },
    {
      number: '05',
      title: 'Launch & Deployment',
      description: 'We handle all aspects of launching your project, ensuring a smooth deployment with minimal downtime. Your solution goes live seamlessly.',
      icon: 'ri-rocket-line'
    },
    {
      number: '06',
      title: 'Optimization & Support',
      description: 'Our relationship continues after launch. We monitor performance, gather feedback, and continuously optimize to ensure your solution delivers maximum value.',
      icon: 'ri-line-chart-line'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-muted text-text-base">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <Link href="/about" className="text-brand-soft hover:text-white transition-colors inline-flex items-center gap-2 mb-4">
              ← Back to About Us
            </Link>
            <h1 className="text-5xl font-bold text-white mb-6">Our Process</h1>
            <p className="text-xl text-brand-soft max-w-3xl mx-auto">
              Our proven process ensures consistent quality and successful project delivery. We work collaboratively with you every step of the way.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-neutral-muted rounded-lg p-8 border border-brand-soft">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <i className={`${step.icon} text-brand-primary text-2xl`}></i>
                        <h2 className="text-2xl font-bold text-brand-dark">{step.title}</h2>
                      </div>
                      <p className="text-lg text-text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-brand-soft mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how our process can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  Start a Project
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
