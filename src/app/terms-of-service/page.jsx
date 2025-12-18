'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-neutral-muted">
      <Header />
      
      <main className="max-w-[900px] mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-grey-primary hover:text-grey-dark transition-colors inline-flex items-center gap-2 mb-4">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Terms of Service</h1>
          <p className="text-text-muted">Last updated: December 2024</p>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
          <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Agreement to Terms</h2>
              <p className="text-text-muted leading-relaxed">
                By accessing or using Tayr Digital's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
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
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Services</h2>
              <p className="text-text-muted leading-relaxed">
                Tayr Digital provides digital services including web development, SEO, digital marketing, AI solutions, and related services. All services are provided subject to separate service agreements that will be entered into between you and Tayr Digital.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Payment Terms</h2>
              <p className="text-text-muted leading-relaxed">
                Payment terms for services will be specified in individual service agreements. All fees are non-refundable unless otherwise specified. Late payments may result in service suspension or termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Intellectual Property</h2>
              <p className="text-text-muted leading-relaxed">
                All content, designs, code, and materials created by Tayr Digital remain the property of Tayr Digital or are used under appropriate licenses. Upon full payment, clients may receive licenses to use deliverables as specified in service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Limitation of Liability</h2>
              <p className="text-text-muted leading-relaxed">
                In no event shall Tayr Digital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tayr Digital's website, even if Tayr Digital or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Revisions and Errata</h2>
              <p className="text-text-muted leading-relaxed">
                The materials appearing on Tayr Digital's website could include technical, typographical, or photographic errors. Tayr Digital does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Modifications</h2>
              <p className="text-text-muted leading-relaxed">
                Tayr Digital may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Contact Information</h2>
              <p className="text-text-muted leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-grey-primary/5 rounded-lg">
                <p className="text-text-muted mb-2"><strong>Email:</strong> info@tayrdigital.com</p>
                <p className="text-text-muted"><strong>Phone:</strong> +92 300 8268275</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

