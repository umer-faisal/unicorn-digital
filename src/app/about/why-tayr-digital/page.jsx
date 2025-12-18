'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function WhyTayrDigital() {
  const reasons = [
    {
      title: 'Proven Track Record',
      description: 'With hundreds of successful projects and satisfied clients, we have the experience and expertise to deliver results.',
      icon: 'ri-award-line',
      stat: '500+ Projects'
    },
    {
      title: 'Expert Team',
      description: 'Our team consists of skilled professionals with years of experience in their respective fields, staying updated with latest trends.',
      icon: 'ri-team-line',
      stat: '50+ Experts'
    },
    {
      title: 'Comprehensive Solutions',
      description: 'From web development to AI automation, we offer a full range of digital services, all under one roof.',
      icon: 'ri-stack-line',
      stat: '10+ Services'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'We leverage the latest technologies including AI, automation, and modern frameworks to deliver innovative solutions.',
      icon: 'ri-flashlight-line',
      stat: 'Latest Tech'
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We work closely with you, providing regular updates and ensuring your vision is realized.',
      icon: 'ri-user-heart-line',
      stat: '99% Satisfaction'
    },
    {
      title: 'Transparent Communication',
      description: 'We believe in clear, honest communication. You will always know where your project stands and what to expect.',
      icon: 'ri-message-2-line',
      stat: '24/7 Support'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/about" className="text-grey-primary hover:text-grey-dark transition-colors inline-flex items-center gap-2 mb-4">
            ← Back to About Us
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Why Tayr Digital?</h1>
          <p className="text-xl text-text-muted max-w-3xl">
            We're not just another digital agency. Here's what sets us apart and makes us the right choice for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white border-2 border-grey-primary/20 rounded-xl p-8 hover:border-grey-primary hover:shadow-lg transition">
              <div className="w-16 h-16 bg-grey-primary/10 rounded-lg flex items-center justify-center mb-6">
                <i className={`${reason.icon} text-grey-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{reason.title}</h3>
              <p className="text-text-muted mb-4">{reason.description}</p>
              <div className="text-grey-primary font-semibold">{reason.stat}</div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">What Makes Us Different?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-green-primary"></i>
                What We Offer
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-green-primary text-xl mt-1"></i>
                  <span className="text-text-muted">AI-powered solutions and automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-green-primary text-xl mt-1"></i>
                  <span className="text-text-muted">Comprehensive digital services</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-green-primary text-xl mt-1"></i>
                  <span className="text-text-muted">Transparent communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-green-primary text-xl mt-1"></i>
                  <span className="text-text-muted">Ongoing support and optimization</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                <i className="ri-star-line text-orange-primary"></i>
                Our Commitment
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-orange-primary text-xl mt-1"></i>
                  <span className="text-text-muted">100% client satisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-orange-primary text-xl mt-1"></i>
                  <span className="text-text-muted">Results-driven approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-orange-primary text-xl mt-1"></i>
                  <span className="text-text-muted">Innovation and staying ahead</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-check-line text-orange-primary text-xl mt-1"></i>
                  <span className="text-text-muted">Long-term partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-grey-dark to-grey-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its digital goals.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-grey-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-muted transition-colors no-underline"
          >
            Get Started Today
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

