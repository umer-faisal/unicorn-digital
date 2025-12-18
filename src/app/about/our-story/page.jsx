'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function OurStory() {
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
            <h1 className="text-5xl font-bold text-white mb-6">Our Story</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-muted rounded-lg p-8 md:p-12 border border-brand-soft">
                <p className="text-xl text-text-muted leading-relaxed mb-6">
                  Tayr Digital was founded with a simple yet powerful vision: to democratize access to world-class digital solutions and help businesses of all sizes thrive in the digital age.
                </p>
                
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  What started as a small team of passionate digital experts has grown into a comprehensive digital agency that combines cutting-edge technology, creative excellence, and strategic thinking to deliver exceptional results for our clients.
                </p>

                <h2 className="text-3xl font-bold text-brand-dark mb-4 mt-8">Our Journey</h2>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  Since our inception, we've been committed to staying ahead of the curve, embracing new technologies like AI and automation while maintaining the human touch that sets us apart. Our journey has been marked by continuous learning, innovation, and an unwavering commitment to client success.
                </p>

                <h2 className="text-3xl font-bold text-brand-dark mb-4 mt-8">Our Mission</h2>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                  We believe that every business, regardless of size, deserves access to premium digital solutions. Our mission is to bridge the gap between ambitious companies and the digital expertise they need to succeed, whether that's through custom web development, strategic digital marketing, or innovative AI solutions.
                </p>

                <h2 className="text-3xl font-bold text-brand-dark mb-4 mt-8">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white rounded-lg p-6 border border-brand-soft">
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Integrity</h3>
                    <p className="text-text-muted">We conduct business with honesty, transparency, and ethical practices.</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-brand-soft">
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Innovation</h3>
                    <p className="text-text-muted">We embrace new technologies and creative approaches to solve challenges.</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-brand-soft">
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Excellence</h3>
                    <p className="text-text-muted">We're committed to delivering exceptional results that exceed expectations.</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-brand-soft">
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Client-Centric</h3>
                    <p className="text-text-muted">Your success is our success. We put your needs first in everything we do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Join Us on Our Journey</h2>
            <p className="text-xl text-brand-soft mb-8 max-w-2xl mx-auto">
              Interested in being part of our story? We're always looking for talented individuals to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about/careers">
                <button className="border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
                  View Careers
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
