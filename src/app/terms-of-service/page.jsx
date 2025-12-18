'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function TermsOfService() {
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
            <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-text-muted">Last updated: December 2024</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-neutral-base">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-neutral-muted rounded-lg p-8 md:p-12 border border-brand-soft space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Agreement to Terms</h2>
                  <p className="text-text-muted leading-relaxed">
                    By accessing or using Tayr Digital's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Use License</h2>
                  <p className="text-text-muted leading-relaxed mb-4">
                    Permission is granted to temporarily access the materials on Tayr Digital's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-muted">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to decompile or reverse engineer any software</li>
                    <li>Remove any copyright or other proprietary notations</li>
                    <li>Transfer the materials to another person or mirror the materials on any other server</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Services</h2>
                  <p className="text-text-muted leading-relaxed">
                    Tayr Digital provides digital services including web development, SEO, digital marketing, AI solutions, and related services. All services are provided subject to separate service agreements that will be entered into between you and Tayr Digital.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Payment Terms</h2>
                  <p className="text-text-muted leading-relaxed">
                    Payment terms for services will be specified in individual service agreements. All fees are non-refundable unless otherwise specified. Late payments may result in service suspension or termination.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Intellectual Property</h2>
                  <p className="text-text-muted leading-relaxed">
                    All content, designs, code, and materials created by Tayr Digital remain the property of Tayr Digital or are used under appropriate licenses. Upon full payment, clients may receive licenses to use deliverables as specified in service agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Limitation of Liability</h2>
                  <p className="text-text-muted leading-relaxed">
                    In no event shall Tayr Digital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tayr Digital's website, even if Tayr Digital or an authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Revisions and Errata</h2>
                  <p className="text-text-muted leading-relaxed">
                    The materials appearing on Tayr Digital's website could include technical, typographical, or photographic errors. Tayr Digital does not warrant that any of the materials on its website are accurate, complete, or current.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Modifications</h2>
                  <p className="text-text-muted leading-relaxed">
                    Tayr Digital may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4">Contact Information</h2>
                  <p className="text-text-muted leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
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
