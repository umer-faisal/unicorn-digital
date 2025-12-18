'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/about" className="text-grey-primary hover:text-grey-dark transition-colors inline-flex items-center gap-2 mb-4">
            ← Back to About Us
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Our Story</h1>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg mb-8">
          <div className="prose max-w-none">
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
              <div className="bg-grey-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-3">Integrity</h3>
                <p className="text-text-muted">We conduct business with honesty, transparency, and ethical practices.</p>
              </div>
              <div className="bg-grey-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-3">Innovation</h3>
                <p className="text-text-muted">We embrace new technologies and creative approaches to solve challenges.</p>
              </div>
              <div className="bg-grey-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-3">Excellence</h3>
                <p className="text-text-muted">We're committed to delivering exceptional results that exceed expectations.</p>
              </div>
              <div className="bg-grey-primary/5 rounded-lg p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-3">Client-Centric</h3>
                <p className="text-text-muted">Your success is our success. We put your needs first in everything we do.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-grey-dark to-grey-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Interested in being part of our story? We're always looking for talented individuals to join our team.
          </p>
          <Link 
            href="/about/careers" 
            className="inline-flex items-center justify-center bg-white text-grey-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-muted transition-colors no-underline"
          >
            View Careers
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

