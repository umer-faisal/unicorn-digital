'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-muted text-text-base">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <Link href="/" className="text-brand-soft hover:text-white transition-colors inline-flex items-center gap-2 mb-4">
              ← Back to Home
            </Link>
            <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-text-muted">Last updated: December 2024</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-muted rounded-lg p-8 md:p-12 border border-brand-soft space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Introduction</h2>
                  <p className="text-text-muted leading-relaxed">
                    Tayr Digital ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Information We Collect</h2>
                  <p className="text-text-muted leading-relaxed mb-4">We may collect information about you in a variety of ways:</p>
                  <ul className="list-disc pl-6 space-y-2 text-text-muted">
                    <li>Personal information (name, email, phone number) that you provide when contacting us</li>
                    <li>Information about your use of our website, including IP address, browser type, and pages visited</li>
                    <li>Cookies and tracking technologies to enhance your experience</li>
                    <li>Information you provide when using our services</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">How We Use Your Information</h2>
                  <p className="text-text-muted leading-relaxed mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-text-muted">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Improve, personalize, and expand our services</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Communicate with you about our services</li>
                    <li>Send you marketing and promotional communications (with your consent)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Information Sharing and Disclosure</h2>
                  <p className="text-text-muted leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-muted mt-4">
                    <li>With service providers who assist us in operating our website and conducting our business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>With your consent or at your direction</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Data Security</h2>
                  <p className="text-text-muted leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Your Rights</h2>
                  <p className="text-text-muted leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-text-muted">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Cookies</h2>
                  <p className="text-text-muted leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Contact Us</h2>
                  <p className="text-text-muted leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-white rounded-lg border border-brand-soft">
                    <p className="text-text-muted mb-2"><strong>Email:</strong> info@tayrdigital.com</p>
                    <p className="text-text-muted"><strong>Phone:</strong> +92 300 8268275</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
